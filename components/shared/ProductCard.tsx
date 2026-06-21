import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Product } from "@/data/content";

type ProductCardProps = {
  product: Product;
  locale: Locale;
};

export default function ProductCard({ product, locale }: ProductCardProps) {
  const detailsLabel = locale === "ar" ? "عرض التفاصيل والمقاسات" : "View Details & Sizes";
  const productHref = `/${locale}/products/${product.slug}`;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft">
      {/* عند الضغط على صورة أو عنوان المنتج ينتقل المستخدم إلى صفحة التفاصيل */}
      <Link href={productHref} className="relative block h-60 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/20 to-transparent" />
        <h3 className="absolute bottom-5 start-5 pe-5 text-2xl font-black leading-tight text-white">
          {product.title}
        </h3>
      </Link>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-7 text-slate-600">{product.description}</p>
        <div className="grid gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-xs font-bold leading-6 text-slate-600">
          <span className="border-s-4 border-brand-blue ps-3">{product.usage}</span>
          <span className="border-s-4 border-brand-brick ps-3">{product.specs}</span>
        </div>
        <Link
          href={productHref}
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-black text-white transition hover:bg-brand-deep sm:w-auto"
        >
          {detailsLabel}
        </Link>
      </div>
    </article>
  );
}
