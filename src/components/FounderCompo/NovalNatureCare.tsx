
import React from "react";
import { Leaf, Landmark, Users, Sprout, Quote } from "lucide-react";

import HERO_BG from "@/assets/heroimage.jpg";
import FOUNDER_IMG from "@/assets/founders.jpg";
import FOOTER_BG from "@/assets/stonesimage.jpg";

const credentials = [
  { icon: Landmark, text: "Founder of R.N. Nowal Foundation" },
  { icon: Leaf, text: "Chairman & MD of Three Leaves India" },
  { icon: Users, text: "Social Reformer & Philanthropist" },
  { icon: Sprout, text: "Pioneer in Tea Industry Innovations" },
];

const NowalNatureCare = () => {
  return (
    <div className="min-h-screen w-full bg-[#f3f8f1] font-sans text-gray-700">
      {/* ================= HERO (full width) ================= */}
      <section className="relative flex min-h-[460px] w-full items-center overflow-hidden">
        {/* photo covers the whole section */}
        <div
          className="absolute inset-0 bg-cover bg-left"
          style={{ backgroundImage: `url('${HERO_BG}')` }}
        />

        {/* mobile: light wash so text is readable */}
        <div className="absolute inset-0 bg-[#f3f8f1]/85 md:hidden" />

        {/* desktop: photo fully visible on the left, fades into the panel on the right */}
        <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,transparent_0%,transparent_50%,rgba(243,248,241,0.9)_62%,#f3f8f1_70%,#f3f8f1_100%)] md:block" />

        <Leaf className="absolute right-4 top-3 h-16 w-16 rotate-45 text-green-700/70" />
        <Leaf className="absolute bottom-6 right-4 h-14 w-14 -rotate-12 text-green-700/50" />
        <Leaf className="absolute bottom-4 left-3 h-14 w-14 rotate-[30deg] text-green-800/70" />

        <div className="relative z-10 ml-auto w-full px-6 py-14 text-center md:w-[40%] md:px-8 lg:px-12">
          <Leaf className="mx-auto mb-1 h-5 w-5 text-green-700" />
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
            Nowal NatureCare
          </h1>
          <h2 className="mt-2 font-serif text-xl italic text-green-700 md:text-2xl">
            A Sanctuary for Holistic Natural Healing.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed md:text-base">
            In the rush of modern life, it's the mindful pause — the moment of
            embracing natural healing — that brings us closer to true balance
            and vitality.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed md:text-base">
            At Nowal, our philosophy is simple yet profound:{" "}
            <strong className="text-gray-900">
              health and healing always come first.
            </strong>{" "}
            We believe that every individual deserves the time and space to
            rejuvenate, rediscover their inner strength, and heal holistically
            — not just from today's stressors, but from the deeper, unseen
            imbalances of our times. Step into a journey where Nowal is a way
            of life.
          </p>
        </div>
      </section>

      {/* ================= FOUNDER (full width) ================= */}
      <section className="relative w-full bg-gradient-to-b from-[#f3f8f1] to-[#e6f1e3] px-4 py-12 md:px-8 lg:px-12">
        <Leaf className="absolute left-2 top-24 h-20 w-20 -rotate-12 text-green-700/40" />

        <div className="relative grid items-start gap-8 lg:grid-cols-[1.25fr_1fr_0.95fr] lg:gap-10">
          {/* Photo + name card */}
          <div className="flex flex-col items-center md:flex-row md:items-center">
            <div className="relative z-10 h-72 w-60 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg md:h-64 md:w-52">
              <img
                src={FOUNDER_IMG}
                alt="Shri Ram Niwas Nowal"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="-mt-8 w-full flex-1 rounded-2xl bg-white/75 p-5 pt-12 shadow-sm md:-ml-10 md:mt-0 md:py-6 md:pl-14 md:pr-5">
              <h3 className="font-serif text-lg font-bold uppercase leading-tight text-green-900 xl:whitespace-nowrap xl:text-xl">
                Shri Ram Niwas Nowal
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase leading-snug text-green-700">
                A Visionary Leader
                <br />
                and Social Reformer
              </p>
              <ul className="mt-5 space-y-3 text-[13px] font-medium text-gray-700">
                {credentials.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700/80 text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bio */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-700" />
              <h2 className="font-serif text-2xl font-semibold text-green-900">
                About Our Founder
              </h2>
            </div>
            <div className="space-y-4 text-[13px] leading-relaxed">
              <p>
                Shri Ram Niwas Nowal stands as an exemplary figure of
                first-generation entrepreneurship combined with unwavering
                social commitment. Born to Shri B.L. Nowal Sharma, he completed
                his early education in his ancestral village Gadri (Badhali) in
                Jaipur district, Rajasthan.
              </p>
              <p>
                As the founder of R.N. Nowal Foundation and co-founder,
                Chairman, and Managing Director of Three Leaves India Private
                Limited, Shri Nowal has built a leading tea company based in
                Guwahati that specializes in blending, packaging, and marketing
                premium Assam tea at affordable prices. The company pioneered
                poly-laminated packaging in the tea industry, showcasing his
                innovative approach to business.
              </p>
              <p>
                What truly distinguishes Shri Nowal is his deep-rooted
                connection to his birthplace and relentless service to rural
                communities. For nearly two decades, through his foundation, he
                has championed diverse causes including education, healthcare,
                environmental conservation, water harvesting, disaster relief,
                and the promotion of traditional Indian medicine systems.
              </p>
            </div>
          </div>

          {/* Quote + vision */}
          <div>
            <div className="relative rounded-xl bg-[#d9ecd5] p-5 shadow-sm">
              <Quote className="mb-2 h-6 w-6 fill-green-800 text-green-800" />
              <p className="font-serif text-[15px] italic leading-snug text-green-900">
                His humanitarian efforts during the COVID-19 pandemic, where he
                personally provided medicine, food, financial support, and
                medical assistance to hundreds of families without seeking
                recognition, exemplifies his selfless nature.
              </p>
              <Leaf className="absolute -bottom-3 right-2 h-6 w-6 text-green-700" />
            </div>

            <div className="mt-5 space-y-4 text-[12.5px] leading-relaxed">
              <p>
                Shri Nowal's most ambitious project is the Nowal NatureCare in
                Gadri (Badhali), near the revered Khatu Shyam Temple. This
                revolutionary initiative combines extra luxury hospitality with
                traditional Indian healing systems, offering natural therapy,
                yoga, Ayurveda, and holistic wellness solutions. The resort
                serves dual purpose; providing world-class facilities for
                premium guests while offering free healthcare services to
                underprivileged rural populations.
              </p>
              <p>
                His future vision includes establishing 'Sant Niwas' and
                'Gurukul Parisar' to preserve indigenous cattle breeds, promote
                organic farming, and provide value-based education rooted in
                Indian spiritual traditions. Shri Nowal embodies the perfect
                synthesis of business acumen, social responsibility, and
                cultural preservation, making him a true nation-builder and a
                respectable personality in his neighboring villages for his
                yeoman service to the community at large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER (full width, curved top) ================= */}
      <footer className="relative -mt-8 flex min-h-[280px] w-full items-center justify-center overflow-hidden [clip-path:ellipse(80%_100%_at_50%_100%)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${FOOTER_BG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6f1e3]/50 via-black/30 to-black/60" />
        <Leaf className="absolute bottom-6 left-4 h-16 w-16 rotate-12 text-green-500/70" />

        <div className="relative z-10 px-4 pt-8 text-center">
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Nowal NatureCare
          </h2>
          <div className="mx-auto my-3 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-white/60" />
            <Leaf className="h-4 w-4 text-green-300" />
            <span className="h-px w-16 bg-white/60" />
          </div>
          <p className="font-serif text-lg italic text-green-100 md:text-2xl">
            A Sanctuary for Holistic Natural Healing.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NowalNatureCare;