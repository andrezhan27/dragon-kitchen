"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: { home: "Início", menu: "Menu", space: "O Espaço", reviews: "Avaliações", restaurants: "Restaurantes", info: "Informações", reserve: "Reservar" },
    hero: {
      discover: "Descobrir",
      line1: "Sabores da China,",
      line2: "no coração de Lisboa.",
      reserve: "Reservar mesa",
      location: "Parque das Nações · Lisboa",
    },
    menu: {
      eyebrow: "Menu",
      title1: "Feito para",
      title2: "partilhar.",
      body: "Clássicos chineses, dim sum delicados e sabores intensos de Sichuan — preparados com técnica e pensados para chegar juntos à mesa.",
      galleryLabel: "Sabores Dragon Kitchen",
      fullEyebrow: "A nossa carta",
      fullTitle: "Descobre todos os sabores da Dragon Kitchen.",
      fullCta: "Ver menu completo",
    },
    space: {
      eyebrow: "O espaço",
      title: "À mesa, sem pressa.",
      body: "Inspirada numa China contemporânea, a Dragon Kitchen combina uma atmosfera sofisticada com elementos tradicionais reinterpretados. Um espaço pensado para refeições descontraídas, celebrações e noites memoráveis.",
      caption1: "Parque das Nações",
      caption2: "Lisboa, depois do anoitecer",
    },
    reviews: {
      eyebrow: "O que dizem sobre nós",
      title: "Experiências que ficam na memória.",
      googleLabel: "Avaliações Google",
      imageAlt: "Cliente a desfrutar de uma refeição na Dragon Kitchen Portugal",
      carouselLabel: "Avaliações de clientes em destaque",
    },
    restaurants: {
      eyebrow: "Dragon Kitchen além-fronteiras",
      title: "Os nossos restaurantes.",
      body: "Encontra-nos em Portugal, Espanha e Itália — de Lisboa a Milão, com novos destinos a chegar em breve.",
      restaurant: "restaurante",
      restaurants: "restaurantes",
      otherLocations: "Outras localizações",
      locations: "Localizações",
      current: "Atual",
      countryWebsite: "Visitar website de Espanha",
      website: "Visitar website",
      expand: "Expandir",
      collapse: "Recolher",
      reserve: "Reservar mesa",
      comingSoon: "Brevemente",
    },
    info: {
      eyebrow: "Informações",
      title: "Visita-nos em Lisboa.",
      addressLabel: "Morada",
      hoursLabel: "Horário",
      hours: "Todos os dias",
      directions: "Abrir no mapa",
      delivery: "Pedir em casa",
      phoneLabel: "Reservas por telefone",
      mapTitle: "Localização da Dragon Kitchen Portugal no Google Maps",
    },
    reservation: {
      eyebrow: "Reservas",
      title: "A tua mesa espera por ti.",
      body: "Almoço sem pressa, jantar a dois ou uma mesa cheia de amigos.",
      cta: "Reservar mesa",
    },
    footer: { location: "Parque das Nações · Lisboa", rights: "Todos os direitos reservados.", complaints: "Livro de reclamações", privacy: "Política de privacidade", terms: "Termos e condições", designed: "Desenvolvido por" },
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
  en: {
    nav: { home: "Home", menu: "Menu", space: "The Space", reviews: "Reviews", restaurants: "Restaurants", info: "Information", reserve: "Reserve" },
    hero: {
      discover: "Discover",
      line1: "Chinese cuisine,",
      line2: "reimagined in Lisbon.",
      reserve: "Book a table",
      location: "Parque das Nações · Lisbon",
    },
    menu: {
      eyebrow: "Menu",
      title1: "Made to be",
      title2: "shared.",
      body: "Chinese classics, delicate dim sum and bold Sichuan flavours — prepared with craft and made to arrive together at the table.",
      galleryLabel: "Dragon Kitchen flavours",
      fullEyebrow: "Our menu",
      fullTitle: "Discover every flavour of Dragon Kitchen.",
      fullCta: "View the full menu",
    },
    space: {
      eyebrow: "The space",
      title: "Stay a little longer.",
      body: "Inspired by contemporary China, Dragon Kitchen combines a sophisticated atmosphere with reimagined traditional elements. A space created for relaxed meals, celebrations and memorable evenings.",
      caption1: "Parque das Nações",
      caption2: "Lisbon, after dark",
    },
    reviews: {
      eyebrow: "What guests say",
      title: "Experiences worth remembering.",
      googleLabel: "Google Reviews",
      imageAlt: "Guest enjoying a meal at Dragon Kitchen Portugal",
      carouselLabel: "Featured guest reviews",
    },
    restaurants: {
      eyebrow: "Dragon Kitchen across borders",
      title: "Our restaurants.",
      body: "Find us across Portugal, Spain and Italy — from Lisbon to Milan, with new destinations coming soon.",
      restaurant: "restaurant",
      restaurants: "restaurants",
      otherLocations: "Other locations",
      locations: "Locations",
      current: "Current",
      countryWebsite: "Visit Spain website",
      website: "Visit website",
      expand: "Expand",
      collapse: "Collapse",
      reserve: "Book a table",
      comingSoon: "Coming soon",
    },
    info: {
      eyebrow: "Information",
      title: "Come and see us in Lisbon.",
      addressLabel: "Address",
      hoursLabel: "Opening hours",
      hours: "Every day",
      directions: "Open in maps",
      delivery: "Delivery",
      phoneLabel: "Reservations by phone",
      mapTitle: "Dragon Kitchen Portugal location on Google Maps",
    },
    reservation: {
      eyebrow: "Reservations",
      title: "Your table is waiting.",
      body: "A long lunch, dinner for two or a table full of friends.",
      cta: "Book a table",
    },
    footer: { location: "Parque das Nações · Lisbon", rights: "All rights reserved.", complaints: "Complaints book", privacy: "Privacy policy", terms: "Terms and conditions", designed: "Designed by" },
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
