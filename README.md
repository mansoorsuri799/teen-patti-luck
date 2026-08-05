# Teen Patti Lucky — teenpattiluckygame.com.pk

Next.js ranking site for **Teen Patti Lucky** (3 Patti Lucky) APK guides in Pakistan.

## Stack

- Next.js App Router + TypeScript
- Poppins via `next/font`
- Gold / magenta theme derived from the app icon
- Canonical domain: `https://teenpattiluckygame.com.pk`

## Core routes

- `/` — Home APK landing
- `/download-teen-patti-lucky`
- `/deposit-money-in-teen-patti-lucky`
- `/withdraw-money-from-teen-patti-lucky`
- `/teen-patti-lucky-for-pc`
- `/blog` (+ 4 supporting posts)
- `/about-us`, `/contact-us`, `/privacy`, `/disclaimer`

## SEO endpoints

- `/sitemap-index.xml` (submit this in Search Console)
- `/index.xml`
- `/image-sitemap.xml`
- `/robots.txt`

## Develop

```bash
npm install
npm run dev
```

Optional download URL override:

```bash
NEXT_PUBLIC_DOWNLOAD_URL=https://your-tracking-link.example
```

## Assets

Place final creatives in `public/`:

- `teen-patti-lucky.webp` (logo / LCP)
- `favicon.ico`
- `feature/og-image.webp`, `og-image-square.webp`, `twitter-card.webp`
