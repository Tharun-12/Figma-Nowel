import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { ProgrammeCard } from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGES } from '@/data/images';
import { PROGRAMMES, FAQS } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { ClipboardCheck, Stethoscope, CalendarDays, Sparkles } from 'lucide-react';

const CATEGORIES = [
  { key: 'all', label: 'All Programmes' },
  { key: 'naturopathy', label: 'Naturopathy' },
  { key: 'ayurveda', label: 'Ayurveda' },
  { key: 'yoga', label: 'Yoga & Meditation' },
  { key: 'detox', label: 'Detox & Lifestyle' },
  { key: 'stress', label: 'Stress Management' },
  { key: 'physio', label: 'Physiotherapy' },
] as const;

export function WellnessProgrammes() {
  useDocumentTitle('Wellness Programmes — Nowal NatureCare', 'Explore our personalised wellness programmes including naturopathy, Ayurveda, yoga, detox, stress management, and physiotherapy.');
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? PROGRAMMES : PROGRAMMES.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        image={IMAGES.heroWellness}
        title="Wellness Programmes"
        subtitle="Personalised journeys designed around your unique constitution, goals, and pace."
        eyebrow="Personalised Wellness"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wellness Programmes' }]} />

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="Wellness, Tailored to You"
              subtitle="No two bodies are the same, and no two wellness journeys should be either. Every programme at Nowal begins with a personal consultation, followed by a tailored plan that evolves with you throughout your stay."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      {/* Category navigation */}
      <section className="border-y border-sage-200 bg-sand-100 sticky top-16 z-30">
        <div className="container-wide py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat.key ? 'bg-forest text-ivory' : 'bg-white text-charcoal-400 hover:text-forest border border-sage-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programme grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <StaggerItem key={p.slug}>
                <ProgrammeCard programme={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Consultation process */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The Process"
            title="How Your Programme Is Crafted"
            subtitle="From first consultation to post-stay guidance, every step is designed around you."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ClipboardCheck, step: '01', title: 'Initial Consultation', text: 'A thorough assessment of your health history, lifestyle, and wellness goals.' },
              { icon: Stethoscope, step: '02', title: 'Personalised Plan', text: 'Your practitioner designs a programme combining therapies, diet, and movement.' },
              { icon: CalendarDays, step: '03', title: 'Guided Experience', text: 'Daily sessions with attentive practitioners, adjusted as you progress.' },
              { icon: Sparkles, step: '04', title: 'Post-Stay Guidance', text: 'Practical take-home practices to sustain the benefits of your retreat.' },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="rounded-2xl bg-white p-7 border border-sand-200 h-full">
                  <span className="font-serif text-3xl text-sage-300">{item.step}</span>
                  <item.icon className="h-7 w-7 text-forest mt-3 mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <SectionHeading eyebrow="Questions" title="Programme FAQs" align="center" className="mb-10" />
          <FAQAccordion categories={FAQS.filter((c) => c.category === 'Wellness Programmes' || c.category === 'Treatments & Consultations')} />
        </div>
      </section>

      <BookingCTA
        title="Begin with a Consultation"
        subtitle="Tell us about your wellness goals and we'll help you find the right programme."
      />
    </>
  );
}

export default WellnessProgrammes;
