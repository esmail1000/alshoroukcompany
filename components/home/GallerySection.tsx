import SectionTitle from "@/components/shared/SectionTitle";
import type { getContent } from "@/data/content";

type Dictionary = ReturnType<typeof getContent>;

export default function GallerySection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-padded">
        <SectionTitle
          label={dictionary.gallerySection.sectionLabel}
          title={dictionary.gallerySection.title}
          description={dictionary.gallerySection.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dictionary.gallery.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "group relative overflow-hidden rounded-[2rem] shadow-card md:col-span-2" : "group relative overflow-hidden rounded-[2rem] shadow-card"}
            >
              <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 start-5 text-lg font-black text-white">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
