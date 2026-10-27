import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type PageHeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  height?: 'full' | 'medium';
};

export function PageHero({ image, title, subtitle, eyebrow, height = 'medium' }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const heightClass = height === 'full' ? 'min-h-screen' : 'min-h-[60vh] lg:min-h-[65vh]';

  return (
    <section className={`relative flex items-end overflow-hidden ${heightClass}`}>
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          initial={{ scale: reduceMotion ? 1 : 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/30 to-forest-900/20" />
      </div>

      <div className="container-wide relative z-10 pb-16 pt-32 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <p className="eyebrow text-sage-300 mb-4">{eyebrow}</p>}
          <h1 className="max-w-3xl font-serif text-display-lg text-ivory text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/80 text-pretty">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-xs uppercase tracking-wider-2">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-scroll-hint" strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}
