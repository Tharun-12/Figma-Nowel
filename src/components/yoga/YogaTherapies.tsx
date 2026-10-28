import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { AudioLines, CheckCircle2, ChevronDown, Droplet, Eye, HeartPulse, Leaf, Waves, type LucideIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { YOGA_THERAPIES, type YogaTherapyId } from '@/data/yogaContent';

const TAB_ICONS: Record<YogaTherapyId, { icon: LucideIcon; color: string }> = {
  mantra: { icon: AudioLines, color: 'text-purple-500' },
  therapeutic: { icon: HeartPulse, color: 'text-rose-500' },
  'jal-neti': { icon: Droplet, color: 'text-current' },
  trataka: { icon: Eye, color: 'text-forest' },
  aquatic: { icon: Waves, color: 'text-sky-600' },
};

export function YogaTherapies() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<YogaTherapyId>('jal-neti');
  const [expanded, setExpanded] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const active = YOGA_THERAPIES.find((t) => t.id === activeId) ?? YOGA_THERAPIES[0];

  const selectTab = (id: YogaTherapyId) => {
    setActiveId(id);
    setExpanded(false);
  };

  // Arrow-key navigation between tabs
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const dir = e.key === 'ArrowRight' ? 1 : -1;
    const next = YOGA_THERAPIES[(index + dir + YOGA_THERAPIES.length) % YOGA_THERAPIES.length];
    selectTab(next.id);
    tabRefs.current[next.id]?.focus();
  };

  return (
    <section className="yoga-therapies relative overflow-hidden bg-gradient-to-b from-ivory to-sage-100/50 py-14 lg:py-20">
      <Leaf className="pointer-events-none absolute -left-6 top-4 hidden h-36 w-36 -rotate-12 text-sage-300/40 md:block" strokeWidth={0.8} aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10 xl:px-16">
        <Reveal className="text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-forest/80">
            <span className="h-px w-8 bg-forest/30" />
            Yogic Practices
            <span className="h-px w-8 bg-forest/30" />
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-forest-900 sm:text-4xl">
            Our <span className="text-forest">Yoga Therapies</span>
          </h2>
          <p className="mt-2 text-sm text-charcoal-400 sm:text-base">Ancient wisdom meets modern therapeutic application for holistic healing</p>
        </Reveal>

        {/* Tabs */}
        <div className="yoga-therapies__tabs-wrap mt-8 flex justify-center">
          <div
            role="tablist"
            aria-label="Yoga therapies"
            className="yoga-therapies__tabs inline-flex max-w-full gap-1 overflow-x-auto rounded-full bg-white p-1.5 shadow-md shadow-forest/5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {YOGA_THERAPIES.map((t, i) => {
              const { icon: Icon, color } = TAB_ICONS[t.id];
              const isActive = t.id === activeId;
              return (
                <button
                  key={t.id}
                  ref={(el) => { tabRefs.current[t.id] = el; }}
                  role="tab"
                  id={`yoga-tab-${t.id}`}
                  aria-selected={isActive}
                  aria-controls={`yoga-panel-${t.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectTab(t.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`yoga-therapies__tab flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 sm:px-5 ${
                    isActive ? 'bg-forest text-ivory shadow' : 'text-charcoal-500 hover:bg-sage-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-ivory' : color}`} strokeWidth={1.8} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`yoga-panel-${active.id}`}
          aria-labelledby={`yoga-tab-${active.id}`}
          className="yoga-therapies__panel mt-8 w-full min-w-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full overflow-hidden rounded-2xl bg-white shadow-xl shadow-forest/10"
            >
              {/* Image banner */}
              <div className="relative h-52 sm:h-64 lg:h-72">
                <img src={active.image} alt={active.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent" />
                <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-8">
                  <h3 className="font-serif text-3xl font-bold text-ivory sm:text-4xl">{active.label}</h3>
                  <p className="mt-1 text-sm text-ivory/85 sm:text-base">{active.tag}</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:gap-0">
                <div className="md:pr-10">
                  <h4 className="font-serif text-xl font-bold text-forest-900">About {active.label}</h4>
                  <span className="mt-2 block h-0.5 w-10 bg-forest" aria-hidden="true" />
                  <p
                    className={`mt-4 text-sm leading-relaxed text-charcoal-400 sm:text-base ${expanded ? '' : 'line-clamp-3 md:line-clamp-none'}`}
                  >
                    {active.about}
                  </p>
                  <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                    className="yoga-therapies__more mt-5 inline-flex items-center gap-1.5 border-b border-forest pb-0.5 text-sm font-medium text-forest md:hidden"
                  >
                    {expanded ? 'Show Less' : 'Learn More'}
                    <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <div className="md:border-l md:border-sand-200 md:pl-10">
                  <h4 className="flex items-center gap-2 font-serif text-xl font-bold text-forest-900">
                    <CheckCircle2 className="h-5 w-5 text-forest" fill="currentColor" stroke="white" />
                    Key Benefits
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {active.benefits.map((b) => (
                      <li key={b} className="yoga-therapies__benefit flex items-center gap-3 rounded-md bg-sage-100/60 px-3 py-2.5 text-sm text-charcoal-500">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-forest" fill="currentColor" stroke="white" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}