# Northlane Product

Consulting website for **Northlane Product** — product management consulting and automation services.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (Formspree)

The contact form emails you via [Formspree](https://formspree.io):

1. Create a free Formspree account
2. Create a new form that delivers to `taimoorzulfiqar97@gmail.com`
3. Copy the form ID from the form endpoint (`https://formspree.io/f/xxxxxx`)
4. Add it to `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ID=xxxxxx
```

5. Restart `npm run dev` and send a test message from the Contact section

Until this is set, the form shows a clear error and asks people to email you instead.

## Other contact links

- Calendar: [Book a call](https://calendar.app.google/oMdE7WfxB1TJmi4b8)
- LinkedIn: [taimoor-zulfiqar](https://www.linkedin.com/in/taimoor-zulfiqar)
- Email: taimoorzulfiqar97@gmail.com

## Deploy

Push to GitHub and deploy on [Vercel](https://vercel.com). Add `NEXT_PUBLIC_FORMSPREE_ID` as an environment variable in the Vercel project settings.
