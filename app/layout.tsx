import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const charter = localFont({
  src: [
    {
      path: "../public/charter/webfonts/charter_regular-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/charter/webfonts/charter_italic-webfont.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/charter/webfonts/charter_bold-webfont.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/charter/webfonts/charter_bold_italic-webfont.woff",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-charter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dragonkitchen.pt"),
  title: "Dragon Kitchen Portugal | Restaurante Chinês em Lisboa",
  description:
    "Descobre Dragon Kitchen em Parque das Nações, Lisboa. Cozinha chinesa contemporânea, dim sum, sabores de Sichuan e muito mais.",
  keywords: [
    "restaurante chinês Lisboa",
    "Dragon Kitchen Portugal",
    "dim sum Lisboa",
    "Parque das Nações restaurante",
  ],
  openGraph: {
    title: "Dragon Kitchen Portugal",
    description:
      "Cozinha chinesa contemporânea em Parque das Nações, Lisboa.",
    url: "/",
    type: "website",
    locale: "pt_PT",
    siteName: "Dragon Kitchen Portugal",
    images: [
      {
        url: "/images/space-1-v2.webp",
        width: 1536,
        height: 1024,
        alt: "Dragon Kitchen Portugal em Parque das Nações, Lisboa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dragon Kitchen Portugal",
    description: "Cozinha chinesa contemporânea em Parque das Nações, Lisboa.",
    images: ["/images/space-1-v2.webp"],
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.png?v=20261003-1", type: "image/png", sizes: "128x128" }],
    shortcut: "/favicon.png?v=20261003-1",
    apple: "/favicon.png?v=20261003-1",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={charter.variable}>
      <body>{children}</body>
    </html>
  );
}
