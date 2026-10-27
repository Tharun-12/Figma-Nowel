
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Heart,
  Sparkles,
  Activity,
  TreePine,
} from 'lucide-react';

import NatureCareHero from '@/components/HomeCompo/NatureCareHero';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/Reveal';
import { ImageTextSection } from '@/components/ImageTextSection';
import {
  ProgrammeCard,
  RoomCard,
  ExperienceCard,
  BlogCard,
  TestimonialCard,
} from '@/components/Cards';
import { BookingCTA } from '@/components/BookingCTA';
import { FAQAccordion } from '@/components/FAQAccordion';
import { IMAGES } from '@/data/images';
import {
  PROGRAMMES,
  TREATMENTS,
  ROOMS,
  EXPERIENCES,
  BLOG_POSTS,
  TESTIMONIALS,
  FAQS,
  WELLNESS_CONCERNS,
} from '@/data/content';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function Home() {
  useDocumentTitle(
    'Nowal NatureCare — Holistic Wellness & Naturopathy Retreat',
    'A holistic wellness retreat offering naturopathy, Ayurveda, yoga, meditation, and natural healing therapies in a serene natural setting.'
  );

  const reduceMotion = useReducedMotion();
  const featuredPost =
    BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  const otherPosts = BLOG_POSTS.filter(
    (p) => p.slug !== featuredPost.slug
  ).slice(0, 3);

  return (
    <>
      {/* Responsive NatureCare Hero */}
      <NatureCareHero />

     
    </>
  );
}
