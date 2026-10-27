import { NncHeroBanner } from '@/components/OurStory/Nncherobanner';
import { NncBreadcrumb } from '@/components/OurStory/Nncbreadcrum';
import { NncHealthWealth } from '@/components/OurStory/Nnchealthwealth';
import { NncVisionMission } from '@/components/OurStory/Nncvisionmission';
import { NncComprehensive } from '@/components/OurStory/Nnccomprehsive';
import { NncFoundingQuote } from '@/components/OurStory/Nncfoundingquote';
import { useDocumentTitle } from '@/hooks/useScrollToTop';

export function OurStory() {
  useDocumentTitle(
    'Our Story — Nowal NatureCare',
    'The founding philosophy and journey of Nowal NatureCare — rooted in nature, driven by purpose.'
  );

  return (
    <main className="nnc-page bg-[#fbfaf3]">
      <NncHeroBanner
        title="Nowal NatureCare"
        tagline="Rooted in nature, driven by purpose — the journey to healing began here."
      />
      <NncBreadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Nowal NatureCare' }]} />
      <NncHealthWealth />
      <NncVisionMission />
      <NncComprehensive />
      <NncFoundingQuote />
    </main>
  );
}

export default OurStory;