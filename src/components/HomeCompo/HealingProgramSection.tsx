
import React from "react";

const therapies = [
  {
    number: "01",
    title: "Naturopathy",
    description:
      "Mud, water, sun and fasting: the elements drawing out the body's own power to heal.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "02",
    title: "Ayurveda",
    description:
      "Herbal and oil therapies matched to your constitution, as the science of life intends.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "03",
    title: "Yoga & Meditation",
    description:
      "Daily practice that brings breath, body and mind back into balance.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "04",
    title: "Physiotherapy",
    description:
      "Guided movement and rehabilitation to restore strength and easy, free motion.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=85",
  },
  {
    number: "05",
    title: "Holistic Therapies",
    description:
      "Acupuncture and energy therapies that restore the flow of vital energy.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=85",
  },
];

function BranchDecoration() {
  return (
    <svg
      viewBox="0 0 1100 660"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="branchShadow" x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Left vertical branch */}
      <path
        d="M72 -20 C62 70 83 170 72 260 S78 430 72 530 S76 620 73 680"
        stroke="#65452e"
        strokeWidth="11"
        strokeLinecap="round"
        opacity=".16"
        transform="translate(2 3)"
        filter="url(#branchShadow)"
      />
      <path
        d="M72 -20 C62 70 83 170 72 260 S78 430 72 530 S76 620 73 680"
        stroke="#896044"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M72 -20 C62 70 83 170 72 260 S78 430 72 530 S76 620 73 680"
        stroke="#b28c6d"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Main winding branch connecting the therapy cards */}
      <path
        d="M75 344 C110 426 151 390 205 377 S287 309 345 342 S420 432 476 400 S555 322 617 350 S699 433 750 394 S835 345 887 376 S984 427 1030 357"
        stroke="#704b32"
        strokeWidth="5"
        strokeLinecap="round"
        opacity=".15"
        transform="translate(1 3)"
        filter="url(#branchShadow)"
      />
      <path
        d="M75 344 C110 426 151 390 205 377 S287 309 345 342 S420 432 476 400 S555 322 617 350 S699 433 750 394 S835 345 887 376 S984 427 1030 357"
        stroke="#8d6244"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M75 344 C110 426 151 390 205 377 S287 309 345 342 S420 432 476 400 S555 322 617 350 S699 433 750 394 S835 345 887 376 S984 427 1030 357"
        stroke="#bd9979"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Right upper branch tip */}
      <path
        d="M1081 -15 Q1074 20 1081 37"
        stroke="#8d6244"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

const HealingProgramSection: React.FC = () => {
  return (
    <section
      aria-labelledby="healing-program-title"
      className="relative isolate w-full overflow-hidden bg-white px-4 py-14 sm:px-8 sm:py-16 lg:min-h-[660px] lg:px-10 lg:py-14"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#fffefa]" />

      {/* Decorative branches */}
      <div className="pointer-events-none absolute inset-0 -z-0 hidden lg:block">
        <BranchDecoration />
      </div>

      <div className="relative z-10 mx-auto max-w-[950px]">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.025em] text-[#46515e] sm:text-sm">
            Healing Program
          </p>

          <h2
            id="healing-program-title"
            className="mt-2 font-sans text-[23px] font-medium leading-tight tracking-[-0.035em] text-[#303a49] sm:text-[28px] md:text-[30px]"
          >
            Experience the power of nature in every healing touch
          </h2>

          <p className="mx-auto mt-4 max-w-[440px] text-[11px] leading-[1.8] text-[#68717c] sm:text-xs">
            Nowal NatureCare guides you on a journey back to balance,
            awakening the natural healer that already lives inside you
          </p>
        </header>

        {/* Therapy cards */}
        <div className="mx-auto mt-8 grid max-w-[820px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-7 md:grid-cols-3 md:gap-x-7 lg:mt-7 lg:grid-cols-5 lg:items-start lg:gap-x-5 lg:gap-y-0">
          {therapies.map((therapy, index) => {
            const staggerClass = [
              "lg:translate-y-[100px]",
              "lg:translate-y-0",
              "lg:translate-y-[100px]",
              "lg:translate-y-0",
              "lg:translate-y-[100px]",
            ][index];

            return (
              <article
                key={therapy.number}
                className={`group relative z-10 w-full max-w-[220px] rounded-[16px] border border-[#eee7dc] bg-[#fffefa] p-[6px] shadow-[0_2px_6px_rgba(80,62,38,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(80,62,38,0.12)] lg:max-w-none ${staggerClass}`}
              >
                {/* Therapy photograph */}
                <div className="relative h-[175px] overflow-hidden rounded-[12px] sm:h-[160px] lg:h-[100px]">
                  <img
                    src={therapy.image}
                    alt={therapy.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:object-center"
                  />
                </div>

                {/* Therapy details */}
                <div className="px-1.5 pb-1.5 pt-2">
                  <h3 className="font-serif text-[15px] font-medium leading-snug text-[#463b2e] sm:text-[14px] lg:text-[13px]">
                    {therapy.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.55] text-[#827765] lg:text-[10px]">
                    {therapy.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-2 inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#27251f] transition-colors hover:text-[#ad7d42] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ad7d42]"
                    aria-label={`Explore ${therapy.title}`}
                  >
                    Explore
                    <ArrowRight />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="relative z-10 mt-10 text-center sm:mt-12 lg:mt-[145px]">
          <a
            href="/services"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#24251f] transition-colors hover:text-[#ad7d42] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ad7d42]"
          >
            See All Healing Techniques
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HealingProgramSection;
