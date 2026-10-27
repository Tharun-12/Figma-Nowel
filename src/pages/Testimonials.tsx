import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { TestimonialCard } from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TESTIMONIALS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function Testimonials() {
  useDocumentTitle('Testimonials — Nowal NatureCare', 'Authentic guest reflections on their wellness retreat experience at Nowal NatureCare.');

  return (
    <>
      <PageHero
        image={IMAGES.heroWellness}
        title="Guest Stories"
        subtitle="Authentic reflections from guests who have experienced the retreat."
        eyebrow="Testimonials"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Testimonials' }]} />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="Guest Voices"
              title="Experiences Shared"
              subtitle="These testimonials reflect the individual experiences of our guests. Every wellness journey is unique, and we are grateful to those who have shared theirs."
            />
          </Reveal>

          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <StaggerItem key={t.name}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Your Turn"
              title="Write Your Own Story"
              subtitle="Every guest arrives with their own hopes and leaves with their own experience. We would be honoured to be part of yours."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <BookingCTA title="Begin Your Experience" subtitle="Enquire about a stay and discover what a retreat at Nowal can do for you." />
    </>
  );
}

export default Testimonials;
