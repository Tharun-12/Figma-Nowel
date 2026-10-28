import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { RoomCard } from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ROOMS } from '@/data/content';
import { IMAGES } from '@/data/images';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Utensils, Waves, Leaf, Dumbbell } from 'lucide-react';
import { Link } from "react-router-dom";

export function Accommodation() {
  useDocumentTitle('Accommodation — Nowal NatureCare', 'Explore our Garden Rooms, Wellness Suites, and Forest Cottages — each designed for restful solitude in harmony with nature.');

  return (
    <>
      <PageHero
        image={IMAGES.roomSuite}
        title="Accommodation"
        subtitle="Living spaces designed for rest — where comfort meets simplicity and nature is never far."
        eyebrow="Stay With Us"
      />
      <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Accommodation' }]} />

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container-prose text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Our Living Spaces"
              title="Rooms, Suites & Cottages"
              subtitle="Each accommodation type is oriented towards the natural surroundings and crafted with natural materials, plant-based toiletries, and a calming palette. Choose the space that suits your retreat."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      {/* Room grid */}
      <section className="pb-16 lg:pb-24">
        <div className="container-wide">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((room) => (
              <StaggerItem key={room.slug}>
                <RoomCard room={room} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Facilities"
            title="Beyond Your Room"
            subtitle="The retreat offers shared spaces that extend the wellness experience throughout your stay."
            align="center"
            className="mb-12"
          />
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Utensils, title: 'Dining Hall', text: 'A communal dining space serving wholesome, plant-forward meals throughout the day.' },
              { icon: Waves, title: 'Swimming Pool', text: 'A serene pool area for gentle exercise and quiet relaxation amid greenery.' },
              { icon: Leaf, title: 'Gardens & Trails', text: 'Walking paths, medicinal plant gardens, and quiet corners for contemplation.' },
              { icon: Dumbbell, title: 'Yoga Pavilions', text: 'Indoor and outdoor spaces for daily yoga and meditation sessions.' },
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

      {/* Links */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Link to="/tariffs-packages" className="group block rounded-2xl border border-sage-200 p-8 transition-colors hover:border-forest hover:bg-sage-50">
              <h3 className="font-serif text-xl text-forest">Tariffs & Packages</h3>
              <p className="mt-2 text-sm text-charcoal-400">View accommodation rates and wellness programme packages.</p>
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/guest-guidelines" className="group block rounded-2xl border border-sage-200 p-8 transition-colors hover:border-forest hover:bg-sage-50">
              <h3 className="font-serif text-xl text-forest">Guest Guidelines</h3>
              <p className="mt-2 text-sm text-charcoal-400">Check-in times, policies, and what to expect during your stay.</p>
            </Link>
          </Reveal>
        </div>
      </section>

      <BookingCTA title="Find Your Perfect Retreat Space" subtitle="Enquire about availability and let us help you choose the right accommodation." />
    </>
  );
}

export default Accommodation;
