// Utility functions to track key business events with Google Analytics

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean = true) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", success ? "form_submit" : "form_error", {
      event_category: "engagement",
      event_label: formName,
      value: success ? 1 : 0,
    });
  }
}

// Track consultation requests
export function trackConsultationRequest(source: string = "unknown") {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "consultation_request", {
      event_category: "lead_generation",
      event_label: source,
      value: 1,
    });
  }
}

// Track service inquiries
export function trackServiceInquiry(serviceName: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "service_inquiry", {
      event_category: "engagement",
      event_label: serviceName,
      value: 1,
    });
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "click", {
      event_category: "engagement",
      event_label: `${buttonName}_${location}`,
    });
  }
}

// Track phone number clicks
export function trackPhoneClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "lead_generation",
      event_label: "header_phone",
      value: 1,
    });
  }
}

// Track email clicks
export function trackEmailClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "email_click", {
      event_category: "lead_generation",
      event_label: "contact_email",
      value: 1,
    });
  }
}

// Track audit funnel progression
export function trackFunnelStep(step: string, completed: boolean = true) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "funnel_progression", {
      event_category: "funnel",
      event_label: `${step}_${completed ? "completed" : "abandoned"}`,
      value: completed ? 1 : 0,
    });
  }
}

// Track chatbot events (complementing existing chatbot analytics)
export function trackChatbotEvent(
  action: "opened" | "closed" | "message_sent" | "lead_qualified",
  details?: string
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", `chatbot_${action}`, {
      event_category: "chatbot",
      event_label: details || action,
    });
  }
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "scroll", {
      event_category: "engagement",
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
}

// Track time on page milestones
export function trackTimeOnPage(seconds: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "time_on_page", {
      event_category: "engagement",
      event_label: `${seconds}s`,
      value: seconds,
    });
  }
}

// Track conversion events
export function trackConversion(
  type: "consultation" | "contact" | "phone" | "email",
  value?: number
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      event_category: "conversion",
      event_label: type,
      value: value || 1,
    });
  }
}
