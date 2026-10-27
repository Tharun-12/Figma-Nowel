import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function OurStory() {
  useDocumentTitle('Our Story — Nowal NatureCare', 'The founding philosophy and journey of Nowal NatureCare — rooted in nature, driven by purpose.');

  return (
    <>
      <PageHero
        image={IMAGES.storyBridge}
        title="Rooted in Nature, Driven by Purpose"
        subtitle="The story of a retreat born from a deep belief in the body's natural capacity for renewal."
        eyebrow="Our Story"
        height="full"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Our Story' }]} />

      {/* Founding Philosophy */}
      <section className="py-16 lg:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <p className="eyebrow mb-4">The Beginning</p>
            <h2 className="font-serif text-display-md text-forest text-balance">A Conviction, Not a Concept</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal-400 text-left">
              <p>Every retreat has an origin story. Ours began not with a business plan, but with a conviction — a quiet certainty that nature, given the chance, knows how to heal.</p>
              <p>The founders of Nowal NatureCare had witnessed this firsthand. They had seen fatigue dissolve in fresh air. They had watched stress loosen its grip in the presence of greenery. They had experienced how simple, wholesome food and restful sleep could restore what years of modern living had depleted.</p>
              <p>What began as a personal practice became a calling: to create a place where others could experience the same restoration — not as patients, but as guests. Not through treatment alone, but through the integrated experience of nature, care, and mindful living.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Journey */}
      <ImageSection image={IMAGES.storyPath} alt="Serene pathway through a botanical garden" />

      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-prose">
          <Reveal>
            <p className="eyebrow mb-4">The Development</p>
            <h2 className="font-serif text-display-md text-forest text-balance">Building a Sanctuary</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal-400">
              <p>The retreat was shaped slowly and deliberately. Land was chosen for its natural beauty and seclusion. Structures were designed to complement rather than compete with the landscape. Gardens were planted with medicinal herbs and native species.</p>
              <p>Practitioners were brought in not just for their qualifications, but for their philosophy — a genuine commitment to personalised, attentive care. Programmes were developed not as packages to be sold, but as journeys to be tailored to each individual who arrived.</p>
              <p>What emerged was not a resort with a wellness wing, but a wellness retreat where every element — the food, the architecture, the silence, the therapies — works together toward a single purpose: the restoration of balance.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Our Commitment</p>
            <h2 className="font-serif text-display-md text-forest text-balance">A Promise to Every Guest</h2>
            <div className="mt-6 space-y-5 text-charcoal-400 leading-relaxed">
              <p>We remain committed to the principles that guided our founding: authenticity over trend, personalisation over scale, and the patient, unhurried pace of nature over the urgency of modern life.</p>
              <p>We do not promise miracles. We do not claim to cure. What we offer is something quieter and, we believe, more lasting — the conditions, the tools, and the support for your body to do what it was designed to do: restore itself.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={IMAGES.storyForest} alt="Forest path surrounded by greenery" className="rounded-2xl aspect-[4/3] object-cover w-full" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-wide">
          <SectionHeading eyebrow="The Retreat" title="Moments of Stillness" align="center" className="mb-10" />
          <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: IMAGES.galleryResort1, alt: 'Aerial resort view' },
              { src: IMAGES.galleryGarden1, alt: 'Garden walkway' },
              { src: IMAGES.galleryYoga2, alt: 'Meditation in nature' },
              { src: IMAGES.galleryPool2, alt: 'Serene pool' },
            ].map((img, i) => (
              <StaggerItem key={i}>
                <img src={img.src} alt={img.alt} className="rounded-xl aspect-square w-full object-cover" loading="lazy" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <BookingCTA
        title="Become Part of Our Story"
        subtitle="Your wellness journey begins with a single step. Let us help you take it."
        image={IMAGES.heroForest}
      />
    </>
  );
}

function ImageSection({ image, alt }: { image: string; alt: string }) {
  return (
    <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
      <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-forest-900/20" />
    </section>
  );
}

export default OurStory;
