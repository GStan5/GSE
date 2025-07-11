"use client";

import { useEffect } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/utils/tracking";

export default function PageEngagementTracker() {
  useEffect(() => {
    const scrollThresholds = [25, 50, 75, 90];
    const timeThresholds = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
    const scrollTriggered = new Set();
    const timeTriggered = new Set();
    const startTime = Date.now();

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      scrollThresholds.forEach((threshold) => {
        if (scrollPercentage >= threshold && !scrollTriggered.has(threshold)) {
          trackScrollDepth(threshold);
          scrollTriggered.add(threshold);
        }
      });
    };

    // Track time on page
    const timeInterval = setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);

      timeThresholds.forEach((threshold) => {
        if (timeOnPage >= threshold && !timeTriggered.has(threshold)) {
          trackTimeOnPage(threshold);
          timeTriggered.add(threshold);
        }
      });
    }, 5000); // Check every 5 seconds

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  return null; // This component doesn't render anything
}
