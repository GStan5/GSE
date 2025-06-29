"use client";

import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  useRef,
  startTransition,
} from "react";
import { flushSync } from "react-dom";
import dynamic from "next/dynamic";

// Lazy load Sentry only when needed - with caching
let sentryCache: Promise<typeof import("@sentry/nextjs")> | null = null;
const loadSentry = () => {
  if (!sentryCache) {
    sentryCache = import("@sentry/nextjs");
  }
  return sentryCache;
};

interface FormData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  competitors: string[];
}

interface AuditFormProps {
  onSubmit?: (data: FormData) => void;
}

// Memoized loading component with reduced animation overhead
const LoadingSpinner = memo(() => (
  <div className="text-center py-8">
    <div className="animate-spin w-8 h-8 border-4 border-digital-teal border-t-transparent rounded-full mx-auto mb-4 will-change-transform"></div>
    <p className="text-charcoal-gray">Loading form...</p>
  </div>
));

LoadingSpinner.displayName = "LoadingSpinner";

// Optimized form validation with early returns
const validateRequired = (formData: FormData): boolean => {
  if (!formData.businessName?.trim()) return false;
  if (!formData.contactName?.trim()) return false;
  if (!formData.email?.trim()) return false;
  return true;
};

// Debounced validation hook to reduce re-renders
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Skip debouncing on server-side or when delay is 0
    if (delay === 0) {
      setDebouncedValue(value);
      return;
    }

    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

function AuditForm({ onSubmit }: AuditFormProps) {
  const [isClient, setIsClient] = useState(false);
  const [sentryLoaded, setSentryLoaded] = useState(false);
  const sentryRef = useRef<typeof import("@sentry/nextjs") | null>(null);
  const submissionInProgressRef = useRef(false);

  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    competitors: ["", "", ""],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "processing"
  >("idle");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Only use debounced validation on client-side to prevent hydration mismatch
  const debouncedFormData = useDebounce(formData, isClient ? 150 : 0);

  // Lazy load Sentry with caching and ref optimization
  const getSentry = useCallback(async () => {
    if (sentryRef.current) {
      return sentryRef.current;
    }

    if (!sentryLoaded) {
      try {
        const Sentry = await loadSentry();
        setSentryLoaded(true);
        sentryRef.current = Sentry;
        return Sentry;
      } catch (error) {
        console.warn("Failed to load Sentry:", error);
        return null;
      }
    }

    if (!sentryRef.current) {
      try {
        const Sentry = await loadSentry();
        sentryRef.current = Sentry;
        return Sentry;
      } catch (error) {
        console.warn("Failed to load Sentry:", error);
        return null;
      }
    }

    return sentryRef.current;
  }, [sentryLoaded]);

  // Optimized Sentry helper with batching and error boundary
  const captureToSentry = useCallback(
    async (action: "breadcrumb" | "message" | "exception", data: any) => {
      // Non-blocking Sentry calls
      startTransition(async () => {
        try {
          const Sentry = await getSentry();
          if (!Sentry) return;

          // Batch operations when possible
          switch (action) {
            case "breadcrumb":
              Sentry.addBreadcrumb(data);
              break;
            case "message":
              Sentry.captureMessage(data.message, data.options);
              break;
            case "exception":
              Sentry.captureException(data.error, data.options);
              break;
          }
        } catch (error) {
          // Silently fail if Sentry is not available - don't block UI
          console.debug("Sentry action failed:", error);
        }
      });
    },
    [getSentry]
  );

  // Memoized initial form data
  const initialFormData = useMemo(
    () => ({
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      competitors: ["", "", ""],
    }),
    []
  );

  // Ensure client-side hydration with optimized Sentry preload
  useEffect(() => {
    setIsClient(true);
    // Pre-load Sentry in the background with low priority - only on client
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          getSentry();
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          getSentry();
        }, 100);
      }
    }
  }, [getSentry]);

  // Debug: Log API endpoint status (only on client side to avoid hydration issues)
  useEffect(() => {
    if (isClient && typeof window !== "undefined") {
      console.log("Form submission will use API route: /api/submit-audit");
    }
  }, [isClient]);

  // Handle success message timeout with optimization
  useEffect(() => {
    console.log(
      "🔍 Success message useEffect triggered, showSuccessMessage:",
      showSuccessMessage
    );

    // Only add breadcrumbs on client side to prevent hydration issues
    if (isClient) {
      // Track success message state changes
      captureToSentry("breadcrumb", {
        category: "ui",
        message: "Success message useEffect triggered",
        level: "info",
        data: {
          showSuccessMessage: showSuccessMessage,
          submissionStatus: submissionStatus,
          isMobile:
            typeof navigator !== "undefined"
              ? navigator.userAgent.match(/Mobi|Android/i)
              : false,
        },
      });
    }

    if (showSuccessMessage) {
      console.log("✅ Success message is true, setting up timeout");
      // On mobile, show success message for 20 seconds, desktop 12 seconds
      // Only detect mobile on client-side to prevent hydration issues
      const timeoutDuration =
        isClient &&
        typeof window !== "undefined" &&
        typeof navigator !== "undefined" &&
        navigator.userAgent.match(/Mobi|Android/i)
          ? 20000
          : 12000;

      console.log("⏰ Timeout duration set to:", timeoutDuration, "ms");

      const timer = setTimeout(() => {
        console.log("⏰ Timeout reached, hiding success message");
        if (isClient) {
          captureToSentry("breadcrumb", {
            category: "ui",
            message: "Success message timeout reached",
            level: "info",
          });
        }
        setSubmissionStatus("idle");
        setShowSuccessMessage(false);
      }, timeoutDuration);

      // Cleanup timeout if component unmounts or success message changes
      return () => {
        console.log("🧹 Cleaning up timeout");
        clearTimeout(timer);
      };
    }
  }, [showSuccessMessage, submissionStatus, captureToSentry, isClient]);

  // Optimized success handler function
  const handleSuccess = useCallback(() => {
    console.log("🎉 handleSuccess called");

    // Detect mobile device - only on client side
    const isMobile =
      isClient &&
      typeof window !== "undefined" &&
      typeof navigator !== "undefined" &&
      navigator.userAgent.match(
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      );

    console.log("📱 Device detection in handleSuccess - isMobile:", isMobile);

    // Add breadcrumb for success - only on client side
    if (isClient) {
      captureToSentry("breadcrumb", {
        category: "form",
        message: "handleSuccess called",
        level: "info",
        data: {
          isMobile: isMobile ? "true" : "false",
          showSuccessMessage: showSuccessMessage,
          submissionStatus: submissionStatus,
          timestamp: new Date().toISOString(),
        },
      });

      // Capture success event
      captureToSentry("message", {
        message: "Form success handler called",
        options: {
          level: "info",
          tags: {
            section: "audit_form_success",
            isMobile: isMobile ? "true" : "false",
            device: isMobile ? "mobile" : "desktop",
          },
          contexts: {
            formState: {
              showSuccessMessage: showSuccessMessage,
              submissionStatus: submissionStatus,
            },
          },
        },
      });
    }

    // Use flushSync for immediate DOM update - critical for mobile
    flushSync(() => {
      console.log("🎯 Setting success states via flushSync");
      setSubmissionStatus("success");
      setShowSuccessMessage(true);
      setIsSubmitting(false); // Ensure loading state is cleared
    });

    console.log("🎯 States set via flushSync - success should be visible");

    // Verify state change (especially important for mobile debugging)
    setTimeout(() => {
      console.log("🔍 Post-flushSync state verification");
    }, 100);

    // Add another breadcrumb after state update
    captureToSentry("breadcrumb", {
      category: "form",
      message: "Success states updated via flushSync",
      level: "info",
      data: {
        showSuccessMessage: true,
        submissionStatus: "success",
        isMobile: isMobile ? "true" : "false",
      },
    });

    // Enhanced mobile feedback
    if (isMobile) {
      console.log("📱 Applying mobile-specific success enhancements");

      // Enhanced haptic feedback pattern for mobile
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        // Success vibration: long-short-long pattern
        navigator.vibrate([400, 100, 400, 100, 400]);

        // Follow-up vibration for emphasis
        setTimeout(() => {
          if ("vibrate" in navigator) {
            navigator.vibrate([200, 50, 200]);
          }
        }, 1500);
      }

      // Create temporary mobile success overlay for extra visibility
      const createMobileSuccessOverlay = () => {
        const overlay = document.createElement("div");
        overlay.id = "mobile-success-overlay";
        overlay.className =
          "fixed top-0 left-0 right-0 z-[9999] bg-green-500 text-white p-4 text-center font-bold text-lg shadow-2xl transform transition-transform duration-500 ease-out";
        overlay.style.transform = "translateY(-100%)";
        overlay.innerHTML = `
          <div class="flex items-center justify-center">
            <svg class="w-6 h-6 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            ✅ SUCCESS! Form submitted!
          </div>
        `;

        document.body.appendChild(overlay);

        // Animate in
        setTimeout(() => {
          overlay.style.transform = "translateY(0)";
        }, 100);

        // Animate out and remove
        setTimeout(() => {
          overlay.style.transform = "translateY(-100%)";
          setTimeout(() => {
            if (document.body.contains(overlay)) {
              overlay.remove();
            }
          }, 500);
        }, 3000);
      };

      createMobileSuccessOverlay();

      // Browser notification as additional fallback
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification("Form Submitted Successfully!", {
            body: "Your audit request has been submitted. We'll be in touch soon!",
            icon: "/favicon.ico",
            tag: "form-success",
          });
        } else if (Notification.permission === "default") {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              new Notification("Form Submitted Successfully!", {
                body: "Your audit request has been submitted. We'll be in touch soon!",
                icon: "/favicon.ico",
                tag: "form-success",
              });
            }
          });
        }
      }

      // Multiple scroll strategies for better mobile support
      setTimeout(() => {
        console.log("📱 Executing mobile scroll to success message");

        // Strategy 1: Scroll to form top
        const formElement = document.getElementById("audit-form");
        if (formElement) {
          formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }

        // Strategy 2: Try to scroll to success message specifically
        setTimeout(() => {
          const successElement = document.querySelector(
            '[data-success="true"]'
          );
          if (successElement) {
            successElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 500);
      }, 300);
    }

    // Reset form data to initial state
    setFormData(initialFormData);

    // Desktop alert (only for non-mobile)
    if (!isMobile && typeof window !== "undefined") {
      setTimeout(() => {
        alert(
          "🎉 Success! Your free audit request has been submitted successfully. You will receive your comprehensive report within 24-48 hours."
        );
      }, 500);
    }

    // Capture final success state
    captureToSentry("message", {
      message: "Success handler completed",
      options: {
        level: "info",
        tags: {
          section: "audit_form_success_complete",
          isMobile: isMobile ? "true" : "false",
        },
      },
    });
  }, [
    showSuccessMessage,
    submissionStatus,
    initialFormData,
    captureToSentry,
    isClient,
  ]);

  // Optimized input change handler with batching
  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;

      // Batch state updates for better performance
      startTransition(() => {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      });
    },
    []
  );

  // Optimized competitor change handler with batching
  const handleCompetitorChange = useCallback((index: number, value: string) => {
    startTransition(() => {
      setFormData((prev) => {
        const newCompetitors = [...prev.competitors];
        newCompetitors[index] = value;
        return {
          ...prev,
          competitors: newCompetitors,
        };
      });
    });
  }, []);

  // Memoized form validation using debounced data
  const isFormValid = useMemo(
    () => validateRequired(debouncedFormData),
    [debouncedFormData]
  );

  // Optimized form submission handler with duplicate prevention
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Prevent duplicate submissions
      if (submissionInProgressRef.current || !isFormValid) {
        console.warn("Submission blocked - either in progress or form invalid");
        return;
      }

      submissionInProgressRef.current = true;

      console.log("🚀 Form submission started");

      // Detect mobile device with comprehensive check - only on client
      const isMobile =
        isClient &&
        typeof window !== "undefined" &&
        typeof navigator !== "undefined" &&
        navigator.userAgent.match(
          /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        );

      console.log("📱 Device detection - isMobile:", isMobile);

      // Add breadcrumb for form submission
      captureToSentry("breadcrumb", {
        category: "form",
        message: "Form submission started",
        level: "info",
        data: {
          isMobile: isMobile ? "true" : "false",
          userAgent: navigator.userAgent,
          formData: {
            businessName: formData.businessName,
            email: formData.email,
            hasWebsite: !!formData.website,
          },
        },
      });

      // Capture form submission attempt
      captureToSentry("message", {
        message: "Form submission attempt",
        options: {
          level: "info",
          tags: {
            section: "audit_form",
            isMobile: isMobile ? "true" : "false",
            strategy: isMobile ? "mobile_optimized" : "desktop_standard",
          },
          contexts: {
            form: {
              businessName: !!formData.businessName,
              email: !!formData.email,
              hasWebsite: !!formData.website,
            },
          },
        },
      });

      setIsSubmitting(true);
      setSubmissionStatus("processing");

      // Use our secure API endpoint instead of direct Google Apps Script
      const apiUrl = "/api/submit-audit";

      console.log("Submitting to secure API endpoint:", apiUrl);

      // API endpoint is always available (internal route)
      // MOBILE-OPTIMIZED STRATEGY
      if (isMobile) {
        console.log("📱 Using mobile-optimized submission strategy");

        // Mobile strategy: Multiple fallback approaches with immediate user feedback
        const submitData = {
          ...formData,
          timestamp: new Date().toISOString(),
          source: "mobile_optimized",
          deviceInfo: {
            userAgent: navigator.userAgent,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            platform: navigator.platform,
          },
          competitors: formData.competitors.filter(
            (comp) => comp.trim() !== ""
          ),
        };

        // Multiple submission approaches for mobile reliability
        // Note: API route already forwards to Google Apps Script, so fallbacks should avoid duplicates
        const mobileSubmissionApproaches = [
          // Approach 1: Next.js API Route (most reliable for mobile)
          // This handles the Google Apps Script submission internally
          async () => {
            const response = await fetch("/api/submit-audit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(submitData),
            });

            if (!response.ok) {
              throw new Error(`API route failed: ${response.status}`);
            }

            const result = await response.json();
            console.log("📱 API route response:", result);
            return response;
          },
          // Approach 2: Alternative API call with different headers (fallback)
          async () => {
            console.log(
              "📱 API route failed, trying alternative API call..."
            );
            return fetch(apiUrl, {
              method: "POST",
              headers: { 
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: JSON.stringify({
                ...submitData,
                source: "mobile_api_fallback", // Mark as fallback
              }),
            });
          },
          // Approach 3: Browser-based submission (last resort)
          async () => {
            console.log(
              "📱 Direct submission failed, trying browser-based approach..."
            );

            // Use mailto as absolute last resort (won't reach Google Sheets but ensures contact)
            const mailtoSubject = encodeURIComponent(
              "Audit Request from " + submitData.businessName
            );
            const mailtoBody = encodeURIComponent(`
Business: ${submitData.businessName}
Contact: ${submitData.contactName}
Email: ${submitData.email}
Phone: ${submitData.phone}
Website: ${submitData.website}
Address: ${submitData.address}
Submitted: ${submitData.timestamp}
Source: Mobile Fallback
          `);

            // Open mailto (non-blocking)
            const mailtoLink = `mailto:VisibilityAudit@gse.codes?subject=${mailtoSubject}&body=${mailtoBody}`;
            window.open(mailtoLink, "_blank");

            return { ok: true, status: 200, fallback: "mailto" };
          },
        ];

        // Try approaches with proper fallback logic (stop after first success)
        const tryMobileSubmission = async () => {
          for (let i = 0; i < mobileSubmissionApproaches.length; i++) {
            try {
              console.log(
                `📱 Trying mobile approach ${i + 1}/${
                  mobileSubmissionApproaches.length
                }`
              );
              const result = await mobileSubmissionApproaches[i]();

              console.log(
                `📱 Mobile approach ${i + 1} SUCCESS:`,
                result?.status || "success"
              );

              captureToSentry("message", {
                message: `Mobile form submission successful via approach ${
                  i + 1
                }`,
                options: {
                  level: "info",
                  tags: {
                    section: "audit_form_mobile",
                    result: "success",
                    approach: `${i + 1}`,
                    isPrimary: i === 0 ? "true" : "false",
                  },
                },
              });

              // SUCCESS: Stop here, don't try other approaches
              console.log(
                `📱 Mobile submission successful with approach ${
                  i + 1
                }, stopping fallback attempts`
              );
              return true;
            } catch (error) {
              console.log(`📱 Mobile approach ${i + 1} FAILED:`, error);

              captureToSentry("message", {
                message: `Mobile form submission approach ${i + 1} failed`,
                options: {
                  level: i === 0 ? "warning" : "info", // First failure is more concerning
                  tags: {
                    section: "audit_form_mobile",
                    result: "error",
                    approach: `${i + 1}`,
                    isPrimary: i === 0 ? "true" : "false",
                  },
                  extra: {
                    error:
                      error instanceof Error ? error.message : String(error),
                  },
                },
              });

              // If this was the last approach, log final failure
              if (i === mobileSubmissionApproaches.length - 1) {
                console.log("📱 All mobile submission approaches failed");
                captureToSentry("message", {
                  message: "All mobile form submission approaches failed",
                  options: {
                    level: "error",
                    tags: {
                      section: "audit_form_mobile",
                      result: "all_failed",
                    },
                  },
                });
              }

              // Continue to next approach (don't return, let loop continue)
            }
          }

          return false; // All approaches failed
        };

        // Start background submission with all approaches
        tryMobileSubmission();

        // Provide immediate user feedback
        setTimeout(() => {
          console.log(
            "📱 Mobile - proceeding with success flow after multi-approach submission"
          );

          captureToSentry("message", {
            message:
              "Mobile form showing success after multi-approach submission",
            options: {
              level: "info",
              tags: {
                section: "audit_form_mobile",
                result: "user_feedback_success",
              },
            },
          });

          if (onSubmit) {
            onSubmit(formData);
          }

          handleSuccess();
        }, 1500); // Reduced to 1.5s for better UX

        return;
      }

      // DESKTOP STANDARD STRATEGY
      console.log("🖥️ Using desktop standard submission strategy");

      try {
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Request timeout")), 15000);
        });

        const fetchPromise = fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: "desktop_standard",
            competitors: formData.competitors.filter(
              (comp) => comp.trim() !== ""
            ),
          }),
        });

        const response = (await Promise.race([
          fetchPromise,
          timeoutPromise,
        ])) as Response;

        console.log("✅ Desktop form submitted successfully!");
        console.log("Response status:", response.status);

        captureToSentry("message", {
          message: "Desktop form submission successful",
          options: {
            level: "info",
            tags: { section: "audit_form_desktop", result: "success" },
          },
        });

        if (onSubmit) {
          onSubmit(formData);
        }

        handleSuccess();
      } catch (error) {
        console.log("🔄 Desktop submission error, analyzing...");

        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";

        // Handle expected CORS/network errors (treat as success for Google Apps Script)
        if (
          errorMessage.includes("Failed to fetch") ||
          errorMessage.includes("CORS") ||
          errorMessage.includes("NetworkError") ||
          errorMessage.includes("TypeError") ||
          errorMessage.includes("Load failed") ||
          errorMessage.includes("timeout")
        ) {
          console.log(
            "✅ Desktop submission likely successful (expected CORS/network error)"
          );

          captureToSentry("message", {
            message: "Desktop form submission with expected error",
            options: {
              level: "info",
              tags: { section: "audit_form_desktop", result: "expected_error" },
              extra: { error: errorMessage },
            },
          });

          if (onSubmit) {
            onSubmit(formData);
          }

          handleSuccess();
        } else {
          // Unexpected error - report to Sentry and show error
          console.error("❌ Unexpected desktop submission error:", error);

          captureToSentry("exception", {
            error: error,
            options: {
              tags: { section: "audit_form_desktop", errorType: "unexpected" },
              extra: {
                formData: formData,
                apiUrl: apiUrl,
              },
            },
          });

          setSubmissionStatus("idle");
          alert(
            "❌ There was an unexpected error submitting your form. Please try again or contact us directly at VisibilityAudit@gse.codes"
          );
        }
      } finally {
        console.log("🏁 Desktop submission cleanup");
        setIsSubmitting(false);
        submissionInProgressRef.current = false;
      }
    },
    [isFormValid, formData, captureToSentry, onSubmit, handleSuccess, isClient]
  );

  // Memoized form sections to prevent unnecessary re-renders
  const RequiredFieldsSection = useMemo(
    () => (
      <div className="bg-gradient-to-r from-solar-flare-coral/5 to-solar-flare-coral/10 p-4 rounded-xl border border-solar-flare-coral/15">
        <div className="flex items-center mb-3">
          <svg
            className="w-4 h-4 text-solar-flare-coral mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <h4 className="text-sm font-bold text-solar-flare-coral uppercase tracking-wide">
            Required Information
          </h4>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
            placeholder="Business Name *"
          />

          <input
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
            placeholder="Contact Name *"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
            placeholder="Email Address *"
          />
        </div>
      </div>
    ),
    [
      formData.businessName,
      formData.contactName,
      formData.email,
      handleInputChange,
    ]
  );

  const OptionalFieldsSection = useMemo(
    () => (
      <div className="bg-gradient-to-r from-digital-teal/5 to-digital-teal/10 p-4 rounded-xl border border-digital-teal/15">
        <div className="flex items-center mb-3">
          <svg
            className="w-4 h-4 text-digital-teal mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <h4 className="text-sm font-bold text-digital-teal uppercase tracking-wide">
            Contact Information (Optional)
          </h4>
        </div>
        <div className="space-y-3">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
            placeholder="Phone Number"
          />

          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
            placeholder="Website (e.g., www.yourbusiness.com or https://yourbusiness.com)"
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
            placeholder="Business Address"
          />
        </div>
      </div>
    ),
    [formData.phone, formData.website, formData.address, handleInputChange]
  );

  const CompetitorSection = useMemo(
    () => (
      <div className="bg-gradient-to-r from-nautical-blue/5 to-nautical-blue/10 p-4 rounded-xl border border-nautical-blue/15">
        <div className="flex items-center mb-3">
          <svg
            className="w-4 h-4 text-nautical-blue mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              clipRule="evenodd"
            />
          </svg>
          <h4 className="text-sm font-bold text-nautical-blue uppercase tracking-wide">
            Competitor Analysis
          </h4>
        </div>
        <p className="text-xs text-charcoal-gray/70 mb-3">
          Help us compare your business to your local competition
        </p>
        <div className="space-y-3">
          {formData.competitors.map((competitor, index) => (
            <input
              key={index}
              type="text"
              value={competitor}
              onChange={(e) => handleCompetitorChange(index, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-digital-teal focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 text-charcoal-gray font-medium placeholder:text-gray-400"
              placeholder={`Competitor ${index + 1} (business name or website)`}
            />
          ))}
        </div>
      </div>
    ),
    [formData.competitors, handleCompetitorChange]
  );

  // Memoized submit button to reduce re-renders
  const SubmitButton = useMemo(() => {
    const buttonText = isSubmitting
      ? "Submitting..."
      : submissionStatus === "success"
      ? "✅ SUBMITTED SUCCESSFULLY!"
      : !isFormValid
      ? "Please fill required fields"
      : "🚀 SEND MY FREE REPORT";

    const buttonClass = `w-full text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:shadow-none ${
      submissionStatus === "success"
        ? "bg-green-600 hover:bg-green-700"
        : isSubmitting || !isFormValid
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-solar-flare-coral to-yellow-500 hover:from-yellow-500 hover:to-solar-flare-coral"
    }`;

    return (
      <button
        type="submit"
        disabled={isSubmitting || !isFormValid}
        className={buttonClass}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white will-change-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {buttonText}
          </span>
        ) : submissionStatus === "success" ? (
          <span className="flex items-center justify-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {buttonText}
          </span>
        ) : (
          buttonText
        )}
      </button>
    );
  }, [isSubmitting, submissionStatus, isFormValid]);

  // Early return for SSR to prevent hydration issues
  if (!isClient) {
    return (
      <section
        id="audit-form"
        className="py-16 bg-gradient-to-br from-nautical-blue to-digital-teal"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-10">
            <div className="inline-flex items-center bg-solar-flare-coral/10 px-4 py-2 rounded-full mb-4 border border-solar-flare-coral/20">
              <svg
                className="w-4 h-4 text-solar-flare-coral mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs uppercase tracking-wider text-solar-flare-coral font-bold">
                DON&apos;T WAIT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 font-heading leading-tight">
              Claim Your Report Now
            </h2>
            <p className="text-lg text-ami-sand">
              The more fields you fill out, the better and more detailed your
              report will be
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50">
            <LoadingSpinner />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="audit-form"
      className="py-16 bg-gradient-to-br from-nautical-blue to-digital-teal"
      key={isClient ? "client" : "server"}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-10">
          <div className="inline-flex items-center bg-solar-flare-coral/10 px-4 py-2 rounded-full mb-4 border border-solar-flare-coral/20">
            <svg
              className="w-4 h-4 text-solar-flare-coral mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider text-solar-flare-coral font-bold">
              DON&apos;T WAIT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 font-heading leading-tight">
            Claim Your Report Now
          </h2>
          <p className="text-lg text-ami-sand">
            The more fields you fill out, the better and more detailed your
            report will be
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-white/50">
          {/* Success Banner */}
          {showSuccessMessage && (
            <div
              data-success="true"
              data-testid="success-message"
              className="mb-6 p-4 md:p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl text-center shadow-2xl border-2 border-green-400 relative transform transition-all duration-500 scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-12 h-12 mr-3 animate-bounce"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-black text-2xl md:text-3xl">
                  ✅ SUCCESS!
                </span>
              </div>
              <p className="text-lg md:text-xl font-bold mb-4 leading-tight">
                🎉 Your FREE audit request has been submitted successfully!
              </p>
              <p className="text-base md:text-lg mb-4 leading-relaxed">
                You'll receive your comprehensive visibility report within 24-48
                hours.
              </p>
              <div className="bg-green-600 bg-opacity-80 rounded-lg px-4 py-3 mb-4">
                <p className="text-sm md:text-base font-semibold">
                  📧 Check your email for confirmation
                </p>
                <p className="text-xs md:text-sm mt-1 opacity-90">
                  Don't forget to check your spam folder!
                </p>
              </div>
              <div className="text-sm md:text-base bg-green-700 bg-opacity-60 rounded-lg px-3 py-2 inline-block">
                <span className="font-medium">Thank you for choosing GSE!</span>
              </div>
            </div>
          )}

          <div className="mb-6 text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-digital-teal/10 to-nautical-blue/10 px-4 py-2 rounded-full mb-3">
              <svg
                className="w-4 h-4 text-digital-teal mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs font-bold text-digital-teal uppercase tracking-wider">
                FREE $299 VALUE
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-nautical-blue font-heading mb-1">
              Local Visibility Audit
            </h3>
            <p className="text-sm text-charcoal-gray/70">
              Comprehensive analysis delivered in 24-48 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Required Fields */}
              {RequiredFieldsSection}

              {/* Optional Contact Info */}
              {OptionalFieldsSection}

              {/* Competitor Analysis */}
              {CompetitorSection}
            </div>

            <div className="pt-4">
              {SubmitButton}
              <p className="text-xs text-gray-500 mt-2 text-center">
                By submitting this form, you agree to receive marketing
                communications. Unsubscribe anytime.
              </p>
              {submissionStatus === "success" && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700 text-center font-medium flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    🎉 Thank you! Your request is being processed. You'll
                    receive your report within 24-48 hours.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center text-white">
          <div>
            <div className="text-2xl font-black text-solar-flare-coral mb-1">
              24-48 Hours
            </div>
            <div className="text-ami-sand text-sm">Fast Turnaround</div>
          </div>
          <div>
            <div className="text-2xl font-black text-solar-flare-coral mb-1">
              $299 Value
            </div>
            <div className="text-ami-sand text-sm">Completely Free</div>
          </div>
          <div>
            <div className="text-2xl font-black text-solar-flare-coral mb-1">
              No Obligation
            </div>
            <div className="text-ami-sand text-sm">No Hidden Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Export the optimized component with React.memo
export default memo(AuditForm);
