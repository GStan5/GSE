"use client";

import { useEffect } from "react";

export default function SentryInit() {
  useEffect(() => {
    // Import Sentry client config on the client side
    import("../../sentry.client.config");
  }, []);

  return null; // This component doesn't render anything
}
