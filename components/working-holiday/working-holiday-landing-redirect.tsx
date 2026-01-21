"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCountry } from "@/components/country-provider";

export function WorkingHolidayLandingRedirect() {
  const router = useRouter();
  const { country, hasConfirmed, hydrated } = useCountry();

  useEffect(() => {
    if (!hydrated || !hasConfirmed) return;
    if (country.code === "global") return;
    router.replace(`/working-holiday/${country.code}`);
  }, [country.code, hasConfirmed, hydrated, router]);

  return null;
}
