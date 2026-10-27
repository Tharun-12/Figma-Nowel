import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { TreatmentCard } from '@/components/Cards';
import { FAQAccordion } from '@/components/FAQAccordion';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TREATMENTS } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Check, AlertTriangle } from 'lucide-react';

export function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  useDocumentTitle(
    treatment ? `${treatment.title} — Nowal NatureCare` : 'Treatment — Nowal NatureCare',
    treatment?.excerpt
  );

  if (!treatment) return <Navigate to="/treatments" replace />;

  const related = TREATMENTS.filter((t) => t.slug !== treatment.slug && t.category === treatment.category).slice(0, 3);
  const relatedFill = related.length < 3 ? TREATMENTS.filter((t) => t.slug !== treatment.slug && !related.includes(t)).slice(0, 3 - related.length) : [];
  const allRelated = [...related, ...relatedFill];

  return (
    <>
      <PageHero
        image={treatment.image}
        title={treatment.title}
        subtitle={treatment.excerpt}
        eyebrow="Therapy"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Treatments', to: '/treatments' }, { label: treatment.title }]} />

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading eyebrow="Overview" title={`About ${treatment.title}`} />
              <p className="mt-5 text-lg leading-relaxed text-charcoal-400 text-pretty">{treatment.overview}</p>
            </Reveal>

            {/* What to expect */}
            <Reveal className="mt-12">
              <h3 className="font-serif text-2xl text-forest mb-5">What to Expect</h3>
              <ul className="space-y-3">
                {treatment.whatToExpect.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-forest mt-0.5" strokeWidth={1.5} />
                    <span className="text-charcoal-400">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Benefits */}
            <Reveal className="mt-12">
              <h3 className="font-serif text-2xl text-forest mb-5">Potential Wellness Benefits</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {treatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-sage-500 mt-0.5" strokeWidth={1.5} />
                    <span className="text-charcoal-400">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-charcoal-400 italic">These benefits are based on traditional practice and individual experience. Results vary and are not guaranteed.</p>
            </Reveal>

            {/* Suitability */}
            <Reveal className="mt-12">
              <h3 className="font-serif text-2xl text-forest mb-3">Suitability & Consultation</h3>
              <p className="text-charcoal-400 leading-relaxed">{treatment.suitability}</p>
            </Reveal>

            {/* Precautions */}
            {treatment.precautions && (
              <Reveal className="mt-8">
                <div className="flex gap-3 rounded-xl bg-sand-100 border border-sand-200 p-5">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-earth-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-medium text-forest">Precautions</h4>
                    <p className="mt-1 text-sm text-charcoal-400">{treatment.precautions}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="sticky top-24 rounded-2xl border border-sage-200 bg-sand-100 p-7">
                <h3 className="font-serif text-lg text-forest">Enquire About This Therapy</h3>
                <p className="mt-2 text-sm text-charcoal-400">Interested in {treatment.title}? Speak with our team about suitability and availability.</p>
                <Link to="/contact" className="mt-4 btn-primary w-full">Make an Enquiry</Link>
                <Link to="/plan-your-retreat" className="mt-3 btn-secondary w-full">Plan Your Retreat</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {treatment.faqs.length > 0 && (
        <section className="bg-sand-100 py-16 lg:py-24">
          <div className="container-prose">
            <SectionHeading eyebrow="Questions" title={`${treatment.title} FAQs`} align="center" className="mb-10" />
            <FAQAccordion categories={[{ category: treatment.title, items: treatment.faqs }]} />
          </div>
        </section>
      )}

      {/* Related */}
      {allRelated.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <SectionHeading eyebrow="Related" title="Other Therapies" className="mb-10" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allRelated.map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BookingCTA title={`Experience ${treatment.title}`} subtitle="Add this therapy to your wellness programme or enquire about a standalone session." />
    </>
  );
}

export default TreatmentDetail;
