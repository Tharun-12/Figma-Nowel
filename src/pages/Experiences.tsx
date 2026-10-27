import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EXPERIENCES } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { motion } from 'framer-motion';

export function Experiences() {
  useDocumentTitle('Experiences — Nowal NatureCare', 'Discover the spaces and experiences that make a stay at Nowal NatureCare restorative — gardens, pools, dining, and wellness facilities.');

  return (
    <>
      <PageHero
        image={IMAGES_EXPERIENCES_HERO}
        title="Experiences at Nowal"
        subtitle="Beyond treatment — the spaces, moments, and activities that make a retreat restorative."
        eyebrow="Discover"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Experiences' }]} />

      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((exp) => (
              <StaggerItem key={exp.slug}>
                <article className="group relative overflow-hidden rounded-2xl h-full">
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={exp.image}
                      alt={exp.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/20 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-xl text-ivory">{exp.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/75">{exp.description}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <SectionHeading
              eyebrow="More to Explore"
              title="Your Retreat, Your Pace"
              subtitle="Every experience at Nowal is optional. There is no schedule you must follow — only invitations to slow down, explore, and reconnect with what matters."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      <BookingCTA title="Come and Experience It" subtitle="The best way to understand Nowal is to be here. Plan your visit today." image={IMAGES_EXPERIENCES_CTA} />
    </>
  );
}

import { IMAGES } from '@/data/images';
const IMAGES_EXPERIENCES_HERO = IMAGES.experienceGarden;
const IMAGES_EXPERIENCES_CTA = IMAGES.galleryPool1;

export default Experiences;
