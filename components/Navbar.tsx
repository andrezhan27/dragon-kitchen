"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { RESERVATION_URL } from "@/lib/constants";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = [
    ["/#top", t.nav.home],
    ["/menu", t.nav.menu],
    ["/#espaco", t.nav.space],
    ["/#reviews", t.nav.reviews],
    ["/#informacoes", t.nav.info],
    ["/#restaurantes", t.nav.restaurants],
  ];

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className={`site-nav ${scrolled || open || pathname !== "/" ? "site-nav--solid" : ""}`}
      >
        <a href="/#top" className="site-nav__logo" aria-label="Dragon Kitchen Portugal — início">
          <Image src="/images/logo-pt-white.webp" alt="Dragon Kitchen Portugal" width={1080} height={1080} sizes="96px" loading="eager" />
        </a>

        <nav className="site-nav__links" aria-label="Navegação principal">
          {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <div className="site-nav__actions">
          <LanguageToggle />
          <a href={RESERVATION_URL} className="nav-reserve">{t.nav.reserve}</a>
        </div>

        <button
          className="site-nav__menu"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.menuClose : t.menuOpen}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>
      </motion.header>

      <motion.div
        id="mobile-menu"
        className="mobile-menu"
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{ open: { opacity: 1, visibility: "visible" }, closed: { opacity: 0, transitionEnd: { visibility: "hidden" } } }}
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label={t.menuOpen}
      >
        <nav aria-label="Navegação móvel">
          {links.map(([href, label], index) => (
            <motion.a
              href={href}
              key={href}
              onClick={close}
              initial={false}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: reduceMotion ? 0 : index * 0.05 }}
            >{label}<span>0{index + 1}</span></motion.a>
          ))}
          <a href={RESERVATION_URL} onClick={close}>{t.nav.reserve}<span>07</span></a>
        </nav>
        <div className="mobile-menu__foot">
          <LanguageToggle />
          <p>Av. Dom João II 46E<br />1990-083 Lisboa</p>
        </div>
      </motion.div>
    </>
  );
}
