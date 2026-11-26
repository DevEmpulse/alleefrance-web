"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export const GA_MEASUREMENT_ID = "G-NW4M4QZYXS";

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
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  // Track client-side route changes in Next.js App Router
  useEffect(() => {
    if (!pathname) return;
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

      const rawHref = anchor.getAttribute("href") ?? "";
      if (!rawHref) return;

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
      if (rawHref.includes("wa.me/") || rawHref.includes("whatsapp.com/")) {
        const isBookingWhatsapp = sourcePage.includes("/agenda/confirmar");
        trackEvent("whatsapp_click", {
          source_page: sourcePage,
          button_text: label || "WhatsApp",
          link_url: rawHref,
          is_booking_confirmation: isBookingWhatsapp,
        });
        return;
      }

      // 2. PayPal payment click in /agenda/confirmar
      if (rawHref.includes("paypal.com/paypalme/")) {
        const servicio = new URLSearchParams(window.location.search).get("servicio") ?? "unknown";
        trackEvent("paypal_click", {
          source_page: sourcePage,
          consultation_id: servicio,
          button_text: label || "PayPal",
          link_url: rawHref,
        });
        return;
      }

      // 3. Selecting a specific consultation card in /agenda -> /agenda/confirmar?servicio=...
      if (rawHref.includes("/agenda/confirmar")) {
        const qIndex = rawHref.indexOf("?");
        const servicio =
          qIndex >= 0
            ? new URLSearchParams(rawHref.slice(qIndex)).get("servicio") ?? "unknown"
            : "unknown";
        trackEvent("agenda_select_service", {
          source_page: sourcePage,
          consultation_id: servicio,
          button_text: label || "Elegir",
          destination_url: rawHref,
        });
        return;
      }

      // 4. Clicking any CTA button/floating button leading to /agenda/
      if (/\/(es|en|fr)\/agenda\/?$/.test(rawHref)) {
        trackEvent("agenda_cta_click", {
          source_page: sourcePage,
          button_text: label || "Agendar asesoría",
          destination_url: rawHref,
        });
        return;
      }

      // 5. Clicking travel insurance affiliate link (GO! Assistance)
      if (rawHref.includes("goassistance.com")) {
        trackEvent("insurance_click", {
          source_page: sourcePage,
          button_text: label || "Cotizar seguro",
          link_url: rawHref,
        });
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}
