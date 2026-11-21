"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { SiPaypal, SiWhatsapp } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { buildWhatsAppLink } from "@/lib/utils";
import { BOOKING_PATH, buildPayPalLink, findConsultation } from "@/data/consultations";

/** Survives the reload a phone may do when the visitor comes back from the PayPal tab. */
const STORAGE_KEY = "alleefrance-booking";

const formSchema = z.object({
  name: z.string().trim().min(1),
  country: z.string().trim().min(1),
  summary: z.string().trim().min(1),
});

type BookingForm = z.infer<typeof formSchema>;

type StoredBooking = BookingForm & { paidConsultationId?: string };

function readStoredBooking(): Partial<StoredBooking> {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<StoredBooking>) : {};
  } catch {
    return {};
  }
}

function writeStoredBooking(value: StoredBooking) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage blocked (private mode): the flow still works, it just does not survive a reload.
  }
}

export function BookingConfirm() {
  const locale = useLocale();
  const t = useTranslations("Booking");
  const router = useRouter();
  const searchParams = useSearchParams();
  const consultation = findConsultation(searchParams.get("servicio"));

  const [payPalOpened, setPayPalOpened] = useState(false);

  const {
    register,
    watch,
    reset,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(formSchema),
    // There is no submit; revalidating on change clears an error as soon as the field is filled.
    mode: "onChange",
    defaultValues: { name: "", country: "", summary: "" },
  });

  const consultationId = consultation?.id;

  useEffect(() => {
    if (!consultationId) router.replace(`/${locale}${BOOKING_PATH}/`);
  }, [consultationId, locale, router]);

  // Restore once per consultation. Keyed on the id alone: after a client-side navigation
  // the router reference changes between renders, and re-running this would wipe what the
  // visitor just typed with the previous (still unsaved) storage snapshot.
  useEffect(() => {
    if (!consultationId) return;
    const stored = readStoredBooking();
    reset({
      name: stored.name ?? "",
      country: stored.country ?? "",
      summary: stored.summary ?? "",
    });
    setPayPalOpened(stored.paidConsultationId === consultationId);
  }, [consultationId, reset]);

  const values = watch();

  useEffect(() => {
    if (!consultation) return;
    writeStoredBooking({
      ...values,
      paidConsultationId: payPalOpened ? consultation.id : undefined,
    });
  }, [consultation, payPalOpened, values]);

  if (!consultation) return null;

  const payPalLink = buildPayPalLink(consultation.priceEur);
  const whatsAppLink = buildWhatsAppLink(
    t("whatsappMessage", {
      consultation: t(`consultations.${consultation.id}`),
      amount: consultation.priceEur,
      name: values.name.trim(),
      country: values.country.trim(),
      summary: values.summary.trim(),
    }),
  );

  // Validation runs synchronously so the new tab opens inside the click; an async
  // handler would make the browser treat it as a popup and block it.
  const handlePayPalClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!formSchema.safeParse(getValues()).success) {
      event.preventDefault();
      void trigger();
      return;
    }
    setPayPalOpened(true);
  };

  const fieldError = (field: keyof BookingForm) =>
    errors[field] ? (
      <p className="text-sm text-red-700" role="alert">
        {t("confirm.required")}
      </p>
    ) : null;

  return (
    <div className="max-w-xl mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between gap-4 rounded-xl bg-slate-100 px-5 py-4">
        <div className="min-w-0">
          <p className="font-bold leading-snug" style={{ color: "#002654" }}>
            {t(`consultations.${consultation.id}`)}
          </p>
          <Link
            href={`/${locale}${BOOKING_PATH}/`}
            className="text-sm font-semibold underline-offset-2 hover:underline"
            style={{ color: "#0055A4" }}
          >
            {t("confirm.change")}
          </Link>
        </div>
        <p className="text-3xl font-bold text-gray-900 shrink-0">{consultation.priceEur} €</p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={(event) => event.preventDefault()} noValidate>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="booking-name">{t("confirm.nameLabel")}</Label>
          <Input id="booking-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} />
          {fieldError("name")}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="booking-country">{t("confirm.countryLabel")}</Label>
          <Input
            id="booking-country"
            autoComplete="country-name"
            aria-invalid={!!errors.country}
            {...register("country")}
          />
          {fieldError("country")}
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="booking-summary">{t("confirm.caseLabel")}</Label>
          <Textarea id="booking-summary" rows={4} aria-invalid={!!errors.summary} {...register("summary")} />
          {fieldError("summary")}
        </div>
      </form>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold" style={{ color: "#002654" }}>
          {t("confirm.payStep")}
        </p>
        {payPalOpened ? (
          <>
            <p className="flex items-center gap-2 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
              <Check className="h-5 w-5" aria-hidden />
              {t("confirm.payDone")}
            </p>
            <a
              href={payPalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline-offset-2 hover:underline"
              style={{ color: "#0055A4" }}
            >
              {t("confirm.payAgain")}
            </a>
          </>
        ) : (
          <>
            <a
              href={payPalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePayPalClick}
              className="flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FFC439", color: "#003087" }}
            >
              <SiPaypal className="h-5 w-5" aria-hidden />
              {t("confirm.payButton", { amount: consultation.priceEur })}
            </a>
            <p className="text-xs text-gray-600">{t("confirm.payHint")}</p>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold" style={{ color: "#002654" }}>
          {t("confirm.whatsappStep")}
        </p>
        {payPalOpened ? (
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 font-bold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366", color: "#002654" }}
          >
            <SiWhatsapp className="h-5 w-5" aria-hidden />
            {t("confirm.whatsappButton")}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-5 py-3.5 font-bold text-gray-600 cursor-not-allowed"
          >
            <SiWhatsapp className="h-5 w-5" aria-hidden />
            {t("confirm.whatsappButton")}
          </button>
        )}
        <p className="text-xs text-gray-600">
          {payPalOpened ? t("confirm.whatsappHint") : t("confirm.whatsappLocked")}
        </p>
      </div>
    </div>
  );
}
