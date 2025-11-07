"use client"

import { useCountry } from "@/components/country-provider"
import { cn } from "@/lib/utils"

type CountryNameProps = {
  withEmoji?: boolean
  fallback?: string
  className?: string
}

export function CountryName({ withEmoji = false, fallback = "Argentina", className }: CountryNameProps) {
  const { country, hydrated } = useCountry()

  const displayName = hydrated ? country.name : fallback
  const content = withEmoji ? `${displayName}` : displayName

  return <span className={cn("inline-flex items-center gap-2 align-middle font-semibold", className)}>{content}</span>
}

