import React, { useState } from "react";

const categories = [
  { label: "All Posts", icon: "leaf" },
  { label: "Nature & Wellness", icon: "sprout" },
  { label: "Therapies", icon: "lotus" },
  { label: "Healthy Living", icon: "heart" },
  { label: "Mind & Soul", icon: "meditation" },
  { label: "Travel & Retreats", icon: "mountain" },
] as const;

type CategoryLabel = (typeof categories)[number]["label"];

type Content = {
  eyebrow: string;
  title: string;
  description: string;
  mainImage: string;
  mainAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
};

const contentByCategory: Record<CategoryLabel, Content> = {
  "All Posts": {
    eyebrow: "NOWAL NATURE CARE",
    title: "Healing Through Nature",
    description:
      "At Nowal Nature Care, we believe that nature itself is the greatest healer. Our blog shares knowledge, experiences, and holistic approaches rooted in naturopathy and traditional wellness practices.",
    mainImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",
    mainAlt: "Sunlight filtering through a peaceful green forest",
    secondaryImage:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=85",
    secondaryAlt: "Fresh green leaves in natural sunlight",
  },
  "Nature & Wellness": {
    eyebrow: "NATURE & WELLNESS",
    title: "Rooted in the Wild",
    description:
      "Reconnect with the rhythm of the seasons. Explore how fresh air, forest walks, and plant-based rituals restore balance to body and mind.",
    mainImage:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=85",
    mainAlt: "Misty forested hills at sunrise",
    secondaryImage:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=500&q=85",
    secondaryAlt: "Green fern leaves close up",
  },
  Therapies: {
    eyebrow: "THERAPIES",
    title: "Ancient Remedies, Modern Calm",
    description:
      "From herbal compresses to hydrotherapy, discover time-honoured naturopathic treatments that gently support the body's own healing intelligence.",
    mainImage:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=85",
    mainAlt: "Spa therapy setting with towels and stones",
    secondaryImage:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=85",
    secondaryAlt: "Herbal oils and dried botanicals",
  },
  "Healthy Living": {
    eyebrow: "HEALTHY LIVING",
    title: "Nourish, Move, Restore",
    description:
      "Small daily habits create lasting vitality. Learn how wholesome food, mindful movement, and quality sleep build a resilient, energetic life.",
    mainImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85",
    mainAlt: "Healthy colourful meal bowl with fresh vegetables",
    secondaryImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=85",
    secondaryAlt: "Fresh salad bowl with greens",
  },
  "Mind & Soul": {
    eyebrow: "MIND & SOUL",
    title: "Stillness Within",
    description:
      "Meditation, breathwork, and gentle reflection help quiet the noise of modern life. Find practices that bring clarity, calm, and inner balance.",
    mainImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=85",
    mainAlt: "Person meditating peacefully in nature",
    secondaryImage:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=500&q=85",
    secondaryAlt: "Calm meditation close up",
  },
  "Travel & Retreats": {
    eyebrow: "TRAVEL & RETREATS",
    title: "Journeys That Restore",
    description:
      "Step away from the everyday. Explore serene retreats, mountain escapes, and wellness destinations that invite deep rest and renewal.",
    mainImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
    mainAlt: "Majestic mountain landscape at dawn",
    secondaryImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=85",
    secondaryAlt: "Tranquil beach shoreline",
  },
};

function CategoryIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[17px] w-[17px] shrink-0"
      {...common}
      aria-hidden="true"
    >
      {type === "leaf" && (
        <>
          <path d="M19 4C10 4 5 8 5 14a5 5 0 0 0 5 5c6 0 9-7 9-15Z" />
          <path d="M4 21c3-6 7-9 12-12" />
          <path d="M10 11l1 4" />
        </>
      )}
      {type === "sprout" && (
        <>
          <path d="M12 21V11" />
          <path d="M12 13C5 13 4 9 4 5c5 0 9 2 8 8Z" />
          <path d="M12 10c0-5 3-7 8-7 0 5-2 9-8 9" />
          <path d="M7 21h10" />
        </>
      )}
      {type === "lotus" && (
        <>
          <path d="M12 20C7 18 5 14 5 10c4 1 6 4 7 7 1-5 3-8 7-10 1 6-1 11-7 13Z" />
          <path d="M12 20C8 16 4 16 2 18c3 3 6 3 10 2Z" />
          <path d="M12 20c4-4 8-4 10-2-3 3-6 3-10 2Z" />
        </>
      )}
      {type === "heart" && (
        <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 8-1 4 4 0 0 1 8 1Z" />
      )}
      {type === "meditation" && (
        <>
          <circle cx="12" cy="5" r="2.5" />
          <path d="M12 9v5m-5 7 5-7 5 7M5 13l7 1 7-1M3 21h18" />
        </>
      )}
      {type === "mountain" && (
        <>
          <path d="m2 19 7-12 4 6 3-4 6 10H2Z" />
          <path d="m6 12 3 2 2-2m2 3 2 1 1-2" />
        </>
      )}
    </svg>
  );
}

function BotanicalDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 160"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 151C30 116 48 76 76 11" />
      <path d="M28 119C9 115 5 103 6 91c15 3 23 11 22 28Z" />
      <path d="M39 96C19 88 17 74 21 63c14 7 21 17 18 33Z" />
      <path d="M52 67C37 55 40 41 47 32c11 12 13 23 5 35Z" />
      <path d="M66 36C57 23 65 12 75 5c5 13 2 23-9 31Z" />
      <path d="M24 126C44 123 55 112 59 99c-18 2-29 12-35 27Z" />
      <path d="M40 92C59 87 69 75 71 61c-17 5-27 15-31 31Z" />
      <path d="M54 61C70 55 80 42 81 29c-16 6-24 16-27 32Z" />
      <path d="M12 151h70" opacity=".45" />
    </svg>
  );
}

export default function HealingThroughNature() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryLabel>("All Posts");

  const content = contentByCategory[activeCategory];
  const activeIcon =
    categories.find((c) => c.label === activeCategory)?.icon ?? "leaf";

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#faf6eb] text-[#173b2c]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 8% 55%, #e7e6cb 0%, transparent 28%), radial-gradient(ellipse at 95% 75%, #e9e6d3 0%, transparent 24%)",
        }}
      />

      {/* Category navigation */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl justify-center px-3 pt-3 sm:px-6 sm:pt-5">
        <nav
          aria-label="Blog categories"
          role="tablist"
          className="flex w-full max-w-[1020px] items-center gap-2 overflow-x-auto rounded-full border border-[#e8e1d1] bg-white/35 p-1.5 shadow-[0_3px_18px_rgba(73,71,44,0.035)] backdrop-blur-sm sm:justify-between sm:gap-1 sm:px-3 md:px-4"
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category.label;
            return (
              <React.Fragment key={category.label}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.label)}
                  className={`flex shrink-0 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-medium transition-colors sm:px-3 sm:text-[11px] md:gap-2 md:px-4 ${
                    isActive
                      ? "bg-[#596b3b] text-white shadow-sm"
                      : "text-[#68684c] hover:bg-[#e9e8d8] hover:text-[#294631]"
                  }`}
                >
                  <CategoryIcon type={category.icon} />
                  <span>{category.label}</span>
                </button>

                {index < categories.length - 1 && (
                  <span
                    className="hidden h-5 w-px shrink-0 bg-[#e2dccb] sm:block"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Main hero content */}
      <div className="relative mx-auto grid min-h-[460px] w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-12 pt-12 sm:px-8 md:min-h-[430px] md:grid-cols-[0.95fr_1.15fr] md:gap-8 md:pb-14 md:pt-10 lg:min-h-[490px] lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-12">
        <BotanicalDecoration className="pointer-events-none absolute -left-5 top-12 hidden h-36 w-24 text-[#87956b]/65 sm:block md:left-0 md:top-5 lg:h-44 lg:w-28" />
        <BotanicalDecoration className="pointer-events-none absolute right-0 top-0 hidden h-36 w-24 rotate-[12deg] text-[#c7b97d]/65 sm:block lg:right-3 lg:h-44 lg:w-28" />

        <div className="relative mx-auto h-[280px] w-full max-w-[430px] sm:h-[330px] md:h-[330px] lg:h-[390px]">
          <div className="absolute left-[5%] top-[2%] h-[94%] w-[82%] overflow-hidden rounded-[48%_48%_8%_48%] border-[5px] border-[#faf6eb] shadow-[0_12px_35px_rgba(45,64,35,0.12)] sm:left-[7%] sm:w-[79%]">
            <img
              key={content.mainImage}
              src={content.mainImage}
              alt={content.mainAlt}
              className="h-full w-full object-cover object-center transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#193a26]/15 to-transparent" />
          </div>

          <div className="absolute left-[2%] top-[12%] z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[#657849] text-white shadow-md sm:h-12 sm:w-12">
            <CategoryIcon type={activeIcon} />
          </div>

          <div className="absolute bottom-[-2%] right-[2%] z-10 h-[112px] w-[112px] overflow-hidden rounded-full border-[5px] border-[#faf6eb] shadow-[0_8px_25px_rgba(35,54,30,0.15)] sm:bottom-[-1%] sm:right-[1%] sm:h-[135px] sm:w-[135px] md:h-[120px] md:w-[120px] lg:h-[145px] lg:w-[145px]">
            <img
              key={content.secondaryImage}
              src={content.secondaryImage}
              alt={content.secondaryAlt}
              className="h-full w-full object-cover transition-opacity duration-500"
            />
          </div>

          <div className="pointer-events-none absolute left-[2%] top-[5%] h-[88%] w-[83%] rounded-[48%_48%_8%_48%] border border-[#c7b97d]/70" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[620px] text-center md:pb-3 md:pl-2">
          <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-[#788158] sm:text-xs">
            {content.eyebrow}
          </span>

          <h1 className="font-serif text-[32px] font-semibold leading-[1.15] tracking-[-0.035em] text-[#173b2c] sm:text-4xl md:text-[38px] lg:text-[46px] xl:text-[50px]">
            {content.title}
          </h1>

          <div
            className="my-4 flex items-center justify-center gap-2.5 sm:my-5"
            aria-hidden="true"
          >
            <span className="h-px w-9 bg-[#b9a86a] sm:w-12" />
            <svg
              viewBox="0 0 32 32"
              className="h-5 w-5 text-[#a99a5b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 25C10 22 8 17 8 12c4 1 7 4 8 8 1-6 4-10 8-12 1 7-1 13-8 17Z" />
              <path d="M16 25C11 19 5 18 3 20c3 4 7 6 13 5Z" />
              <path d="M16 25c5-6 11-7 13-5-3 4-7 6-13 5Z" />
              <path d="M16 20V8" />
            </svg>
            <span className="h-px w-9 bg-[#b9a86a] sm:w-12" />
          </div>

          <p className="mx-auto max-w-[570px] text-[13px] leading-[1.85] text-[#57584a] sm:text-sm md:text-[13px] lg:text-[14px]">
            {content.description}
          </p>
        </div>

        <BotanicalDecoration className="pointer-events-none absolute -bottom-12 -left-3 hidden h-32 w-20 rotate-[-20deg] text-[#75865a]/65 sm:block" />
        <BotanicalDecoration className="pointer-events-none absolute -bottom-12 right-1 hidden h-32 w-20 rotate-[30deg] text-[#75865a]/65 sm:block" />
      </div>
    </section>
  );
}