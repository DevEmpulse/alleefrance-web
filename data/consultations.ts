export type ConsultationId = "express" | "standard" | "vie-privee" | "work-visas" | "students";

export type Consultation = {
  id: ConsultationId;
  /** Price in euros, charged through PayPal.me. */
  priceEur: number;
  /** Shown under the price only when the client has defined it. */
  durationMinutes?: number;
};

/**
 * Paid consultations offered by the "Agenda tu asesoría" flow, cheapest first.
 * Names and copy live in the `Booking.consultations.{id}` message keys.
 */
export const CONSULTATIONS: Consultation[] = [
  { id: "express", priceEur: 30, durationMinutes: 15 },
  { id: "standard", priceEur: 60, durationMinutes: 30 },
  { id: "vie-privee", priceEur: 100 },
  { id: "work-visas", priceEur: 100 },
  { id: "students", priceEur: 150 },
];

export const PAYPAL_ME_URL = "https://paypal.me/alleefrancelyon";

export function buildPayPalLink(amountEur: number) {
  return `${PAYPAL_ME_URL}/${amountEur}EUR`;
}

export function findConsultation(id: string | null | undefined) {
  return CONSULTATIONS.find((consultation) => consultation.id === id);
}
