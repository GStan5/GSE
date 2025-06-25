# Contact Configuration

This file contains the global contact information used throughout the GSE website.

## How to Update Contact Information

To change the email address, phone number, or company information across the entire website, simply edit the values in `/src/config/contact.ts`:

```typescript
export const CONTACT_INFO = {
  // Primary contact email
  email: "Marketing@gse.codes",

  // Primary phone number (with country code)
  phone: "+1234567890",

  // Formatted phone number for display
  phoneDisplay: "(123) 456-7890",

  // Company information
  company: {
    name: "Gravix Strategic Edge",
    shortName: "GSE",
  },
} as const;
```

## Usage

The contact information is automatically used in:

- Modal contact buttons in ServicesOverview component
- Email templates with preloaded subject lines and body text
- SMS templates with preloaded messaging
- Phone call links

Simply import and use:

```typescript
import { CONTACT_INFO, formatPhone } from "@/config/contact";
```

## Files Using This Configuration

- `/src/components/home/ServicesOverview.tsx` - Package modal contact buttons
- Future components that need contact information can import from this central location

This centralized approach ensures consistency and makes updates simple - change once, update everywhere!
