// Global contact configuration
// Update these values to change contact information across the entire application

export const CONTACT_INFO = {
  // Primary contact email
  email: "Marketing@GSE.codes",

  // Primary phone number (with country code)
  phone: "+19419003341",

  // Formatted phone number for display
  phoneDisplay: "(941) 900-3341",

  // Company information
  company: {
    name: "Gravix Strategic Edge",
    shortName: "GSE",
    tagline: "Your Local Edge in AI-Powered Business Solutions",
    location: "Serving Southwest Florida",
  },

  // Social media links
  social: {
    facebook: "https://facebook.com/gravixstrategicedge", // Update with actual URL
    linkedin: "https://linkedin.com/company/gravix-strategic-edge", // Update with actual URL
    instagram: "https://instagram.com/gravixstrategicedge", // Update with actual URL
    twitter: "https://twitter.com/gravixse", // Update with actual URL
    youtube: "https://youtube.com/@gravixstrategicedge", // Update with actual URL
  },
} as const;

// Helper function to format phone number for different uses
export const formatPhone = {
  // For tel: links
  tel: CONTACT_INFO.phone,

  // For SMS links
  sms: CONTACT_INFO.phone,

  // For display in UI
  display: CONTACT_INFO.phoneDisplay,
};
