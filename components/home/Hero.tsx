import Image from "next/image";
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
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/90 to-brand-deep/70" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>
      <div className="brick-pattern absolute inset-0 -z-10 opacity-40" />

      <div className="container-padded grid items-center gap-8 py-12 sm:py-16 lg:min-h-[calc(100vh-116px)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:py-20">
        <div className="reveal max-w-3xl">
          <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
            {hero.eyebrow}
          </span>
          <h1 className="text-3xl font-black leading-[1.18] sm:text-4xl md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-white/80 sm:text-base md:text-lg md:leading-9">
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

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10">
            {hero.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-extrabold text-white backdrop-blur-md">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal rounded-[1.75rem] border border-white/20 bg-white/10 p-3 shadow-soft backdrop-blur-md sm:rounded-[2.5rem] sm:p-5">
          <div className="rounded-[1.5rem] bg-white p-4 text-brand-navy sm:rounded-[2rem] sm:p-6">
            <Image
              src={siteConfig.logo}
              alt="Alshorouk Logo"
              width={176}
              height={176}
              className="mx-auto mb-4 h-28 w-28 object-contain sm:mb-5 sm:h-44 sm:w-44"
              priority
            />
            <div className="mb-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-center sm:p-4">
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
