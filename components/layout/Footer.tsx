import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export default function Footer({ locale, dictionary }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="brick-pattern">
        <div className="container-padded grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-3xl bg-white p-3 shadow-soft">
              <img src={siteConfig.logo} alt="Alshorouk Logo" className="h-16 w-16 object-contain" />
              <div>
                <strong className="block text-brand-navy">
                  {locale === "ar" ? siteConfig.name : siteConfig.englishName}
                </strong>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
                  Alshorouk
                </span>
              </div>
            </div>
            <p className="max-w-md text-sm leading-8 text-white/80">{dictionary.footer.about}</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black">{dictionary.footer.quickLinks}</h3>
            <ul className="grid gap-3 text-sm text-white/80">
              {dictionary.nav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black">{dictionary.footer.products}</h3>
            <ul className="grid gap-3 text-sm text-white/80">
              {dictionary.products.slice(0, 5).map((product) => (
                <li key={product.slug}>
                  <Link href={`/${locale}/products/${product.slug}`} className="transition hover:text-white">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-black">{dictionary.footer.contact}</h3>
            <ul className="grid gap-3 text-sm text-white/80">
              <li>
                <a href={siteConfig.phoneHref} className="transition hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${siteConfig.whatsappNumber}`} className="transition hover:text-white">
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li>{locale === "ar" ? siteConfig.addressAr : siteConfig.addressEn}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-padded flex flex-col items-center justify-between gap-3 text-center text-xs text-white/70 md:flex-row">
          <p>
            © {year} {locale === "ar" ? siteConfig.name : siteConfig.englishName}. {dictionary.footer.rights}.
          </p>
          <p>Designed with Next.js + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
