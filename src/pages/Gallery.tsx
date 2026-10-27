import { useState, useMemo } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { GalleryGrid } from '@/components/GalleryGrid';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GALLERY } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function Gallery() {
  useDocumentTitle('Gallery — Nowal NatureCare', 'A visual journey through Nowal NatureCare — resort, accommodation, treatments, yoga, gardens, dining, and amenities.');

  const categories = useMemo(() => ['All', ...Array.from(new Set(GALLERY.map((g) => g.category)))], []);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <>
      <PageHero
        image={IMAGES.galleryResort1}
        title="Gallery"
        subtitle="A visual journey through the landscapes, spaces, and moments of Nowal NatureCare."
        eyebrow="Visual Story"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Gallery' }]} />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          {/* Filters */}
          <Reveal className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    filter === cat ? 'bg-forest text-ivory' : 'bg-white text-charcoal-400 hover:text-forest border border-sage-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <GalleryGrid images={filtered} />
        </div>
      </section>

      <BookingCTA title="See It in Person" subtitle="Photographs only begin to capture the experience. Come and feel it for yourself." />
    </>
  );
}

export default Gallery;
