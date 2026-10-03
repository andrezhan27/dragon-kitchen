"use client";

import Image from "next/image";
import { RESERVATION_URL } from "@/lib/constants";
import { EmberField } from "./EmberField";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function ReservationCard() {
  const { t } = useLanguage();

  return (
    <Reveal className="reservation-wrap">
      <article id="reservar" className="reservation-section section-anchor" aria-labelledby="reservation-title">
        <div className="reservation-section__visual">
          <Image src="/images/reserve-cta.webp" alt="Pratos da Dragon Kitchen preparados para uma refeição especial" fill sizes="(min-width: 768px) 46vw, calc(100vw - 40px)" className="reservation-section__image" />
        </div>
        <div className="reservation-section__content">
          <EmberField compact className="ember-field--reservation" />
          <p className="eyebrow eyebrow--gold">{t.reservation.eyebrow}</p>
          <h2 id="reservation-title">{t.reservation.title}</h2>
          <p>{t.reservation.body}</p>
          <a href={RESERVATION_URL} className="reservation-button">{t.reservation.cta}</a>
        </div>
      </article>
    </Reveal>
  );
}
