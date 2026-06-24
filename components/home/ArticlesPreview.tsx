import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { getArticles } from "@/data/articles";
import type { getContent } from "@/data/content";
import type { Locale } from "@/lib/i18n";

type Dictionary = ReturnType<typeof getContent>;

export default function ArticlesPreview({
  locale,
  dictionary,
  limit,
  showTitle = true
}: {
  locale: Locale;
  dictionary: Dictionary;
  limit?: number;
  showTitle?: boolean;
}) {
  const articles = getArticles(locale).slice(0, limit);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded">
        {showTitle && (
          <SectionTitle
            label={dictionary.articlesSection.sectionLabel}
            title={dictionary.articlesSection.title}
            description={dictionary.articlesSection.description}
          />
        )}

        <div className={showTitle ? "mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4" : "grid gap-6 md:grid-cols-2 xl:grid-cols-4"}>
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Link href={`/${locale}/articles/${article.slug}`} className="block">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-black text-brand-blue">
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1">{article.category}</span>
                    <span className="text-slate-400">{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-black leading-8 text-brand-navy">{article.title}</h3>
                  <p className="mb-5 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <span className="text-sm font-black text-brand-blue group-hover:text-brand-deep">
                    {dictionary.common.readMore} ←
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
