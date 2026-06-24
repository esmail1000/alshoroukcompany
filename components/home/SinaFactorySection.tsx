import Image from "next/image";
import ButtonLink from "@/components/shared/ButtonLink";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const copy = {
  ar: {
    badge: "إحدى مصانع مجموعة الشروق",
    sectionLabel: "مصنع سينا",
    title: "مصنع سينا للطوب الطفلي الأحمر",
    description:
      "نُبرز مصنع سينا كأحد أهم مصانع مجموعة الشروق المتخصصة في إنتاج الطوب الطفلي الأحمر بجودة ثابتة وبطاقات توريد مناسبة لاحتياجات المشروعات الكبيرة داخل مصر.",
    primaryAction: "اطلب عرض سعر من مصنع سينا",
    secondaryAction: "شاهد مقاسات الطوب الأحمر",
    whatsapp: "مرحبًا، أريد الاستفسار عن توريد الطوب الطفلي الأحمر من مصنع سينا.",
    featureTitle: "لماذا مصنع سينا؟",
    features: [
      {
        title: "إنتاج طوب طفلي متخصص",
        description: "تركيز واضح على الطوب الأحمر والطوب الطفلي بمقاسات تناسب أعمال المباني والحوائط."
      },
      {
        title: "جودة مناسبة للمشروعات",
        description: "منتجات يتم توريدها وفق مواصفات واضحة مع متابعة احتياجات المقاولين والمواقع."
      },
      {
        title: "توريد للكميات الكبيرة",
        description: "قدرة تنظيمية على تلبية طلبات المشروعات السكنية والتجارية والمقاولات."
      },
      {
        title: "موقع صناعي استراتيجي",
        description: "يقع ضمن نطاق صناعي يساعد على سرعة التوريد والوصول للمشروعات المختلفة."
      }
    ],
    stats: [
      { value: "طوب طفلي", label: "تخصص الإنتاج" },
      { value: "كميات كبيرة", label: "توريد للمشروعات" },
      { value: "جودة ثابتة", label: "متابعة المواصفات" }
    ],
    miniTitle: "منتجات مرتبطة بمصنع سينا",
    miniDescription:
      "المنتج الأساسي الذي يتم التركيز عليه داخل مصنع سينا هو الطوب الطفلي الأحمر بأنواعه الدوبل والفرداني، مع إمكانية تنسيق التوريد حسب الكمية ومكان المشروع."
  },
  en: {
    badge: "Part of Alshorouk Group factories",
    sectionLabel: "Sina Factory",
    title: "Sina Factory for Red Clay Bricks",
    description:
      "We highlight Sina Factory as one of Alshorouk Group’s key factories specialized in producing red clay bricks with consistent quality and supply capabilities for major projects in Egypt.",
    primaryAction: "Request a Quote from Sina",
    secondaryAction: "View Red Brick Sizes",
    whatsapp: "Hello, I would like to ask about red clay brick supply from Sina Factory.",
    featureTitle: "Why Sina Factory?",
    features: [
      {
        title: "Specialized clay brick production",
        description: "Clear focus on red clay bricks with sizes suitable for walls and construction works."
      },
      {
        title: "Project-ready quality",
        description: "Products supplied according to clear specifications and project requirements."
      },
      {
        title: "Large quantity supply",
        description: "Organized supply capabilities for residential, commercial, and contracting projects."
      },
      {
        title: "Strategic industrial location",
        description: "Located in an industrial area that supports faster delivery to different project sites."
      }
    ],
    stats: [
      { value: "Clay Bricks", label: "Production Focus" },
      { value: "Bulk Supply", label: "For Projects" },
      { value: "Reliable Quality", label: "Spec Control" }
    ],
    miniTitle: "Products connected to Sina Factory",
    miniDescription:
      "Sina Factory mainly focuses on red clay bricks, including double and single brick options, with supply coordination based on quantity and project location."
  }
} as const;

export default function SinaFactorySection({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(t.whatsapp)}`;

  return (
    <section id="sina-factory" className="relative overflow-hidden bg-[#fff8f2] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(179,58,28,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,42,67,0.10),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-brick via-[#7a2e19] to-brand-brick" />

      <div className="container-padded relative">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-brand-brick px-4 py-2 text-xs font-black text-white shadow-lg shadow-brand-brick/20">
              {t.badge}
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#34170d] sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
          </div>
          <div className="hidden rounded-full border border-brand-brick/15 bg-white px-5 py-3 text-sm font-black text-brand-brick shadow-card sm:block">
            {t.sectionLabel}
          </div>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-brick/15 bg-[#2a130b] p-5 text-white shadow-soft sm:p-7">
            <div className="absolute inset-0 opacity-25">
              <Image
                src="/images/products/red-clay-double.webp"
                alt={t.title}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a130b]/65 via-[#2a130b]/90 to-[#2a130b]" />
            <div className="relative z-10 flex min-h-[480px] flex-col justify-between gap-8">
              <div className="rounded-[1.75rem] bg-white p-5 text-center shadow-soft sm:p-7">
                <Image
                  src="/images/logos/sina-factory-logo.webp"
                  alt={locale === "ar" ? "شعار مصنع سينا للطوب الأحمر" : "Sina Factory logo"}
                  width={520}
                  height={520}
                  className="mx-auto h-auto w-full max-w-[360px] object-contain"
                  priority={false}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-md">
                    <strong className="block text-lg font-black text-[#ffc2a6]">{stat.value}</strong>
                    <span className="mt-1 block text-xs font-bold text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-brick/10 bg-white p-5 shadow-card sm:p-7 lg:p-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
              {t.description}
            </p>

            <div className="mt-7 rounded-[1.5rem] bg-[#fff4ec] p-5 sm:p-6">
              <h3 className="text-xl font-black text-[#34170d]">{t.featureTitle}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {t.features.map((feature, index) => (
                  <article key={feature.title} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-brick/10 transition hover:-translate-y-1 hover:shadow-card">
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-brick text-sm font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-base font-black text-brand-navy">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-7 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <h3 className="text-lg font-black text-brand-navy">{t.miniTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{t.miniDescription}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/${locale}#quote`} className="bg-brand-brick hover:bg-[#8f2f17]">
                  {t.primaryAction}
                </ButtonLink>
                <ButtonLink href={`/${locale}/products/red-clay-bricks`} variant="secondary">
                  {t.secondaryAction}
                </ButtonLink>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brand-brick/20 bg-white px-6 py-3 text-sm font-black text-brand-brick transition hover:-translate-y-0.5 hover:bg-brand-brick hover:text-white"
                >
                  {locale === "ar" ? "واتساب" : "WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
