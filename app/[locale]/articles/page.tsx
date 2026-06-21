import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ArticlesPreview from "@/components/home/ArticlesPreview";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";

export default function ArticlesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getContent(params.locale as Locale);

  return (
    <>
      <PageHero
        label={dictionary.articlesSection.sectionLabel}
        title={dictionary.articlesSection.title}
        description={dictionary.articlesSection.description}
      />
      <ArticlesPreview dictionary={dictionary} />
    </>
  );
}
