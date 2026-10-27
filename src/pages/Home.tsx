import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Sparkles, Utensils, Activity, TreePine, Star, Quote } from 'lucide-react';
import { PageHero, ScrollIndicator } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { ImageTextSection } from '@/components/ImageTextSection';
import { ProgrammeCard, TreatmentCard, RoomCard, ExperienceCard, BlogCard, TestimonialCard } from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { FAQAccordion } from '@/components/FAQAccordion';
import { IMAGES } from '@/data/images';
import { PROGRAMMES, TREATMENTS, ROOMS, EXPERIENCES, BLOG_POSTS, TESTIMONIALS, FAQS, WELLNESS_CONCERNS, CONTACT } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function Home() {
  useDocumentTitle(
    'Nowal NatureCare — Holistic Wellness & Naturopathy Retreat',
    'A holistic wellness retreat offering naturopathy, Ayurveda, yoga, meditation, and natural healing therapies in a serene natural setting.'
  );
  const reduceMotion = useReducedMotion();
  const featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={IMAGES.heroForest}
            alt="Lush forest path at a wellness retreat"
            initial={{ scale: reduceMotion ? 1 : 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-900/50 via-forest-900/30 to-forest-900/70" />
        </div>

        <div className="container-wide relative z-10 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow text-sage-300 mb-5">Holistic Wellness Retreat</p>
            <h1 className="font-serif text-display-xl text-ivory text-balance leading-[1.05]">
              Discover the Art of<br />Natural Wellbeing
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80 text-pretty">
              A sanctuary where nature, ancient wisdom, and personalised care come together to restore balance — nurturing body, mind, and spirit.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/wellness-programmes" className="btn-primary !bg-sage-400 !text-forest-800 hover:!bg-sage-300">
                Explore Wellness <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/plan-your-retreat" className="btn-secondary !border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-forest">
                Plan Your Retreat
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* Welcome to Nowal */}
      <ImageTextSection
        image={IMAGES.welcomeResort}
        imageAlt="Luxury villa surrounded by lush greenery"
        eyebrow="Welcome to Nowal"
        title="A Retreat Rooted in Nature"
        linkLabel="Our Story"
        linkTo="/our-story"
      >
        <p>
          Tucked away in a serene valley, Nowal NatureCare is more than a retreat — it is a return to the rhythms that sustain us. Here, the noise of everyday life gives way to birdsong, rustling leaves, and the gentle flow of water.
        </p>
        <p>
          Our philosophy is simple: the body, given the right conditions, knows how to heal itself. We create those conditions through natural therapies, nourishing food, mindful movement, and the profound stillness of the natural world.
        </p>
      </ImageTextSection>

      {/* Wellness Philosophy */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Four Pillars of Holistic Wellness"
            subtitle="We approach wellbeing not as a set of treatments, but as an integrated way of living — grounded in nature and tailored to each individual."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Leaf, title: 'Natural Living', text: 'Reconnecting with the five elements and the healing intelligence of the natural world.' },
              { icon: Heart, title: 'Mindful Rest', text: 'Creating space for stillness, reflection, and the deep rest that modern life rarely allows.' },
              { icon: Sparkles, title: 'Personalised Care', text: 'Every programme begins with understanding — your constitution, your needs, your goals.' },
              { icon: Activity, title: 'Holistic Wellbeing', text: 'Addressing body, mind, and spirit as one interconnected system, never in isolation.' },
            ].map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="h-full rounded-2xl bg-white p-7 border border-sand-200">
                  <pillar.icon className="h-8 w-8 text-forest mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-forest">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-400">{pillar.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Wellness Programmes */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Wellness Programmes"
              title="Journeys Tailored to You"
              subtitle="From naturopathy and Ayurveda to yoga and detox, each programme is personalised following a consultation with our wellness team."
            />
            <Link to="/wellness-programmes" className="btn-ghost shrink-0">
              All Programmes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMMES.map((p) => (
              <StaggerItem key={p.slug}>
                <ProgrammeCard programme={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Signature Therapies */}
      <section className="bg-forest-800 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Signature Therapies"
            title="Natural Therapies, Gently Delivered"
            subtitle="A curated directory of traditional and natural therapies, each administered by trained practitioners in calm, dedicated spaces."
            light
            className="mb-10"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TREATMENTS.slice(0, 4).map((t) => (
              <StaggerItem key={t.slug}>
                <div className="group h-full overflow-hidden rounded-2xl bg-forest-700/50">
                  <Link to={`/treatments/${t.slug}`} className="block overflow-hidden aspect-[4/3]">
                    <motion.img
                      src={t.image}
                      alt={t.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-ivory">{t.title}</h3>
                    <p className="mt-1.5 text-sm text-ivory/60 line-clamp-2">{t.excerpt}</p>
                    <Link to={`/treatments/${t.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm text-sage-300 hover:text-sage-200">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Link to="/treatments" className="btn-secondary !border-sage-400/40 !text-sage-300 hover:!bg-sage-400 hover:!text-forest-800">
              View All Treatments <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accommodation Preview */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Accommodation"
              title="Spaces Designed for Rest"
              subtitle="Rooms, suites, and cottages that blend comfort with simplicity — each oriented towards nature and crafted for restful solitude."
            />
            <Link to="/accommodation" className="btn-ghost shrink-0">
              All Accommodation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room) => (
              <StaggerItem key={room.slug}>
                <RoomCard room={room} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Experiences at Nowal */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Experiences"
            title="Beyond Treatment"
            subtitle="The retreat experience extends far beyond the therapy room — into gardens, pavilions, pools, and quiet corners that invite exploration."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.slice(0, 6).map((exp) => (
              <StaggerItem key={exp.slug}>
                <ExperienceCard experience={exp} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Nutrition and Mindful Dining */}
      <ImageTextSection
        image={IMAGES.foodBowl}
        imageAlt="Wholesome breakfast bowl with fresh fruit and granola"
        eyebrow="Mindful Dining"
        title="Nourishment as Medicine"
        reverse
        linkLabel="Learn More"
        linkTo="/experiences"
      >
        <p>
          Our kitchen treats food as the foundation of wellness. Meals are plant-forward, seasonal, and prepared with ingredients sourced as locally as possible — designed to nourish without overwhelming.
        </p>
        <p>
          Dietary preferences and requirements are accommodated thoughtfully, with every meal an opportunity to practise mindful eating and reconnect with the simple pleasure of wholesome food.
        </p>
      </ImageTextSection>

      {/* Diseases and Wellness Concerns */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Wellness Concerns"
            title="Supporting Your Health Journey"
            subtitle="We offer complementary wellness support for a range of health concerns. All programmes are delivered alongside, not in place of, professional medical care."
            className="mb-10"
          />
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WELLNESS_CONCERNS.slice(0, 9).map((concern) => (
              <StaggerItem key={concern.slug}>
                <Link
                  to="/wellness-concerns"
                  className="group flex items-center gap-4 rounded-xl border border-sage-200 bg-white p-5 transition-colors hover:border-forest hover:bg-sage-50"
                >
                  <img src={concern.image} alt="" className="h-14 w-14 rounded-lg object-cover" loading="lazy" />
                  <div>
                    <h3 className="font-medium text-forest group-hover:text-earth-600">{concern.title}</h3>
                    <p className="text-xs text-charcoal-400 line-clamp-1">{concern.services.join(', ')}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-8">
            <Link to="/wellness-concerns" className="btn-ghost">
              All Wellness Concerns <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Nowal */}
      <section className="bg-forest-800 py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Why Nowal"
                title="A Sanctuary, Not a Schedule"
                subtitle="What sets us apart is not any single treatment or amenity — it is the atmosphere of unhurried, attentive care that permeates every aspect of the retreat."
                light
              />
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-6">
                {[
                  { icon: TreePine, title: 'Immersive Natural Setting', text: 'Set within lush greenery, the retreat itself is a healing tool — a place to slow down and breathe.' },
                  { icon: Leaf, title: 'Authentic Natural Approach', text: 'Rooted in traditional naturopathy and Ayurveda, our programmes honour the body\u2019s own healing intelligence.' },
                  { icon: Heart, title: 'Personalised Guest Experience', text: 'Small numbers and attentive care mean every guest is known by name and supported as an individual.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-700">
                      <item.icon className="h-6 w-6 text-sage-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-ivory">{item.title}</h3>
                      <p className="mt-1 text-sm text-ivory/65 leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Gallery"
              title="A Glimpse of Nowal"
              subtitle="The landscapes, spaces, and moments that make a stay at Nowal NatureCare a restorative experience."
            />
            <Link to="/gallery" className="btn-ghost shrink-0">
              Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { src: IMAGES.galleryResort1, alt: 'Aerial resort view' },
              { src: IMAGES.galleryGarden1, alt: 'Tropical garden walkway' },
              { src: IMAGES.galleryYoga1, alt: 'Yoga by the river' },
              { src: IMAGES.galleryPool1, alt: 'Resort swimming pool' },
              { src: IMAGES.galleryRoom1, alt: 'Luxury room with view' },
              { src: IMAGES.galleryFood1, alt: 'Fresh quinoa salad' },
              { src: IMAGES.galleryTreatment1, alt: 'Outdoor massage' },
              { src: IMAGES.galleryResort3, alt: 'Villas at sunset' },
            ].map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <Link to="/gallery" className="group block overflow-hidden rounded-xl aspect-square">
                  <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Testimonials */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Guest Voices"
            title="Stories of Transformation"
            subtitle="Authentic reflections from guests who have experienced the retreat."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 lg:grid-cols-2">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <StaggerItem key={t.name}>
                <TestimonialCard testimonial={t} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="btn-ghost">
              Read More Testimonials <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nowal Wisdom (Blog) */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Nowal Wisdom"
              title="Insights & Stories"
              subtitle="Reflections on natural wellness, mindful living, and the art of retreat."
            />
            <Link to="/blog" className="btn-ghost shrink-0">
              All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Reveal>
            <BlogCard post={featuredPost} featured />
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-3" delay={0.1}>
            {otherPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked"
            subtitle="Answers to common questions about staying at Nowal NatureCare."
            align="center"
            className="mb-10"
          />
          <FAQAccordion categories={FAQS.slice(0, 3)} />
          <div className="mt-8 text-center">
            <Link to="/faqs" className="btn-ghost">
              All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <BookingCTA
        title="Begin Your Wellness Journey"
        subtitle="Take the first step towards balance, rest, and renewal. Our team is ready to help you plan a retreat tailored to your needs."
        image={IMAGES.ctaFinal}
      />
    </>
  );
}
