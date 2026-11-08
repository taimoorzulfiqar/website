# Taimoor Zulfiqar

Personal consulting website — product management consulting and automation services.

## Run locally

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` with your Formspree ID. For GitHub Pages (`taimoorzulfiqar.github.io/website`), also set:

```bash
NEXT_PUBLIC_SITE_URL=https://taimoorzulfiqar.github.io/website
NEXT_PUBLIC_BASE_PATH=/website
```

Then:

```bash
npm run dev
```

Open [http://localhost:3000/website/](http://localhost:3000/website/) when using the GitHub Pages base path.

## Contact form (Formspree)

1. Create a free Formspree account
2. Create a new form that delivers to `taimoorzulfiqar97@gmail.com`
3. Copy the form ID from the form endpoint (`https://formspree.io/f/xxxxxx`)
4. Add it to `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ID=xxxxxx
NEXT_PUBLIC_SITE_URL=https://taimoorzulfiqar.com
```

5. Restart `npm run dev` and send a test message from the Contact section

Until Formspree is set, the form shows a clear error and asks people to email you instead.

## Deploy to Hostinger (file upload)

This project builds to static files in an `out/` folder.

1. Set `.env.local` with your Formspree ID
2. Build:

```bash
npm run build
```

3. Open the `out/` folder on your computer
4. In Hostinger hPanel → **File Manager** → open `public_html`
5. Delete the default placeholder files in `public_html` (keep the folder)
6. Upload **everything inside** `out/` into `public_html` (including `index.html`, `_next/`, `sitemap.xml`, `robots.txt`)
7. Visit [taimoorzulfiqar.com](https://taimoorzulfiqar.com) to confirm it loads
8. In [Google Search Console](https://search.google.com/search-console), add your domain and submit `https://taimoorzulfiqar.com/sitemap.xml`

When you change the site later: run `npm run build` again and re-upload the new `out/` files.

## Other contact links

- Calendar: [Book a call](https://calendar.app.google/oMdE7WfxB1TJmi4b8)
- LinkedIn: [taimoor-zulfiqar](https://www.linkedin.com/in/taimoor-zulfiqar)
- Email: taimoorzulfiqar97@gmail.com
