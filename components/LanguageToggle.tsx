"use client";

import { useLanguage, type Language } from "./LanguageProvider";

export function LanguageToggle({ inverse = false }: { inverse?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`language-toggle ${inverse ? "language-toggle--inverse" : ""}`}
      role="group"
      aria-label="Language selection"
    >
      {(["pt", "en"] as Language[]).map((item, index) => (
        <span className="language-toggle__item" key={item}>
          {index > 0 && <span className="language-toggle__divider" aria-hidden="true">/</span>}
          <button
            type="button"
            className={language === item ? "is-active" : ""}
            onClick={() => setLanguage(item)}
            aria-pressed={language === item}
            aria-label={item === "pt" ? "Português" : "English"}
          >
            {item.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
