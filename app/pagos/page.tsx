"use client";

import type React from "react";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Shield, CheckCircle2, Lock } from "lucide-react";

const services = [
  { value: "consulta", label: "Consulta Inicial", price: 50 },
  {
    value: "visa-salarie",
    label: "Visa Salarié - Servicio Completo",
    price: 800,
  },
  {
    value: "visa-saisonier",
    label: "Visa Saisonier - Servicio Completo",
    price: 600,
  },
  {
    value: "visa-etudiant",
    label: "Visa Étudiant - Servicio Completo",
    price: 700,
  },
  { value: "reagrupacion", label: "Reagrupación Familiar", price: 900 },
  { value: "renovacion", label: "Renovación de Visa", price: 400 },
];

export default function PagosPage() {
  const [selectedService, setSelectedService] = useState("");
  const [paymentProcessed, setPaymentProcessed] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessed(true);
    }, 1500);
  };

  const selectedServiceData = services.find((s) => s.value === selectedService);

  if (paymentProcessed) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
            >
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              ¡Pago Procesado Exitosamente!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hemos recibido tu pago. En breve recibirás un correo de
              confirmación con los próximos pasos.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestro equipo se pondrá en contacto contigo dentro de las
              próximas 24 horas para iniciar tu proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-white font-semibold"
                style={{ backgroundColor: "#ED2939" }}
                asChild
              >
                <a
                  href="https://wa.me/33601526171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                style={{ borderColor: "#002654", color: "#002654" }}
              >
                <a href="/">Volver al Inicio</a>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#002654" }}
            >
              Pasarela de Pagos
            </h1>
            <p className="text-xl text-gray-600">
              Pago seguro para servicios de asesoría migratoria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <Card
              className="p-8 border-2"
              style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
            >
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#002654" }}
              >
                Información de Pago
              </h2>

              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Servicio a Contratar</Label>
                  <Select
                    value={selectedService}
                    onValueChange={setSelectedService}
                    required
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label} - €{service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Juan Pérez" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card">Número de Tarjeta</Label>
                  <div className="relative">
                    <Input
                      id="card"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Fecha de Expiración</Label>
                    <Input id="expiry" placeholder="MM/AA" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" maxLength={3} required />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white font-semibold"
                  style={{ backgroundColor: "#ED2939" }}
                  disabled={!selectedService}
                >
                  Pagar{" "}
                  {selectedServiceData ? `€${selectedServiceData.price}` : ""}
                </Button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Lock className="w-4 h-4" />
                <span>Pago 100% seguro y encriptado</span>
              </div>
            </Card>

            {/* Security Info */}
            <div className="space-y-6">
              <Card
                className="p-6 border-2"
                style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(237, 41, 57, 0.1)" }}
                  >
                    <Shield className="w-6 h-6" style={{ color: "#ED2939" }} />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: "#002654" }}
                    >
                      Pago Seguro
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Utilizamos encriptación SSL y cumplimos con los estándares
                      PCI-DSS para proteger tu información financiera.
                    </p>
                  </div>
                </div>
              </Card>

              <Card
                className="p-6 border-2"
                style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
              >
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: "#002654" }}
                >
                  Métodos de Pago Aceptados
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "#ED2939" }}
                    />
                    <span className="text-gray-700">
                      Tarjetas de crédito (Visa, Mastercard, Amex)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "#ED2939" }}
                    />
                    <span className="text-gray-700">Tarjetas de débito</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "#ED2939" }}
                    />
                    <span className="text-gray-700">
                      Pagos internacionales en EUR/USD
                    </span>
                  </div>
                </div>
              </Card>

              <Card
                className="p-6 border-2"
                style={{ borderColor: "rgba(0, 38, 84, 0.1)" }}
              >
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: "#002654" }}
                >
                  Información Importante
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Recibirás confirmación por email inmediatamente</li>
                  <li>• El equipo te contactará en 24 horas</li>
                  <li>• Tiempo de acreditación: 3-5 días hábiles</li>
                  <li>• Comisión por transacción: 2.9% - 3.5%</li>
                </ul>
              </Card>

              <Card
                className="p-6 border-2"
                style={{
                  borderColor: "rgba(237, 41, 57, 0.2)",
                  backgroundColor: "rgba(237, 41, 57, 0.05)",
                }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Nota:</strong> Esta es una pasarela de pagos de
                  demostración. En producción, se integrará con Stripe o
                  MercadoPago para procesar pagos reales de forma segura.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
