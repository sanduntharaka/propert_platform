declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-6HXYTTN86R";

export const pageview = (url: string) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
