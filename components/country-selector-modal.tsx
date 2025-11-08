"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useCountry } from "@/components/country-provider";

export function CountrySelectorModal() {
  const {
    options,
    country,
    setCountry,
    isModalOpen,
    hasConfirmed,
    hydrated,
    closeModal,
  } = useCountry();
  const shouldShow = hydrated && isModalOpen;

  useEffect(() => {
    if (!shouldShow) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldShow]);

  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 py-8">
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl">
        {hasConfirmed && (
          <button
            aria-label="Cerrar selector de país"
            className="absolute right-4 top-4 text-gray-500 transition-colors hover:text-gray-800"
            onClick={closeModal}
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <div className="text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-gray-400">
            Personaliza
          </p>
          <h2 className="mt-3 text-2xl font-bold" style={{ color: "#002654" }}>
            Selecciona tu país
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Usamos tu país de origen para ajustar mensajes, ejemplos y tiempos
            de los trámites.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {options.map((option) => {
            const isActive = option.code === country.code;
            return (
              <button
                key={option.code}
                onClick={() => setCountry(option.code)}
                className={[
                  "flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center transition-all",
                  "hover:-translate-y-1 hover:shadow-lg",
                  isActive ? "border-[#ED2939] shadow-lg" : "border-gray-200",
                ].join(" ")}
              >
                <span className="text-3xl mb-2">{option.code}</span>
                <span
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: isActive ? "#ED2939" : "#002654" }}
                >
                  {option.name.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
