import { Leaf } from 'lucide-react';
import heroImage from '@/assets/OurStoryImages/Our-Story-Hero-banner.jpeg';

type Props = { title: string; tagline: string };

export function NncHeroBanner({ title, tagline }: Props) {
  return (
    <section className="nnc-hero relative w-full overflow-hidden bg-[#0f4a2a]">
      <div className="nnc-hero__layout flex flex-col lg:min-h-[440px] lg:flex-row xl:min-h-[520px] 2xl:min-h-[620px]">
        {/* Photo */}
        <div className="nnc-hero__media relative aspect-[16/10] w-full sm:aspect-[16/8] lg:aspect-auto lg:w-[62%]">
          <img
            src={heroImage}
            alt="Nowal NatureCare resort building surrounded by gardens at sunset"
            className="nnc-hero__img absolute inset-0 h-full w-full object-cover object-[25%_center] sm:object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          {/* soft fade so the photo blends into the panel on mobile */}
          <div className="nnc-hero__fade pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f4a2a]/70 to-transparent lg:hidden" />
        </div>

        {/* Green panel */}
        <div className="nnc-hero__panel relative flex flex-1 items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,#1b6137_0%,#0f4a2a_55%,#0a3820_100%)] px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-12 lg:pl-20">
          {/* Gold wavy edge (desktop only) */}
          <svg
            aria-hidden
            viewBox="0 0 80 100"
            preserveAspectRatio="none"
            className="nnc-hero__curve pointer-events-none absolute inset-y-0 -left-[79px] z-10 hidden h-full w-20 lg:block"
          >
            <path d="M80 0 V100 H34 C6 72 60 28 34 0 Z" fill="#0f4a2a" />
            <path d="M34 100 C6 72 60 28 34 0" fill="none" stroke="#d8b85a" strokeWidth="3" vectorEffect="non-scaling-stroke" />
          </svg>

          <Leaf aria-hidden strokeWidth={1} className="nnc-hero__leaf nnc-hero__leaf--tr absolute -right-4 -top-4 h-24 w-24 rotate-12 text-white/15 sm:h-32 sm:w-32" />
          <Leaf aria-hidden strokeWidth={1} className="nnc-hero__leaf nnc-hero__leaf--bl absolute -bottom-6 right-2 h-32 w-32 -rotate-45 text-[#7fb98f]/30 sm:h-44 sm:w-44" />

          <div className="nnc-hero__content relative z-20 max-w-md">
            <h1 className="nnc-hero__title font-serif text-[clamp(2rem,4.2vw,3.75rem)] font-bold leading-tight text-white">
              {title}
            </h1>
            <div className="nnc-hero__divider my-4 flex items-center justify-center gap-3 sm:my-5">
              <span className="h-px w-14 bg-[#d8b85a]/70 sm:w-20" />
              <Leaf className="h-4 w-4 text-[#d8b85a]" strokeWidth={1.5} />
              <span className="h-px w-14 bg-[#d8b85a]/70 sm:w-20" />
            </div>
            <p className="nnc-hero__tagline text-[clamp(1rem,1.5vw,1.375rem)] leading-snug text-[#e8f0e2]">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}