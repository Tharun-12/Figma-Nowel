import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { OurStory } from '@/pages/OurStory';
import { WellnessProgrammes } from '@/pages/WellnessProgrammes';
import { Naturopathy } from '@/pages/Naturopathy';
import { Ayurveda } from '@/pages/Ayurveda';
import { YogaMeditation } from '@/pages/YogaMeditation';
import { Treatments } from '@/pages/Treatments';
import { TreatmentDetail } from '@/pages/TreatmentDetail';
import { Accommodation } from '@/pages/Accommodation';
import { RoomDetail } from '@/pages/RoomDetail';
import { TariffsPackages } from '@/pages/TariffsPackages';
import { Experiences } from '@/pages/Experiences';
import { Gallery } from '@/pages/Gallery';
import { GuestGuidelines } from '@/pages/GuestGuidelines';
import { WellnessConcerns } from '@/pages/WellnessConcerns';
import { Testimonials } from '@/pages/Testimonials';
import { Blog } from '@/pages/Blog';
import { BlogDetail } from '@/pages/BlogDetail';
import { FAQs } from '@/pages/FAQ';
import { Contact } from '@/pages/Contact';
import { PlanYourRetreat } from '@/pages/PlanYourRetreat';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { TermsAndConditions } from '@/pages/TermsandConditions';
import { BookingPolicy } from '@/pages/BookingPolicy';
import { NotFound } from '@/pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/wellness-programmes" element={<WellnessProgrammes />} />
          <Route path="/naturopathy" element={<Naturopathy />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/yoga-meditation" element={<YogaMeditation />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/accommodation/:slug" element={<RoomDetail />} />
          <Route path="/tariffs-packages" element={<TariffsPackages />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guest-guidelines" element={<GuestGuidelines />} />
          <Route path="/wellness-concerns" element={<WellnessConcerns />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan-your-retreat" element={<PlanYourRetreat />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/booking-policy" element={<BookingPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;