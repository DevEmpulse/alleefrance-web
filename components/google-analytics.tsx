"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, GTM_CONTAINER_ID } from "@/lib/analytics";

export { GA_MEASUREMENT_ID, GTM_CONTAINER_ID };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const payload = {
    transport_type: "beacon",
    ...params,
  };
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["event", eventName, payload]);
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const isInitialMount = useRef(true);

  // Track subsequent client-side route transitions (initial page_view is fired immediately by the <head> snippet)
  useEffect(() => {
    if (!pathname) return;
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    trackEvent("page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  // Global delegated click listener for WhatsApp, /agenda booking links, PayPal, and Insurance CTA
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const resolvedHref = anchor.href || anchor.getAttribute("href") || "";
      if (!resolvedHref) return;

      const label = (
        anchor.getAttribute("aria-label") ||
        anchor.textContent ||
        ""
      )
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 100);
      const sourcePage = window.location.pathname;

      // 1. WhatsApp click (wa.me or chat.whatsapp.com)
      if (resolvedHref.includes("wa.me/") || resolvedHref.includes("whatsapp.com/")) {
        const isBookingWhatsapp = sourcePage.includes("/agenda/confirmar");
        trackEvent("whatsapp_click", {
          source_page: sourcePage,
          button_text: label || "WhatsApp",
          link_url: resolvedHref,
          is_booking_confirmation: isBookingWhatsapp,
        });
        return;
      }

      // 2. PayPal payment click in /agenda/confirmar
      if (resolvedHref.includes("paypal.com/paypalme/")) {
        const servicio = new URLSearchParams(window.location.search).get("servicio") ?? "unknown";
        trackEvent("paypal_click", {
          source_page: sourcePage,
          consultation_id: servicio,
          button_text: label || "PayPal",
          link_url: resolvedHref,
        });
        return;
      }

      // 3. Selecting a specific consultation card in /agenda -> /agenda/confirmar?servicio=...
      if (resolvedHref.includes("/agenda/confirmar")) {
        const qIndex = resolvedHref.indexOf("?");
        const servicio =
          qIndex >= 0
            ? new URLSearchParams(resolvedHref.slice(qIndex)).get("servicio") ?? "unknown"
            : "unknown";
        trackEvent("agenda_select_service", {
          source_page: sourcePage,
          consultation_id: servicio,
          button_text: label || "Elegir",
          destination_url: resolvedHref,
        });
        return;
      }

      // 4. Clicking any CTA button/floating button leading to /agenda/
      if (/\/(es|en|fr)\/agenda\/?([?#].*)?$/.test(resolvedHref)) {
        trackEvent("agenda_cta_click", {
          source_page: sourcePage,
          button_text: label || "Agendar asesoría",
          destination_url: resolvedHref,
        });
        return;
      }

      // 5. Clicking travel insurance affiliate link (GO! Assistance)
      if (resolvedHref.includes("goassistance.com")) {
        trackEvent("insurance_click", {
          source_page: sourcePage,
          button_text: label || "Cotizar seguro",
          link_url: resolvedHref,
        });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
