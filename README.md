# Samiksha's Nest Inn website

A static site for Samiksha's Nest Inn, a four-bedroom tea-estate cottage near Kotagiri in the Nilgiris. It is built with Astro 5.

Every booking button opens the Airbnb listing (`rooms/20239760`). The date picker passes `check_in`, `check_out` and `adults`, so Airbnb opens with the guest's dates and party size filled in.

## Run

```bash
npm install
npm run dev
npm run build
```

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

- `raw/`: the original property photos, from the current site and the Airbnb listing.
- `raw_spots/`: Wikimedia Commons photos of nearby places.

`node tools/enhance.mjs` builds `src/assets/` from these. It crops, upscales small images up to 2× with Lanczos and sharpening, and applies one warm colour grade so all the photos match. Astro then serves responsive WebP.

This is resampling, not AI upscaling. Photos that were 800 px originals will still look soft at full width. New photos taken at 3000 px or more would make the biggest visual difference.

## To confirm with the owners before going live

- The menu dishes. The guest favourites come from reviews; the rest is a typical home-style menu.
- Check-in and check-out times, and the pet policy.
- Permission to use the property photos, and the Google Business Profile link.
