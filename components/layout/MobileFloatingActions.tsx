import Link from "next/link";
import { siteConfig } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

type MobileFloatingActionsProps = {
  locale: Locale;
};

export default function MobileFloatingActions({ locale }: MobileFloatingActionsProps) {
  const whatsappText = encodeURIComponent(
    locale === "ar"
      ? "مرحبًا، أريد طلب عرض سعر من شركة الشروق لمواد البناء."
      : "Hello, I would like to request a quote from Alshorouk Company."
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-3 shadow-[0_-10px_30px_rgba(16,42,67,0.10)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 text-center text-xs font-black">
        <Link
          href={`/${locale}#quote`}
          className="rounded-2xl bg-brand-brick px-2 py-3 text-white"
        >
          {locale === "ar" ? "عرض سعر" : "Quote"}
        </Link>
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappText}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-brand-blue px-2 py-3 text-white"
        >
          {locale === "ar" ? "واتساب" : "WhatsApp"}
        </a>
        <a
          href={siteConfig.phoneHref}
          className="rounded-2xl border border-slate-200 bg-slate-50 px-2 py-3 text-brand-navy"
        >
          {locale === "ar" ? "اتصال" : "Call"}
        </a>
      </div>
    </div>
  );
}
