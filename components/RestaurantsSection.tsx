"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";

type Restaurant = {
  name: string;
  address?: string;
  region?: string;
  phone?: string;
  phoneUrl?: string;
  comingSoon?: boolean;
};

const SPAIN_URL = "https://dragonkitchen.es/";

const portugalRestaurants: Restaurant[] = [
  {
    name: "Lisboa — Parque das Nações",
    address: "Av. Dom João II 46E, 1990-083 Lisboa",
    phone: "+351 962 699 999",
    phoneUrl: "tel:+351962699999",
  },
];

const madridRestaurants: Restaurant[] = [
      { name: "Acacias", address: "P.º de las Acacias, 29, Arganzuela, 28005" },
      { name: "Alcalá de Henares", address: "C. Rda. Fiscal, 38, A, 28803", phone: "912 19 00 06" },
      { name: "Chamartín", address: "C. de Costa Rica, 15, 28016" },
      { name: "Collado Villalba", address: "C. Batalla de Bailén, 17, 28400", phone: "919 40 89 05" },
      { name: "El Retiro", address: "C. del Dr. Esquerdo, 64, 28007", phone: "915 74 56 97" },
      { name: "Getafe", address: "C. de Ramón Rubial, 11, 28904", phone: "917 65 02 62" },
      { name: "La Gavia", address: "C. Embalse de San Juan, 1, Vallecas", phone: "914 68 01 07" },
      { name: "Leganés", address: "Av. Vicente Ferrer, 3, 28918", phone: "913 78 96 51" },
      { name: "Valdemoro", address: "Av. del Mar Mediterráneo, 140, 28341", phone: "918 01 83 54" },
      { name: "Villaverde", address: "C. de la Pícara Molinera, 58", phone: "914 05 79 76" },
];

const otherSpainRestaurants: Restaurant[] = [
      { name: "Toledo", address: "C. Nuncio Viejo, 3, 45002", phone: "925 36 42 33" },
      { name: "Tenerife", address: "Av. de San Sebastián, 60, 38005 S.C. de Tenerife" },
      { name: "Fuerteventura", region: "Islas Canarias", comingSoon: true },
      { name: "Torrent", address: "Av. Rey Juan Carlos I, 1, bajo, 46900" },
      { name: "Sevilla", region: "Andalucía", comingSoon: true },
];

const italyRestaurants: Restaurant[] = [
      { name: "Milán", address: "Via Carlo Foldi, 8, 20135 Milano" },
      { name: "Roma", region: "Italia", comingSoon: true },
      { name: "Bolonia", region: "Italia", comingSoon: true },
];

function phoneHref(phone: string) {
  return `tel:+34${phone.replaceAll(" ", "")}`;
}

export function RestaurantsSection() {
  const { t } = useLanguage();
  const [openCountry, setOpenCountry] = useState<string | null>(null);
  const countries = [
    {
      id: "portugal",
      name: "Portugal",
      status: t.restaurants.current,
      sections: [{ id: "portugal-current", name: "Lisboa", restaurants: portugalRestaurants }],
    },
    {
      id: "spain",
      name: "España",
      website: SPAIN_URL,
      sections: [
        { id: "madrid", name: "Madrid", restaurants: madridRestaurants },
        { id: "spain-other", name: t.restaurants.otherLocations, restaurants: otherSpainRestaurants },
      ],
    },
    {
      id: "italy",
      name: "Italia",
      website: "https://dragonkitchen.it/",
      sections: [{ id: "italy-all", name: t.restaurants.locations, restaurants: italyRestaurants }],
    },
  ];

  return (
    <section id="restaurantes" className="restaurants-section section-anchor" aria-labelledby="restaurants-title">
      <div className="shell">
        <Reveal className="restaurants-intro">
          <p className="eyebrow eyebrow--gold">{t.restaurants.eyebrow}</p>
          <div className="restaurants-intro__row">
            <h2 id="restaurants-title" className="editorial-title editorial-title--cream">{t.restaurants.title}</h2>
            <p>{t.restaurants.body}</p>
          </div>
        </Reveal>

        <div className="restaurant-countries">
          {countries.map((country, countryIndex) => {
            const total = country.sections.reduce((sum, section) => sum + section.restaurants.length, 0);
            const isOpen = openCountry === country.id;
            const toggleCountry = () => setOpenCountry(isOpen ? null : country.id);

            return (
              <Reveal delay={countryIndex * 0.05} key={country.id}>
                <article className={`country-card ${isOpen ? "is-open" : ""}`}>
                  <div className="country-card__header">
                    <button
                      className="country-card__toggle"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${country.id}-restaurants`}
                      onClick={toggleCountry}
                    >
                    <div className="country-card__title">
                      <h3>{country.name}</h3>
                      <p>{total} {total === 1 ? t.restaurants.restaurant : t.restaurants.restaurants}</p>
                    </div>
                    </button>
                    {country.status && <span className="country-card__current">{country.status}</span>}
                    {country.website && (
                      <a
                        className="country-card__website"
                        href={country.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.restaurants.website}
                        <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    )}
                    <button
                      className="country-card__chevron-button"
                      type="button"
                      aria-label={`${isOpen ? t.restaurants.collapse : t.restaurants.expand} ${country.name}`}
                      aria-expanded={isOpen}
                      aria-controls={`${country.id}-restaurants`}
                      onClick={toggleCountry}
                    >
                      <ChevronDown className="country-card__chevron" size={26} strokeWidth={1.25} aria-hidden="true" />
                    </button>
                  </div>

                  {isOpen && <div className="country-card__content" id={`${country.id}-restaurants`}>
                    {country.sections.map((section) => (
                      <section className="country-subsection" aria-labelledby={`${section.id}-title`} key={section.id}>
                        <div className="country-subsection__heading">
                          <h4 id={`${section.id}-title`}>{section.name}</h4>
                          <span>{section.restaurants.length} {section.restaurants.length === 1 ? t.restaurants.restaurant : t.restaurants.restaurants}</span>
                        </div>

                        <div className="restaurant-grid">
                          {section.restaurants.map((restaurant) => (
                            <article className="restaurant-card" key={`${section.id}-${restaurant.name}`}>
                              <div>
                                <h5>{restaurant.name}</h5>
                                {restaurant.address && <address>{restaurant.address}</address>}
                                {restaurant.region && <p>{restaurant.region}</p>}
                                {restaurant.phone && <a className="restaurant-card__phone" href={restaurant.phoneUrl ?? phoneHref(restaurant.phone)}>{restaurant.phone}</a>}
                              </div>

                              {restaurant.comingSoon && <span className="restaurant-card__status">{t.restaurants.comingSoon}</span>}
                            </article>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
