import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { ImageTextSection } from '@/components/ImageTextSection';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Wind, Flower, Mountain, Sunrise } from 'lucide-react';

export function YogaMeditation() {
  useDocumentTitle('Yoga & Meditation — Nowal NatureCare', 'Yoga and meditation at Nowal NatureCare: daily sessions for all levels in indoor and outdoor practice spaces.');

  return (
    <>
      <PageHero
        image={IMAGES.heroYoga}
        title="Yoga & Meditation"
        subtitle="Mindful movement, conscious breathing, and inner stillness — in harmony with nature."
        eyebrow="Mindful Practice"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wellness Programmes', to: '/wellness-programmes' }, { label: 'Yoga & Meditation' }]} />

      <ImageTextSection
        image={IMAGES.experienceYoga}
        imageAlt="Woman practicing yoga by a pool"
        eyebrow="Introduction"
        title="A Practice for Every Body"
      >
        <p>Our yoga and meditation sessions are designed for all levels — from complete beginners to experienced practitioners. There is no performance, no competition, only the invitation to move and breathe with awareness.</p>
        <p>Sessions are held in both indoor studios and outdoor pavilions, allowing you to practise in harmony with the natural surroundings. The sound of birdsong and rustling leaves becomes part of the experience.</p>
      </ImageTextSection>

      {/* Practices */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What We Offer"
            title="Practices for Body, Breath & Mind"
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, title: 'Asana Practice', text: 'Gentle postures that build strength, flexibility, and body awareness — adjusted for every level.' },
              { icon: Wind, title: 'Pranayama', text: 'Breathing techniques that calm the nervous system and cultivate energy and focus.' },
              { icon: Flower, title: 'Guided Meditation', text: 'Sessions that teach you to observe the mind with kindness and develop inner stillness.' },
              { icon: Sunrise, title: 'Mindfulness', text: 'Practical techniques for bringing present-moment awareness into everyday activities.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl bg-white p-7 border border-sand-200 h-full">
                  <item.icon className="h-8 w-8 text-forest mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Practice environments */}
      <ImageTextSection
        image={IMAGES.experienceMeditation}
        imageAlt="Woman meditating in a lush garden"
        eyebrow="Practice Spaces"
        title="Indoor & Outdoor Pavilions"
        reverse
      >
        <p>Our indoor studio provides a calm, climate-controlled environment for early morning and evening sessions. Large windows maintain a connection to the outdoors.</p>
        <p>The outdoor pavilion, set within the gardens, is where most guests prefer to practise — open to the breeze, the birdsong, and the dappled light of the morning sun.</p>
      </ImageTextSection>

      {/* Beginner-friendly */}
      <section className="py-16 lg:py-24">
        <div className="container-prose">
          <Reveal>
            <div className="rounded-2xl bg-sage-100 border border-sage-200 p-8 lg:p-12">
              <p className="eyebrow mb-3">New to Yoga?</p>
              <h2 className="font-serif text-display-sm text-forest">You Are Welcome Here</h2>
              <div className="mt-5 space-y-4 text-charcoal-400 leading-relaxed">
                <p>If you have never practised yoga or meditation before, you are in the right place. Our sessions are gentle and accessible, with instructors who provide individual attention and modifications for every body type and fitness level.</p>
                <p>There is no need for special clothing or equipment. Come as you are. The only requirement is a willingness to slow down and pay attention.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading eyebrow="Gallery" title="Moments of Practice" align="center" className="mb-10" />
          <StaggerGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { src: IMAGES.galleryYoga1, alt: 'Yoga by the river' },
              { src: IMAGES.galleryYoga2, alt: 'Meditation in nature' },
              { src: IMAGES.experienceYoga, alt: 'Yoga by the pool' },
              { src: IMAGES.experienceMeditation, alt: 'Meditation in the garden' },
            ].map((img, i) => (
              <StaggerItem key={i}>
                <img src={img.src} alt={img.alt} className="rounded-xl aspect-square w-full object-cover" loading="lazy" />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <BookingCTA title="Find Your Stillness" subtitle="Join us for daily sessions that nourish body, breath, and mind." />
    </>
  );
}

export default YogaMeditation;
