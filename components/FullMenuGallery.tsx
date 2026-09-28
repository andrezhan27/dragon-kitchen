"use client";

import Image from "next/image";
import { MENU_GALLERY, type MenuGalleryItem } from "@/lib/menu-gallery";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const categoryLabels = {
  starters: { pt: "Entradas", en: "Starters" },
  soups: { pt: "Sopas", en: "Soups" },
  meat: { pt: "Pratos de carne", en: "Meat dishes" },
  seafood: { pt: "Marisco e peixe", en: "Seafood and fish" },
  vegetables: { pt: "Vegetarianos", en: "Vegetarian dishes" },
  rice: { pt: "Massas e arroz", en: "Noodles and rice" },
  desserts: { pt: "Sobremesas", en: "Desserts" },
} as const;

const categories = Object.keys(categoryLabels) as MenuGalleryItem["category"][];

export function FullMenuGallery() {
  const { language } = useLanguage();

  return (
    <div className="menu-gallery-groups">
      {categories.map((category) => {
        const items = MENU_GALLERY.filter((item) => item.category === category);
        return (
          <section className="menu-gallery-group" key={category} aria-labelledby={`category-${category}`}>
            <Reveal>
              <p className="eyebrow eyebrow--gold" id={`category-${category}`}>
                {categoryLabels[category][language]}
              </p>
            </Reveal>
            <div className="menu-gallery-grid">
              {items.map((item, index) => {
                const caption = item[language];
                return (
                  <Reveal key={item.src} delay={(index % 3) * 0.04}>
                    <figure className="menu-dish-card">
                      <div className="menu-dish-card__image">
                        <Image
                          src={item.src}
                          alt={caption}
                          fill
                          sizes="(min-width: 1024px) 29vw, (min-width: 640px) 46vw, calc(100vw - 40px)"
                        />
                      </div>
                      <figcaption>{caption}</figcaption>
                    </figure>
                  </Reveal>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}

