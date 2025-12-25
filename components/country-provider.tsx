"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_WORKING_HOLIDAY_COUNTRY_CODE,
  WORKING_HOLIDAY_COUNTRIES,
  type WorkingHolidayCountryCode,
  normalizeWorkingHolidayCountryCode,
} from "@/lib/working-holiday-countries";

const COUNTRY_STORAGE_KEY = "alleefrance-country";

const COUNTRY_ORDER: WorkingHolidayCountryCode[] = [
  "ar",
  "cl",
  "uy",
  "ec",
  "mx",
  "co",
  "pe",
  "global",
];

export type CountryOption = {
  code: WorkingHolidayCountryCode;
  name: string;
  label: string;
  flagSrc?: string;
  flagScale?: number;
};

const COUNTRY_OPTIONS: CountryOption[] = COUNTRY_ORDER.map((code) => {
  const data = WORKING_HOLIDAY_COUNTRIES[code];
  return {
    code,
    name: data.name,
    label: data.label,
    flagSrc: data.flagSrc,
    flagScale: data.flagScale,
  };
});

const defaultCountry =
  COUNTRY_OPTIONS.find(
    (option) => option.code === DEFAULT_WORKING_HOLIDAY_COUNTRY_CODE
  ) ?? COUNTRY_OPTIONS[0];

type CountryContextValue = {
  country: CountryOption;
  options: CountryOption[];
  setCountry: (code: WorkingHolidayCountryCode) => void;
  hasConfirmed: boolean;
  hydrated: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const CountryContext = createContext<CountryContextValue | undefined>(
  undefined
);

type CountryProviderProps = {
  children: React.ReactNode;
  initialCountryCode?: WorkingHolidayCountryCode;
};

function getCountryOption(code?: WorkingHolidayCountryCode | null) {
  if (!code) return undefined;
  return COUNTRY_OPTIONS.find((option) => option.code === code);
}

function persistCountry(code: WorkingHolidayCountryCode) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(COUNTRY_STORAGE_KEY, code);
    }
  } catch (error) {
    console.warn("No se pudo guardar en localStorage:", error);
  }
}

export function CountryProvider({
  children,
  initialCountryCode,
}: CountryProviderProps) {
  const lockedCode =
    initialCountryCode && initialCountryCode !== "global"
      ? initialCountryCode
      : undefined;

  const [country, setCountry] = useState<CountryOption>(
    getCountryOption(initialCountryCode) ?? defaultCountry
  );
  const [hasConfirmed, setHasConfirmed] = useState(Boolean(lockedCode));
  const [hydrated, setHydrated] = useState(Boolean(lockedCode));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    if (lockedCode) {
      persistCountry(lockedCode);
      setHydrated(true);
      return;
    }

    try {
      if (typeof window !== "undefined" && "localStorage" in window) {
        const storage = window.localStorage;
        if (storage && typeof storage.getItem === "function") {
          const savedCode = storage.getItem(COUNTRY_STORAGE_KEY);
          if (savedCode) {
            const normalized = normalizeWorkingHolidayCountryCode(savedCode);
            const savedCountry = getCountryOption(normalized);
            if (savedCountry) {
              setCountry(savedCountry);
              setHasConfirmed(true);
              setIsModalOpen(false);
              return;
            }
          }
          setIsModalOpen(true);
        } else {
          setIsModalOpen(true);
        }
      } else {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.warn("No se pudo acceder a localStorage:", error);
      setIsModalOpen(true);
    } finally {
      setHydrated(true);
    }
  }, [isClient, lockedCode]);

  const updateCountry = (code: WorkingHolidayCountryCode) => {
    const nextCountry = getCountryOption(code) ?? defaultCountry;
    setCountry(nextCountry);
    setHasConfirmed(true);
    setIsModalOpen(false);
    persistCountry(nextCountry.code);
  };

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
    [country, hasConfirmed, hydrated, isModalOpen]
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error("useCountry debe usarse dentro de CountryProvider");
  }
  return context;
}
