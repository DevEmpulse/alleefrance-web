"use client";

import { useCountry } from "@/components/country-provider";
import { Button } from "@/components/ui/button";

export function CountryIndicator() {
  const { country, hydrated, openModal } = useCountry();

  if (!hydrated) {
    return null;
  }

  return (
    // On mobile it sits above the floating "Agenda tu asesoría" button.
    <div className="fixed bottom-24 lg:bottom-6 right-6 z-90">
      <Button
        type="button"
        variant="outline"
        className="bg-white shadow-lg border-2 text-sm font-semibold cursor-pointer"
        style={{ borderColor: "#002654", color: "#002654" }}
        onClick={openModal}
      >
        País: {country.name}
      </Button>
    </div>
  );
}
