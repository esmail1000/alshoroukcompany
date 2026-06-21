import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import QualitySection from "@/components/home/QualitySection";
import ProductsSection from "@/components/home/ProductsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import GallerySection from "@/components/home/GallerySection";
import QuoteSection from "@/components/home/QuoteSection";
import ContactSection from "@/components/home/ContactSection";
import ArticlesPreview from "@/components/home/ArticlesPreview";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return (
    <>
      <Hero locale={locale} dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <ProductsSection locale={locale} dictionary={dictionary} />
      <FeaturesSection dictionary={dictionary} />
      <QualitySection dictionary={dictionary} />
      <GallerySection dictionary={dictionary} />
      <ArticlesPreview dictionary={dictionary} />
      <QuoteSection locale={locale} dictionary={dictionary} />
      <ContactSection locale={locale} dictionary={dictionary} />
    </>
  );
}
