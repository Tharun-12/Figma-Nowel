import { Leaf } from 'lucide-react';
import visionBg from '@/assets/OurStoryImages/OurStorySecondImage.jpg';
import silhouetteImg from '@/assets/OurStoryImages/OurStoryShadowimage.jpg';

export function NncVisionMission() {
  return (
    <section className="nnc-vision relative isolate overflow-hidden bg-[#f3d9a0] lg:min-h-[420px]">
      {/* Fill layer: same photo, blurred, so the right side never looks empty */}
      <img
        src={visionBg}
        alt=""
        aria-hidden
        className="nnc-vision__bg-fill absolute inset-0 -z-20 h-full w-full scale-110 object-cover object-center blur-xl"
        loading="lazy"
        decoding="async"
      />
      {/* Main photo: full width on mobile, pinned to the left on desktop so the person stays visible beside the card */}
      <img
        src={visionBg}
        alt=""
        aria-hidden
        className="nnc-vision__bg absolute inset-y-0 left-0 -z-10 h-full w-full object-cover object-center lg:w-[68%] lg:object-[50%_center] lg:[mask-image:linear-gradient(to_right,black_70%,transparent_100%)]"
        loading="lazy"
        decoding="async"
      />
      <div className="nnc-vision__shade absolute inset-0 -z-10 bg-black/15 lg:bg-transparent" />

      <div className="nnc-vision__layout mx-auto grid max-w-7xl items-center gap-6 px-4 py-10 sm:px-8 lg:min-h-[420px] lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:py-14">
        {/* Script heading */}
        <div className="nnc-vision__quote text-center lg:pl-[6%] lg:text-left">
          <p className="nnc-vision__script font-serif text-[clamp(2rem,4vw,3.25rem)] italic leading-tight text-white drop-shadow-md lg:text-[#1f5a35] lg:drop-shadow-none lg:[text-shadow:0_1px_14px_rgba(255,255,255,0.45)]">
            Health <br className="hidden lg:block" />is the <br className="hidden lg:block" />greatest <br className="hidden lg:block" />wealth
          </p>
          <span className="nnc-vision__rule mx-auto mt-3 block h-px w-14 bg-[#d8b85a] lg:mx-0" />
        </div>

        {/* Card */}
        <div className="nnc-vision__card relative rounded-3xl bg-[#faf8ee] p-5 shadow-xl sm:p-8">
          <h2 className="nnc-vision__title text-center font-serif text-[clamp(1.5rem,2.4vw,2rem)] font-bold text-[#14301f]">
            Our Vision &amp; Mission
          </h2>
          <div className="nnc-vision__divider mx-auto my-2 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#d8b85a]/70" />
            <Leaf className="h-4 w-4 text-[#1f5a35]" strokeWidth={1.5} />
            <span className="h-px w-16 bg-[#d8b85a]/70" />
          </div>

          <div className="nnc-vision__body mt-4 grid items-center gap-6 sm:grid-cols-[0.9fr_1.4fr]">
            {/* Circle image (works with a JPG that has its own sun/background) */}
            <div className="nnc-vision__figure relative mx-auto aspect-square w-44 overflow-hidden rounded-full bg-[#fbb92e] shadow-md ring-4 ring-[#faf8ee] sm:w-full sm:max-w-[230px]">
              <img
                src={silhouetteImg}
                alt="Silhouette of a person meditating at sunrise"
                className="nnc-vision__silhouette absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="nnc-vision__text space-y-4 text-[13px] leading-relaxed text-[#2f3d36] sm:text-sm">
              <div>
                <h3 className="nnc-vision__heading font-serif text-lg font-bold text-[#14301f]">Our Vision</h3>
                <p>To become a leading center for holistic healing and sustainable Nowal, blending the ancient science of naturopathy with modern lifestyle to promote natural living, wellness, and complete rejuvenation of mind, body, and spirit.</p>
              </div>
              <div>
                <h3 className="nnc-vision__heading font-serif text-lg font-bold text-[#14301f]">Our Mission</h3>
                <p>To provide world-class naturopathy and Nowal services in a serene and eco-friendly environment, combining traditional therapies, lifestyle interventions, and mindful experiences that foster long-term well-being and sustainable health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}