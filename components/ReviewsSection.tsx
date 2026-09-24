"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const googleRating = 4.8;
const googleReviewCount = 0; // Placeholder until the verified Google review count is provided.

type Review = {
  name: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Diogo Dinis",
    rating: 5,
    text: "Very good food 👌 Plenty of options and all very tasty! Employees are very nice too!",
  },
  {
    name: "Marlene Mateus",
    rating: 5,
    text: "Big portions of food, tasty, served hot ! The dessert was soo nice almost didn’t want to eat it 🤣 …",
  },
  {
    name: "Mirko Delfino",
    rating: 5,
    text: "Excellent Chinese restaurant in Parque das Nacoes with truly excellent value!",
  },
  {
    name: "Claire Tu",
    rating: 5,
    text: "This is by far the best Chinese restaurant I’ve had in Lisbon. While the flavors have been slightly adapted for the local palate, they are still very authentic for Asians.",
  },
  {
    name: "Mike Yang",
    rating: 5,
    text: "Food was excellent and it was one of best meal we had in Lisbon, Portugal. The service was very friendly and prompt.",
  },
  {
    name: "Filipa Oliveira",
    rating: 5,
    text: "The food was very good and the atmosphere was very relaxed! I highly recommend it!",
  },
];

function GoogleMark() {
  return <span className="google-mark" aria-hidden="true">G</span>;
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const isLongReview = review.text.length > 105;

  return (
    <article className={`review-card${isLongReview ? " review-card--long" : ""}`}>
      <RatingStars rating={review.rating} />
      <p>{review.text}</p>
      <footer className="review-card__reviewer">
        <span className="review-card__avatar" aria-hidden="true">{review.name.charAt(0)}</span>
        <span>{review.name}</span>
      </footer>
    </article>
  );
}

function ReviewGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className={`reviews-marquee__group${duplicate ? " reviews-marquee__group--duplicate" : ""}`} aria-hidden={duplicate || undefined}>
      {reviews.map((review, index) => (
        <ReviewCard key={`${duplicate ? "duplicate" : "original"}-${index}`} review={review} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="reviews-section section-anchor" aria-labelledby="reviews-title">
      <div className="shell reviews-intro">
        <Reveal>
          <p className="eyebrow eyebrow--gold">{t.reviews.eyebrow}</p>
          <h2 id="reviews-title" className="editorial-title editorial-title--cream">{t.reviews.title}</h2>
        </Reveal>
      </div>

      <motion.div
        className="reviews-visual"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="reviews-photo">
          <Image
            src="/images/review.webp"
            alt={t.reviews.imageAlt}
            fill
            sizes="(min-width: 1440px) 1248px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            className="reviews-photo__image"
          />
          <div className="reviews-photo__shade" aria-hidden="true" />

          <div className="google-rating" data-review-count={googleReviewCount || undefined}>
            <GoogleMark />
            <div className="google-rating__copy">
              <span>{t.reviews.googleLabel}</span>
              <div className="google-rating__score">
                <strong>{googleRating.toFixed(1)}</strong>
                <RatingStars rating={5} />
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-marquee" aria-label={t.reviews.carouselLabel}>
          <motion.div className="reviews-marquee__track">
            <ReviewGroup />
            <ReviewGroup duplicate />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
