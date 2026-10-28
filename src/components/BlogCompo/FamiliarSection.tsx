
import React from "react";

const challenges = [
  {
    title: "Burnout",
    description:
      "Running on empty, physically and mentally drained, with nothing left to give your partner at the end of the day.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85",
    imageAlt: "A couple sharing a quiet moment together",
  },
  {
    title: "Relationship Disconnect",
    description:
      "Living parallel lives — busy schedules, shallow conversations, and a creeping distance that neither of you planned.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=85",
    imageAlt: "A couple spending meaningful time together",
  },
  {
    title: "Digital Overload",
    description:
      "Screens before sleep, notifications at dinner, and the constant pull of a world that never lets you truly be present.",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85",
    imageAlt: "A peaceful moment away from daily distractions",
  },
];

export default function FamiliarSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4ecdf] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      {/* Warm cream background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 10% 35%, #fbf8f3 0%, transparent 48%), radial-gradient(ellipse at 90% 70%, #eee0cb 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1080px]">
        {/* Section heading */}
        <header className="mb-9 text-center sm:mb-10 lg:mb-12">
          <h2 className="font-serif text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#30251e] sm:text-4xl md:text-[42px]">
            Does This Sound Familiar?
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-[#766b60] sm:text-base md:text-lg">
            Modern life is quietly eroding the things that
            matter most. You deserve a reset together.
          </p>
        </header>

        {/* Challenge cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-8">
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className="group relative min-w-0 pt-0 sm:pt-0 lg:pt-0"
            >
              {/* Image panel */}
              <div className="relative h-[190px] overflow-hidden rounded-t-[22px] rounded-b-[18px] bg-gradient-to-br from-[#d9a6d8] via-[#eab8dc] to-[#f3c5dc] sm:h-[185px] lg:h-[195px]">
                <img
                  src={challenge.image}
                  alt={challenge.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-0 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Soft pink tint matching the reference */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9a6d8]/95 via-[#eab8dc]/95 to-[#f3c5dc]/95" />
              </div>

              {/* Overlapping text card */}
              <div className="relative z-10 -mt-10 mx-2 min-h-[205px] rounded-[17px] bg-white px-5 py-5 shadow-[0_12px_28px_rgba(74,55,38,0.09)] sm:mx-2 sm:min-h-[205px] sm:px-5 sm:py-6 lg:mx-2 lg:min-h-[205px] lg:px-5">
                <h3 className="font-serif text-[18px] font-bold leading-snug tracking-[-0.02em] text-[#352920] sm:text-[19px]">
                  {challenge.title}
                </h3>

                <p className="mt-3 text-[14px] leading-[1.65] text-[#71675d] sm:text-[15px]">
                  {challenge.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing quote */}
        <blockquote className="mx-auto mt-9 max-w-[720px] text-center font-sans text-[17px] leading-[1.65] text-[#55483d] sm:mt-10 sm:text-xl md:mt-12 md:text-[22px]">
          &quot;Planning a retreat of this caliber requires a
          shift in mindset — from &apos;vacationing&apos; to
          &apos;healing.&apos; Intentionality turns a holiday
          into a homecoming to yourselves.&quot;
        </blockquote>
      </div>
    </section>
  );
}
