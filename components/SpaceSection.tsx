"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

function SpaceImage({ src, alt, className, sizes }: { src: string; alt: string; className: string; sizes: string }) {
  return (
    <figure className={`space-image ${className}`}>
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

      <div className="space-gallery shell @container">
        <div className="space-gallery__grid @min-[50rem]:grid-cols-12">
          <Reveal className="space-gallery__one">
            <SpaceImage src="/images/space-1.webp" alt="Exterior da Dragon Kitchen Portugal em Parque das Nações" className="space-image--wide" sizes="(min-width: 800px) 57vw, calc(100vw - 40px)" />
          </Reveal>
          <Reveal className="space-gallery__two" delay={0.06}>
            <SpaceImage src="/images/space-2.webp" alt="Entrada iluminada da Dragon Kitchen Portugal" className="space-image--tall" sizes="(min-width: 800px) 40vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__three" delay={0.1}>
            <SpaceImage src="/images/space-3.webp" alt="Interior elegante da Dragon Kitchen com mesas preparadas" className="space-image--portrait" sizes="(min-width: 800px) 40vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__four" delay={0.06}>
            <SpaceImage src="/images/space-4.webp" alt="Ambiente contemporâneo no interior do restaurante" className="space-image--portrait" sizes="(min-width: 800px) 30vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__five" delay={0.1}>
            <SpaceImage src="/images/space-5.webp" alt="Mesa redonda e iluminação decorativa na Dragon Kitchen" className="space-image--tall" sizes="(min-width: 800px) 30vw, calc(50vw - 27px)" />
          </Reveal>
          <Reveal className="space-gallery__six" delay={0.14}>
            <SpaceImage src="/images/space-6.webp" alt="Detalhes do ambiente da Dragon Kitchen Portugal" className="space-image--medium" sizes="(min-width: 800px) 30vw, calc(100vw - 40px)" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
