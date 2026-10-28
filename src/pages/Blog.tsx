
import BlogHero from '@/components/BlogCompo/BlogHero';
import CoupleRetreatPlan from '@/components/BlogCompo/CoupleRetreatPlan';
import CoupleRetreatSection from '@/components/BlogCompo/CoupleRetreatSection';
import FamiliarSection from '@/components/BlogCompo/FamiliarSection';
import FAQSection from '@/components/BlogCompo/FAQSection';
import HealingThroughNature from '@/components/BlogCompo/HealingThroughNature';
import LastingWellnessSection from '@/components/BlogCompo/LastingWellnessSection';
import LocationRetreatSection from '@/components/BlogCompo/LocationRetreatSection';
import RetreatExperienceSection from '@/components/BlogCompo/RetreatExperienceSection';
import RetreatPackagesSection from '@/components/BlogCompo/RetreatPackagesSection';
import WhyChooseRetreat from '@/components/BlogCompo/WhyChooseRetreat';

export function Blog() {
  

  return (
    <>
    <BlogHero />
    <HealingThroughNature />
    <CoupleRetreatSection />
    <FamiliarSection />
    <WhyChooseRetreat />
    <CoupleRetreatPlan />
    <RetreatExperienceSection />
    <RetreatPackagesSection />
    <LastingWellnessSection />
    <FAQSection />
    <LocationRetreatSection />
    </>
  );
}

export default Blog;
