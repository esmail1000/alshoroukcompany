import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function AboutSection({ dictionary }: { dictionary: Dictionary }) {
  const about = dictionary.about;

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padded grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal relative overflow-hidden rounded-[1.75rem] bg-brand-concrete p-3 shadow-card sm:rounded-[2.5rem] sm:p-4">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[1.5rem] sm:h-[420px] lg:h-[520px] lg:rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
              alt="Building materials factory"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-5 start-5 rounded-3xl bg-white/95 p-4 shadow-soft backdrop-blur-md sm:bottom-8 sm:start-8 sm:p-5">
            <strong className="block text-2xl font-black text-brand-blue">Alshorouk</strong>
            <span className="text-sm font-bold text-slate-600">Building Materials</span>
          </div>
        </div>

        <div className="reveal">
          <SectionTitle
            label={about.sectionLabel}
            title={about.title}
            description={about.description}
            align="start"
          />

          <div className="mt-8 rounded-[2rem] bg-slate-50 p-6">
            <h3 className="mb-4 text-xl font-black text-brand-navy">{about.plantsTitle}</h3>
            <ul className="grid gap-3">
              {about.plants.map((plant) => (
                <li key={plant} className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-brick" />
                  <span>{plant}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm leading-8 text-slate-600">{about.extra}</p>
        </div>
      </div>
    </section>
  );
}
