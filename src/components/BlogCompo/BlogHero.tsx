
import React from "react";

const BlogHero: React.FC = () => {
  return (
    <section
      className="relative isolate flex min-h-[360px] w-full
        items-center justify-center overflow-hidden
        bg-[#10241a] px-5 py-16 text-center
        sm:min-h-[400px] sm:px-8 sm:py-20
        md:min-h-[440px] md:py-24
        lg:min-h-[500px] lg:py-28
        xl:min-h-[540px]"
      aria-labelledby="blog-hero-title"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover
          bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 -z-10 bg-black/40"
        aria-hidden="true"
      />

      {/* Cinematic gradient */}
      <div
        className="absolute inset-0 -z-10
          bg-gradient-to-b from-black/15
          via-black/25 to-black/45"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-5xl">
        <h1
          id="blog-hero-title"
          className="font-serif text-4xl font-semibold
            leading-tight tracking-[-0.04em] text-white
            drop-shadow-lg
            sm:text-5xl
            md:text-6xl
            lg:text-[68px]
            xl:text-[76px]"
        >
          Nowal Nature Care Blog
        </h1>

        <p
          className="mx-auto mt-4 max-w-3xl
            text-sm leading-relaxed text-white/95
            drop-shadow-md
            sm:mt-5 sm:text-base
            md:text-lg
            lg:text-xl"
        >
          Insights, therapies, and natural wellness wisdom
          to help you reconnect with nature and restore
          balance in mind, body, and soul.
        </p>

        {/* Gold lotus divider */}
        <div
          className="mt-7 flex items-center justify-center
            gap-3 sm:mt-8 sm:gap-4"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-[#d7bd72] sm:w-16" />

          <svg
            viewBox="0 0 32 32"
            className="h-7 w-7 text-[#d7bd72]
              sm:h-8 sm:w-8"
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

          <span className="h-px w-14 bg-[#d7bd72] sm:w-16" />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
