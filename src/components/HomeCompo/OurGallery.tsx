
import React from "react";

interface GalleryImage {
  src: string;
  alt: string;
  className: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://i.pinimg.com/736x/2c/a9/39/2ca93939804c82abe3186e0c9a82614d.jpg",
    alt: "Sunlight filtering through a peaceful green forest",
    className:
      "col-span-1 row-span-1 h-[190px] sm:h-[230px] lg:h-[195px] rounded-tl-[3px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[3px]",
  },
  {
    src: "https://i.pinimg.com/1200x/ac/fb/77/acfb778ddb1c727c5ffa6e09034cfed7.jpg",
    alt: "Golden sunrise over a peaceful natural landscape",
    className:
      "col-span-1 row-span-2 h-[260px] sm:h-[340px] lg:h-[280px] rounded-tl-[30px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[30px]",
  },
  {
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    alt: "Mountain scenery surrounded by evergreen trees",
    className:
      "col-span-1 row-span-2 h-[230px] sm:h-[300px] lg:h-[230px] rounded-tl-[3px] rounded-tr-[3px] rounded-bl-[30px] rounded-br-[3px]",
  },
  {
    src: "https://i.pinimg.com/736x/89/02/54/890254a00d84544a1b8182853b535cc4.jpg",
    alt: "Forest landscape at the edge of a mountain",
    className:
      "col-span-1 row-span-1 h-[170px] sm:h-[190px] lg:h-[145px] rounded-tl-[30px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[30px]",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    alt: "A winding road through a rugged natural landscape",
    className:
      "col-span-1 row-span-1 h-[190px] sm:h-[230px] lg:h-[225px] rounded-tl-[30px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[30px]",
  },
  {
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    alt: "Quiet woodland with deep green trees",
    className:
      "col-span-1 row-span-1 h-[190px] sm:h-[230px] lg:h-[225px] rounded-tl-[3px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[3px]",
  },
];

const OurGallery: React.FC = () => {
  return (
    <section
      aria-labelledby="gallery-heading"
      className="relative isolate w-full overflow-hidden bg-white px-4 py-10 sm:px-8 sm:py-14 lg:min-h-[820px] lg:px-12 lg:py-6"
    >
      {/* Decorative natural branch on the right */}
      <svg
        viewBox="0 0 35 900"
        preserveAspectRatio="none"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-7 md:block lg:w-8"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 -10 C12 100 27 180 20 280 S27 450 19 550 S25 740 18 910"
          stroke="#68472f"
          strokeWidth="7"
          opacity=".15"
          transform="translate(2 3)"
        />
        <path
          d="M20 -10 C12 100 27 180 20 280 S27 450 19 550 S25 740 18 910"
          stroke="#997052"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M20 -10 C12 100 27 180 20 280 S27 450 19 550 S25 740 18 910"
          stroke="#c4a486"
          strokeWidth="1"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1160px]">
        {/* Heading */}
        <header className="mb-7 text-center sm:mb-8">
          <h2
            id="gallery-heading"
            className="font-sans text-[21px] font-normal tracking-[-0.025em] text-[#536071] sm:text-[26px]"
          >
            Our Gallery
          </h2>

          <div
            className="mx-auto mt-2 h-[3px] w-14 bg-[#7ea785]"
            aria-hidden="true"
          />
        </header>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:grid-cols-12 lg:auto-rows-[72px] lg:gap-x-3 lg:gap-y-3">
          {galleryImages.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className={[
                "group relative min-w-0 overflow-hidden bg-[#f0f0e9]",
                image.className,
                "shadow-[0_8px_18px_rgba(28,43,30,0.10)]",
                "transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(28,43,30,0.18)]",
                index === 0
                  ? "lg:col-span-5 lg:row-span-2 lg:h-auto"
                  : "",
                index === 1
                  ? "lg:col-span-7 lg:row-span-3 lg:h-auto"
                  : "",
                index === 2
                  ? "lg:col-span-5 lg:row-span-3 lg:h-auto"
                  : "",
                index === 3
                  ? "lg:col-span-7 lg:row-span-2 lg:h-auto"
                  : "",
                index === 4
                  ? "lg:col-span-7 lg:row-span-3 lg:h-auto"
                  : "",
                index === 5
                  ? "lg:col-span-5 lg:row-span-3 lg:h-auto"
                  : "",
                index === 2 ? "sm:mt-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102318]/10 via-transparent to-transparent opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
