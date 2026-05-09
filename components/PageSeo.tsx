import { Head } from "fresh/runtime";
import { company } from "@/data/site.ts";

interface PageSeoProps {
  title: string;
  description: string;
  pagePath?: string;
  imagePath?: string;
}

function getSiteUrl() {
  const rawSiteUrl = Deno.env.get("SITE_URL") ??
    Deno.env.get("PUBLIC_SITE_URL");
  if (!rawSiteUrl) return null;

  try {
    return new URL(rawSiteUrl).toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

function toAbsoluteUrl(siteUrl: string | null, path: string) {
  if (!siteUrl) return null;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export default function PageSeo(
  { title, description, pagePath, imagePath = "/company-logo.jpg" }:
    PageSeoProps,
) {
  const fullTitle = `${title} | ${company.name}`;
  const siteUrl = getSiteUrl();
  const canonicalUrl = pagePath ? toAbsoluteUrl(siteUrl, pagePath) : null;
  const imageUrl = toAbsoluteUrl(siteUrl, imagePath) ?? imagePath;

  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:image" property="og:image" content={imageUrl} />
      {canonicalUrl
        ? <meta key="og:url" property="og:url" content={canonicalUrl} />
        : null}
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      {canonicalUrl
        ? <link key="canonical" rel="canonical" href={canonicalUrl} />
        : null}
    </Head>
  );
}
