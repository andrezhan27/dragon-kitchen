import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FullMenuPage } from "@/components/FullMenuPage";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { getRestaurantLegalLinks } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Menu | Dragon Kitchen Portugal",
  description: "Consulta o menu e descobre os pratos da Dragon Kitchen Portugal, em Lisboa.",
  alternates: { canonical: "/menu" },
};

export default async function MenuPage() {
  const legalLinks = await getRestaurantLegalLinks();

  return (
    <LanguageProvider>
      <Navbar />
      <FullMenuPage />
      <Footer legalLinks={legalLinks} />
    </LanguageProvider>
  );
}
