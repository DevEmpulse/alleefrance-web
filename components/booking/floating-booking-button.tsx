"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { BOOKING_CTA_ATTRIBUTE, BOOKING_PATH } from "@/data/consultations";

/**
 * Mobile-only floating "Agenda tu asesoría" button. It stays hidden while an inline booking
 * button (hero, end of a blog article) is visible, so two identical buttons never show at once.
 */
export function FloatingBookingButton() {
  const locale = useLocale();
  const t = useTranslations("Booking");
  const pathname = usePathname();
  const [inlineCtaVisible, setInlineCtaVisible] = useState(true);

  const onBookingPage = pathname?.startsWith(`/${locale}${BOOKING_PATH}`) ?? false;

  useEffect(() => {
    if (onBookingPage) return;

    // Queried on every check: inline buttons can mount late (client navigation, lazy sections).
    const update = () => {
      const anyVisible = Array.from(document.querySelectorAll(`[${BOOKING_CTA_ATTRIBUTE}]`)).some((el) => {
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      });
      setInlineCtaVisible(anyVisible);
    };

    update();
    // Capture phase: the site scrolls <body> rather than the window, and scroll events do not bubble.
    document.addEventListener("scroll", update, { capture: true, passive: true });
    window.addEventListener("resize", update);
    const lateMount = window.setTimeout(update, 500);

    return () => {
      document.removeEventListener("scroll", update, { capture: true });
      window.removeEventListener("resize", update);
      window.clearTimeout(lateMount);
    };
  }, [onBookingPage, pathname]);

  if (onBookingPage) return null;

  return (
    <Link
      href={`/${locale}${BOOKING_PATH}/`}
      aria-hidden={inlineCtaVisible}
      tabIndex={inlineCtaVisible ? -1 : undefined}
      className={`lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center rounded-full py-4 font-bold text-white shadow-xl transition-all duration-300 ${
        inlineCtaVisible ? "pointer-events-none translate-y-24 opacity-0" : "translate-y-0 opacity-100"
      }`}
      style={{ backgroundColor: "#DC1F2E" }}
    >
      {t("cta")}
    </Link>
  );
}
