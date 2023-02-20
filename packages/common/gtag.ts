import { siteConstants } from '../constants';

export const GA_TRACKING_ID = siteConstants.ga;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export type GAEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GAEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
