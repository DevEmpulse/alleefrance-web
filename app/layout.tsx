import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { CountryProvider } from "@/components/country-provider"
import { CountrySelectorModal } from "@/components/country-selector-modal"
import { CountryIndicator } from "@/components/country-indicator"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Allée France - Asesoría Migratoria para Francia",
  description:
    "Asesoría migratoria y acompañamiento integral para obtener tu visa francesa. Especialistas en trámites migratorios hacia Francia.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --font-montserrat: ${montserrat.style.fontFamily};
              --font-open-sans: ${openSans.style.fontFamily};
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: var(--font-montserrat), sans-serif;
              font-weight: 700;
            }
          `,
          }}
        />
      </head>
      <body className={`${openSans.className} antialiased`}>
        <CountryProvider>
          {children}
          <CountrySelectorModal />
          <CountryIndicator />
        </CountryProvider>
      </body>
    </html>
  )
}
