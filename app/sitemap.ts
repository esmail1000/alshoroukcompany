import type { MetadataRoute } from "next";
import { getArticles } from "@/data/articles";
import { getContent } from "@/data/content";
import { locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, localizedPath } from "@/lib/seo";

const staticPages = ["", "/about", "/products", "/gallery", "/contact", "/articles"];

function pageEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly") {
  return {
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency,
    priority
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  locales.forEach((locale: Locale) => {
    staticPages.forEach((path) => {
      pages.push(pageEntry(localizedPath(locale, path), path === "" ? 1 : 0.8));
    });

    getContent(locale).products.forEach((product) => {
      pages.push(pageEntry(localizedPath(locale, `/products/${product.slug}`), 0.9));
    });

    getArticles(locale).forEach((article) => {
      pages.push(pageEntry(localizedPath(locale, `/articles/${article.slug}`), 0.75, "monthly"));
    });
  });

  return pages;
}
