import FeatureCard from "@/components/shared/FeatureCard";
import SectionTitle from "@/components/shared/SectionTitle";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function FeaturesSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-padded">
        <SectionTitle
          label={dictionary.featuresSection.sectionLabel}
          title={dictionary.featuresSection.title}
          description={dictionary.featuresSection.description}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
