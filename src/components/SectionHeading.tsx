import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false, className = '' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-ivory' : 'text-forest';
  const subtitleColor = light ? 'text-ivory/70' : 'text-charcoal-400';
  const eyebrowColor = light ? 'text-sage-300' : 'text-forest';

  return (
    <Reveal className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && <p className={`eyebrow ${eyebrowColor} mb-3`}>{eyebrow}</p>}
      <h2 className={`font-serif text-display-md ${titleColor} text-balance`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg leading-relaxed ${subtitleColor} text-pretty`}>{subtitle}</p>}
    </Reveal>
  );
}
