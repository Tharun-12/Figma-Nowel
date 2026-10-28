import { Breadcrumbs } from '@/components/Breadcrumbs';
import { BookingCTA } from '@/components/BookingCTA';
import { YogaBanner } from '@/components/yoga/YogaBanner';
import { YogaIntro } from '@/components/yoga/YogaIntra';
import { YogaTherapies } from '@/components/yoga/YogaTherapies';
import { YogicKriyas } from '@/components/yoga/YogicKriyas';
import { YOGA_IMAGES } from '@/data/yogaContent';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function YogaMeditation() {
  useDocumentTitle(
    'Yoga & Meditation — Nowal NatureCare',
    'Mindful yoga routine at Nowal NatureCare: holistic integrated yoga, yoga therapies and yogic kriyas for deep cleansing and healing.'
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Wellness Programmes', to: '/wellness-programmes' },
          { label: 'Yoga & Meditation' },
        ]}
      />

      <YogaBanner image={YOGA_IMAGES.banner} />
      <YogaIntro />
      <YogaTherapies />
      <YogicKriyas heroImage={YOGA_IMAGES.kriyaHero} stonesImage={YOGA_IMAGES.kriyaStones} />

      <BookingCTA title="Find Your Stillness" subtitle="Join us for daily sessions that nourish body, breath, and mind." />
    </>
  );
}

export default YogaMeditation;