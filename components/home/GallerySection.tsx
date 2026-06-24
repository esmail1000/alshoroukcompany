import Image from "next/image";
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
              className={index === 0 ? "group relative h-56 overflow-hidden rounded-[1.5rem] shadow-card sm:h-72 sm:rounded-[2rem] md:col-span-2" : "group relative h-56 overflow-hidden rounded-[1.5rem] shadow-card sm:h-72 sm:rounded-[2rem]"}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 start-5 text-lg font-black text-white">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
