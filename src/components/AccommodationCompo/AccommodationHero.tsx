import React from "react";

const AccommodationHero: React.FC = () => {
  return (
    // Removed padding and max-width to make it full screen
    <section className="w-full bg-white">
      <div className="relative flex min-h-[250px] w-full items-center overflow-hidden sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
        {/* Background image */}
        <img
          src="https://i.pinimg.com/736x/c7/b6/63/c7b6637717911f3dc397a232e8b7adef.jpg"
          alt="Luxury hotel bedroom with elegant bedding and warm lighting"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark green overlay - adjusted to match the deep green on the left fading to reveal the bed on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#052e26] via-[#052e26]/90 to-transparent" />
        
        {/* Extra dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content Container */}
        <div className="relative z-10 w-full px-6 py-10 sm:px-12 md:px-20 lg:px-32">
          <div className="max-w-[700px]">
            {/* Heading */}
            <h1 className="font-serif text-[32px] font-bold leading-tight tracking-wide sm:text-[42px] md:text-[52px] lg:text-[60px]">
              <span className="text-[#e8c477]">Luxury</span>{" "}
              <span className="text-white">
                Accommodations
              </span>
            </h1>

            {/* Decorative gold divider with center icon */}
            <div className="my-4 flex w-full max-w-[450px] items-center gap-3">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d5b16b] to-[#d5b16b]" />
              <span className="text-[16px] leading-none text-[#d5b16b]">
                ❧
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#d5b16b] to-transparent" />
            </div>

            {/* Subtitle */}
            <p className="max-w-[500px] font-serif text-[14px] leading-relaxed text-white/95 sm:text-[16px] md:text-[18px]">
              Luxurious accommodation designed for a comfortable stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationHero;