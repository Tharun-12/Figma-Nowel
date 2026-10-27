
import NovalNatureCare from '@/components/FounderCompo/NovalNatureCare';
import NovalPhilosophy from '@/components/FounderCompo/NovalPhilosophy';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function Experiences() {
  useDocumentTitle('Experiences — Nowal NatureCare', 'Discover the spaces and experiences that make a stay at Nowal NatureCare restorative — gardens, pools, dining, and wellness facilities.');

  return (
    <>
      <NovalNatureCare />
      <NovalPhilosophy />
    </>
  );
}


export default Experiences;
