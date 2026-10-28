import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Flower2, Leaf, Sprout } from 'lucide-react';

type YogaBannerProps = {
  image: string;
  imageAlt?: string;
  bookingTo?: string;
};

export function YogaBanner({ image, imageAlt = 'Man practising pranayama in a green garden', bookingTo = '/plan-your-retreat' }: YogaBannerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="yoga-banner relative isolate overflow-hidden bg-ivory">
      <div className="grid lg:min-h-[28rem] lg:grid-cols-[1.05fr_1fr]">
        {/* Image (top on mobile, right on desktop) */}
        <div className="yoga-banner__media relative order-1 h-72 sm:h-96 lg:order-2 lg:h-auto">
          <motion.img
            src={image}
            alt={imageAlt}
            initial={{ scale: reduceMotion ? 1 : 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
          />

          {/* Floating tagline pill */}
          <div className="yoga-banner__pill absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/70 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:right-6 sm:top-6 sm:text-sm">
            <Flower2 className="h-4 w-4" strokeWidth={1.5} />
            <span>Breathe • Align • Restore</span>
          </div>

          {/* Circular seal */}
          <div className="yoga-banner__seal absolute bottom-4 right-4 hidden h-24 w-24 items-center justify-center rounded-full border border-white/80 bg-forest-900/30 text-white backdrop-blur-sm sm:flex sm:h-28 sm:w-28 lg:bottom-8 lg:right-8">
            <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <path id="yoga-seal-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text className="fill-current" fontSize="9" letterSpacing="2.4" fontWeight="500">
                <textPath href="#yoga-seal-circle" startOffset="0">
                  HOLISTIC WELLNESS • NATURAL HEALING •
                </textPath>
              </text>
            </svg>
            <Sprout className="h-8 w-8" strokeWidth={1.4} />
          </div>
        </div>

        {/* Content panel */}
        <div className="yoga-banner__content relative order-2 flex items-center bg-gradient-to-br from-ivory via-sand-100 to-sage-100 px-6 py-12 sm:px-10 lg:order-1 lg:px-14 lg:py-16 xl:pl-[max(3.5rem,calc((100vw-80rem)/2+2rem))]">
          <Leaf className="pointer-events-none absolute -left-6 top-6 h-28 w-28 -rotate-12 text-sage-300/50" strokeWidth={1} aria-hidden="true" />
          <Leaf className="pointer-events-none absolute -bottom-4 left-4 h-24 w-24 rotate-45 text-sage-300/40" strokeWidth={1} aria-hidden="true" />

          {/* Curved edge between panel and image (desktop only) */}
          <svg
            className="pointer-events-none absolute -right-px top-0 hidden h-full w-16 text-ivory lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,0 C60,25 -10,60 40,100 L0,100 Z" className="fill-sage-100" />
            <path d="M0,0 C60,25 -10,60 40,100" fill="none" stroke="currentColor" strokeOpacity="0" />
          </svg>

          <div className="relative z-10 max-w-xl">
            <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-forest/80 sm:text-xs">
              Nowal NatureCare • Wellness &amp; Balance
              <span className="hidden h-px w-16 bg-forest/30 sm:block" />
            </p>

            <h1 className="mt-5 font-serif text-5xl font-bold leading-[1.02] text-forest-900 sm:text-6xl xl:text-7xl">
              Mindful Yoga
              <br />
              Routine
            </h1>
            <p className="mt-2 font-serif text-2xl text-forest sm:text-3xl">At Nowal NatureCare</p>

            <p className="mt-6 max-w-md font-serif text-base italic leading-relaxed text-forest/80 sm:text-lg">
              “Yoga aligns body, breath, and awareness—creating harmony, vitality, and conscious balance in everyday life.”
            </p>

            <Link
              to={bookingTo}
              className="yoga-banner__cta group mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-medium text-ivory shadow-lg shadow-forest/25 transition hover:bg-forest-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}