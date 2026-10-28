import { IMAGES } from '@/data/images';

/**
 * Image map for the Yoga page.
 * Defaults reuse images already in your IMAGES file so the page works immediately.
 * To use your own / generated images, drop files in /public/images/yoga/ and
 * replace the values, e.g. banner: '/images/yoga/banner.jpg'
 */
export const YOGA_IMAGES = {
  banner: IMAGES.heroYoga,
  jalNeti: IMAGES.treatmentHydro,
  mantra: IMAGES.experienceMeditation,
  therapeutic: IMAGES.programmeYoga,
  trataka: IMAGES.heroMeditation,
  aquatic: IMAGES.experiencePool,
  kriyaHero: IMAGES.philosophyMeditation,
  kriyaStones: IMAGES.experienceSpa,
} as const;

export type YogaTherapyId = 'mantra' | 'therapeutic' | 'jal-neti' | 'trataka' | 'aquatic';

export type YogaTherapy = {
  id: YogaTherapyId;
  label: string;
  tag: string;
  image: string;
  imageAlt: string;
  about: string;
  benefits: string[];
};

export const YOGA_THERAPIES: YogaTherapy[] = [
  {
    id: 'mantra',
    label: 'Mantra Chanting',
    tag: 'Sound Practice',
    image: YOGA_IMAGES.mantra,
    imageAlt: 'Guest chanting in a quiet garden',
    about:
      'The rhythmic repetition of sacred sounds that settles the mind, steadies the breath and brings a deep sense of calm and focus.',
    benefits: ['Calms the nervous system', 'Improves focus and clarity', 'Deepens breath control', 'Supports emotional balance'],
  },
  {
    id: 'therapeutic',
    label: 'Therapeutic Yoga',
    tag: 'Guided Therapy',
    image: YOGA_IMAGES.therapeutic,
    imageAlt: 'Instructor guiding a therapeutic yoga posture',
    about:
      'Postures and sequences adapted to individual health needs, supporting recovery, mobility and long-term wellbeing under expert guidance.',
    benefits: ['Corrects posture', 'Improves flexibility and strength', 'Eases chronic pain and stiffness', 'Supports recovery'],
  },
  {
    id: 'jal-neti',
    label: 'Jal Neti',
    tag: 'Traditional Yoga Practice',
    image: YOGA_IMAGES.jalNeti,
    imageAlt: 'Woman practising Jal Neti with a neti pot',
    about:
      'One of the six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies, preparing the system for higher yogic practices.',
    benefits: ['Cleanses internal organs', 'Balances doshas', 'Enhances pranic flow', 'Prepares for meditation'],
  },
  {
    id: 'trataka',
    label: 'Trataka',
    tag: 'Gazing Meditation',
    image: YOGA_IMAGES.trataka,
    imageAlt: 'Calm meditation setting for Trataka practice',
    about:
      'A steady, unblinking gaze on a single point, such as a candle flame, that sharpens attention and quiets the restless mind.',
    benefits: ['Improves eyesight', 'Sharpens concentration', 'Builds mental stability', 'Promotes restful sleep'],
  },
  {
    id: 'aquatic',
    label: 'Aquatic Yoga',
    tag: 'Water-based Practice',
    image: YOGA_IMAGES.aquatic,
    imageAlt: 'Peaceful pool used for aquatic yoga',
    about:
      'Gentle yoga practised in water, where buoyancy supports the body and makes movement easy on the joints.',
    benefits: ['Gentle on joints', 'Improves circulation', 'Builds balance and strength', 'Deeply relaxing'],
  },
];

export const YOGA_KRIYA_BENEFITS: string[] = [
  'Eliminates toxins and metabolic waste',
  'Improves digestion, respiration, and circulation',
  'Balances the nervous and endocrine systems',
  'Enhances immunity, vitality, and mental clarity',
  'Supports recovery from chronic ailments such as sinusitis, digestive disorders, hormonal imbalance, stress-related conditions, and fatigue',
];

export type YogaKriyaIcon = 'droplet' | 'wind' | 'flame' | 'soup' | 'waves' | 'activity' | 'eye';

export type YogaKriya = { icon: YogaKriyaIcon; name: string; text: string };

export const YOGA_KRIYA_LEFT: YogaKriya[] = [
  { icon: 'droplet', name: 'Jal Neti', text: 'Cleanses nasal passages and relieves sinus congestion and respiratory issues' },
  { icon: 'wind', name: 'Sutra Neti', text: 'Deep nasal purification enhancing oxygen intake and alertness' },
  { icon: 'flame', name: 'Kapalbhati', text: 'Detoxifies lungs and abdominal organs, boosts metabolism' },
  { icon: 'soup', name: 'Vaman Dhauti (Kunjal Kriya)', text: 'Cleanses the stomach and supports gastric health' },
];

export const YOGA_KRIYA_RIGHT: YogaKriya[] = [
  { icon: 'waves', name: 'Laghu Shankhaprakshalana', text: 'Deep intestinal cleansing improving gut health' },
  { icon: 'activity', name: 'Nauli', text: 'Strengthens digestion and stimulates abdominal organs' },
  { icon: 'eye', name: 'Trataka', text: 'Improves eyesight, concentration, and mental stability' },
];