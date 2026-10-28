
import React from "react";

const experiences = [
  {
    number: "1",
    title: "Nature-Integrated Architecture",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=500&q=85",
  },
  {
    number: "2",
    title: "Holistic Nowal Programs",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=85",
  },
  {
    number: "3",
    title: "Restful Accommodations",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=500&q=85",
  },
  {
    number: "4",
    title: "Yoga & Meditation Spaces",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=85",
  },
  {
    number: "5",
    title: "Organic Farm-to-Table",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=85",
  },
  {
    number: "6",
    title: "Healing Therapies",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=85",
  },
];

function VineDecoration() {
  return (
    <svg
      viewBox="0 0 800 360"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="vineShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Upper sweeping branch */}
      <path
        d="M80 -10 C83 45 125 80 195 101 S340 155 405 127"
        stroke="#7c5338"
        strokeWidth="8"
        strokeLinecap="round"
        opacity=".15"
        transform="translate(2 3)"
        filter="url(#vineShadow)"
      />
      <path
        d="M80 -10 C83 45 125 80 195 101 S340 155 405 127"
        stroke="#8e6345"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M80 -10 C83 45 125 80 195 101 S340 155 405 127"
        stroke="#bd9874"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Lower curved green vine */}
      <path
        d="M350 205 C375 270 425 305 465 272 S515 207 496 183"
        stroke="#476f38"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M365 233 C386 245 400 256 418 267 S452 280 476 261"
        stroke="#7c9b56"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Green leaves */}
      <g stroke="#547d3e" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M382 251 Q355 232 359 213 Q383 222 382 251Z" fill="#83b84f" />
        <path d="M402 264 Q408 238 430 238 Q426 259 402 264Z" fill="#5eaa47" />
        <path d="M430 281 Q438 256 459 261 Q452 278 430 281Z" fill="#86c95a" />
        <path d="M462 266 Q481 240 498 247 Q488 266 462 266Z" fill="#45a879" />
        <path d="M489 220 Q500 199 515 206 Q508 223 489 220Z" fill="#a1c957" />
        <path d="M390 254 Q372 270 378 284 Q394 276 390 254Z" fill="#b3d477" />
      </g>

      {/* Fine tendrils */}
      <g stroke="#6b8c49" strokeWidth="1.3" strokeLinecap="round">
        <path d="M390 260 C372 245 374 231 384 235 C395 239 389 247 382 243" />
        <path d="M446 275 C466 294 482 285 477 275 C473 269 464 276 471 281" />
      </g>

      {/* Right-hand brown branch */}
      <path
        d="M710 170 C715 215 676 219 690 263 S760 315 800 342"
        stroke="#775038"
        strokeWidth="9"
        strokeLinecap="round"
        opacity=".15"
        transform="translate(2 3)"
      />
      <path
        d="M710 170 C715 215 676 219 690 263 S760 315 800 342"
        stroke="#896043"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M710 170 C715 215 676 219 690 263 S760 315 800 342"
        stroke="#c09b7b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WelcomeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9 sm:h-10 sm:w-10"
      aria-hidden="true"
    >
      <circle cx="24" cy="16" r="9" />
      <path d="M18 23 16 38l8-5 8 5-2-15" />
    </svg>
  );
}

const ExperienceNowalSection: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-[#effaf2]">
      {/* EXPERIENCE TIMELINE */}
      <div className="relative min-h-[390px] px-4 pb-14 pt-14 sm:min-h-[420px] sm:px-8 sm:pb-16 sm:pt-16 lg:min-h-[440px] lg:px-12 lg:pt-14">
        {/* Organic branches behind the cards */}
        <div className="absolute inset-0 hidden sm:block">
          <VineDecoration />
        </div>

        <div className="relative z-10 mx-auto max-w-[1000px]">
          <h2 className="text-center font-serif text-[25px] font-normal tracking-[-0.025em] text-[#34463a] sm:text-[29px] md:text-[32px]">
            Experience Nowal NatureCare
          </h2>

          {/* Experience cards */}
          <div className="relative mx-auto mt-8 grid max-w-[820px] grid-cols-2 justify-items-center gap-x-4 gap-y-9 sm:mt-7 sm:grid-cols-3 sm:gap-x-3 sm:gap-y-5 lg:grid-cols-6 lg:gap-x-2 lg:gap-y-0">
            {experiences.map((item, index) => (
              <div
                key={item.number}
                className={`relative flex w-full max-w-[180px] flex-col items-center ${
                  index % 2 === 1 ? "lg:translate-y-3" : ""
                }`}
              >
                {/* Image card */}
                <article className="group relative w-full overflow-visible rounded-md border-[4px] border-white/90 bg-white shadow-[0_10px_18px_rgba(38,55,37,0.20)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_24px_rgba(38,55,37,0.25)]">
                  <div className="relative h-[102px] overflow-hidden rounded-[2px] sm:h-[92px] md:h-[100px] lg:h-[82px] xl:h-[90px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#17241e]/65 via-[#17241e]/15 to-transparent" />

                    <h3 className="absolute inset-x-1 bottom-2 font-serif text-[10px] font-semibold leading-[1.35] text-[#fffaf0] drop-shadow-md sm:text-[10px] lg:text-[9px] xl:text-[10px]">
                      {item.title}
                    </h3>
                  </div>
                </article>

                {/* Number badge */}
                <div className="relative z-10 -mt-0.5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d9bc7b] bg-[#fffaf0] font-serif text-[15px] font-semibold text-[#d8b35f] shadow-[0_3px_6px_rgba(79,65,39,0.18)] sm:h-11 sm:w-11 lg:-mt-0.5">
                  {item.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <div className="relative isolate min-h-[250px] overflow-hidden bg-[#eff3f0] px-4 py-12 sm:px-8 sm:py-14 lg:min-h-[290px] lg:px-12">
        {/* Decorative outer branches */}
        <div
          className="pointer-events-none absolute inset-0 hidden sm:block"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1200 330"
            preserveAspectRatio="none"
            className="h-full w-full"
            fill="none"
          >
            <path
              d="M55 330 C63 266 82 210 75 178 S96 90 135 73 C220 62 345 102 510 101 S800 104 956 83 S1100 43 1190 65"
              stroke="#9a7658"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M55 330 C63 266 82 210 75 178 S96 90 135 73 C220 62 345 102 510 101 S800 104 956 83 S1100 43 1190 65"
              stroke="#c5a486"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M76 177 Q85 197 104 193 M1190 65 Q1183 112 1194 158 T1190 310"
              stroke="#9a7658"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[155px] max-w-[900px] items-center justify-center rounded-xl border border-white/80 bg-white/90 px-5 py-7 shadow-[0_5px_12px_rgba(35,52,39,0.16)] sm:min-h-[150px] sm:px-8 md:px-12 lg:min-h-[155px]">
          <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5 md:gap-6">
            {/* Badge */}
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-[4px] border-[#d6e4d8] bg-[#f2f8f2] text-[#426b4e] shadow-sm sm:h-[92px] sm:w-[92px]">
              <WelcomeIcon />
            </div>

            {/* Welcome title */}
            <div className="min-w-0 text-center sm:text-left">
              <h2 className="font-sans text-[20px] font-normal leading-snug tracking-[-0.025em] text-[#39434b] sm:text-[21px] md:text-[24px]">
                Welcome to Nowal NatureCare
              </h2>

              <div className="mx-auto mt-2 h-[3px] w-full max-w-[320px] rounded-full bg-[#7e9d83] sm:mx-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNowalSection;
