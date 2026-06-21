type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  light?: boolean;
};

export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
  light = false
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="mb-4 inline-flex rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-deep">
        {label}
      </span>
      <h2 className={light ? "text-3xl font-black leading-tight text-white md:text-4xl" : "text-3xl font-black leading-tight text-brand-navy md:text-4xl"}>
        {title}
      </h2>
      {description && (
        <p className={light ? "mt-4 text-base leading-8 text-white/75" : "mt-4 text-base leading-8 text-slate-600"}>
          {description}
        </p>
      )}
    </div>
  );
}
