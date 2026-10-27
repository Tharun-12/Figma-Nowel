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

export function Ayurveda() {
  useDocumentTitle('Ayurveda — Nowal NatureCare', 'Ayurveda at Nowal NatureCare: the ancient science of life, offering personalised balance through diet, herbs, and traditional therapies.');

  return (
    <>
      <PageHero
        image={IMAGES.heroHerbs}
        title="Ayurveda"
        subtitle="The ancient science of life — personalised balance through diet, herbs, and traditional wisdom."
        eyebrow="Traditional Wisdom"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Wellness Programmes', to: '/wellness-programmes' }, { label: 'Ayurveda' }]} />

      <ImageTextSection
        image={IMAGES.treatmentHerbal}
        imageAlt="Herbal medicine preparation with mortar and pestle"
        eyebrow="Introduction"
        title="The Science of Life"
      >
        <p>Ayurveda, which translates as "the science of life," is a system of traditional medicine that originated in India over 3,000 years ago. At its heart is the understanding that each person has a unique constitution, and that health is a state of balance specific to that individual.</p>
        <p>Our Ayurvedic programmes begin with a consultation to understand your constitution — your prakriti — followed by personalised recommendations for diet, herbal support, daily routines, and traditional therapies.</p>
      </ImageTextSection>

      {/* Three Doshas */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The Doshas"
            title="Vata, Pitta & Kapha"
            subtitle="Three fundamental energies that govern the body and mind. Understanding your dominant dosha is the key to personalised wellness."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 lg:grid-cols-3">
            {[
              { name: 'Vata', qualities: 'Air & Ether', text: 'Governs movement, breath, and the nervous system. When balanced: creativity and vitality. When disturbed: anxiety and dryness.', color: 'text-sky-700' },
              { name: 'Pitta', qualities: 'Fire & Water', text: 'Governs digestion, metabolism, and transformation. When balanced: focus and intelligence. When disturbed: irritation and inflammation.', color: 'text-orange-700' },
              { name: 'Kapha', qualities: 'Earth & Water', text: 'Governs structure, stability, and immunity. When balanced: strength and calm. When disturbed: sluggishness and congestion.', color: 'text-forest' },
            ].map((dosha) => (
              <StaggerItem key={dosha.name}>
                <div className="rounded-2xl bg-white p-8 border border-sand-200 h-full">
                  <h3 className={`font-serif text-2xl ${dosha.color}`}>{dosha.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-earth-500 mt-1">{dosha.qualities}</p>
                  <p className="mt-4 text-sm text-charcoal-400 leading-relaxed">{dosha.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Treatments */}
      <ImageTextSection
        image={IMAGES.treatmentMassage}
        imageAlt="Relaxing massage therapy session"
        eyebrow="Available Treatments"
        title="Traditional Ayurvedic Therapies"
        reverse
        linkLabel="View All Treatments"
        linkTo="/treatments"
      >
        <p>Our Ayurvedic therapies include traditional oil-based massage, herbal compresses, and personalised dietary guidance. Each treatment is selected based on your constitutional assessment.</p>
        <p>All therapies are delivered by trained practitioners in calm, dedicated treatment rooms designed to support deep relaxation.</p>
      </ImageTextSection>

      {/* Consultation & Facilities */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow mb-3">Personalised Consultation</p>
              <h2 className="font-serif text-display-sm text-forest">Your Prakriti Assessment</h2>
              <div className="mt-5 space-y-4 text-charcoal-400 leading-relaxed">
                <p>Your Ayurvedic journey begins with a detailed consultation to determine your prakriti — your unique constitutional balance. This assessment considers your physical characteristics, digestion, sleep patterns, emotional tendencies, and lifestyle.</p>
                <p>The results guide every aspect of your programme: which therapies are most appropriate, which foods will support your balance, and which daily routines to adopt during and after your stay.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-3">Treatment Environment</p>
              <h2 className="font-serif text-display-sm text-forest">Spaces for Healing</h2>
              <div className="mt-5 space-y-4 text-charcoal-400 leading-relaxed">
                <p>Our Ayurvedic treatment rooms are designed for calm — warm lighting, natural materials, and the subtle scent of herbal preparations. Each space is private and dedicated to a single guest at a time.</p>
                <p>Herbal preparations are made with care, using traditionally recognised ingredients and methods. We discuss any allergies or sensitivities before any application.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Practitioner */}
      {TEAM[1] && (
        <section className="bg-sand-100 py-16 lg:py-24">
          <div className="container-wide grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <img src={TEAM[1].image} alt={TEAM[1].name} className="rounded-2xl aspect-[4/5] object-cover max-w-sm mx-auto" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-3">Your Consultant</p>
              <h2 className="font-serif text-display-sm text-forest">{TEAM[1].name}</h2>
              <p className="text-earth-500 mt-1">{TEAM[1].role}</p>
              <p className="mt-4 text-charcoal-400 leading-relaxed">{TEAM[1].bio}</p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="py-12 bg-forest-50">
        <div className="container-prose text-center">
          <p className="text-sm text-charcoal-400 leading-relaxed">
            Ayurveda is a complementary wellness approach. Please consult your physician for specific medical conditions and continue any prescribed treatment.
          </p>
        </div>
      </section>

      {/* FAQs + Enquiry */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Questions" title="Ayurveda FAQs" className="mb-8" />
            <FAQAccordion categories={FAQS.filter((c) => c.category === 'Wellness Programmes')} />
          </div>
          <div>
            <SectionHeading eyebrow="Enquire" title="Begin Your Ayurvedic Journey" className="mb-8" />
            <ContactForm />
          </div>
        </div>
      </section>

      <BookingCTA title="Discover Ancient Balance" subtitle="Let Ayurveda's timeless wisdom guide you towards lasting wellbeing." />
    </>
  );
}

export default Ayurveda;
