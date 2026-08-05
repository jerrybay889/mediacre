"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export function AnalyticsBridge() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const element = target?.closest<HTMLElement>("[data-event]");
      if (!element) return;

      const eventName = element.dataset.event as AnalyticsEvent | undefined;
      if (!eventName) return;

      trackEvent(eventName, {
        label: element.dataset.label || element.textContent?.trim() || "",
        href: element.getAttribute("href") || "",
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
