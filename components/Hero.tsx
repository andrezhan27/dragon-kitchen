"use client";

import Image, { getImageProps } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RESERVATION_URL } from "@/lib/constants";
import { EmberField } from "./EmberField";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "9%"]);
  const imageAlt = "Exterior iluminado da Dragon Kitchen Portugal em Parque das Nações";
  const { props: { srcSet: mobileSrcSet } } = getImageProps({
    src: "/images/hero-mobile-v2.webp",
    alt: imageAlt,
    fill: true,
    sizes: "100vw",
  });
  const { props: desktopImageProps } = getImageProps({
    src: "/images/space-1-v2.webp",
    alt: imageAlt,
    fill: true,
    sizes: "100vw",
    fetchPriority: "high",
  });

  return (
    <section className="hero" id="top" ref={ref} aria-labelledby="hero-title">
      <motion.div className="hero__image" style={{ y: imageY }} initial={reduceMotion ? false : { scale: 1 }} animate={{ scale: reduceMotion ? 1 : 1.035 }} transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}>
        <picture>
          <source media="(max-width: 47.99rem)" srcSet={mobileSrcSet} sizes="100vw" />
          <img {...desktopImageProps} />
        </picture>
      </motion.div>
      <div className="hero__shade" />
      <div className="hero__title-scrim" aria-hidden="true" />
      <div className="hero__grain" />
      <EmberField className="ember-field--hero" />

      <div className="hero__content shell">
        <motion.div
          className="hero__identity"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2 }}
        >
          <h1 id="hero-title"><span>Dragon</span><span>Kitchen</span></h1>
        </motion.div>

        <motion.div
          className="hero__statement"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p><span>{t.hero.line1}</span><span>{t.hero.line2}</span></p>
          <a href={RESERVATION_URL} className="hero-cta"><span>{t.hero.reserve}</span></a>
        </motion.div>

        <motion.div
          className="hero__corner-logo"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <Image src="/images/Logo.png" alt="Dragon Kitchen Portugal" width={1080} height={1350} sizes="(min-width: 768px) 130px, 92px" />
        </motion.div>
      </div>
    </section>
  );
}
