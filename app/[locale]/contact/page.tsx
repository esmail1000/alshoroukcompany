import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import ContactSection from "@/components/home/ContactSection";
import QuoteSection from "@/components/home/QuoteSection";
import { getContent } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";

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
