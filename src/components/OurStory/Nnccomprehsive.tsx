import { Leaf } from 'lucide-react';
import yogaImage from '@/assets/OurStoryImages/GroupYoga.jpg';

const PARAGRAPHS = [
  'At Nowal NatureCare we believe true wealth lies in radiant health where the body, mind, and soul exist in perfect harmony.',
  'Rooted in the timeless wisdom of naturopathy and Yoga our philosophy is simple yet powerful: the body holds an incredible ability to heal itself when nurtured by nature and followed the a mindful lifestyle.',
  'Here, Nowal is not forced it gently unfolds through natural therapies, mindful detox, nourishment, and deep rest with changes in the lifestyle.',
  'Our serene, green sanctuary is designed to soothe your senses and awaken the healer within you.',
  'We blend modern science with ancient practices to create a holistic space where healing becomes a way of life.',
  'Nowal NatureCare isn’t just a center, it’s a return to self, a reminder that when you care for your health with intention and love you unlock life’s greatest abundance.',
];

export function NncComprehensive() {
  return (
    <section className="nnc-compre relative overflow-hidden bg-[#eef2e4]">
      {/* Decorative green blobs */}
      <span aria-hidden className="nnc-compre__blob absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2f6b45]/80 sm:h-96 sm:w-96" />
      <span aria-hidden className="nnc-compre__blob absolute -right-24 -top-24 hidden h-80 w-80 rounded-full bg-[#2f6b45] lg:block" />
      <Leaf aria-hidden strokeWidth={0.75} className="nnc-compre__leaf absolute left-3 top-6 h-16 w-16 -rotate-12 text-[#2f6b45]/60 sm:h-24 sm:w-24" />

      <div className="nnc-compre__layout relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div className="nnc-compre__text order-2 lg:order-1 lg:pl-[8%]">
          <h2 className="nnc-compre__title text-center font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-tight text-[#14301f]">
            Comprehensiveness of <br className="hidden sm:block" />Nowal NatureCare
          </h2>
          <div className="nnc-compre__divider mx-auto my-3 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#d8b85a]/70" />
            <Leaf className="h-4 w-4 text-[#d8b85a]" strokeWidth={1.5} />
            <span className="h-px w-14 bg-[#d8b85a]/70" />
          </div>

          <div className="nnc-compre__copy space-y-3 text-sm leading-relaxed text-[#1f2b25] sm:text-[15px]">
            {PARAGRAPHS.map((p) => <p key={p}>{p}</p>)}
          </div>

          <blockquote className="nnc-compre__quote mt-5 rounded-lg border-l-4 border-[#d8b85a] bg-[#f6e9c4] px-4 py-3 text-[13px] italic leading-relaxed text-[#4a4630] sm:text-sm">
            “True wealth comes from a pure and peaceful mind, a strong, resilient inner balance, and a wholesome life where good health and a bright always flow within you.”
          </blockquote>
        </div>

        <div className="nnc-compre__media order-1 lg:order-2">
          <div className="nnc-compre__frame overflow-hidden rounded-3xl border-4 border-[#1f5a35] shadow-xl">
            <img src={yogaImage} alt="Group practising yoga at sunrise" className="nnc-compre__img aspect-[4/3] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}