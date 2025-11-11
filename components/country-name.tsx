"use client"

import { useContext } from "react"
import { CountryContext } from "@/components/country-provider"
import { cn } from "@/lib/utils"

type CountryNameProps = {
  withEmoji?: boolean
  fallback?: string
  className?: string
}

export function CountryName({ withEmoji = false, fallback = "Argentina", className }: CountryNameProps) {
  const context = useContext(CountryContext)
  
  // Si no hay provider, usar el fallback
  const displayName = context && context.hydrated ? context.country.name : fallback
  const content = withEmoji ? `${displayName}` : displayName

  return <span className={cn("inline-flex items-center gap-2 align-middle font-semibold", className)}>{content}</span>
}

