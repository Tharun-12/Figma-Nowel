import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { RoomCard } from '@/components/Cards';
import { ContactForm } from '@/components/ContactForm';
import { BookingCTA } from '@/components/BookingCTA';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ROOMS } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';
import { Check, ChevronLeft, ChevronRight, X, Clock, Users, BedDouble } from 'lucide-react';

export function RoomDetail() {
  const { slug } = useParams<{ slug: string }>();
  const room = ROOMS.find((r) => r.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useDocumentTitle(
    room ? `${room.title} — Nowal NatureCare` : 'Accommodation — Nowal NatureCare',
    room?.excerpt
  );

  if (!room) return <Navigate to="/accommodation" replace />;

  const related = ROOMS.filter((r) => r.slug !== room.slug);

  return (
    <>
      {/* Hero gallery */}
      <section className="relative pt-20">
        <div className="container-wide pt-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Accommodation', to: '/accommodation' }, { label: room.title }]} />
        </div>
        <div className="container-wide py-8">
          <Reveal>
            <p className="eyebrow mb-3">{room.occupancy}</p>
            <h1 className="font-serif text-display-md text-forest text-balance">{room.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-charcoal-400 text-pretty">{room.excerpt}</p>
          </Reveal>
        </div>
        <div className="container-wide pb-8">
          <div className="grid gap-3 lg:grid-cols-3">
            <button onClick={() => setLightboxIndex(0)} className="lg:col-span-2 overflow-hidden rounded-2xl aspect-[16/10] lg:aspect-auto">
              <img src={room.gallery[0]} alt={room.title} className="h-full w-full object-cover transition-transform hover:scale-105 duration-500" />
            </button>
            <div className="grid gap-3">
              {room.gallery.slice(1).map((img, i) => (
                <button key={i} onClick={() => setLightboxIndex(i + 1)} className="overflow-hidden rounded-2xl aspect-[16/10]">
                  <img src={img} alt={`${room.title} view ${i + 2}`} className="h-full w-full object-cover transition-transform hover:scale-105 duration-500" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-serif text-2xl text-forest mb-4">About This Space</h2>
              <p className="text-lg leading-relaxed text-charcoal-400 text-pretty">{room.description}</p>
            </Reveal>

            {/* Key info */}
            <Reveal className="mt-10">
              <div className="grid gap-4 sm:grid-cols-3">
                <InfoCard icon={Users} label="Occupancy" value={room.occupancy} />
                <InfoCard icon={BedDouble} label="Bed Config" value={room.bedConfig} />
                <InfoCard icon={Clock} label="Pricing" value={room.priceNote} />
              </div>
            </Reveal>

            {/* Amenities */}
            <Reveal className="mt-10">
              <h3 className="font-serif text-xl text-forest mb-4">Included Amenities</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {room.amenities.map((a) => (
                  <li key={a} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-sage-500 mt-0.5" strokeWidth={1.5} />
                    <span className="text-charcoal-400">{a}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Features */}
            <Reveal className="mt-10">
              <h3 className="font-serif text-xl text-forest mb-4">Room Features</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {room.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className="h-5 w-5 shrink-0 text-forest mt-0.5" strokeWidth={1.5} />
                    <span className="text-charcoal-400">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Arrival info */}
            <Reveal className="mt-10">
              <div className="rounded-xl bg-sand-100 border border-sand-200 p-6">
                <h3 className="font-serif text-lg text-forest mb-2">Arrival & Departure</h3>
                <p className="text-sm text-charcoal-400">Check-in from 2:00 PM. Check-out by 11:00 AM. Early arrival or late departure can be arranged subject to availability.</p>
              </div>
            </Reveal>
          </div>

          {/* Enquiry sidebar */}
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="sticky top-24 rounded-2xl border border-sage-200 bg-sand-100 p-7">
                <h3 className="font-serif text-lg text-forest">Enquire About This Room</h3>
                <p className="mt-2 text-sm text-charcoal-400">Interested in the {room.title}? Send us an enquiry and we'll respond within 24 hours.</p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-sand-100 py-16 lg:py-24">
        <div className="container-wide">
          <h2 className="font-serif text-2xl text-forest mb-8">Other Accommodation</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <RoomCard key={r.slug} room={r} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA title="Reserve Your Space" subtitle="Let us help you plan a stay in the perfect accommodation for your retreat." />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-900/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-5 right-5 text-ivory/80 hover:text-ivory" onClick={() => setLightboxIndex(null)} aria-label="Close">
              <X className="h-7 w-7" strokeWidth={1.5} />
            </button>
            <button className="absolute left-4 text-ivory/80 hover:text-ivory" onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => i === 0 ? room.gallery.length - 1 : (i ?? 0) - 1); }} aria-label="Previous">
              <ChevronLeft className="h-9 w-9" strokeWidth={1.5} />
            </button>
            <img src={room.gallery[lightboxIndex]} alt={`${room.title} image ${lightboxIndex + 1}`} className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
            <button className="absolute right-4 text-ivory/80 hover:text-ivory" onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => i === room.gallery.length - 1 ? 0 : (i ?? 0) + 1); }} aria-label="Next">
              <ChevronRight className="h-9 w-9" strokeWidth={1.5} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-sage-200 bg-white p-5">
      <Icon className="h-5 w-5 text-forest mb-2" strokeWidth={1.5} />
      <p className="text-xs uppercase tracking-wider text-charcoal-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-charcoal">{value}</p>
    </div>
  );
}

export default RoomDetail;
