# Samiksha's Nest Inn website

A static site for Samiksha's Nest Inn, a four-bedroom tea-estate cottage near Kotagiri in the Nilgiris. It is built with Astro 5.

Every booking button opens the Airbnb listing (`rooms/20239760`). The date picker passes `check_in`, `check_out` and `adults`, so Airbnb opens with the guest's dates and party size filled in.

## Run

```bash
npm install
npm run dev
npm run build
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages at https://admin-auxo.github.io/samikshas-nest-inn/.

The workflow sets `SITE_URL` and `BASE_PATH`. Without them, the build targets https://samikshasnestinn.in at the root path, so the same code works when the domain is moved over.

## Live Airbnb rating

The rating, review count, Superhost badge and six category scores come from `src/data/airbnb.json`.

`node tools/airbnb-stats.mjs` refreshes that file from the public listing page. The deploy workflow runs it before every build, and the workflow also runs daily at 06:00 IST, so the site follows Airbnb within a day.

Airbnb has no public API, so this reads the listing page. If the request fails, the page layout changes, or the numbers look wrong (missing, out of range, or a sudden drop in reviews), the script keeps the last saved values and the build carries on.

## SEO and machine-readable content

- **Sitemap and robots:** `@astrojs/sitemap` writes `sitemap-index.xml`. `robots.txt` is generated and points to it.
- **Structured data:**
  - Home page: `LodgingBusiness` (address, geo, rooms, occupancy, amenities, menu link) and `FAQPage`.
  - Dining: `Menu`, with INR prices.
  - Area guide: an `ItemList` of `TouristAttraction`.
  - Both subpages: `BreadcrumbList`.
- **Ratings markup:** none, on purpose. Google ignores review markup a business adds about itself, and ratings copied from Airbnb aren't allowed.
- **Share previews:** each page has its own Open Graph and Twitter image (1200 × 630), plus geo meta tags.
- **`/llms.txt`** follows llmstxt.org. `/llms-full.txt` and `/index.md`, `/dining.md` and `/explore.md` hold clean Markdown versions of each page, and each page links to its copy with `rel="alternate" type="text/markdown"`. They're generated from `src/data/`, so they stay in sync with the site.
- **Also included:** a web manifest with icons, a 404 page, and a skip link.
- **Preview builds:** the GitHub Pages preview sets `PUBLIC_NOINDEX=true`. That serves `noindex` and a disallow-all `robots.txt`, so the preview never competes with the real domain. Builds without the flag are indexable.

After the move to samikshasnestinn.in:
- add the domain to Google Search Console and submit `sitemap-index.xml`;
- link the site from the Google Business Profile and the Airbnb listing.

## Pages

| Path | Content |
|---|---|
| `/` | Hero and booking, the cottage and photos, bedrooms, reviews, dining, location, FAQ, booking |
| `/dining/` | Full menu, group dinners and how ordering works |
| `/explore/` | Places near Kotagiri, Coonoor and Ooty with drive times, day plans, how to get here, weather and the e-pass |
| `/credits/` | Licences for the Wikimedia Commons photos |

## Content

All text lives in `src/data/`:

- `site.ts`: contact details, rooms, reviews and FAQ
- `menu.ts`: the menu
- `explore.ts`: places, routes and weather

Drive times were measured on Google Maps from the property pin (11.4149477, 76.8209145) on 29 Oct 2026. The review quotes are taken verbatim from the Airbnb listing.

## Images

- `raw/`: the original property photos from the current site, with all 87 Airbnb listing photos in `raw/airbnb/`.
- `raw_spots/`: Wikimedia Commons photos of nearby places.

`node tools/enhance.mjs` builds `src/assets/` from these. It crops, upscales small images up to 2× with Lanczos and sharpening, and applies one warm colour grade so all the photos match. Astro then serves responsive WebP.

This is resampling, not AI upscaling. Photos that were 800 px originals will still look soft at full width. New photos taken at 3000 px or more would make the biggest visual difference.

## Logo

`brand/samikshas-nest-inn-logo.png` is the owners' full-colour logo, captured from their current site as a transparent PNG.

`node tools/logo.mjs` builds the files the site uses from it:
- one-colour white and navy versions in `src/assets/brand/`, which the header and footer use;
- the house-mark favicons in `public/`.

## To confirm with the owners before going live

- The menu and prices. They are copied from the menu-card photos on the Airbnb listing.
- Check-in and check-out times, and the pet policy.
- Permission to use the property photos, and the Google Business Profile link.
