export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string; description?: string }[];
}

export interface Programme {
  slug: string;
  title: string;
  category: 'naturopathy' | 'ayurveda' | 'yoga' | 'detox' | 'stress' | 'physio';
  image: string;
  excerpt: string;
  description: string;
  suitableFor: string[];
  highlights: string[];
}

export interface Treatment {
  slug: string;
  title: string;
  category: 'natural' | 'hydro' | 'massage' | 'physical' | 'traditional';
  image: string;
  excerpt: string;
  overview: string;
  whatToExpect: string[];
  benefits: string[];
  suitability: string;
  precautions?: string;
  faqs: { q: string; a: string }[];
}

export interface Room {
  slug: string;
  title: string;
  image: string;
  gallery: string[];
  excerpt: string;
  description: string;
  occupancy: string;
  bedConfig: string;
  amenities: string[];
  features: string[];
  priceNote: string;
}

export interface Experience {
  slug: string;
  title: string;
  image: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: { heading: string; body: string }[];
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export interface WellnessConcern {
  slug: string;
  title: string;
  image: string;
  description: string;
  services: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface TariffPackage {
  title: string;
  type: string;
  duration: string;
  includes: string[];
  excludes: string[];
  priceNote: string;
}
