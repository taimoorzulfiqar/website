/** Set NEXT_PUBLIC_SITE_URL before building for Hostinger (e.g. https://yourdomain.com). */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://taimoorzulfiqar.com"
).replace(/\/$/, "");

/** Set when the site is served from a subpath, such as GitHub Pages. */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  "",
);

export function asset(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
