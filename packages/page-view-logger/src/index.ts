interface PageViewData {
  path: string;
  referrer: string;
  title: string;
  timestamp: string;
  userAgent: string;
  screenSize: {
    width: number;
    height: number;
  };
  utmParams?: Record<string, string>;
}

function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};

  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ].forEach((param) => {
    const value = params.get(param);
    if (value) {
      utmParams[param] = value;
    }
  });

  return utmParams;
}

function logPageView(): void {
  const pageViewData: PageViewData = {
    path: window.location.pathname,
    referrer: document.referrer,
    title: document.title,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenSize: {
      width: window.screen.width,
      height: window.screen.height,
    },
  };

  // Only add UTM params if they exist
  const utmParams = getUtmParams();
  if (Object.keys(utmParams).length > 0) {
    pageViewData.utmParams = utmParams;
  }

  // Log to console
  console.log("PageViewssss44:", pageViewData);
}

// Export for potential programmatic usage
export { logPageView };
export type { PageViewData };

// Automatically log page view when imported
if (typeof window !== "undefined") {
  logPageView();
}
