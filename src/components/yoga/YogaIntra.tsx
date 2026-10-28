import { Flower2, Leaf } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function YogaIntro() {
  return (
    <section className="yoga-intro relative overflow-hidden bg-sand-100/60 py-14 lg:py-20">
      <Leaf className="pointer-events-none absolute -left-8 top-10 hidden h-40 w-40 -rotate-12 text-sage-300/40 md:block" strokeWidth={0.8} aria-hidden="true" />
      <Leaf className="pointer-events-none absolute -right-8 bottom-6 hidden h-44 w-44 rotate-[200deg] text-sage-300/40 md:block" strokeWidth={0.8} aria-hidden="true" />

      <Reveal className="container-wide relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl font-bold text-forest-900 sm:text-4xl">Holistic Integrated Yoga</h2>

          <div className="mx-auto mt-3 flex items-center justify-center gap-3 text-sage-400" aria-hidden="true">
            <span className="h-px w-16 bg-sage-300" />
            <Flower2 className="h-4 w-4" strokeWidth={1.5} />
            <span className="h-px w-16 bg-sage-300" />
          </div>

          <p className="mt-5 font-serif text-lg italic text-forest/80">
            “Yoga aligns body, breath, and awareness—creating harmony, vitality, and conscious balance in everyday life.”
          </p>

          <div className="mt-6 space-y-4 text-left text-sm leading-relaxed text-charcoal-400 sm:text-base sm:text-justify">
            <p>
              Holistic Integrated Yoga is a gentle yet powerful practice suitable for all ages and fitness levels, conducted every morning to awaken the body, calm the mind, and align inner energies. More than physical exercise, this integrated approach combines asana (postures), pranayama (breathing), meditation, and mindful awareness—creating balance, vitality, and mental clarity to set a harmonious rhythm for the day.
            </p>
            <p>
              Alongside group sessions, personalised yoga sessions are offered to support individual health needs such as posture correction, flexibility, recovery, and mental focus. Tailored to one’s body constitution and lifestyle, personalised yoga ensures safe practice, deeper awareness, and sustainable progress.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}