# Dragon Kitchen Portugal

Premium single-page restaurant website for Dragon Kitchen Portugal in Parque das Nações, Lisbon.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion 12
- Lucide React

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run start
```

## Content updates

- Restaurant and food photography lives in `public/images`.
- The future menu PDF should be added as `public/menu.pdf`.
- Reservation and external service URLs are centralized in `lib/constants.ts`.
- Portuguese and English copy is centralized in `components/LanguageProvider.tsx`.
- Privacy policy and terms links are read from the `dragonkitchen` row in the Supabase `restaurants` table. Copy `.env.example` to `.env.local` and provide the project URL and publishable key.

The project can be deployed directly to Vercel with its default Next.js settings.
