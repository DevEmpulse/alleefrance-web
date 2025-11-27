"use client";

import { useState, type CSSProperties } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Tu nombre y apellido deben tener al menos 2 caracteres"),
  email: z.string().email("Ingresa un correo válido"),
  country: z.string({
    required_error: "Selecciona tu país de contacto",
  }),
  consultationType: z.string({
    required_error: "Selecciona el tipo de consulta",
  }),
  message: z.string().min(10, "Cuéntanos más detalles (mínimo 10 caracteres)"),
  honeypot: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

type SubmissionState = {
  type: "idle" | "success" | "error";
  message: string;
};

const defaultSubmissionState: SubmissionState = { type: "idle", message: "" };

const fieldBorderStyles: CSSProperties = {
  borderColor: "rgba(0, 38, 84, 0.2)",
};

const countryOptions = [
  "Argentina",
  "Uruguay",
  "Colombia",
  "Chile",
  "Ecuador",
  "México",
  "Otro",
] as const;

const consultationTypeOptions = [
  "Visa WH-VVT",
  "Visa salarie/saisonnier",
  "Visa vie privée et familiar",
  "Autorización de trabajo",
  "Asesoría",
  "Otros",
] as const;

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll direction="fade" delay={0}>
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              CONTACTO
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <AnimateOnScroll direction="left" delay={0.2}>
            <div className="space-y-6">
              <ContactIntro />
              <ContactForm />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <ContactMap />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function ContactIntro() {
  return (
    <p className="text-gray-700 leading-relaxed">
      ¿Listo para comenzar tu proceso migratorio? Completa el formulario y nos
      pondremos en contacto contigo para una consulta inicial gratuita.
    </p>
  );
}

function ContactForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>(
    defaultSubmissionState
  );
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      country: "",
      consultationType: "",
      message: "",
      honeypot: "",
    },
  });

  const nameError = errors.name?.message;
  const emailError = errors.email?.message;
  const countryError = errors.country?.message;
  const consultationTypeError = errors.consultationType?.message;
  const messageError = errors.message?.message;

  const resetWithFeedback = (state: SubmissionState) => {
    setSubmissionState(state);
    reset();
  };

  const onSubmit = async (data: ContactFormValues) => {
    setSubmissionState(defaultSubmissionState);

    if (data.honeypot && data.honeypot.trim().length > 0) {
      resetWithFeedback({
        type: "success",
        message: "¡Gracias! Nos pondremos en contacto contigo a la brevedad.",
      });
      return;
    }

    if (!accessKey) {
      setSubmissionState({
        type: "error",
        message:
          "No se pudo enviar el formulario. Falta configurar NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
      });
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          country: data.country,
          consultation_type: data.consultationType,
          message: data.message,
          subject: "Nuevo mensaje desde alleefrance.com",
          honeypot: data.honeypot ?? "",
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error(result.message ?? "Error desconocido");
      }

      resetWithFeedback({
        type: "success",
        message: "¡Gracias! Nos pondremos en contacto contigo a la brevedad.",
      });
    } catch (error) {
      console.error("Contact form error", error);
      setSubmissionState({
        type: "error",
        message:
          "Ocurrió un error al enviar el formulario. Intenta nuevamente en unos minutos.",
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <Input
          placeholder="Nombres y apellidos"
          className="border-2"
          style={fieldBorderStyles}
          autoComplete="name"
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name")}
        />
        {nameError && <p className="mt-2 text-sm text-red-600">{nameError}</p>}
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          className="border-2"
          style={fieldBorderStyles}
          autoComplete="email"
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email")}
        />
        {emailError && (
          <p className="mt-2 text-sm text-red-600">{emailError}</p>
        )}
      </div>
      <div>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              name={field.name}
            >
              <SelectTrigger
                className="w-full border-2 justify-between"
                style={fieldBorderStyles}
                aria-invalid={errors.country ? "true" : "false"}
              >
                <SelectValue placeholder="País de contacto" />
              </SelectTrigger>
              <SelectContent>
                {countryOptions.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {countryError && (
          <p className="mt-2 text-sm text-red-600">{countryError}</p>
        )}
      </div>
      <div>
        <Controller
          name="consultationType"
          control={control}
          render={({ field }) => (
            <Select
              value={field.value}
              onValueChange={field.onChange}
              name={field.name}
            >
              <SelectTrigger
                className="w-full border-2 justify-between"
                style={fieldBorderStyles}
                aria-invalid={errors.consultationType ? "true" : "false"}
              >
                <SelectValue placeholder="Tipo de consulta (consulta express)" />
              </SelectTrigger>
              <SelectContent>
                {consultationTypeOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {consultationTypeError && (
          <p className="mt-2 text-sm text-red-600">
            {consultationTypeError}
          </p>
        )}
      </div>
      <div>
        <Textarea
          placeholder="Mensaje"
          rows={5}
          className="border-2"
          style={fieldBorderStyles}
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message")}
        />
        {messageError && (
          <p className="mt-2 text-sm text-red-600">{messageError}</p>
        )}
      </div>

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("honeypot")}
        style={{ position: "absolute", opacity: 0, zIndex: -1 }}
      />

      <Button
        type="submit"
        className="w-full text-white font-semibold py-6 hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: "#ED2939" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>

      <StatusMessage state={submissionState} />
    </form>
  );
}

function StatusMessage({ state }: { state: SubmissionState }) {
  if (state.type === "idle") return null;

  const role = state.type === "error" ? "alert" : "status";
  const colorStyles =
    state.type === "success"
      ? "border-green-200 bg-green-50 text-green-700"
      : "border-red-200 bg-red-50 text-red-700";

  return (
    <p
      className={`rounded-md border px-3 py-2 text-sm ${colorStyles}`}
      role={role}
      aria-live="polite"
    >
      {state.message}
    </p>
  );
}

function ContactMap() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.0!2d4.8357!3d45.7640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20France!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses&hl=es"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
          title="Mapa de Lyon, Francia"
        />
      </div>
    </div>
  );
}
