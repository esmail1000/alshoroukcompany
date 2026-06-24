import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ButtonLink from "@/components/shared/ButtonLink";
import { getArticle, getArticleMetadata, getArticles } from "@/data/articles";
import { getContent } from "@/data/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getArticles(locale).map((article) => ({
      locale,
      slug: article.slug
    }))
  );
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  if (!isLocale(params.locale)) {
    return { title: "Article | Alshorouk Company" };
  }

  const article = getArticle(params.locale as Locale, params.slug);
  if (!article) {
    return { title: "Article | Alshorouk Company" };
  }

  return getArticleMetadata(article, params.locale as Locale);
}

export default function ArticleDetailsPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  const article = getArticle(locale, params.slug);
  if (!article) notFound();

  const dictionary = getContent(locale);
  const relatedArticles = getArticles(locale).filter((item) => item.slug !== article.slug).slice(0, 3);
  const whatsappText =
    locale === "ar"
      ? `السلام عليكم، أريد الاستفسار بعد قراءة مقال: ${article.title}`
      : `Hello, I would like to ask about: ${article.title}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <article className="bg-white">
      <section className="relative isolate overflow-hidden bg-brand-navy py-14 text-white sm:py-20 md:py-24">
        <div className="brick-pattern absolute inset-0 -z-10 opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-deep/70 to-brand-navy" />
        <div className="container-padded max-w-5xl">
          <Link
            href={`/${locale}/articles`}
            className="mb-6 inline-flex text-sm font-black text-white/80 transition hover:text-white"
          >
            {locale === "ar" ? "← العودة إلى المقالات" : "← Back to articles"}
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-bold text-white/80">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{article.category}</span>
            <span>{article.readTime}</span>
            <span>{article.publishedAt}</span>
          </div>
          <h1 className="max-w-4xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">{article.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">{article.excerpt}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-padded grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="min-w-0">
            <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-card">
              <div className="relative h-64 w-full sm:h-[22rem]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-10 text-slate-700">
              {article.sections.map((section) => (
                <section key={section.heading} className="scroll-mt-28">
                  <h2 className="mb-5 text-2xl font-black leading-10 text-brand-navy md:text-3xl">{section.heading}</h2>
                  <div className="space-y-4 text-base leading-9">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {section.subSections?.length ? (
                    <div className="mt-7 grid gap-4 md:grid-cols-2">
                      {section.subSections.map((subSection) => (
                        <div key={subSection.heading} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                          <h3 className="mb-3 text-lg font-black text-brand-navy">{subSection.heading}</h3>
                          <div className="space-y-3 text-sm leading-7 text-slate-600">
                            {subSection.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-[1.75rem] bg-brand-navy p-5 text-white shadow-soft sm:rounded-[2rem] sm:p-8">
              <h2 className="text-2xl font-black">
                {locale === "ar" ? "تحتاج إلى توريد منتجات لمشروعك؟" : "Need building materials for your project?"}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-white/80">
                {locale === "ar"
                  ? "تواصل مع شركة الشروق لمواد البناء للحصول على عرض سعر مناسب حسب نوع المنتج، الكمية، ومكان التوريد. نوفر الطوب الأحمر، الطوب الأسمنتي، البلوك، الإنترلوك، البردورات، ومنتجات حسب الطلب."
                  : "Contact Alshorouk Company to request a quotation based on product type, quantity, and delivery location. We supply red clay bricks, cement bricks, concrete blocks, interlock pavers, curbstones, and custom concrete products."}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={`/${locale}#quote`} variant="primary">
                  {dictionary.common.requestQuote}
                </ButtonLink>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-brand-navy"
                >
                  {locale === "ar" ? "تواصل واتساب" : "WhatsApp Contact"}
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <h2 className="mb-4 text-xl font-black text-brand-navy">
                {locale === "ar" ? "روابط مفيدة" : "Useful links"}
              </h2>
              <div className="space-y-3">
                {article.productLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="block rounded-2xl bg-white px-4 py-3 text-sm font-black text-brand-blue shadow-sm transition hover:-translate-y-0.5 hover:text-brand-deep"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card">
              <h2 className="mb-4 text-xl font-black text-brand-navy">
                {locale === "ar" ? "مقالات مشابهة" : "Related articles"}
              </h2>
              <div className="space-y-4">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/articles/${item.slug}`}
                    className="block border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-sm font-black leading-7 text-brand-navy hover:text-brand-blue">{item.title}</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-500">{item.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}
