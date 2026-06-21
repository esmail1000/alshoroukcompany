import ProductCard from "@/components/shared/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import type { Locale } from "@/lib/i18n";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function ProductsSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <section id="products" className="section-padding bg-slate-50">
      <div className="container-padded">
        <SectionTitle
          label={dictionary.productsSection.sectionLabel}
          title={dictionary.productsSection.title}
          description={dictionary.productsSection.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dictionary.products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
