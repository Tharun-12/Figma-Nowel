
import React from "react";

interface Therapy {
  number: string;
  title: string;
  description: string;
  image: string;
}

const therapies: Therapy[] = [
  {
    number: "01",
    title: "Mud Therapy",
    description:
      "Discover traditional mud-based wellness treatments in a calming, nature-inspired setting.",
    image:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=85",
  },
  {
    number: "02",
    title: "Hydro Therapy",
    description:
      "Experience water-based treatments designed to complement relaxation and wellness routines.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=85",
  },
  {
    number: "03",
    title: "Massage Therapy",
    description:
      "Enjoy a relaxing massage experience that supports comfort and everyday well-being.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=700&q=85",
  },
  {
    number: "04",
    title: "Physiotherapy",
    description:
      "Support movement, strength and functional recovery with guidance from qualified professionals.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=85",
  },
];

function HeartbeatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      <path d="M4 12h4l2-4 3.5 8 2-4H20" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M6 14 14 6M7 6h7v7" />
    </svg>
  );
}

function BranchDecorations() {
  return (
    <>
      {/* Upper-left curved branch */}
      <svg
        viewBox="0 0 300 120"
        className="pointer-events-none absolute -left-2 -top-2 hidden h-32 w-[300px] sm:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M65 -10 C48 15 76 25 105 36 S190 66 280 91 L285 104"
          stroke="#68472f"
          strokeWidth="7"
          strokeLinecap="round"
          opacity=".18"
          transform="translate(2 3)"
        />
        <path
          d="M65 -10 C48 15 76 25 105 36 S190 66 280 91 L285 104"
          stroke="#967052"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M65 -10 C48 15 76 25 105 36 S190 66 280 91 L285 104"
          stroke="#c4a486"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Upper-right fine branch */}
      <svg
        viewBox="0 0 35 110"
        className="pointer-events-none absolute right-6 top-[150px] hidden h-24 w-8 sm:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 2 C24 26 5 32 13 51 S19 82 23 106"
          stroke="#987052"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Lower-right branch */}
      <svg
        viewBox="0 0 28 130"
        className="pointer-events-none absolute bottom-0 right-5 hidden h-28 w-7 md:block"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 130 C16 95 21 55 20 10"
          stroke="#997252"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M18 130 C16 95 21 55 20 10"
          stroke="#c3a184"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}

const PopularTherapies: React.FC = () => {
  return (
    <section
      aria-labelledby="popular-therapies-title"
      className="relative isolate w-full overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[660px] lg:px-10 lg:py-[58px]"
    >
      <BranchDecorations />

      <div className="relative z-10 mx-auto max-w-[850px]">
        {/* Heading */}
        <header className="text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#7b9b7e] sm:text-[10px]">
            Natural Wellness · Our Specialties
          </p>

          <h2
            id="popular-therapies-title"
            className="mt-4 font-sans text-[30px] font-normal leading-tight tracking-[-0.035em] text-[#171717] sm:text-[34px] md:text-[36px]"
          >
            Popular Therapies
          </h2>

          {/* Green decorative divider */}
          <div
            className="mt-8 flex items-center justify-center gap-2.5 text-[#739876] sm:mt-9"
            aria-hidden="true"
          >
            <span className="h-[2px] w-9 bg-[#82a183]" />
            <HeartbeatIcon />
            <span className="h-[2px] w-9 bg-[#82a183]" />
          </div>

          <p className="mx-auto mt-7 max-w-[330px] text-[11px] leading-[1.8] text-[#839184] sm:mt-7 sm:text-xs">
            Discover a thoughtful approach to wellness through traditional
            therapies and personalized care inspired by the healing power of
            nature.
          </p>
        </header>

        {/* Therapy cards */}
        <div className="mx-auto mt-8 grid max-w-[810px] grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-4 md:gap-x-5 md:gap-y-0 lg:mt-8 lg:gap-x-5">
          {therapies.map((therapy, index) => (
            <article
              key={therapy.number}
              className={`group min-w-0 ${
                index % 2 === 1 ? "md:translate-y-[23px]" : ""
              }`}
            >
              {/* Image with alternating rounded corners */}
              <div
                className={`relative aspect-[0.98/1] overflow-hidden bg-[#f2f0eb] ${
                  index % 2 === 0
                    ? "rounded-t-[40px] rounded-br-[34px] rounded-bl-[12px]"
                    : "rounded-t-[12px] rounded-br-[12px] rounded-bl-[38px]"
                }`}
              >
                <img
                  src={therapy.image}
                  alt={therapy.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image number badge */}
                <span className="absolute bottom-2 left-2 flex h-8 w-8 items-center justify-center rounded-full border border-[#dce7d9] bg-[#f8fbf3] text-[10px] font-medium text-[#68866c] shadow-sm">
                  {therapy.number}
                </span>
              </div>

              {/* Card content */}
              <div className="px-2.5 pb-3 pt-3">
                <h3 className="font-sans text-[14px] font-medium leading-snug text-[#466c59] sm:text-[14px]">
                  {therapy.title}
                </h3>

                <p className="mt-2 text-[10px] leading-[1.75] text-[#849087] sm:text-[10px]">
                  {therapy.description}
                </p>

                <a
                  href="/contact"
                  aria-label={`Explore ${therapy.title}`}
                  className="mt-2.5 inline-flex items-center gap-1 text-[9px] font-semibold text-[#608667] transition-colors hover:text-[#304e38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82a183]"
                >
                  Explore therapy
                  <ArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTherapies;
