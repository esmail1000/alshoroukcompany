import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ProductsSection from "@/components/home/ProductsSection";
import QuoteSection from "@/components/home/QuoteSection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildSeoMetadata } from "@/lib/seo";


export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return { title: "Alshorouk Products" };

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return buildSeoMetadata({
    locale,
    path: "/products",
    title: locale === "ar" ? "منتجات الشروق | طوب أحمر وأسمنتي وبلوك وإنترلوك وبردورات" : "Alshorouk Products | Bricks, Blocks, Interlock and Curbstones",
    description: dictionary.productsSection.description
  });
}

export default function ProductsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return (
    <>
      <PageHero
        label={dictionary.productsSection.sectionLabel}
        title={dictionary.productsSection.title}
        description={dictionary.productsSection.description}
      />
      <ProductsSection locale={locale} dictionary={dictionary} />
      <QuoteSection locale={locale} dictionary={dictionary} />
    </>
  );
}
