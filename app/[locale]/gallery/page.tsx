import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import GallerySection from "@/components/home/GallerySection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";

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
