import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function ArticlesPreview({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-padded">
        <SectionTitle
          label={dictionary.articlesSection.sectionLabel}
          title={dictionary.articlesSection.title}
          description={dictionary.articlesSection.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {dictionary.articles.map((article) => (
            <article key={article.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <h3 className="mb-3 text-xl font-black leading-8 text-brand-navy">{article.title}</h3>
              <p className="mb-5 text-sm leading-7 text-slate-600">{article.excerpt}</p>
              <Link href={article.href} className="text-sm font-black text-brand-blue hover:text-brand-deep">
                {dictionary.common.readMore} ←
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
