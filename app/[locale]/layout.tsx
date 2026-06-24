import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileFloatingActions from "@/components/layout/MobileFloatingActions";
import { getContent } from "@/data/content";
import { getDirection, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { buildSeoMetadata } from "@/lib/seo";

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

  return buildSeoMetadata({
    locale,
    path: "",
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    image: siteConfig.ogImage
  });
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
      <main className="pb-20 lg:pb-0">{children}</main>
      <Footer locale={locale} dictionary={dictionary} />
      <MobileFloatingActions locale={locale} />
    </div>
  );
}
