import ButtonLink from "@/components/shared/ButtonLink";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Hero({ locale, dictionary }: HeroProps) {
  const hero = dictionary.hero;
  const whatsappText = encodeURIComponent(
    locale === "ar"
      ? "مرحبًا، أريد طلب عرض سعر من شركة الشروق لمواد البناء."
      : "Hello, I would like to request a quote from Alshorouk Company."
  );

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 -z-10">
        <img src={hero.image} alt={hero.title} className="h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-deep/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>
      <div className="brick-pattern absolute inset-0 -z-10 opacity-40" />

      <div className="container-padded grid min-h-[calc(100vh-116px)] items-center gap-10 py-20 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="reveal max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl font-black leading-[1.15] md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-9 text-white/80 md:text-lg">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/${locale}#quote`}>{hero.primaryAction}</ButtonLink>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur-md transition hover:bg-white hover:text-brand-navy"
            >
              {hero.secondaryAction}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-extrabold text-white backdrop-blur-md">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal rounded-[2.5rem] border border-white/20 bg-white/10 p-5 shadow-soft backdrop-blur-md">
          <div className="rounded-[2rem] bg-white p-6 text-brand-navy">
            <img src="/images/logo-alshorouk.png" alt="Alshorouk Logo" className="mx-auto mb-5 h-44 w-44 object-contain" />
            <div className="mb-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center">
                  <strong className="block text-2xl font-black text-brand-blue">{stat.value}</strong>
                  <span className="mt-1 block text-xs font-bold leading-5 text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-brand-navy p-4 text-center text-sm font-extrabold leading-7 text-white">
              {hero.cardNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
