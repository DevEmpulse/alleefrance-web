"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const COUNTRY_STORAGE_KEY = "alleefrance-country"

export const COUNTRY_OPTIONS = [
  { code: "CL", name: "Chile" },
  { code: "UY", name: "Uruguay" },
  { code: "AR", name: "Argentina" },
  { code: "EC", name: "Ecuador" },
  { code: "MX", name: "México" },
  { code: "CO", name: "Colombia" },
  { code: "PE", name: "Perú" },
  { code: "ES", name: "España" },
  { code: "GLOBAL", name: "Global" },
]

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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const savedCode = localStorage.getItem(COUNTRY_STORAGE_KEY)
        if (savedCode) {
          const savedCountry = COUNTRY_OPTIONS.find((option) => option.code === savedCode)
          if (savedCountry) {
            setCountry(savedCountry)
            setHasConfirmed(true)
          } else {
            setIsModalOpen(true)
          }
        } else {
          setIsModalOpen(true)
        }
      } else {
        setIsModalOpen(true)
      }
    } catch (error) {
      // Si hay un error al acceder a localStorage (por ejemplo, políticas de seguridad),
      // simplemente usamos el país por defecto
      console.warn("No se pudo acceder a localStorage:", error)
      setIsModalOpen(true)
    } finally {
      setHydrated(true)
    }
  }, [isClient])

  const updateCountry = (code: CountryOption["code"]) => {
    const nextCountry = COUNTRY_OPTIONS.find((option) => option.code === code) ?? defaultCountry
    setCountry(nextCountry)
    setHasConfirmed(true)
    setIsModalOpen(false)
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(COUNTRY_STORAGE_KEY, nextCountry.code)
      }
    } catch (error) {
      // Si hay un error al guardar en localStorage, simplemente lo ignoramos
      console.warn("No se pudo guardar en localStorage:", error)
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

