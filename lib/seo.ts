import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const defaultKeywords = [
  "الشروق لمواد البناء",
  "طوب أحمر",
  "طوب طفلي",
  "طوب أسمنتي",
  "بلوك خرساني",
  "إنترلوك",
  "بردورات",
  "مواد بناء في مصر",
  "توريد طوب"
];

export function getSiteUrl() {
  return siteConfig.siteUrl.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function localizedPath(locale: Locale, path = "") {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

export function localizedUrl(locale: Locale, path = "") {
  return absoluteUrl(localizedPath(locale, path));
}

export function buildSeoMetadata({
  locale,
  path = "",
  title,
  description,
  image = siteConfig.ogImage,
  type = "website",
  keywords = defaultKeywords
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const canonicalPath = localizedPath(locale, path);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: absoluteUrl(localizedPath("ar", path)),
        en: absoluteUrl(localizedPath("en", path))
      }
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: locale === "ar" ? siteConfig.name : siteConfig.englishName,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}
