"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, RESERVATION_URL, TIKTOK_URL } from "@/lib/constants";
import type { RestaurantLegalLinks } from "@/lib/restaurant";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 4v10.2a4.3 4.3 0 1 1-3.7-4.3" /><path d="M15 4c.7 2.7 2.2 4 4.5 4.2" />
    </svg>
  );
}

export function Footer({ legalLinks }: { legalLinks: RestaurantLegalLinks }) {
  const { t } = useLanguage();
  const year = 2026;

  return (
    <footer className="footer">
      <div className="shell footer__main">
        <div className="footer__brand">
          <a href="/#top" aria-label="Dragon Kitchen Portugal — início">
            <Image src="/images/logo-pt-white.webp" alt="Dragon Kitchen Portugal" width={1080} height={1080} sizes="192px" />
          </a>
          <p>{t.footer.location}</p>
        </div>
        <address>
          Av. Dom João II 46E<br />1990-083 Lisboa, Portugal
          <a href="tel:+351962699999">+351 962 699 999</a>
        </address>
        <nav aria-label="Navegação do rodapé">
          <a href="/#menu">{t.nav.menu}</a>
          <a href="/#espaco">{t.nav.space}</a>
          <a href="/#reviews">{t.nav.reviews}</a>
          <a href="/#informacoes">{t.nav.info}</a>
          <a href="/#restaurantes">{t.nav.restaurants}</a>
          <a href={RESERVATION_URL}>{t.nav.reserve}</a>
        </nav>
        <div className="footer__social">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} strokeWidth={1.5} /><span>Instagram</span></a>
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TiktokIcon /><span>TikTok</span></a>
        </div>
      </div>
      <div className="shell footer__legal">
        <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">{t.footer.complaints}</a>
        {legalLinks.privacyPolicyUrl && <a href={legalLinks.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">{t.footer.privacy}</a>}
        {legalLinks.termsAndConditionsUrl && <a href={legalLinks.termsAndConditionsUrl} target="_blank" rel="noopener noreferrer">{t.footer.terms}</a>}
      </div>
      <div className="shell footer__bottom">
        <p>© {year} Dragon Kitchen Portugal. {t.footer.designed} <a href="https://www.intelis.pt/" target="_blank" rel="noopener noreferrer">Intelis</a>. {t.footer.rights}</p>
        <LanguageToggle inverse />
      </div>
    </footer>
  );
}
