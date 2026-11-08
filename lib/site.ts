/** Set NEXT_PUBLIC_SITE_URL before building for Hostinger (e.g. https://yourdomain.com). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://taimoorzulfiqar.com"
).replace(/\/$/, "");
