import { Sprout, Leaf, Flower2, HandHeart, HeartPulse, type LucideIcon } from 'lucide-react';

type Item = { icon: LucideIcon; text: string; wide?: boolean };

const ITEMS: Item[] = [
  { icon: Sprout, text: 'Health is the greatest wealth, and naturopathy as a drugless regimen helps you protect it, naturally with the concept of alternative medicine.' },
  { icon: Leaf, text: 'Rooted in the belief that the body can heal itself, naturopathy uses nature-based therapies, detox, nutrition, and mindful living to restore balance and prevent illness.' },
  { icon: Flower2, text: 'Nowal NatureCare is a sanctuary built on this philosophy, where ancient wisdom meets modern science in a calm, healing environment.' },
  { icon: HandHeart, text: 'Here, we don’t just treat symptoms—we nurture the whole you.' },
  { icon: HeartPulse, wide: true, text: 'By awakening your body’s innate strength, we guide you toward lasting Nowal, proving that investing in your health is the richest gift you can give yourself and to your family. You can also make others awake to follow the lifestyle to keep diseases away.' },
];

export function NncHealthWealth() {
  return (
    <section className="nnc-health relative overflow-hidden bg-gradient-to-b from-[#f4f2e2] to-[#eef0dc] px-4 py-12 sm:px-8 sm:py-16">
      <Leaf aria-hidden strokeWidth={1} className="nnc-health__leaf absolute -left-6 -top-4 h-28 w-28 -rotate-12 text-[#9db98d]/50 sm:h-40 sm:w-40" />
      <Leaf aria-hidden strokeWidth={1} className="nnc-health__leaf absolute -right-6 -top-4 h-28 w-28 rotate-[100deg] text-[#9db98d]/50 sm:h-40 sm:w-40" />

      <div className="nnc-health__inner relative mx-auto max-w-5xl">
        <h2 className="nnc-health__title text-center font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold text-[#14301f]">
          Health is the greatest wealth
        </h2>
        <div className="nnc-health__divider mx-auto mt-3 mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <span className="h-px w-16 bg-[#d8b85a]/70 sm:w-24" />
          <Sprout className="h-4 w-4 text-[#1f5a35]" strokeWidth={1.75} />
          <span className="h-px w-16 bg-[#d8b85a]/70 sm:w-24" />
        </div>

        <ul className="nnc-health__grid grid gap-4 sm:gap-5 md:grid-cols-2">
          {ITEMS.map(({ icon: Icon, text, wide }) => (
            <li
              key={text}
              className={`nnc-health__card flex items-center gap-4 rounded-xl bg-white/90 p-4 shadow-[0_6px_24px_rgba(20,60,35,0.08)] sm:p-5 ${wide ? 'md:col-span-2' : ''}`}
            >
              <span className="nnc-health__icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#dfead6] text-[#1f5a35] sm:h-16 sm:w-16">
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} />
              </span>
              <p className="nnc-health__text text-sm leading-relaxed text-[#2f3d36] sm:text-[15px]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}