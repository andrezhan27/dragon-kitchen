"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MENU_URL } from "@/lib/constants";
import { useLanguage } from "./LanguageProvider";
import { FoodCarousel } from "./FoodCarousel";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const { t } = useLanguage();

  return (
    <section className="menu-section section-anchor" id="menu" aria-labelledby="menu-title">
      <div className="shell menu-intro">
        <Reveal>
          <p className="eyebrow eyebrow--gold">{t.menu.eyebrow}</p>
          <h2 id="menu-title" className="editorial-title editorial-title--cream">
            {t.menu.title1} <em>{t.menu.title2}</em>
          </h2>
        </Reveal>
        <Reveal className="menu-intro__copy" delay={0.1}>
          <p>{t.menu.body}</p>
          <a
            href={MENU_URL}
            className="menu-intro__cta"
          >
            {t.menu.fullCta}<ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>

      <div className="food-gallery shell @container">
        <FoodCarousel />
      </div>

      <div className="shell full-menu-wrap">
        <Reveal>
          <article className="full-menu-card @container">
            <div className="full-menu-card__image">
              <Image src="/images/menu-cta.webp" alt="Pratos da Dragon Kitchen partilhados à mesa" fill sizes="(min-width: 768px) 50vw, calc(100vw - 40px)" />
            </div>
            <div className="full-menu-card__content">
              <div>
                <p className="eyebrow eyebrow--gold">{t.menu.fullEyebrow}</p>
                <h3>{t.menu.fullTitle}</h3>
              </div>
              <a href={MENU_URL} className="line-link line-link--light">
                {t.menu.fullCta}<ArrowUpRight size={18} strokeWidth={1.5} />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
