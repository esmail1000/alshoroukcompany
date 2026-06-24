import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteSection from "@/components/home/QuoteSection";
import ProductCard from "@/components/shared/ProductCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { getContent, type Product, type ProductVariant } from "@/data/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { buildSeoMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return (["ar", "en"] as Locale[]).flatMap((locale) =>
    getContent(locale).products.map((product) => ({
      locale,
      slug: product.slug
    }))
  );
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) return {};

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);
  const product = dictionary.products.find((item) => item.slug === params.slug) as Product | undefined;

  if (!product) return {};

  const productSeoTitles: Record<string, { ar: string; en: string }> = {
    "red-clay-bricks": {
      ar: "الطوب الأحمر الطفلي | المقاسات والاستخدامات",
      en: "Red Clay Bricks | Sizes and Uses"
    },
    "cement-bricks": {
      ar: "الطوب الأسمنتي المصمت | المواصفات والمقاسات",
      en: "Solid Cement Bricks | Specifications and Sizes"
    },
    blocks: {
      ar: "البلوك الخرساني المفرغ | المقاسات والمواصفات",
      en: "Hollow Concrete Blocks | Sizes and Specifications"
    },
    interlock: {
      ar: "الإنترلوك | الأشكال والسماكات والألوان",
      en: "Interlock Pavers | Shapes, Thicknesses and Colors"
    },
    curbstones: {
      ar: "البردورات الخرسانية | الحدائق والأرصفة والطرق",
      en: "Concrete Curbstones | Gardens, Sidewalks and Roads"
    },
    "custom-products": {
      ar: "منتجات خرسانية حسب الطلب | تصنيع خاص للمشروعات",
      en: "Custom Concrete Products | Special Project Manufacturing"
    }
  };

  const title = productSeoTitles[product.slug]?.[locale] || `${product.title} | ${locale === "ar" ? siteConfig.name : siteConfig.englishName}`;

  return buildSeoMetadata({
    locale,
    path: `/products/${product.slug}`,
    title: `${title} | ${locale === "ar" ? siteConfig.name : siteConfig.englishName}`,
    description: product.description,
    image: product.image,
    keywords: [product.title, product.usage, product.specs, locale === "ar" ? siteConfig.name : siteConfig.englishName]
  });
}

export default function ProductDetailsPage({
  params
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  const dictionary = getContent(locale);
  const product = dictionary.products.find((item) => item.slug === params.slug) as Product | undefined;

  if (!product) notFound();

  const labels =
    locale === "ar"
      ? {
          products: "المنتجات",
          details: "تفاصيل المنتج",
          sizes: "المقاسات والمواصفات",
          applications: "الاستخدامات",
          features: "المميزات",
          requestQuote: "اطلب عرض سعر لهذا المنتج",
          whatsapp: "تواصل واتساب بخصوص المنتج",
          related: "منتجات أخرى قد تهمك",
          variants: "الأنواع والمقاسات المتاحة",
          variantQuote: "اطلب عرض سعر لهذا النوع"
        }
      : {
          products: "Products",
          details: "Product Details",
          sizes: "Sizes & Specifications",
          applications: "Applications",
          features: "Features",
          requestQuote: "Request a Quote for This Product",
          whatsapp: "WhatsApp About This Product",
          related: "Other Products You May Need",
          variants: "Available Types & Sizes",
          variantQuote: "Request a Quote for This Type"
        };

  const whatsappMessage = encodeURIComponent(
    locale === "ar"
      ? `أرغب في طلب عرض سعر لمنتج: ${product.title}`
      : `I would like to request a quote for: ${product.title}`
  );

  const relatedProducts = dictionary.products
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3) as Product[];

  if (product.slug === "custom-products") {
    return (
      <CustomProductsPage
        locale={locale}
        dictionary={dictionary}
        product={product}
        relatedProducts={relatedProducts}
      />
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-15 brick-pattern" />
        <div className="container-padded relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:py-24">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-black text-white/75">
              <Link href={`/${locale}/products`} className="transition hover:text-white">
                {labels.products}
              </Link>
              <span>/</span>
              <span className="text-white">{product.title}</span>
            </div>
            <p className="mb-4 text-sm font-black text-brand-blue">{dictionary.productsSection.sectionLabel}</p>
            <h1 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {product.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              {product.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}#quote`}
                className="inline-flex items-center justify-center rounded-full bg-brand-brick px-6 py-3 text-sm font-black text-white shadow-lg shadow-brand-brick/20 transition hover:bg-brand-orange"
              >
                {labels.requestQuote}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-brand-navy"
              >
                {labels.whatsapp}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white p-3 shadow-soft sm:rounded-[2.25rem] sm:p-4">
            <div className="relative h-[260px] w-full overflow-hidden rounded-[1.5rem] sm:h-[360px] sm:rounded-[1.75rem] lg:h-[460px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-card sm:rounded-[2rem] md:p-10">
            <p className="mb-3 text-sm font-black text-brand-blue">{labels.details}</p>
            <h2 className="mb-5 text-2xl font-black text-brand-navy sm:text-3xl">{product.title}</h2>
            <p className="text-base leading-9 text-slate-600">{product.details}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <InfoCard title={labels.applications} items={product.applications} accent="blue" />
              <InfoCard title={labels.features} items={product.features} accent="brick" />
            </div>
          </article>

          <aside className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-card sm:rounded-[2rem] md:p-8">
            <h2 className="mb-5 text-2xl font-black text-brand-navy">{labels.sizes}</h2>
            <ul className="grid gap-3">
              {product.sizes.map((size) => (
                <li key={size} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold leading-7 text-slate-700">
                  {size}
                </li>
              ))}
            </ul>
            <Link
              href={`/${locale}#quote`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white transition hover:bg-brand-deep"
            >
              {labels.requestQuote}
            </Link>
          </aside>
        </div>
      </section>

      {product.variants?.length ? (
        <section className="section-padding bg-slate-50">
          <div className="container-padded">
            <SectionTitle label={dictionary.productsSection.sectionLabel} title={labels.variants} />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {product.variants.map((variant) => (
                <VariantCard
                  key={variant.title}
                  variant={variant}
                  quoteLabel={labels.variantQuote}
                  whatsappLabel={labels.whatsapp}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionTitle label={dictionary.productsSection.sectionLabel} title={labels.related} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection locale={locale} dictionary={dictionary} />
    </>
  );
}


function CustomProductsPage({
  locale,
  dictionary,
  product,
  relatedProducts
}: {
  locale: Locale;
  dictionary: ReturnType<typeof getContent>;
  product: Product;
  relatedProducts: Product[];
}) {
  const isAr = locale === "ar";
  const whatsappMessage = encodeURIComponent(
    isAr
      ? "السلام عليكم، أريد تنفيذ منتج حسب الطلب وأرغب في إرسال المواصفات والمقاسات المطلوبة."
      : "Hello, I would like to manufacture a custom product and share the required specifications and sizes."
  );

  const labels = isAr
    ? {
        products: "المنتجات",
        badge: "تصنيع خاص للمشروعات",
        title: "منتجات خرسانية حسب مواصفات مشروعك",
        subtitle:
          "تنفيذ أشكال ومقاسات وألوان خاصة من المنتجات الخرسانية بعد مراجعة مواصفات المشروع والكمية المطلوبة.",
        primary: "اطلب تنفيذ منتج خاص",
        whatsapp: "تواصل واتساب",
        whatWeDoLabel: "ما الذي يمكن تنفيذه؟",
        whatWeDoTitle: "مرونة في الشكل والمقاس واللون حسب احتياج المشروع",
        stepsLabel: "خطوات الطلب",
        stepsTitle: "طريقة واضحة من إرسال المواصفات حتى التوريد",
        audienceLabel: "مناسب لمن؟",
        audienceTitle: "حلول مخصصة للمقاولين والمشروعات الكبرى",
        requiredLabel: "بيانات نحتاجها لعرض السعر",
        requiredTitle: "أرسل لنا تفاصيل المنتج المطلوب",
        finalTitle: "لديك مواصفات خاصة؟",
        finalText:
          "أرسل المقاسات أو الرسومات أو صورة المنتج المطلوب، وسيقوم فريقنا بمراجعة الطلب وتقديم أفضل حل مناسب لمشروعك.",
        related: "منتجات أخرى قد تهمك"
      }
    : {
        products: "Products",
        badge: "Custom Manufacturing for Projects",
        title: "Concrete Products Made to Your Project Specifications",
        subtitle:
          "Special concrete shapes, sizes, and colors can be manufactured after reviewing project requirements and quantities.",
        primary: "Request a Custom Product",
        whatsapp: "WhatsApp Us",
        whatWeDoLabel: "What Can Be Made?",
        whatWeDoTitle: "Flexible size, shape, and color options for project needs",
        stepsLabel: "Request Process",
        stepsTitle: "A clear process from specifications to site supply",
        audienceLabel: "Who Is It For?",
        audienceTitle: "Custom solutions for contractors and large projects",
        requiredLabel: "Required Details for Quotation",
        requiredTitle: "Send us the product details you need",
        finalTitle: "Have special specifications?",
        finalText:
          "Send the sizes, drawings, or a reference image, and our team will review the request and propose the suitable solution for your project.",
        related: "Other Products You May Need"
      };

  const customSolutions = isAr
    ? [
        {
          title: "أشكال خاصة",
          description: "تنفيذ أشكال مختلفة من المنتجات الخرسانية طبقًا للتصميم المطلوب وطبيعة الاستخدام."
        },
        {
          title: "مقاسات خاصة",
          description: "تصنيع مقاسات غير قياسية حسب الرسومات أو المواصفات الفنية الخاصة بالمشروع."
        },
        {
          title: "ألوان خاصة",
          description: "إمكانية تنفيذ ألوان مناسبة لأعمال اللاندسكيب والتشطيبات الخارجية حسب الطلب."
        },
        {
          title: "منتجات للمشروعات الكبرى",
          description: "تجهيز وتوريد كميات كبيرة للمشروعات السكنية والتجارية والطرق والأرصفة."
        },
        {
          title: "تصنيع حسب المواصفات",
          description: "مراجعة المواصفات المطلوبة من العميل أو الاستشاري قبل بدء التنفيذ والتوريد."
        }
      ]
    : [
        {
          title: "Special Shapes",
          description: "Manufacturing different concrete shapes according to design requirements and use cases."
        },
        {
          title: "Custom Sizes",
          description: "Non-standard dimensions can be produced based on drawings or technical specifications."
        },
        {
          title: "Custom Colors",
          description: "Color options for landscaping and outdoor finishing requirements."
        },
        {
          title: "Large Project Supply",
          description: "Bulk manufacturing and organized supply for residential, commercial, road, and sidewalk projects."
        },
        {
          title: "Specification-Based Production",
          description: "Project requirements are reviewed before production and delivery planning."
        }
      ];

  const steps = isAr
    ? [
        "إرسال المواصفات أو الرسومات",
        "مراجعة الطلب فنيًا",
        "تحديد الكمية والمقاسات",
        "تقديم عرض السعر",
        "التصنيع والتوريد للموقع"
      ]
    : [
        "Send specifications or drawings",
        "Technical request review",
        "Confirm quantity and sizes",
        "Submit the quotation",
        "Manufacturing and site supply"
      ];

  const audience = isAr
    ? [
        "شركات المقاولات",
        "أصحاب المشروعات",
        "شركات اللاندسكيب",
        "مشروعات الطرق والأرصفة",
        "الموزعين",
        "المكاتب الاستشارية"
      ]
    : [
        "Contractors",
        "Project owners",
        "Landscaping companies",
        "Road and sidewalk projects",
        "Distributors",
        "Consultants"
      ];

  const requestDetails = isAr
    ? [
        "نوع المنتج المطلوب",
        "المقاسات أو الرسومات",
        "الكمية المطلوبة",
        "مكان التوريد",
        "اللون أو التشطيب المطلوب",
        "أي ملاحظات فنية إضافية"
      ]
    : [
        "Required product type",
        "Sizes or drawings",
        "Required quantity",
        "Delivery location",
        "Color or finish requirements",
        "Any additional technical notes"
      ];

  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-15 brick-pattern" />
        <div className="container-padded relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:gap-10 lg:py-24">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-black text-white/75">
              <Link href={`/${locale}/products`} className="transition hover:text-white">
                {labels.products}
              </Link>
              <span>/</span>
              <span className="text-white">{product.title}</span>
            </div>
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-brand-blue">
              {labels.badge}
            </p>
            <h1 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              {labels.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
              {labels.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}#quote`}
                className="inline-flex items-center justify-center rounded-full bg-brand-brick px-6 py-3 text-sm font-black text-white shadow-lg shadow-brand-brick/20 transition hover:bg-brand-orange"
              >
                {labels.primary}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-brand-navy"
              >
                {labels.whatsapp}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-white p-3 shadow-soft sm:rounded-[2.25rem] sm:p-4">
            <div className="relative h-[260px] w-full overflow-hidden rounded-[1.5rem] sm:h-[360px] sm:rounded-[1.75rem] lg:h-[460px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionTitle label={labels.whatWeDoLabel} title={labels.whatWeDoTitle} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {customSolutions.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-sm font-black text-brand-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mb-3 text-xl font-black text-brand-navy">{item.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-padded grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-card sm:rounded-[2rem] md:p-10">
            <p className="mb-3 text-sm font-black text-brand-blue">{labels.stepsLabel}</p>
            <h2 className="mb-8 text-3xl font-black text-brand-navy">{labels.stepsTitle}</h2>
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-2 text-sm font-bold leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-card sm:rounded-[2rem] md:p-10">
            <p className="mb-3 text-sm font-black text-brand-blue">{labels.requiredLabel}</p>
            <h2 className="mb-6 text-3xl font-black text-brand-navy">{labels.requiredTitle}</h2>
            <p className="mb-6 text-sm leading-8 text-slate-600">{product.details}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {requestDetails.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand-brick px-6 py-3 text-sm font-black text-white transition hover:bg-brand-orange"
            >
              {labels.whatsapp}
            </a>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionTitle label={labels.audienceLabel} title={labels.audienceTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-center text-base font-black text-brand-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-14 text-white">
        <div className="container-padded flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">{labels.finalTitle}</h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-white/75">{labels.finalText}</p>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-black text-brand-navy transition hover:bg-brand-blue hover:text-white"
          >
            {labels.whatsapp}
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-padded">
          <SectionTitle label={dictionary.productsSection.sectionLabel} title={labels.related} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.slug} product={item} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection locale={locale} dictionary={dictionary} />
    </>
  );
}

function VariantCard({
  variant,
  quoteLabel,
  whatsappLabel,
  locale
}: {
  variant: ProductVariant;
  quoteLabel: string;
  whatsappLabel: string;
  locale: Locale;
}) {
  const whatsappMessage = encodeURIComponent(
    locale === "ar"
      ? `أرغب في طلب عرض سعر لنوع: ${variant.title}`
      : `I would like to request a quote for this type: ${variant.title}`
  );
  const variantImages = variant.images?.length ? variant.images : [variant.image];

  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft">
      <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-slate-100 p-3">
          <div className={variantImages.length > 1 ? "grid h-full min-h-64 grid-cols-1 gap-3 sm:grid-cols-2 md:min-h-72" : "h-64 sm:h-72 md:h-full"}>
            {variantImages.map((image) => (
              <div key={image} className="relative min-h-56 rounded-[1.5rem] bg-white sm:min-h-64">
                <Image
                  src={image}
                  alt={variant.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5 p-5 sm:p-6 md:p-8">
          <div>
            <h3 className="text-xl font-black text-brand-navy sm:text-2xl">{variant.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{variant.description}</p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h4 className="mb-3 text-sm font-black text-brand-blue">
              {locale === "ar" ? "المقاسات والمواصفات" : "Sizes & Specifications"}
            </h4>
            <ul className="grid gap-2">
              {variant.sizes.map((size) => (
                <li key={size} className="border-s-4 border-brand-brick ps-3 text-sm font-bold leading-7 text-slate-700">
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}#quote`}
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-black text-white transition hover:bg-brand-deep"
            >
              {quoteLabel}
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
            >
              {whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function InfoCard({
  title,
  items,
  accent
}: {
  title: string;
  items: readonly string[];
  accent: "blue" | "brick";
}) {
  const borderClass = accent === "blue" ? "border-brand-blue" : "border-brand-brick";

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <h3 className="mb-4 text-xl font-black text-brand-navy">{title}</h3>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className={`border-s-4 ${borderClass} ps-3 text-sm font-bold leading-7 text-slate-600`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
