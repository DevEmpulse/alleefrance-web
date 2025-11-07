"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const COUNTRY_STORAGE_KEY = "alleefrance-country"

export const COUNTRY_OPTIONS = [
  { code: "CL", name: "Chile", emoji: "🇨🇱" },
  { code: "UY", name: "Uruguay", emoji: "🇺🇾" },
  { code: "AR", name: "Argentina", emoji: "🇦🇷" },
  { code: "EC", name: "Ecuador", emoji: "🇪🇨" },
  { code: "MX", name: "México", emoji: "🇲🇽" },
  { code: "CO", name: "Colombia", emoji: "🇨🇴" },
  { code: "PE", name: "Perú", emoji: "🇵🇪" },
  { code: "ES", name: "España", emoji: "🇪🇸" },
  { code: "GLOBAL", name: "Global", emoji: "🌍" },
] as const

export type CountryOption = (typeof COUNTRY_OPTIONS)[number]

type CountryContextValue = {
  country: CountryOption
  options: CountryOption[]
  setCountry: (code: CountryOption["code"]) => void
  hasConfirmed: boolean
  hydrated: boolean
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const defaultCountry = COUNTRY_OPTIONS[2] // Argentina por defecto

const CountryContext = createContext<CountryContextValue | undefined>(undefined)

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<CountryOption>(defaultCountry)
  const [hasConfirmed, setHasConfirmed] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const savedCode = typeof window !== "undefined" ? localStorage.getItem(COUNTRY_STORAGE_KEY) : null
    if (savedCode) {
      const savedCountry = COUNTRY_OPTIONS.find((option) => option.code === savedCode)
      if (savedCountry) {
        setCountry(savedCountry)
        setHasConfirmed(true)
      }
    } else {
      setIsModalOpen(true)
    }
    setHydrated(true)
  }, [])

  const updateCountry = (code: CountryOption["code"]) => {
    const nextCountry = COUNTRY_OPTIONS.find((option) => option.code === code) ?? defaultCountry
    setCountry(nextCountry)
    setHasConfirmed(true)
    setIsModalOpen(false)
    if (typeof window !== "undefined") {
      localStorage.setItem(COUNTRY_STORAGE_KEY, nextCountry.code)
    }
  }

  const value = useMemo<CountryContextValue>(
    () => ({
      country,
      options: COUNTRY_OPTIONS,
      setCountry: updateCountry,
      hasConfirmed,
      hydrated,
      isModalOpen,
      openModal: () => setIsModalOpen(true),
      closeModal: () => setIsModalOpen(false),
    }),
    [country, hasConfirmed, hydrated, isModalOpen],
  )

  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
}

export function useCountry() {
  const context = useContext(CountryContext)
  if (!context) {
    throw new Error("useCountry debe usarse dentro de CountryProvider")
  }
  return context
}

