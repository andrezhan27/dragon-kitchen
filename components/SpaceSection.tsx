"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

function SpaceImage({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <figure className="space-image">
      <Image src={src} alt={alt} fill sizes={sizes} className="space-image__media" />
    </figure>
  );
}

export function SpaceSection() {
  const { t } = useLanguage();

  return (
    <section id="espaco" className="space-section section-anchor" aria-labelledby="space-title">
      <Image src="/images/bg-scales.webp" alt="" fill sizes="100vw" className="space-section__pattern" />
      <div className="shell space-intro">
        <Reveal>
          <p className="eyebrow eyebrow--green">{t.space.eyebrow}</p>
          <h2 id="space-title" className="editorial-title">{t.space.title}</h2>
        </Reveal>
      </div>

      <div className="space-gallery shell">
        <div className="space-gallery__grid">
          <Reveal className="space-gallery__one">
            <SpaceImage src="/images/space-2-v3.webp" alt="Fachada iluminada da Dragon Kitchen Portugal" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__two" delay={0.06}>
            <SpaceImage src="/images/space-3-v3.webp" alt="Dragon Kitchen Lisboa à noite" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__three" delay={0.1}>
            <SpaceImage src="/images/space-4-v2.webp" alt="Detalhe decorativo do interior da Dragon Kitchen" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__four" delay={0.06}>
            <SpaceImage src="/images/space-5-v2.webp" alt="Sala da Dragon Kitchen preparada para receber" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__five" delay={0.1}>
            <SpaceImage src="/images/space-6-v2.webp" alt="Mesa redonda no interior da Dragon Kitchen" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__six" delay={0.14}>
            <SpaceImage src="/images/space-7-v2.webp" alt="Detalhe decorativo da Dragon Kitchen" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__seven" delay={0.08}>
            <SpaceImage src="/images/space-8-v3.webp" alt="Experiência à mesa na Dragon Kitchen" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__eight" delay={0.12}>
            <SpaceImage src="/images/space-9-v3.webp" alt="Bebidas e hot pot na Dragon Kitchen" sizes="(min-width: 1024px) 21vw, (min-width: 768px) 29vw, calc(50vw - 27px)" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
