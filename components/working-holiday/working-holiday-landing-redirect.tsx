"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useCountry } from "@/components/country-provider";

export function WorkingHolidayLandingRedirect() {
  const router = useRouter();
  const locale = useLocale();
  const { country, hasConfirmed, hydrated } = useCountry();

  useEffect(() => {
    if (!hydrated || !hasConfirmed) return;
    if (country.code === "global") return;
    router.replace(`/${locale}/working-holiday/${country.code}`);
  }, [country.code, hasConfirmed, hydrated, locale, router]);

  return null;
}
