import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { ImageTextSection } from '@/components/ImageTextSection';
import { BookingCTA } from '@/components/BookingCTA';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ContactForm } from '@/components/ContactForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGES } from '@/data/images';
import { FAQS, TEAM } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Leaf, Droplets, Sun, Wind, Sparkles } from 'lucide-react';

export function Naturopathy() {
  useDocumentTitle('Naturopathy — Nowal NatureCare', 'Naturopathy at Nowal NatureCare: natural healing through the five elements — earth, water, fire, air, and ether.');

  return (
    <>
      <PageHero
        image={IMAGES.programmeNaturopathy}
        title="Naturopathy"
        subtitle="Healing through the five elements — the body's own intelligence, gently supported."
        eyebrow="Natural Healing"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wellness Programmes', to: '/wellness-programmes' }, { label: 'Naturopathy' }]} />

      <ImageTextSection
        image={IMAGES.philosophyNature}
        imageAlt="Lush green pathway"
        eyebrow="Introduction"
        title="The Science of Natural Healing"
      >
        <p>Naturopathy is a system of wellness that recognises the body's inherent ability to heal itself. Rather than suppressing symptoms, it seeks to identify and address the underlying causes of imbalance — through the five elements that sustain all life.</p>
        <p>At Nowal NatureCare, naturopathy is not a treatment you receive passively. It is a way of living that you experience during your stay and take home with you — a return to simple, natural rhythms that support lasting health.</p>
      </ImageTextSection>

      {/* Five Elements */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The Five Elements"
            title="Earth, Water, Fire, Air & Ether"
            subtitle="Each element plays a role in the healing process, and our therapies work with all five in concert."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Leaf, element: 'Earth', text: 'Mud therapy and grounding practices that draw out impurities.' },
              { icon: Droplets, element: 'Water', text: 'Hydrotherapy in its many forms to stimulate circulation and cleansing.' },
              { icon: Sun, element: 'Fire', text: 'Sun baths and warmth therapies to support metabolism and vitality.' },
              { icon: Wind, element: 'Air', text: 'Breathing practices and fresh-air sessions in the natural surroundings.' },
              { icon: Sparkles, element: 'Ether', text: 'Meditation and fasting practices that create space for renewal.' },
            ].map((item) => (
              <StaggerItem key={item.element}>
                <div className="rounded-2xl bg-white p-6 border border-sand-200 text-center h-full">
                  <item.icon className="h-8 w-8 text-forest mx-auto mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif text-base text-forest">{item.element}</h3>
                  <p className="mt-2 text-xs text-charcoal-400 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Therapies */}
      <ImageTextSection
        image={IMAGES.treatmentMud}
        imageAlt="Yoga practice in nature"
        eyebrow="Available Therapies"
        title="Natural Therapies in Practice"
        reverse
        linkLabel="View All Treatments"
        linkTo="/treatments"
      >
        <p>Our naturopathic therapies include mud therapy, hydrotherapy, massage, and dietary therapy — each selected and combined based on your personal consultation.</p>
        <p>Treatments are delivered in dedicated, calm spaces by trained practitioners who adjust each session to your comfort and response.</p>
      </ImageTextSection>

      {/* Lifestyle */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Lifestyle Support"
            title="Rest, Movement & Nourishment"
            subtitle="Naturopathy extends beyond the therapy room into every aspect of daily life at the retreat."
            className="mb-10"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Restful Sleep', text: 'Early nights, digital detox, and calm evenings that allow the body its deepest recovery.' },
              { title: 'Gentle Movement', text: 'Daily yoga, nature walks, and mindful movement that energise without exhausting.' },
              { title: 'Nourishing Diet', text: 'Simple, plant-forward meals designed to support cleansing and vitality.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-sage-200 bg-white p-7 h-full">
                  <h3 className="font-serif text-lg text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Practitioner */}
      {TEAM[0] && (
        <section className="bg-sand-100 py-16 lg:py-24">
          <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img src={TEAM[0].image} alt={TEAM[0].name} className="rounded-2xl aspect-[4/5] object-cover max-w-sm mx-auto" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-3">Your Practitioner</p>
              <h2 className="font-serif text-display-sm text-forest">{TEAM[0].name}</h2>
              <p className="text-earth-500 mt-1">{TEAM[0].role}</p>
              <p className="mt-4 text-charcoal-400 leading-relaxed">{TEAM[0].bio}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Medical disclaimer */}
      <section className="py-12 bg-forest-50">
        <div className="container-prose text-center">
          <p className="text-sm text-charcoal-400 leading-relaxed">
            Naturopathy is a complementary wellness approach. Treatment suitability requires professional assessment. Please consult your physician for specific medical conditions and continue any prescribed medical treatment.
          </p>
        </div>
      </section>

      {/* FAQs + Enquiry */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Questions" title="Naturopathy FAQs" className="mb-8" />
            <FAQAccordion categories={FAQS.filter((c) => c.category === 'Wellness Programmes')} />
          </div>
          <div>
            <SectionHeading eyebrow="Enquire" title="Start Your Naturopathy Journey" className="mb-8" />
            <ContactForm />
          </div>
        </div>
      </section>

      <BookingCTA title="Experience Natural Healing" subtitle="Discover what naturopathy can do for your wellbeing." />
    </>
  );
}

export default Naturopathy;
