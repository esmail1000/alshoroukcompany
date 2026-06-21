import type { Feature } from "@/data/content";

type FeatureCardProps = {
  feature: Feature;
  index: number;
};

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-soft">
      {/* كارت مميزات بدون أيقونات بناءً على طلب العميل */}
      <span className="mb-7 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-brand-blue/10 px-3 text-sm font-black text-brand-deep transition group-hover:bg-brand-blue group-hover:text-white">
        {number}
      </span>
      <h3 className="mb-4 text-xl font-black text-brand-navy">{feature.title}</h3>
      <p className="text-sm leading-7 text-slate-600">{feature.description}</p>
      <div className="absolute inset-x-7 bottom-0 h-1 rounded-full bg-gradient-to-r from-brand-blue via-brand-deep to-brand-brick opacity-0 transition group-hover:opacity-100" />
    </article>
  );
}
