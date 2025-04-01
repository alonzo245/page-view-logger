declare module "page-view-logger" {
  export interface PageViewData {
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

  export function logPageView(): void;
}
