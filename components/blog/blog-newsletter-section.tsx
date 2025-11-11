"use client"

import { useEffect, useRef } from "react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

type BlogNewsletterSectionProps = {
  title?: string
  description?: string
  highlights?: string[]
  variant?: "dark" | "light"
}

export function BlogNewsletterSection({
  title = "Alertas y recursos exclusivos",
  description = "Recibí recordatorios de plazos consulares, avisos de convocatorias y herramientas listas para usar en tu proceso migratorio.",
  highlights = ["Recordatorios clave", "Convocatorias antes que nadie", "Plantillas y checklists"],
  variant = "dark",
}: BlogNewsletterSectionProps) {
  const isDark = variant === "dark"
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = formContainerRef.current
    if (!container) return

    container.innerHTML = ""

    const script = document.createElement("script")
    script.async = true
    script.src = "https://agustin-fernandez.kit.com/7032a7e6ef/index.js"
    script.dataset.uid = "7032a7e6ef"
    container.appendChild(script)

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return (
    <AnimateOnScroll direction="fade" delay={0}>
      <section className="py-16 px-6" style={{ backgroundColor: isDark ? "#001b3c" : "#f5f7fb" }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: isDark ? "#9fb5ff" : "#002654" }}>
            {title}
          </p>
          <p
            className="text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: isDark ? "rgba(255,255,255,0.85)" : "#4b5563" }}
          >
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "white",
                  color: isDark ? "white" : "#002654",
                  border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid #dbe3f5",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          ref={formContainerRef}
          className="mt-10 mx-auto max-w-2xl convertkit-wrapper"
          aria-live="polite"
        >
          <noscript>
            {`Para suscribirte, habilitá JavaScript o escribinos a contacto@alleefrance.com`}
          </noscript>
        </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
