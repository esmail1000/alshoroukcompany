import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import AboutSection from "@/components/home/AboutSection";
import QualitySection from "@/components/home/QualitySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";

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
