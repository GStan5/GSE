"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export function initGA() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) {
    console.warn("Google Analytics ID not found in environment variables");
    return;
  }

  // Create dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];

  // Initialize gtag function
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
}

// Track page views
export function trackPageView(url: string, title?: string) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID || typeof window.gtag === "undefined") {
    return;
  }

  window.gtag("config", GA_ID, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window.gtag === "undefined") {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Track chatbot interactions
export function trackChatbotEvent(
  action: "message_sent" | "conversation_started" | "lead_generated",
  data?: {
    leadScore?: number;
    language?: string;
    outcome?: string;
  }
) {
  trackEvent(action, "chatbot", data?.outcome, data?.leadScore);
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent(
    success ? "form_submit_success" : "form_submit_error",
    "form",
    formName
  );
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent("click", "button", `${buttonName}_${location}`);
}

// Component to handle route changes
export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    if (!GA_ID) return;

    const url =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}
