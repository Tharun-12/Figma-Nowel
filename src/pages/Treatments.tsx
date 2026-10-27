import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { TreatmentCard } from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TREATMENTS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

const CATEGORIES = [
  { key: 'all', label: 'All Therapies' },
  { key: 'natural', label: 'Natural' },
  { key: 'hydro', label: 'Hydrotherapy' },
  { key: 'massage', label: 'Massage' },
  { key: 'physical', label: 'Physical' },
  { key: 'traditional', label: 'Traditional' },
] as const;

export function Treatments() {
  useDocumentTitle('Holistic Therapies — Nowal NatureCare', 'Explore our complete directory of natural and traditional therapies including mud therapy, hydrotherapy, massage, acupuncture, and more.');
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? TREATMENTS : TREATMENTS.filter((t) => t.category === filter);

  return (
    <>
      <PageHero
        image={IMAGES.heroMassage}
        title="Holistic Therapies"
        subtitle="A curated directory of natural and traditional therapies, each delivered by trained practitioners."
        eyebrow="Treatment Directory"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Treatments' }]} />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow="Explore"
              title="Find Your Therapy"
              subtitle="Filter by category to discover the treatments most relevant to your wellness goals."
            />
          </Reveal>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  filter === cat.key ? 'bg-forest text-ivory' : 'bg-white text-charcoal-400 hover:text-forest border border-sage-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => (
              <StaggerItem key={t.slug}>
                <TreatmentCard treatment={t} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <BookingCTA title="Have a Therapy in Mind?" subtitle="Enquire about availability and how a specific therapy can fit into your wellness programme." />
    </>
  );
}

export default Treatments;
