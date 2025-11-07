"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type BlogNewsletterSectionProps = {
  title?: string
  description?: string
  placeholder?: string
  buttonLabel?: string
  variant?: "dark" | "light"
  onSubmit?: (email: string) => Promise<void> | void
}

export function BlogNewsletterSection({
  title = "Suscribite a Nuestro Newsletter",
  description = "Recibí las últimas guías, consejos y actualizaciones sobre migración a Francia directamente en tu email.",
  placeholder = "Tu email",
  buttonLabel = "Suscribirme",
  variant = "dark",
  onSubmit,
}: BlogNewsletterSectionProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const isDark = variant === "dark"

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()
    if (!value) {
      setStatus("error")
      return
    }

    try {
      setStatus("loading")
      if (onSubmit) {
        await onSubmit(value)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600))
      }
      setStatus("success")
      setEmail("")
    } catch (error) {
      console.error("Newsletter submission failed", error)
      setStatus("error")
    } finally {
      setTimeout(() => setStatus("idle"), 2000)
    }
  }

  return (
    <section className="py-16 px-6" style={{ backgroundColor: isDark ? "#002654" : "#f4f6fb" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-4"
          style={{ color: isDark ? "white" : "#002654" }}
        >
          {title}
        </h2>
        <p
          className="text-xl mb-8 leading-relaxed"
          style={{ color: isDark ? "rgba(255,255,255,0.9)" : "#4b5563" }}
        >
          {description}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={placeholder}
            className="flex-1 py-6 text-lg rounded-lg bg-white"
            required
          />
          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="font-semibold tracking-wide hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#ED2939", color: "white" }}
          >
            {status === "loading" ? "Enviando..." : buttonLabel}
          </Button>
        </form>
        {status === "success" && (
          <p className="text-sm mt-3" style={{ color: isDark ? "#9fe6a0" : "#047857" }}>
            ¡Listo! Te sumamos a la lista.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm mt-3" style={{ color: "#f87171" }}>
            Revisá tu email e intentá nuevamente.
          </p>
        )}
      </div>
    </section>
  )
}
