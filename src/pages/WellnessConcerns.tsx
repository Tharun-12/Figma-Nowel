import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WELLNESS_CONCERNS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { AlertCircle } from 'lucide-react';

export function WellnessConcerns() {
  useDocumentTitle('Wellness Concerns — Nowal NatureCare', 'Explore the health and wellness concerns we support through our complementary programmes. Always consult a qualified healthcare professional.');

  return (
    <>
      <PageHero
        image={IMAGES.heroMeditation}
        title="Wellness Concerns"
        subtitle="Complementary wellness support for a range of health concerns — delivered alongside, not in place of, professional medical care."
        eyebrow="Health & Wellness"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wellness Concerns' }]} />

      {/* Disclaimer */}
      <section className="py-8 bg-forest-50">
        <div className="container-prose">
          <div className="flex gap-3 rounded-xl bg-sand-100 border border-sand-200 p-5">
            <AlertCircle className="h-5 w-5 shrink-0 text-earth-600 mt-0.5" strokeWidth={1.5} />
            <p className="text-sm text-charcoal-400 leading-relaxed">
              The information below describes wellness services that may complement your overall health management. We do not claim to cure, reverse, or prevent any disease. Always consult a qualified healthcare professional for medical advice and continue any prescribed treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Concerns grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WELLNESS_CONCERNS.map((concern) => (
              <StaggerItem key={concern.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-sage-100 transition-shadow hover:shadow-lg hover:shadow-forest/5">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={concern.image} alt={concern.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-lg text-forest">{concern.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400">{concern.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {concern.services.map((s) => (
                        <span key={s} className="rounded-full bg-sage-100 px-3 py-1 text-xs text-forest">{s}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Not Sure Which Programme?"
              title="Start with a Consultation"
              subtitle="Our wellness team will assess your concerns and recommend the most appropriate programme. Every journey begins with understanding your individual needs."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <BookingCTA title="Take the First Step" subtitle="Tell us about your wellness concerns and we'll help you find the right path." />
    </>
  );
}

export default WellnessConcerns;
