import SectionTitle from "@/components/shared/SectionTitle";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function ContactSection({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const contact = dictionary.contact;

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-padded grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            label={contact.sectionLabel}
            title={contact.title}
            description={contact.description}
            align="start"
          />

          <div className="mt-8 grid gap-4">
            <ContactItem label={contact.phone} value={siteConfig.phoneDisplay} href={siteConfig.phoneHref} />
            <ContactItem
              label={contact.whatsapp}
              value={siteConfig.whatsappDisplay}
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
            />
            <ContactItem label={contact.email} value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <ContactItem
              label={contact.address}
              value={locale === "ar" ? siteConfig.addressAr : siteConfig.addressEn}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-navy shadow-sm transition hover:text-brand-blue" href={siteConfig.facebook}>
              Facebook
            </a>
            <a className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-navy shadow-sm transition hover:text-brand-blue" href={siteConfig.instagram}>
              Instagram
            </a>
            <a className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-navy shadow-sm transition hover:text-brand-blue" href={siteConfig.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-card">
          <iframe
            src={siteConfig.mapEmbedUrl}
            className="h-[460px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Alshorouk map"
          />
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-card">
      <span className="mb-1 block text-xs font-black uppercase tracking-[0.16em] text-brand-blue">{label}</span>
      <strong className="text-base text-brand-navy">{value}</strong>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}
