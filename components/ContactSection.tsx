"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { BOLT_FOOD_URL, MAPS_URL, UBER_EATS_URL } from "@/lib/constants";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { ReservationCard } from "./ReservationCard";

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.7280969429808!2d-9.099976824023019!3d38.76993997175153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19312f78eb15fb%3A0x43f404510c6fd247!2sDragon%20Kitchen%20Portugal!5e0!3m2!1sen!2spt!4v1790257076937!5m2!1sen!2spt";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="informacoes" className="contact-section section-anchor" aria-labelledby="contact-title">
      <div className="shell contact-layout @container">
        <div className="contact-layout__grid @min-[52rem]:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="contact-details">
            <p className="eyebrow eyebrow--gold-dark">{t.info.eyebrow}</p>
            <h2 id="contact-title" className="editorial-title">{t.info.title}</h2>

            <dl className="info-list">
              <div>
                <dt>{t.info.addressLabel}</dt>
                <dd className="address-row">
                  <span>Av. Dom João II 46E<br />1990-083 Lisboa, Portugal</span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label={t.info.directions} title={t.info.directions}>
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </a>
                </dd>
              </div>
              <div>
                <dt>{t.info.hoursLabel}</dt>
                <dd>{t.info.hours}<br /><strong>12:00 — 23:00</strong></dd>
              </div>
              <div>
                <dt>{t.info.phoneLabel}</dt>
                <dd><a href="tel:+351962699999">+351 962 699 999</a></dd>
              </div>
              <div>
                <dt>{t.info.delivery}</dt>
                <dd className="delivery-links">
                  <a href={BOLT_FOOD_URL} target="_blank" rel="noopener noreferrer">
                    Bolt Food <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                  <a href={UBER_EATS_URL} target="_blank" rel="noopener noreferrer">
                    Uber Eats <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="map-frame" delay={0.1}>
            <iframe
              src={MAP_EMBED_URL}
              title={t.info.mapTitle}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Reveal>
        </div>
        <ReservationCard />
      </div>
    </section>
  );
}
