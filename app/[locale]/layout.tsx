import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getContent } from "@/data/content";
import { getDirection, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) {
    return {
      title: "Alshorouk Company",
      description: "Bricks and building materials supplier."
    };
  }

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      type: "website",
      locale: locale === "ar" ? "ar_EG" : "en_US",
      images: [siteConfig.logo]
    }
  };
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);

  return (
    <div dir={getDirection(locale)} lang={locale} className="min-h-screen bg-white">
      <Header locale={locale} navLinks={dictionary.nav} cta={dictionary.cta} languageLabel={dictionary.languageLabel} />
      <main>{children}</main>
      <Footer locale={locale} dictionary={dictionary} />
    </div>
  );
}
