# Hydration Error Fixes for Mobile

## Overview

This document summarizes all the fixes implemented to resolve hydration errors occurring on mobile devices in the GSE Next.js application.

## Root Cause Analysis

Hydration errors occur when the server-rendered HTML doesn't match what React renders on the client side. Common causes in our application were:

1. **Browser API Access During SSR**: Using `window`, `navigator`, and other browser APIs during server-side rendering
2. **Search Params Without Proper Suspense**: Using `useSearchParams` without proper client-side guards
3. **Conditional Rendering Based on Client State**: Different rendering between server and client
4. **Mobile Detection During SSR**: Device detection logic running on the server

## Fixes Implemented

### 1. Client-Side Hydration Guards

**Files Modified**:

- `src/components/funnel/AuditForm.tsx`
- `src/app/funnel/page.tsx`

**Changes**:

- Added `isClient` state to track when component has hydrated
- All browser API access now guarded with `isClient && typeof window !== "undefined"`
- Search params access delayed until after client hydration

```tsx
const [isClient, setIsClient] = useState(false);

useEffect(() => {
  setIsClient(true);
}, []);

// Only access search params after client hydration
const locationSlug = isClient ? searchParams.get("location") : null;
```

### 2. Enhanced Browser API Guards

**Affected APIs**:

- `window` object access
- `navigator.userAgent` for mobile detection
- `requestIdleCallback` for lazy loading

**Before**:

```tsx
const isMobile = navigator.userAgent.match(/Mobi|Android/i);
```

**After**:

```tsx
const isMobile =
  isClient &&
  typeof window !== "undefined" &&
  typeof navigator !== "undefined" &&
  navigator.userAgent.match(
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  );
```

### 3. Debounced Validation Fixes

**Issue**: Debounced form validation was causing hydration mismatches
**Solution**: Modified debounce hook to handle SSR properly

```tsx
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

// Usage with client-side conditional delay
const debouncedFormData = useDebounce(formData, isClient ? 150 : 0);
```

### 4. Mobile Timeout Logic

**Issue**: Mobile detection for timeout duration was causing hydration issues
**Solution**: Added comprehensive guards for mobile detection

```tsx
const timeoutDuration =
  isClient &&
  typeof window !== "undefined" &&
  typeof navigator !== "undefined" &&
  navigator.userAgent.match(/Mobi|Android/i)
    ? 20000
    : 12000;
```

### 5. Analytics Tracking Guards

**Issue**: Google Analytics calls during SSR
**Solution**: Added client-side guards for all analytics calls

```tsx
// Add analytics tracking with context - only on client
if (isClient && typeof window !== "undefined" && (window as any).gtag) {
  (window as any).gtag("event", "form_submit", {
    event_category: "audit_request",
    location_context: location?.city || "general",
    service_context: service?.service || "general",
  });
}
```

### 6. Sentry Integration Safeguards

**Issue**: Sentry calls during SSR could cause hydration issues
**Solution**: All Sentry calls are now client-side guarded and non-blocking

```tsx
const captureToSentry = useCallback(
  async (action: "breadcrumb" | "message" | "exception", data: any) => {
    // Non-blocking Sentry calls
    startTransition(async () => {
      try {
        const Sentry = await getSentry();
        if (!Sentry) return;
        // ... Sentry operations
      } catch (error) {
        // Silently fail if Sentry is not available - don't block UI
        console.debug("Sentry action failed:", error);
      }
    });
  },
  [getSentry]
);
```

### 7. Form State Consistency

**Issue**: Form state differences between server and client
**Solution**: Added key prop to maintain consistency

```tsx
return (
  <section
    id="audit-form"
    className="py-16 bg-gradient-to-br from-nautical-blue to-digital-teal"
    key={isClient ? "client" : "server"}
  >
```

## Testing Approach

### Development Testing

1. Run `npm run dev` and check for hydration warnings in console
2. Test on desktop and mobile browsers
3. Check browser developer tools for hydration error messages
4. Verify form functionality after fixes

### Production Testing

1. Build application with `npm run build`
2. Test production build on mobile devices
3. Monitor Sentry for hydration-related errors
4. Verify performance improvements

## Mobile-Specific Considerations

### Timeout Adjustments

- Desktop: 12 seconds success message timeout
- Mobile: 20 seconds success message timeout (longer due to slower interactions)

### Performance Optimizations

- Lazy loading of Sentry only on client-side
- Debounced validation with client-side guards
- Non-blocking analytics and error tracking

## Validation Checklist

- [x] No hydration warnings in development console
- [x] No hydration errors in production build
- [x] No ESLint warnings related to React hooks
- [x] Form submits successfully on mobile
- [x] Analytics tracking works without blocking UI
- [x] Sentry integration is non-blocking
- [x] Mobile detection works correctly
- [x] Search params parsing is client-side safe
- [x] Success message timeouts work properly
- [x] All browser APIs are properly guarded
- [x] Production build completes successfully
- [x] TypeScript compilation passes without errors

## Browser Compatibility

### Supported Mobile Browsers

- Safari on iOS (iPhone/iPad)
- Chrome on Android
- Firefox Mobile
- Samsung Internet
- Edge Mobile

### API Fallbacks

- `requestIdleCallback` with `setTimeout` fallback
- Comprehensive `navigator` availability checks
- Safe `window` object access patterns

## Performance Impact

### Before Fixes

- Potential hydration mismatches causing re-renders
- Browser API errors on server-side
- Possible flash of incorrect content

### After Fixes

- Clean hydration with no mismatches
- Faster Time to Interactive (TTI)
- Consistent rendering across server and client
- No unnecessary re-renders due to hydration errors

## Monitoring

### Development

- Watch for hydration warnings in browser console
- Monitor React DevTools for unexpected re-renders
- Check Next.js compilation warnings

### Production

- Monitor Sentry for hydration-related errors
- Track Core Web Vitals for performance impact
- Watch for form submission success rates on mobile

## Future Considerations

1. **Server Components**: Consider moving more logic to Server Components where appropriate
2. **Streaming**: Implement React 18 streaming for better performance
3. **Service Worker**: Add service worker for offline functionality
4. **Progressive Enhancement**: Ensure form works without JavaScript

---

**Last Updated**: June 29, 2025
**Status**: ✅ Resolved
**Tested On**: Desktop (Chrome, Firefox, Safari), Mobile (iOS Safari, Android Chrome)
