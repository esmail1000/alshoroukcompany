"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { otherLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  locale: Locale;
  navLinks: readonly NavLink[];
  cta: string;
  languageLabel: string;
};

export default function Header({ locale, navLinks, cta, languageLabel }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const nextLocale = otherLocale(locale);
  const switchHref = pathname.replace(/^\/(ar|en)/, `/${nextLocale}`) || `/${nextLocale}`;
  const quoteHref = `/${locale}#quote`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_10px_30px_rgba(16,42,67,0.06)] backdrop-blur-xl">
      {/* شريط بيانات سريع يظهر على الشاشات الكبيرة فقط */}
      <div className="hidden border-b border-slate-100 bg-slate-50/90 lg:block">
        <div className="container-padded flex h-9 items-center justify-between text-xs font-bold text-slate-600">
          <p>{locale === "ar" ? "توريد طوب ومنتجات أسمنتية للمشروعات والمقاولين" : "Bricks and cement products supply for contractors and projects"}</p>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-brand-deep" href={siteConfig.phoneHref}>
              {siteConfig.phoneDisplay}
            </a>
            <a
              className="transition hover:text-brand-deep"
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: {siteConfig.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="container-padded flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3" aria-label="Alshorouk home">
          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-100 bg-white shadow-sm">
            <img
              src={siteConfig.logo}
              alt="Alshorouk Logo"
              className="h-12 w-12 object-contain"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <strong className="block text-base font-black text-brand-navy">
              {locale === "ar" ? siteConfig.name : siteConfig.englishName}
            </strong>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
              Alshorouk
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-extrabold transition hover:bg-brand-blue/10 hover:text-brand-deep",
                  isActive ? "bg-brand-blue/10 text-brand-deep" : "text-slate-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href={switchHref}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-700 transition hover:border-brand-blue hover:text-brand-deep"
          >
            {languageLabel}
          </Link>
          <Link
            href={quoteHref}
            className="rounded-full bg-brand-brick px-5 py-3 text-sm font-black text-white shadow-lg shadow-brand-brick/20 transition hover:-translate-y-0.5 hover:bg-brand-orange"
          >
            {cta}
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 text-2xl font-black text-brand-navy lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-soft lg:hidden">
          <nav className="container-padded grid gap-2 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-brand-blue/10 hover:text-brand-deep"
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-2 pt-2 sm:grid-cols-2">
              <Link
                href={switchHref}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-bold text-slate-700"
              >
                {languageLabel}
              </Link>
              <Link
                href={quoteHref}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl bg-brand-brick px-4 py-3 text-center text-sm font-black text-white"
              >
                {cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
