import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/home/ContactSection";
import QuoteSection from "@/components/home/QuoteSection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildSeoMetadata } from "@/lib/seo";


export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return { title: "Contact Alshorouk Company" };

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return buildSeoMetadata({
    locale,
    path: "/contact",
    title: locale === "ar" ? "تواصل معنا | الشروق لمواد البناء" : "Contact Us | Alshorouk Company",
    description: dictionary.contact.description
  });
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return (
    <>
      <PageHero
        label={dictionary.contact.sectionLabel}
        title={dictionary.contact.title}
        description={dictionary.contact.description}
      />
      <ContactSection locale={locale} dictionary={dictionary} />
      <QuoteSection locale={locale} dictionary={dictionary} />
    </>
  );
}
