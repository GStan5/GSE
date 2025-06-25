"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  googleAnalyticsId?: string;
  microsoftClarityId?: string;
}

export default function Analytics({
  googleAnalyticsId,
  microsoftClarityId,
}: AnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track page views when route changes
    if (typeof window !== "undefined" && window.gtag && googleAnalyticsId) {
      window.gtag("config", googleAnalyticsId, {
        page_path: pathname,
      });
    }
  }, [pathname, googleAnalyticsId]);

  useEffect(() => {
    // Initialize Google Analytics
    if (googleAnalyticsId && typeof window !== "undefined") {
      // Create gtag script
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", googleAnalyticsId, {
        send_page_view: false, // We'll send manually
      });
    }

    // Initialize Microsoft Clarity
    if (microsoftClarityId && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${microsoftClarityId}");
      `;
      document.head.appendChild(script);
    }
  }, [googleAnalyticsId, microsoftClarityId]);

  return null;
}

// Utility functions for tracking events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackConversion = (
  conversionId: string,
  value?: number,
  currency: string = "USD"
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", "engagement", `${buttonName} - ${location}`);
};

export const trackPhoneCall = () => {
  trackEvent("phone_call", "contact", "header_phone");
};

export const trackEmailClick = () => {
  trackEvent("email_click", "contact", "contact_email");
};
