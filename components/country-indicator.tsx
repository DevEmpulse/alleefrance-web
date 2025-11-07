"use client"

import { useCountry } from "@/components/country-provider"
import { Button } from "@/components/ui/button"

export function CountryIndicator() {
  const { country, hydrated, openModal } = useCountry()

  if (!hydrated) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-90">
      <Button
        type="button"
        variant="outline"
        className="bg-white shadow-lg border-2 text-sm font-semibold"
        style={{ borderColor: "#002654", color: "#002654" }}
        onClick={openModal}
      >
        País: {country.name}
      </Button>
    </div>
  )
}

