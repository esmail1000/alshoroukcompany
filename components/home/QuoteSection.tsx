import QuoteForm from "@/components/forms/QuoteForm";
import SectionTitle from "@/components/shared/SectionTitle";
import type { Locale } from "@/lib/i18n";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function QuoteSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <section id="quote" className="section-padding bg-white">
      <div className="container-padded grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] bg-brand-navy p-6 text-white shadow-soft lg:sticky lg:top-28 lg:p-8">
          <SectionTitle
            label={dictionary.quote.sectionLabel}
            title={dictionary.quote.title}
            description={dictionary.quote.description}
            align="start"
            light
          />
        </div>
        <QuoteForm locale={locale} quote={dictionary.quote} products={dictionary.products.map((product) => product.title)} />
      </div>
    </section>
  );
}
