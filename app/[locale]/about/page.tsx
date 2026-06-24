import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import AboutSection from "@/components/home/AboutSection";
import QualitySection from "@/components/home/QualitySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildSeoMetadata } from "@/lib/seo";


export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return { title: "About Alshorouk Company" };

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return buildSeoMetadata({
    locale,
    path: "/about",
    title: locale === "ar" ? "من نحن | خبرة الشروق في تصنيع وتوريد مواد البناء" : "About Us | Alshorouk Building Materials Experience",
    description: dictionary.about.description
  });
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getContent(params.locale as Locale);

  return (
    <>
      <PageHero
        label={dictionary.about.sectionLabel}
        title={dictionary.about.title}
        description={dictionary.about.description}
      />
      <AboutSection dictionary={dictionary} />
      <QualitySection dictionary={dictionary} />
      <FeaturesSection dictionary={dictionary} />
    </>
  );
}
