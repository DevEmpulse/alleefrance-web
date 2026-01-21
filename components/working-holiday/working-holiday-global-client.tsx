"use client";

import { useRouter } from "next/navigation";
import { CountrySelectorModal } from "@/components/country-selector-modal";
import { CountryIndicator } from "@/components/country-indicator";
import { useCountry } from "@/components/country-provider";
import type { WorkingHolidayCountryCode } from "@/lib/working-holiday-countries";

export function WorkingHolidayGlobalClient() {
  const router = useRouter();
  const { setCountry } = useCountry();

  const handleOriginSelect = (code: WorkingHolidayCountryCode) => {
    setCountry(code);
    if (code === "global") {
      router.push("/working-holiday");
      return;
    }
    router.push(`/working-holiday/${code}`);
  };

  return (
    <>
      <CountrySelectorModal onSelect={handleOriginSelect} />
      <CountryIndicator />
    </>
  );
}
