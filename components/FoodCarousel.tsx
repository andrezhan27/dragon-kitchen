"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MenuCard } from "./MenuCard";

const FOOD_IMAGES = [
  { src: "/images/food-1.webp", alt: "Seleção de pratos chineses servidos à mesa" },
  { src: "/images/food-2.webp", alt: "Mesa com especialidades chinesas e dim sum" },
  { src: "/images/food-3.webp", alt: "Pratos de carne e marisco preparados na Dragon Kitchen" },
  { src: "/images/food-4.webp", alt: "Especialidades chinesas contemporâneas" },
  { src: "/images/food-5.webp", alt: "Pratos Dragon Kitchen preparados para partilhar" },
];

const LOOP_IMAGES = Array.from({ length: 3 }, (_, setIndex) =>
  FOOD_IMAGES.map((image) => ({
    ...image,
    isClone: setIndex !== 1,
    key: `${setIndex}-${image.src}`,
  })),
).flat();

const MIDDLE_SET_START = FOOD_IMAGES.length;

export function FoodCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);

  function getCards() {
    const track = trackRef.current;
    return track
      ? Array.from(track.querySelectorAll<HTMLElement>(".food-carousel__slide"))
      : [];
  }

  function getCenteredIndex() {
    const track = trackRef.current;
    const cards = getCards();
    if (!track || cards.length === 0) return MIDDLE_SET_START;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    return cards.reduce((closestIndex, card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const closest = cards[closestIndex];
      const closestCenter = closest.offsetLeft + closest.offsetWidth / 2;
      return Math.abs(cardCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
        ? index
        : closestIndex;
    }, 0);
  }

  function centerCard(physicalIndex: number, behavior: ScrollBehavior = "smooth") {
    const track = trackRef.current;
    const cards = getCards();
    const card = cards[physicalIndex];
    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
      behavior,
    });
  }

  function move(direction: -1 | 1) {
    centerCard(getCenteredIndex() + direction);
  }

  function updateActive() {
    const physicalIndex = getCenteredIndex();
    setActive(physicalIndex % FOOD_IMAGES.length);

    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    settleTimerRef.current = setTimeout(() => {
      const settledIndex = getCenteredIndex();
      if (settledIndex < MIDDLE_SET_START) {
        centerCard(settledIndex + FOOD_IMAGES.length, "auto");
      } else if (settledIndex >= MIDDLE_SET_START + FOOD_IMAGES.length) {
        centerCard(settledIndex - FOOD_IMAGES.length, "auto");
      }
    }, 140);
  }

  function goTo(imageIndex: number) {
    centerCard(MIDDLE_SET_START + imageIndex);
  }

  useLayoutEffect(() => {
    centerCard(MIDDLE_SET_START, "auto");
  }, []);

  useEffect(() => () => {
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
  }, []);

  return (
    <div className="food-carousel">
      <div className="food-carousel__viewport">
        <div className="food-carousel__track" ref={trackRef} onScroll={updateActive}>
          {LOOP_IMAGES.map((image) => (
            <MenuCard
              key={image.key}
              src={image.src}
              alt={image.alt}
              ariaHidden={image.isClone}
              className="food-carousel__slide"
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 44vw, 82vw"
            />
          ))}
        </div>
        <button className="food-carousel__arrow food-carousel__arrow--previous" type="button" onClick={() => move(-1)} aria-label="Imagem anterior">
          <ChevronLeft size={22} />
        </button>
        <button className="food-carousel__arrow food-carousel__arrow--next" type="button" onClick={() => move(1)} aria-label="Imagem seguinte">
          <ChevronRight size={22} />
        </button>
      </div>
      <div className="food-carousel__footer">
        <div className="food-carousel__dots" aria-label="Selecionar fotografia">
          {FOOD_IMAGES.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={index === active ? "is-active" : ""}
              onClick={() => goTo(index)}
              aria-label={`Ir para a imagem ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
