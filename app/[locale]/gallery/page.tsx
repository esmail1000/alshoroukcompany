import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import GallerySection from "@/components/home/GallerySection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildSeoMetadata } from "@/lib/seo";


export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return { title: "Alshorouk Gallery" };

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return buildSeoMetadata({
    locale,
    path: "/gallery",
    title: locale === "ar" ? "معرض الصور | منتجات ومصانع الشروق لمواد البناء" : "Gallery | Alshorouk Products and Building Materials",
    description: dictionary.gallerySection.description
  });
}

export default function GalleryPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getContent(params.locale as Locale);

  return (
    <>
      <PageHero
        label={dictionary.gallerySection.sectionLabel}
        title={dictionary.gallerySection.title}
        description={dictionary.gallerySection.description}
      />
      <GallerySection dictionary={dictionary} />
    </>
  );
}
