import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

type BookingCTAProps = {
  title: string;
  subtitle?: string;
  image?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

export function BookingCTA({
  title,
  subtitle,
  image,
  primaryLabel = 'Plan Your Retreat',
  primaryTo = '/plan-your-retreat',
  secondaryLabel = 'Contact Us',
  secondaryTo = '/contact',
}: BookingCTAProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <motion.img
            src={image}
            alt=""
            initial={{ scale: reduceMotion ? 1 : 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-forest-900/70" />
        </div>
      )}
      <div className={`relative z-10 ${image ? 'py-20 lg:py-28' : 'bg-forest py-16 lg:py-20'}`}>
        <div className="container-wide text-center">
          {!image && <Leaf className="mx-auto h-8 w-8 text-sage-300 mb-4" strokeWidth={1.5} />}
          <h2 className={`font-serif text-display-md text-balance ${image ? 'text-ivory' : 'text-ivory'}`}>{title}</h2>
          {subtitle && (
            <p className={`mt-4 mx-auto max-w-xl text-lg leading-relaxed ${image ? 'text-ivory/80' : 'text-ivory/80'}`}>{subtitle}</p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={primaryTo} className="btn-primary !bg-sage-400 !text-forest-800 hover:!bg-sage-300">
              {primaryLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to={secondaryTo} className="btn-secondary !border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-forest">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
