import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ArticlesPreview from "@/components/home/ArticlesPreview";
import { getContent } from "@/data/content";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildSeoMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) {
    return { title: "Articles | Alshorouk Company" };
  }

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return buildSeoMetadata({
    locale,
    path: "/articles",
    title:
      locale === "ar"
        ? "مقالات مواد البناء | نصائح عن الطوب والبلوك والإنترلوك"
        : "Building Materials Articles | Bricks, Blocks and Interlock Tips",
    description: dictionary.articlesSection.description
  });
}

export default function ArticlesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return (
    <>
      <PageHero
        label={dictionary.articlesSection.sectionLabel}
        title={dictionary.articlesSection.title}
        description={dictionary.articlesSection.description}
      />
      <ArticlesPreview locale={locale} dictionary={dictionary} showTitle={false} />
    </>
  );
}
