import { Check, Activity, Droplet, Eye, Flame, Leaf, Soup, Waves, Wind, type LucideIcon } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import {
  YOGA_KRIYA_BENEFITS,
  YOGA_KRIYA_LEFT,
  YOGA_KRIYA_RIGHT,
  type YogaKriya,
  type YogaKriyaIcon,
} from '@/data/yogaContent';

const KRIYA_ICONS: Record<YogaKriyaIcon, LucideIcon> = {
  droplet: Droplet,
  wind: Wind,
  flame: Flame,
  soup: Soup,
  waves: Waves,
  activity: Activity,
  eye: Eye,
};

type YogicKriyasProps = {
  heroImage: string;
  heroImageAlt?: string;
  stonesImage: string;
  stonesImageAlt?: string;
};

function Underline() {
  return <span className="mt-2 block h-0.5 w-10 bg-forest" aria-hidden="true" />;
}

function KriyaItem({ kriya }: { kriya: YogaKriya }) {
  const Icon = KRIYA_ICONS[kriya.icon];
  return (
    <li className="yoga-kriyas__item flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-forest shadow-md shadow-forest/10 ring-1 ring-sage-200">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <p className="pt-0.5 text-sm leading-relaxed text-charcoal-400 sm:text-[0.95rem]">
        <span className="font-semibold text-forest-900">{kriya.name}:</span> {kriya.text}
      </p>
    </li>
  );
}

export function YogicKriyas({
  heroImage,
  heroImageAlt = 'Woman meditating at sunrise above misty hills',
  stonesImage,
  stonesImageAlt = 'Balanced stones, towel and herbal bowl',
}: YogicKriyasProps) {
  return (
    <section className="yoga-kriyas relative overflow-hidden bg-ivory">
      <Leaf className="pointer-events-none absolute -right-8 top-6 hidden h-40 w-40 rotate-12 text-sage-300/30 lg:block" strokeWidth={0.8} aria-hidden="true" />

      {/* 1. Why kriyas are essential */}
      <div className="yoga-kriyas__why container-wide py-12 lg:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <Reveal className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl rounded-br-[5rem] md:rounded-br-[7rem]">
              <img src={heroImage} alt={heroImageAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <Leaf className="pointer-events-none absolute -right-3 top-2 h-16 w-16 rotate-[30deg] text-sage-400" strokeWidth={1.2} aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl font-bold text-forest-900 sm:text-3xl">Why Yogic Kriyas Are Essential for Healing</h2>
            <Underline />
            <ul className="mt-5 space-y-2.5">
              {YOGA_KRIYA_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-500 sm:text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-forest" strokeWidth={3} />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* 2. Types of kriyas */}
      <div className="yoga-kriyas__types bg-sage-100/60 py-12 lg:py-14">
        <div className="container-wide">
          <Reveal>
            <h3 className="font-serif text-2xl font-bold text-forest-900 sm:text-3xl">Types of Yogic Kriyas &amp; Their Benefits</h3>
            <Underline />
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2 md:gap-0">
            <ul className="space-y-6 md:pr-10">
              {YOGA_KRIYA_LEFT.map((k) => (
                <StaggerItem key={k.name}>
                  <KriyaItem kriya={k} />
                </StaggerItem>
              ))}
            </ul>
            <ul className="space-y-6 md:border-l md:border-sage-200 md:pl-10">
              {YOGA_KRIYA_RIGHT.map((k) => (
                <StaggerItem key={k.name}>
                  <KriyaItem kriya={k} />
                </StaggerItem>
              ))}
            </ul>
          </StaggerGroup>
        </div>
      </div>

      {/* 3. Daily living + foundation */}
      <div className="yoga-kriyas__foundation container-wide py-12 lg:py-16">
        <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-forest/15 md:aspect-[4/5]">
              <img src={stonesImage} alt={stonesImageAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-forest-900 sm:text-2xl">Yoga as a Discipline for Daily Living</h3>
              <Underline />
              <p className="mt-4 text-sm leading-relaxed text-charcoal-400 sm:text-base">
                When practiced regularly and mindfully, yoga becomes a lifelong wellness tool—supporting physical agility, mental calm, and emotional resilience. It encourages balanced responses to stress, improved decision-making, and a centred approach to work, relationships, and life.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-forest-900 sm:text-2xl">Yogic Kriyas: The Foundation of Deep Cleansing &amp; Holistic Healing</h3>
              <Underline />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal-400 sm:text-base">
                <p>
                  Yogic Kriyas, also known as Shatkriyas, are ancient yogic purification techniques forming the backbone of holistic healing in traditional yoga and nature cure systems. These practices cleanse the body internally, remove accumulated toxins, balance vital energy (prana), and restore optimal organ function.
                </p>
                <p>
                  Unlike conventional exercise routines, Yogic Kriyas work at a deeper physiological and energetic level—addressing the root causes of chronic, lifestyle-related, and long-standing health conditions. By purifying the respiratory tract, digestive system, nervous system, and sensory organs, kriyas activate the body’s innate self-healing intelligence.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}