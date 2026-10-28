import DiseasesTreated from '@/components/HomeCompo/DiseasesTreated';
import ExperienceNowalSection from '@/components/HomeCompo/ExperienceNowalSection';
import HealingProgramSection from '@/components/HomeCompo/HealingProgramSection';
import NatureCareHero from '@/components/HomeCompo/NatureCareHero';
import NowalWisdom from '@/components/HomeCompo/NowalWisdom';
import OurGallery from '@/components/HomeCompo/OurGallery';
import PopularTherapies from '@/components/HomeCompo/PopularTherapies';


export function Home() {

  return (
    <>
      <NatureCareHero />
      <ExperienceNowalSection />
      <HealingProgramSection />
      <DiseasesTreated />
      <PopularTherapies />
      <OurGallery />
      <NowalWisdom />
    </>
  );
}