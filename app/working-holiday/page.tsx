import type { Metadata } from "next";
import { WORKING_HOLIDAY_COUNTRIES } from "@/lib/working-holiday-countries";
import { WorkingHolidayLanding } from "./landing";

const globalConfig = WORKING_HOLIDAY_COUNTRIES.global;

export const metadata: Metadata = {
  title: globalConfig.seoTitle,
  description: globalConfig.seoDescription,
  keywords: [
    "working holiday francia",
    "visa vacaciones trabajo francia",
    "working holiday argentina francia",
    "working holiday chile francia",
    "working holiday colombia francia",
    "vivir en francia",
    "trabajar en francia joven",
    "visa francia 12 meses",
  ],
  openGraph: {
    title: "Working Holiday Francia 2025 | Requisitos y Asesoría | Allée France",
    description:
      "Guía completa Working Holiday Francia para latinoamericanos. Requisitos, cupos y asesoría experta. ¡Viví y trabajá en Francia hasta 12 meses!",
    url: "https://alleefrance.com/working-holiday",
    type: "website",
    images: [
      {
        url: "/hero-lyon.jpg",
        width: 1200,
        height: 630,
        alt: "Working Holiday Francia - Allée France",
      },
    ],
  },
  alternates: {
    canonical: "https://alleefrance.com/working-holiday",
  },
};

export default function WorkingHolidayPage() {
  return <WorkingHolidayLanding />;
}
