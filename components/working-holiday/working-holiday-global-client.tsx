"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { CountryIndicator } from "@/components/country-indicator";
import { useCountry } from "@/components/country-provider";
import type { WorkingHolidayCountryCode } from "@/lib/working-holiday-countries";

const CountrySelectorModal = dynamic(
  () =>
    import("@/components/country-selector-modal").then(
      (mod) => mod.CountrySelectorModal
    ),
  { ssr: false }
);

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
