
import React from "react";

interface WisdomArticle {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  imagePosition: string;
}

const articles: WisdomArticle[] = [
  {
    number: "01",
    title: "Pulmonary Fibrosis",
    subtitle: "Treatment: Taking Control of Your Journey",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=90",
    imagePosition: "left center",
  },
  {
    number: "02",
    title: "Ayurveda for Diabetes:",
    subtitle: "A Complete Approach to Balanced Blood Sugar",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=90",
    imagePosition: "center center",
  },
  {
    number: "03",
    title: "Manage",
    subtitle: "Cervical Spondylitis",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=90",
    imagePosition: "center center",
  },
];

const BranchDecoration: React.FC = () => (
  <svg
    className="pointer-events-none absolute left-0 top-[100px] z-0 h-[150px] w-full overflow-visible"
    viewBox="0 0 1200 180"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
  >
    {/* Soft shadow */}
    <path
      d="M65 65 C45 115 95 95 90 135 C180 160 220 85 305 115 S440 165 510 115 S650 95 720 130 S850 100 940 125 S1060 75 1130 115 L1190 145"
      stroke="#65452f"
      strokeWidth="8"
      strokeLinecap="round"
      opacity=".13"
      transform="translate(2 3)"
    />

    {/* Main organic branch */}
    <path
      d="M65 65 C45 115 95 95 90 135 C180 160 220 85 305 115 S440 165 510 115 S650 95 720 130 S850 100 940 125 S1060 75 1130 115 L1190 145"
      stroke="#977052"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <path
      d="M65 65 C45 115 95 95 90 135 C180 160 220 85 305 115 S440 165 510 115 S650 95 720 130 S850 100 940 125 S1060 75 1130 115 L1190 145"
      stroke="#c6a486"
      strokeWidth="1.4"
      strokeLinecap="round"
    />

    {/* Small branch offshoots */}
    <path
      d="M175 127 Q155 95 160 80 M410 143 Q390 116 397 101 M800 116 Q818 88 813 75 M1085 99 Q1108 78 1125 84"
      stroke="#977052"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const NowalWisdom: React.FC = () => {
  return (
    <section
      aria-labelledby="nowal-wisdom-title"
      className="relative isolate w-full overflow-hidden bg-[#effbf3] px-4 py-12 sm:px-8 sm:py-14 lg:min-h-[377px] lg:px-10 lg:py-[44px]"
    >
      {/* Decorative branch behind the cards */}
      <BranchDecoration />

      <div className="relative z-10 mx-auto max-w-[1120px]">
        {/* Section heading */}
        <header className="mb-7 text-center sm:mb-9">
          <h2
            id="nowal-wisdom-title"
            className="font-sans text-[23px] font-normal leading-tight tracking-[-0.025em] text-[#354653] sm:text-[26px] md:text-[28px]"
          >
            Nowal Wisdom
          </h2>

          <div
            className="mt-3 flex items-center justify-center gap-4"
            aria-hidden="true"
          >
            <span className="h-[3px] w-10 rounded-full bg-[#79a17f]" />
            <span className="h-[3px] w-10 rounded-full bg-[#79a17f]" />
          </div>
        </header>

        {/* Wisdom article cards */}
        <div className="mx-auto grid max-w-[1060px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-[18px]">
          {articles.map((article) => (
            <a
              key={article.number}
              href="/blog"
              aria-label={`${article.title} ${article.subtitle}`}
              className="group relative block aspect-[1.68/1] min-w-0 overflow-hidden rounded-[19px] border border-white/30 bg-[#103a7d] shadow-[0_12px_20px_rgba(15,45,38,0.23)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(15,45,38,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79a17f] focus-visible:ring-offset-4"
            >
              {/* Card background image */}
              <img
                src={article.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ objectPosition: article.imagePosition }}
              />

              {/* Deep blue treatment to resemble the reference */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001c53]/85 via-[#06449c]/55 to-[#001a50]/75" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#00143b]/45 via-transparent to-[#00143b]/10" />

              {/* Article number */}
              <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-white/25 text-[7px] font-medium text-white/90 backdrop-blur-sm sm:h-6 sm:w-6 sm:text-[8px]">
                {article.number}
              </span>

              {/* Article text */}
              <div className="absolute inset-0 flex flex-col justify-center px-4 py-5 sm:px-5 md:px-3 lg:px-4">
                <div className="max-w-[56%]">
                  <h3 className="text-[11px] font-bold leading-[1.35] text-[#f3e847] sm:text-xs lg:text-[11px]">
                    {article.title}
                  </h3>

                  <p className="mt-0.5 text-[9px] font-medium leading-[1.4] text-white/95 sm:text-[10px] lg:text-[9px]">
                    {article.subtitle}
                  </p>
                </div>
              </div>

              {/* Circular arrow */}
              <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/35 bg-white/20 text-sm text-white backdrop-blur-sm transition-colors group-hover:bg-white/35">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NowalWisdom;
