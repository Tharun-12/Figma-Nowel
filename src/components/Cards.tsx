import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Programme, Treatment, Room, Experience, BlogPost, Testimonial } from '@/types';

function CardImage({ src, alt, to }: { src: string; alt: string; to: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <Link to={to} className="block overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </Link>
  );
}

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-sage-100 transition-shadow hover:shadow-lg hover:shadow-forest/5">
      <div className="aspect-[4/3] overflow-hidden">
        <CardImage src={programme.image} alt={programme.title} to={`/wellness-programmes`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-forest">{programme.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400">{programme.excerpt}</p>
        <Link
          to="/wellness-programmes"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-colors hover:text-earth-600"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-sage-100 transition-shadow hover:shadow-lg hover:shadow-forest/5">
      <div className="aspect-[4/3] overflow-hidden">
        <CardImage src={treatment.image} alt={treatment.title} to={`/treatments/${treatment.slug}`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-forest">{treatment.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400">{treatment.excerpt}</p>
        <Link
          to={`/treatments/${treatment.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-colors hover:text-earth-600"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-sage-100 transition-shadow hover:shadow-lg hover:shadow-forest/5">
      <div className="aspect-[16/10] overflow-hidden">
        <CardImage src={room.image} alt={room.title} to={`/accommodation/${room.slug}`} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-forest">{room.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-wider text-earth-500">{room.occupancy}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400">{room.excerpt}</p>
        <Link
          to={`/accommodation/${room.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest transition-colors hover:text-earth-600"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl">
      <div className="aspect-[4/5] overflow-hidden">
        <motion.img
          src={experience.image}
          alt={experience.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent" />
      <div className="absolute bottom-0 p-6">
        <h3 className="font-serif text-xl text-ivory">{experience.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ivory/75 line-clamp-2">{experience.description}</p>
      </div>
    </article>
  );
}

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  if (featured) {
    return (
      <article className="group grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
        <Link to={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl aspect-[16/10]">
          <motion.img
            src={post.image}
            alt={post.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Link>
        <div>
          <span className="eyebrow text-earth-500">{post.category}</span>
          <h3 className="mt-3 font-serif text-display-sm text-forest text-balance">
            <Link to={`/blog/${post.slug}`} className="link-underline">{post.title}</Link>
          </h3>
          <p className="mt-3 text-charcoal-400 leading-relaxed">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-3 text-xs text-charcoal-400">
            <span>{post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <Link to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-earth-600">
            Read Article <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-sage-100 transition-shadow hover:shadow-lg hover:shadow-forest/5">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/10]">
        <motion.img
          src={post.image}
          alt={post.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow text-earth-500">{post.category}</span>
        <h3 className="mt-2 font-serif text-lg text-forest">
          <Link to={`/blog/${post.slug}`} className="link-underline">{post.title}</Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-400 line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-charcoal-400">
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </article>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col rounded-2xl bg-sand-100 p-8 border border-sand-200">
      <div className="flex gap-0.5 text-earth-500">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-base">★</span>
        ))}
      </div>
      <blockquote className="mt-4 flex-1 font-serif text-lg italic leading-relaxed text-charcoal-500">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5">
        <p className="text-sm font-medium text-forest">{testimonial.name}</p>
        <p className="text-xs text-charcoal-400">{testimonial.location}</p>
      </figcaption>
    </figure>
  );
}
