import SectionTitle from "@/components/shared/SectionTitle";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function QualitySection({ dictionary }: { dictionary: Dictionary }) {
  const quality = dictionary.quality;

  return (
    <section className="section-padding overflow-hidden bg-brand-navy text-white">
      <div className="container-padded grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div className="reveal">
          <SectionTitle
            label={quality.sectionLabel}
            title={quality.title}
            description={quality.description}
            align="start"
            light
          />
        </div>

        <div className="reveal rounded-[2.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-md">
          <div className="grid gap-4">
            {quality.points.map((point, index) => (
              <div key={point} className="flex gap-4 rounded-3xl bg-white p-5 text-brand-navy shadow-card">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand-blue text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-bold leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
