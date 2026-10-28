
import React from "react";

const services = [
  { icon: "leaf", title: "Ayurveda & Panchakarma" },
  { icon: "people", title: "Bespoke Naturopathy Consultations" },
  { icon: "drop", title: "Hydrotherapy & Mud Treatments" },
  { icon: "yoga", title: "Private Yoga & Meditation Pavilions" },
  { icon: "food", title: "Organic Gourmet Dining" },
  { icon: "home", title: "Luxury Eco-Suites" },
  { icon: "flower", title: "Botanical Therapy" },
  { icon: "leaf", title: "Holistic Detox Programs" },
  { icon: "lotus", title: "Stress Management Workshops" },
];

function ServiceIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[19px] w-[19px]"
      {...common}
      aria-hidden="true"
    >
      {type === "leaf" && (
        <>
          <path d="M20 4C10 4 5 8 5 14a5 5 0 0 0 5 5c6 0 10-7 10-15Z" />
          <path d="M4 21c3-6 7-9 12-12" />
        </>
      )}

      {type === "people" && (
        <>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
          <circle cx="17" cy="8" r="2.5" />
          <path d="M17 14a5 5 0 0 1 4 5v1" />
        </>
      )}

      {type === "drop" && (
        <>
          <path d="M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Z" />
          <path d="M9 16a3 3 0 0 0 3 3" />
        </>
      )}

      {type === "yoga" && (
        <>
          <circle cx="12" cy="4.5" r="2" />
          <path d="m12 8-3 4-5 1" />
          <path d="m12 8 3 4 5 1" />
          <path d="m9 12-3 6h12l-3-6" />
          <path d="M12 8v6" />
        </>
      )}

      {type === "food" && (
        <>
          <path d="M5 3v7M2 3v4a3 3 0 0 0 6 0V3M5 10v11" />
          <path d="M15 3v18M15 3c5 2 6 7 0 9" />
        </>
      )}

      {type === "home" && (
        <>
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </>
      )}

      {type === "flower" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="6" rx="3" ry="4" />
          <ellipse cx="12" cy="18" rx="3" ry="4" />
          <ellipse cx="6" cy="12" rx="4" ry="3" />
          <ellipse cx="18" cy="12" rx="4" ry="3" />
        </>
      )}

      {type === "lotus" && (
        <>
          <path d="M12 20C6 17 5 12 6 8c3 1 5 4 6 7 1-5 4-8 7-9 1 6-1 11-7 14Z" />
          <path d="M12 20c-4-4-8-4-10-1 3 3 6 3 10 1Z" />
          <path d="M12 20c4-4 8-4 10-1-3 3-6 3-10 1Z" />
        </>
      )}
    </svg>
  );
}

function ChefIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 13a4 4 0 0 1-1-7.9A5 5 0 0 1 15 4a4 4 0 0 1 4 7.8V18H6v-5Z" />
      <path d="M9 18v3h6v-3" />
    </svg>
  );
}

function LeafDecoration({ className = "" }: { className?: string }) {
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

export default function RetreatExperienceSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f7efe3] px-3 py-5 text-[#382b20] sm:px-6 sm:py-8 lg:px-8">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 15% 25%, #fffdf8 0%, transparent 45%), radial-gradient(ellipse at 90% 70%, #ead8bb 0%, transparent 48%)",
        }}
      />

      <div className="mx-auto max-w-[1280px] space-y-7 sm:space-y-9 lg:space-y-10">
        {/* =================================================
            SECTION ONE — TASTE THE RETREAT
        ================================================== */}
        <div className="relative">
          <div className="grid min-h-[235px] grid-cols-1 overflow-hidden rounded-[22px] border border-white/70 bg-[#f8f0e5]/90 shadow-[0_8px_28px_rgba(85,62,36,0.08)] sm:min-h-[255px] md:grid-cols-[0.88fr_1.12fr] lg:min-h-[270px]">
            {/* Promotional content */}
            <div className="relative z-10 flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-8 md:py-6 lg:px-12">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#b98950] text-[#fff7e9] shadow-sm">
                <ChefIcon />
              </div>

              <h1 className="font-serif text-[30px] font-bold leading-[1.06] tracking-[-0.035em] text-[#35271b] sm:text-[36px] lg:text-[42px]">
                Taste the Retreat
                <span className="block text-[#a16f30]">
                  Before You Arrive
                </span>
              </h1>

              <p className="mt-3 max-w-[410px] text-xs leading-relaxed text-[#756454] sm:text-sm">
                Ask us about our seasonal menus and dietary customisations.
              </p>

              {/* CTA buttons */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href="/contact"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#b98543] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_4px_10px_rgba(132,88,36,0.18)] transition hover:bg-[#98672e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98543] focus-visible:ring-offset-2 sm:px-5 sm:text-[11px]"
                >
                  Book Your Couple Retreat
                  <span aria-hidden="true">→</span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#d8bb94] bg-white/90 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wide text-[#a8793f] shadow-sm transition hover:bg-[#f7e9d4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98543] focus-visible:ring-offset-2 sm:px-5 sm:text-[11px]"
                >
                  <span aria-hidden="true">♧</span>
                  Schedule a Wellness Consultation
                </a>
              </div>
            </div>

            {/* Main scenic image */}
            <div className="relative min-h-[220px] overflow-hidden sm:min-h-[270px] md:min-h-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=90')",
                }}
                role="img"
                aria-label="Luxury retreat with pool and mountain scenery"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#f7efe3]/30 via-transparent to-[#3d2918]/10" />

              {/* Circular food inset */}
              <div className="absolute right-[5%] top-1/2 h-[105px] w-[105px] -translate-y-1/2 overflow-hidden rounded-full border-[4px] border-[#fff8ed] shadow-[0_7px_20px_rgba(40,25,12,0.2)] sm:right-[6%] sm:h-[135px] sm:w-[135px] lg:h-[155px] lg:w-[155px]">
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=500&q=85"
                  alt="Fresh gourmet dishes prepared for retreat guests"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <LeafDecoration className="pointer-events-none absolute -right-1 bottom-0 hidden h-36 w-20 text-[#d4b78b] sm:block lg:h-44 lg:w-24" />
            </div>
          </div>

          {/* Decorative corner leaf */}
          <LeafDecoration className="pointer-events-none absolute -left-4 bottom-0 hidden h-32 w-20 text-[#d1b68b]/70 lg:block" />
        </div>

        {/* =================================================
            SECTION TWO — DETOX & WELLNESS SERVICES
        ================================================== */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_0.72fr_1fr] md:gap-5 lg:grid-cols-[1fr_0.78fr_1fr] lg:gap-7">
          {/* Left editorial content */}
          <div className="order-1 min-w-0 py-2 sm:py-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#dfc49d] bg-white/80 px-3 py-1.5 text-[10px] font-semibold text-[#aa7837] shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <path d="M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Z" />
                <path d="M9 16a3 3 0 0 0 3 3" />
              </svg>
              Healing Therapies
            </div>

            <h2 className="font-serif text-[30px] font-bold leading-[1.05] tracking-[-0.035em] text-[#35271c] sm:text-[36px] lg:text-[39px]">
              Detox the Body.
              <span className="block">Reconnect the Bond.</span>
            </h2>

            <div className="mt-3 space-y-3 text-[11px] leading-[1.7] text-[#6d6052] sm:text-xs">
              <p>
                No luxury escape is complete without the therapeutic
                touch of world-class experts. Our therapies are guided
                by certified naturopathy treatment experts with 10+
                years of clinical experience, ensuring every session is
                both evidence-based and deeply restorative.
              </p>

              <p>
                Rather than choosing from a standard menu, couples
                receive bespoke synchronized massages using traditional
                Ayurvedic oils, rejuvenating floral baths, and
                Panchakarma protocols precisely calibrated to your
                constitution. Moving through our thermal suite or
                hydrotherapy circuit together, the shared relaxation
                deepens your empathetic connection. Words aren&apos;t
                necessary. The silence is restorative.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-4 rounded-r-xl border-l-[3px] border-[#bb8845] bg-white/55 px-4 py-3 font-serif text-[11px] italic leading-[1.7] text-[#786653] shadow-sm sm:text-xs">
              &quot;The goal of these therapies is detoxification — not
              just of the body, but of the stresses modern life places
              on a relationship.&quot;
            </blockquote>
          </div>

          {/* Center organic image */}
          <div className="order-2 mx-auto w-full max-w-[400px] md:max-w-none">
            <div className="relative mx-auto h-[310px] w-full sm:h-[360px] md:h-[320px] lg:h-[400px]">
              {/* Organic image backing */}
              <div className="absolute left-[10%] top-[5%] h-[88%] w-[83%] rounded-[45%] bg-[#e8d4b0]" />

              <div
                className="absolute left-[8%] top-[3%] h-[91%] w-[85%] overflow-hidden rounded-[46%_43%_45%_40%]"
                style={{
                  clipPath:
                    "polygon(13% 7%, 38% 0, 66% 6%, 87% 22%, 100% 44%, 91% 72%, 69% 94%, 42% 100%, 18% 89%, 2% 65%, 0 39%)",
                }}
              >
                <img
                  src="https://i.pinimg.com/736x/cc/2c/1e/cc2c1e1ace6192825f6bc0ddb1de2d39.jpg"
                  alt="Quiet luxury eco-suite and nature surrounded by greenery"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#302316]/30 via-transparent to-transparent" />
              </div>

              {/* Botanical line art */}
              <LeafDecoration className="pointer-events-none absolute -left-1 top-[2%] z-10 h-[135px] w-[72px] -rotate-[8deg] text-[#d0b183] sm:h-[160px] sm:w-[85px]" />

              {/* Lotus badge */}
              <div className="absolute bottom-[3%] right-[3%] z-20 flex h-[53px] w-[53px] items-center justify-center rounded-full border border-[#f5dfb9] bg-[#a77a3d] text-[#fff0d0] shadow-md sm:h-[62px] sm:w-[62px]">
                <svg
                  viewBox="0 0 40 40"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 31C11 26 9 19 10 12c5 2 9 7 10 13 2-7 6-12 11-15 2 9-2 16-11 21Z" />
                  <path d="M20 31C13 24 6 24 3 28c5 4 10 5 17 3Z" />
                  <path d="M20 31c7-7 14-7 17-3-5 4-10 5-17 3Z" />
                  <path d="M20 25V7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right services panel */}
          <div className="order-3 min-w-0 rounded-[20px] border border-white/70 bg-[#f5ecdf]/90 p-4 shadow-[0_8px_28px_rgba(85,62,36,0.07)] sm:rounded-[24px] sm:p-5 lg:p-6">
            <div className="mb-2 flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-[#bd8741]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />
              </svg>

              <h3 className="font-serif text-[18px] font-bold leading-tight text-[#3b2c20] sm:text-xl">
                Everything We Offer You
              </h3>
            </div>

            <p className="mb-4 text-[11px] leading-relaxed text-[#80715f] sm:text-xs">
              A suite of services refined for the most discerning couples.
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex min-h-[39px] items-center gap-2.5 rounded-xl border border-white/70 bg-white/65 px-2.5 py-2 transition-colors duration-200 hover:bg-white"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f8edda] text-[#b98543]">
                    <ServiceIcon type={service.icon} />
                  </span>

                  <span className="text-[10px] leading-snug text-[#655646] sm:text-[11px]">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
