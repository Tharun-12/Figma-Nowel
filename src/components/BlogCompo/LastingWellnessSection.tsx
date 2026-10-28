
import React from "react";

const resortImage =
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=90";

const sunsetImage =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85";

function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 31C11 26 9 19 10 12c5 2 9 7 10 13 2-7 6-12 11-15 2 9-2 16-11 21Z" />
      <path d="M20 31C13 24 6 24 3 28c5 4 10 5 17 3Z" />
      <path d="M20 31c7-7 14-7 17-3-5 4-10 5-17 3Z" />
      <path d="M20 25V7" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function LeafDecoration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 160"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 155C28 115 49 65 78 8" />
      <path d="M22 125C7 120 4 106 8 96c12 4 18 15 14 29Z" />
      <path d="M36 96C20 88 20 75 25 64c12 7 16 18 11 32Z" />
      <path d="M52 67C40 55 44 42 50 32c10 11 11 22 4 35Z" />
      <path d="M68 36C63 25 71 14 80 8c5 12 0 22-12 28Z" />
      <path d="M27 119C43 114 55 103 60 90c-15 4-26 13-33 29Z" />
      <path d="M42 88C58 81 69 68 72 56c-15 7-24 17-30 32Z" />
    </svg>
  );
}

export default function LastingWellnessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6eee2] px-3 py-6 text-[#35291e] sm:px-6 sm:py-9 lg:px-8 lg:py-12">
      {/* Warm background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 15% 15%, #fffdf8 0%, transparent 50%), radial-gradient(ellipse at 85% 80%, #ead9bd 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 items-stretch overflow-hidden rounded-[22px] md:grid-cols-2 md:rounded-[30px]">
          {/* Resort photograph */}
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[380px] md:min-h-[440px] lg:min-h-[475px]">
            <img
              src={resortImage}
              alt="Luxury nature retreat with a pool and relaxing outdoor seating"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

            {/* Organic gold border */}
            <div
              className="pointer-events-none absolute -right-16 -top-10 hidden h-[120%] w-[30%] rounded-[50%] border-r-[9px] border-[#dfbd7c] md:block"
              aria-hidden="true"
            />

            <LeafDecoration className="pointer-events-none absolute -bottom-4 right-1 h-36 w-20 rotate-12 text-[#e0c797] sm:h-44 sm:w-24" />
          </div>

          {/* Editorial content */}
          <div className="relative flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 md:px-7 lg:px-10 lg:py-12 xl:px-12">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#ddc39a] bg-white/70 px-3 py-1.5 text-[10px] font-semibold text-[#9b743d]">
              <LotusIcon className="h-4 w-4" />
              Lasting Transformation
            </div>

            <h2 className="font-serif text-[30px] font-bold leading-[1.08] tracking-[-0.035em] text-[#132c22] sm:text-[38px] lg:text-[36px] xl:text-[42px]">
              The Lasting Impact of a Health &amp;
              <span className="block text-[#987039]">
                Wellness Retreat
              </span>
            </h2>

            <div className="mt-4 space-y-4 text-[12px] leading-[1.8] text-[#62574a] sm:text-[13px] lg:text-[12px] xl:text-[13px]">
              <p>
                As the sun sets on your stay, the focus shifts from
                experience to afterglow. A truly successful retreat
                equips you with a renewed sense of purpose. You
                aren&apos;t just leaving a beautiful location; you are
                carrying home better versions of yourselves.
              </p>

              <p>
                The serenity of the desert stays with you. The
                conversations held in the quiet corners of our gardens,
                the shared laughter over a nutritious meal, the
                collective exhale during a spa treatment — these become
                the foundation for a stronger, more vibrant relationship.
                And when life accelerates again (as it will), you will
                know how to find your way back to each other.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative mt-5 rounded-xl border border-[#e9dcc9] border-l-[3px] border-l-[#b88b4d] bg-white/55 px-4 py-4 pl-10 shadow-sm sm:pl-12">
              <span className="absolute left-3 top-1 font-serif text-4xl font-bold leading-none text-[#ad8141]">
                “
              </span>
              <p className="font-serif text-[12px] italic leading-[1.8] text-[#554738] sm:text-[13px]">
                We don&apos;t just provide a room. We provide a rebirth.
                A world where the air is purer, the pace is slower,
                and the connection is deeper.
              </p>
            </blockquote>

            <LeafDecoration className="pointer-events-none absolute bottom-4 right-1 h-20 w-12 rotate-12 text-[#d4b37c] sm:h-24 sm:w-14" />
          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="relative mt-5 overflow-hidden rounded-[20px] border border-[#bd995e] bg-[#082d20] shadow-[0_12px_30px_rgba(32,52,32,0.14)] sm:mt-7 sm:rounded-[24px]">
          {/* Green background texture */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 20%, rgba(55,102,65,0.28), transparent 55%), linear-gradient(120deg, #0c3022, #03251a 75%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_270px] lg:grid-cols-[1fr_320px]">
            {/* CTA text */}
            <div className="relative flex gap-4 px-5 py-7 sm:gap-5 sm:px-8 sm:py-9 lg:gap-6 lg:px-10 lg:py-10">
              {/* Home icon */}
              <div className="hidden shrink-0 items-start sm:flex">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-[#e0c18b] bg-[#a47c3c] text-white shadow-md lg:h-[72px] lg:w-[72px]">
                  <HomeIcon />
                </div>

                <div className="ml-5 h-full min-h-[100px] w-px bg-[#c6a46a]/60 lg:ml-6" />
              </div>

              <div className="relative z-10 min-w-0 flex-1">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#e0c18b] bg-[#a47c3c] text-white sm:hidden">
                  <HomeIcon />
                </div>

                <h3 className="font-serif text-[26px] font-bold leading-[1.13] tracking-[-0.025em] text-[#fff5df] sm:text-[31px] lg:text-[34px]">
                  Your Journey Back to Each Other Begins Here
                </h3>

                <p className="mt-3 max-w-[740px] text-[12px] leading-[1.8] text-white/80 sm:text-[13px] lg:text-sm">
                  Whether you are celebrating a honeymoon, anniversary,
                  or simply seeking time to reconnect, Nowal NatureCare
                  offers a rare space where wellness and relationships
                  heal together — rooted in traditional Indian healing,
                  surrounded by the stillness of Rajasthan, and carried
                  by family-led hospitality that feels like home.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex min-h-10 max-w-full items-center gap-2 rounded-full border border-[#ead2a1] bg-[#a98247] px-4 py-2.5 text-[11px] leading-relaxed text-white shadow-md transition hover:bg-[#bd985d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#082d20] sm:px-5 sm:text-xs"
                >
                  <span aria-hidden="true">♡</span>
                  <span>
                    Retreat slots are limited. Reserve yours before they fill.
                  </span>
                </a>
              </div>
            </div>

            {/* Sunset inset image */}
            <div className="relative min-h-[210px] overflow-hidden sm:min-h-[250px] md:min-h-0">
              <img
                src={sunsetImage}
                alt="Warm sunset over a peaceful natural landscape"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#082d20]/35 via-transparent to-transparent" />

              {/* Arch-inspired frame */}
              <div className="absolute inset-y-0 left-0 hidden w-16 rounded-l-[100%] border-l border-[#c9a366] md:block lg:w-20" />

              <div className="absolute inset-0 flex items-center justify-center md:hidden">
                <div className="h-[155px] w-[155px] overflow-hidden rounded-full border-[5px] border-[#e2c48c] shadow-xl">
                  <img
                    src={resortImage}
                    alt="Outdoor seating at the retreat"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <LeafDecoration className="pointer-events-none absolute bottom-3 left-2 hidden h-36 w-20 text-[#d9b87e] md:block lg:h-44 lg:w-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
