import { AnimatedLightDivider } from "@/components/AnimatedLightDivider";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { RestaurantsSection } from "@/components/RestaurantsSection";
import { SpaceSection } from "@/components/SpaceSection";
import { getRestaurantLegalLinks } from "@/lib/restaurant";

export default async function Home() {
  const legalLinks = await getRestaurantLegalLinks();

  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <AnimatedLightDivider />
        <MenuSection />
        <AnimatedLightDivider variant="ornamental" />
        <SpaceSection />
        <AnimatedLightDivider />
        <ReviewsSection />
        <AnimatedLightDivider />
        <ContactSection />
        <AnimatedLightDivider />
        <RestaurantsSection />
      </main>
      <Footer legalLinks={legalLinks} />
    </LanguageProvider>
  );
}
