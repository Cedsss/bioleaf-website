# BioLeaf website

Homepage and download page for the BioLeaf Android app (Next.js, App Router, Tailwind).
This project is separate from the app (`../BioLeaf`) and the model training (`../BioLeaf_Training`).

## Run it

```bash
npm install --legacy-peer-deps
npm run dev          # http://localhost:3000
npm run build && npm run start
```

## Pages

- `/` - homepage: hero, features, how it works, plants, download + all versions, safety notice
- `/downloads` - download button and the full version history

## Publishing a new app version

1. Build the APK (`eas build --platform android --profile preview` in `../BioLeaf`).
2. Add the APK to `public/downloads/` (for example `BioLeaf-v1.5.0.apk`).
3. Add an entry at the **top** of `src/data/releases.ts`. The first entry is the "Latest" button.
   Entries without a `file` show "No longer available".

Plant list shown on the site: `src/data/plants.ts`. Mark a plant `comingSoon: true` until the app recognizes it.

## Hosting the APK files

APKs are about 220 MB, so they are **git-ignored** (`public/downloads/*.apk`) and many hosts (e.g. Vercel,
100 MB file limit) cannot serve them. For a public site, upload each APK as a **GitHub Release** asset (or
cloud storage) and put the full `https://...` link in the `file` field in `src/data/releases.ts`.
Expo build links (`expo.dev/artifacts/...`) expire after about two weeks, so do not use them.
