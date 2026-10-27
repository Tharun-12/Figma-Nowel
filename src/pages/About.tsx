import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { ImageTextSection } from '@/components/ImageTextSection';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { IMAGES } from '@/data/images';
import { TEAM, CONTACT } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Leaf, Target, Eye, TreePine, Recycle, HandHeart } from 'lucide-react';

export function About() {
  useDocumentTitle('About Us — Nowal NatureCare', 'Learn about Nowal NatureCare, our philosophy of natural healing, our team of practitioners, and our commitment to holistic wellness.');

  return (
    <>
      <PageHero
        image={IMAGES.welcomeResort}
        title="A Sanctuary for Natural Healing"
        subtitle="Where ancient wisdom, attentive hospitality, and the healing power of nature converge."
        eyebrow="About Us"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />

      <ImageTextSection
        image={IMAGES.philosophyNature}
        imageAlt="Lush tropical pathway at the retreat"
        eyebrow="Our Introduction"
        title="The Nowal NatureCare Philosophy"
        linkLabel="Read Our Story"
        linkTo="/our-story"
      >
        <p>
          Nowal NatureCare was born from a simple conviction: that the human body, supported by the right conditions, possesses an extraordinary capacity for self-renewal. We do not see health as the absence of illness, but as a state of vibrant balance — physical, mental, and emotional.
        </p>
        <p>
          Our approach draws on the timeless principles of naturopathy and Ayurveda, complemented by yoga, meditation, and the restorative power of immersion in nature. Every aspect of the retreat — from the architecture to the meals, from the therapies to the silence — is designed to support this philosophy.
        </p>
      </ImageTextSection>

      {/* Mission & Vision */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl bg-white p-8 lg:p-10 border border-sand-200 h-full">
                <Target className="h-8 w-8 text-forest mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-forest">Our Mission</h3>
                <p className="mt-3 text-charcoal-400 leading-relaxed">
                  To provide a sanctuary where individuals can reconnect with their natural state of balance through personalised wellness programmes, authentic natural therapies, and the restorative power of a serene natural environment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-white p-8 lg:p-10 border border-sand-200 h-full">
                <Eye className="h-8 w-8 text-forest mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-forest">Our Vision</h3>
                <p className="mt-3 text-charcoal-400 leading-relaxed">
                  To be a trusted destination for holistic wellness — recognised for our commitment to authentic natural healing, responsible care, and the transformative experiences we offer every guest who walks through our gates.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Holistic Philosophy */}
      <ImageTextSection
        image={IMAGES.philosophyMeditation}
        imageAlt="Woman meditating surrounded by tropical plants"
        eyebrow="Holistic Approach"
        title="Nature, Hospitality & Wellness in Harmony"
        reverse
      >
        <p>
          We believe that true wellness emerges when three elements are in harmony: the healing intelligence of nature, the warmth of genuine hospitality, and the wisdom of traditional wellness practices. Remove any one, and the experience is incomplete.
        </p>
        <p>
          Nature provides the setting and the tools. Hospitality ensures that every guest feels cared for, respected, and at ease. And our wellness practices — naturopathy, Ayurveda, yoga — provide the framework through which healing is understood and supported.
        </p>
      </ImageTextSection>

      {/* Architecture & Surroundings */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal className="order-2 lg:order-1">
              {eyebrow('Architecture & Surroundings')}
              <h2 className="font-serif text-display-md text-forest text-balance">Built to Disappear into Nature</h2>
              <div className="mt-5 space-y-4 text-charcoal-400 leading-relaxed">
                <p>The retreat was designed with a light touch — structures that nestle into the landscape rather than dominating it. Natural materials, open spaces, and careful orientation ensure that the boundary between inside and outside gently dissolves.</p>
                <p>Walking paths wind through medicinal plant gardens, meditation pavilions overlook water features, and every room opens towards greenery. The architecture itself is an invitation to slow down and pay attention.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <img src={IMAGES.galleryResort2} alt="Resort architecture nestled in forest" className="rounded-2xl aspect-[4/3] object-cover w-full" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Team"
            title="Practitioners Who Care"
            subtitle="Our wellness team brings together qualified practitioners dedicated to personalised, attentive care."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <StaggerItem key={member.name}>
                <div className="overflow-hidden rounded-2xl bg-white border border-sand-200">
                  <img src={member.image} alt={member.name} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-forest">{member.name}</h3>
                    <p className="text-xs uppercase tracking-wider text-earth-500 mt-1">{member.role}</p>
                    <p className="mt-3 text-sm text-charcoal-400 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Sustainability"
            title="Mindful Living, Mindful Practice"
            subtitle="Our commitment to natural wellness extends to how we operate — with respect for the environment that sustains us."
            className="mb-10"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: TreePine, title: 'Native Landscaping', text: 'Gardens feature native and medicinal plants that support local biodiversity and require minimal water.' },
              { icon: Recycle, title: 'Waste Conscious', text: 'We compost organic waste, minimise single-use materials, and prioritise reusable alternatives.' },
              { icon: HandHeart, title: 'Local Sourcing', text: 'Food, materials, and staffing are sourced locally wherever possible, supporting the surrounding community.' },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-sage-200 bg-white p-7 h-full">
                  <item.icon className="h-8 w-8 text-forest mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-forest">{item.title}</h3>
                  <p className="mt-2 text-sm text-charcoal-400 leading-relaxed">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <BookingCTA
        title="Come Experience Nowal"
        subtitle="We invite you to discover what a retreat rooted in nature can do for your wellbeing."
        image={IMAGES.ctaFinal}
      />
    </>
  );
}

function eyebrow(text: string) {
  return <p className="eyebrow mb-3">{text}</p>;
}

export default About;
