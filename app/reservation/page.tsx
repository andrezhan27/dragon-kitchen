import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { RESERVATION_WIDGET_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reservas | Dragon Kitchen Portugal",
  description: "Reserva a tua mesa na Dragon Kitchen Portugal, em Parque das Nações, Lisboa.",
};

export default function ReservationPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="reservation-page">
        <iframe
          className="block h-full w-full border-0"
          loading="eager"
          src={RESERVATION_WIDGET_URL}
          title="Dragon Kitchen Reservas"
        />
      </main>
    </LanguageProvider>
  );
}
