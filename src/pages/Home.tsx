import NatureCareHero from '@/components/HomeCompo/NatureCareHero';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function Home() {
  useDocumentTitle(
    'Nowal NatureCare — Holistic Wellness & Naturopathy Retreat',
    'A holistic wellness retreat offering naturopathy, Ayurveda, yoga, meditation, and natural healing therapies in a serene natural setting.'
  );

  return (
    <>
      <NatureCareHero />
    </>
  );
}