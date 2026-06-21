type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-24 text-white">
      <div className="brick-pattern absolute inset-0 -z-10 opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy via-brand-deep/70 to-brand-navy" />
      <div className="container-padded max-w-4xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
          {label}
        </span>
        <h1 className="text-4xl font-black leading-tight md:text-5xl">{title}</h1>
        {description && <p className="mt-5 text-base leading-8 text-white/80 md:text-lg">{description}</p>}
      </div>
    </section>
  );
}
