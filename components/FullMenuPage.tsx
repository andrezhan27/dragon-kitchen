"use client";

import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { MENU_PDF_URL } from "@/lib/constants";
import { useLanguage } from "./LanguageProvider";
import { FullMenuGallery } from "./FullMenuGallery";
import { Reveal } from "./Reveal";

export function FullMenuPage() {
  const { language } = useLanguage();
  const copy = language === "pt"
    ? {
        eyebrow: "Dragon Kitchen Lisboa",
        title: "Menu",
        body: "Descobre os pratos e especialidades da Dragon Kitchen.",
        back: "Voltar ao início",
        fullMenu: "Ver menu completo",
        galleryEyebrow: "Da cozinha para a mesa",
        galleryTitle: "Destaques do nosso menu",
      }
    : {
        eyebrow: "Dragon Kitchen Lisbon",
        title: "Menu",
        body: "Discover Dragon Kitchen’s dishes and specialities.",
        back: "Back to home",
        fullMenu: "View full menu",
        galleryEyebrow: "From our kitchen to your table",
        galleryTitle: "Menu highlights",
      };

  return (
    <main className="menu-page">
      <header className="menu-page-hero">
        <div className="shell menu-page-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="menu-page-hero__body">{copy.body}</p>
            <div className="menu-page-hero__actions">
              <a href="/#top" className="menu-page-button menu-page-button--outline"><ArrowLeft size={18} />{copy.back}</a>
              <a href={MENU_PDF_URL} target="_blank" rel="noopener noreferrer" className="menu-page-button menu-page-button--gold">{copy.fullMenu}<ArrowUpRight size={18} /></a>
            </div>
          </Reveal>
          <Reveal className="menu-page-hero__visual" delay={0.1}>
            <Image
              src="/images/menu-page-final-landscape.webp"
              alt={language === "pt" ? "Seleção de pratos da Dragon Kitchen" : "Selection of Dragon Kitchen dishes"}
              fill
              priority
              sizes="(min-width: 768px) 38vw, calc(100vw - 40px)"
            />
          </Reveal>
        </div>
      </header>

      <section className="full-menu-gallery-section" aria-labelledby="dish-gallery-title">
        <div className="shell full-menu-gallery-intro">
          <Reveal>
            <p className="eyebrow eyebrow--gold">{copy.galleryEyebrow}</p>
            <h2 id="dish-gallery-title" className="editorial-title editorial-title--cream">{copy.galleryTitle}</h2>
          </Reveal>
        </div>
        <div className="shell"><FullMenuGallery /></div>
      </section>
    </main>
  );
}
