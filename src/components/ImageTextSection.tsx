import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ImageTextSectionProps = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  linkLabel?: string;
  linkTo?: string;
  reverse?: boolean;
  imagePosition?: string;
};

export function ImageTextSection({
  image, imageAlt, eyebrow, title, children, linkLabel, linkTo, reverse = false, imagePosition = 'center',
}: ImageTextSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-wide">
        <div className={`grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <Reveal className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[5/4]">
            <motion.img
              src={image}
              alt={imageAlt}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="font-serif text-display-md text-forest text-balance">{title}</h2>
            <div className="mt-5 space-y-4 text-charcoal-400 leading-relaxed text-pretty">{children}</div>
            {linkLabel && linkTo && (
              <Link to={linkTo} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-earth-600 transition-colors">
                {linkLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
