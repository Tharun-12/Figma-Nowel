import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/layouts/Layout';
import { LoadingState } from '@/components/States';
import { Home } from '@/pages/Home';

const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const OurStory = lazy(() => import('@/pages/OurStory').then((m) => ({ default: m.OurStory })));
const WellnessProgrammes = lazy(() => import('@/pages/WellnessProgrammes').then((m) => ({ default: m.WellnessProgrammes })));
const Naturopathy = lazy(() => import('@/pages/Naturopathy').then((m) => ({ default: m.Naturopathy })));
const Ayurveda = lazy(() => import('@/pages/Ayurveda').then((m) => ({ default: m.Ayurveda })));
const YogaMeditation = lazy(() => import('@/pages/YogaMeditation').then((m) => ({ default: m.YogaMeditation })));
const Treatments = lazy(() => import('@/pages/Treatments').then((m) => ({ default: m.Treatments })));
const TreatmentDetail = lazy(() => import('@/pages/TreatmentDetail').then((m) => ({ default: m.TreatmentDetail })));
const Accommodation = lazy(() => import('@/pages/Accommodation').then((m) => ({ default: m.Accommodation })));
const RoomDetail = lazy(() => import('@/pages/RoomDetail').then((m) => ({ default: m.RoomDetail })));
const TariffsPackages = lazy(() => import('@/pages/TariffsPackages').then((m) => ({ default: m.TariffsPackages })));
const Experiences = lazy(() => import('@/pages/Experiences').then((m) => ({ default: m.Experiences })));
const Gallery = lazy(() => import('@/pages/Gallery').then((m) => ({ default: m.Gallery })));
const GuestGuidelines = lazy(() => import('@/pages/GuestGuidelines').then((m) => ({ default: m.GuestGuidelines })));
const WellnessConcerns = lazy(() => import('@/pages/WellnessConcerns').then((m) => ({ default: m.WellnessConcerns })));
const Testimonials = lazy(() => import('@/pages/Testimonials').then((m) => ({ default: m.Testimonials })));
const Blog = lazy(() => import('@/pages/Blog').then((m) => ({ default: m.Blog })));
const BlogDetail = lazy(() => import('@/pages/BlogDetail').then((m) => ({ default: m.BlogDetail })));
const FAQs = lazy(() => import('@/pages/FAQ').then((m) => ({ default: m.FAQs })));
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })));
const PlanYourRetreat = lazy(() => import('@/pages/PlanYourRetreat').then((m) => ({ default: m.PlanYourRetreat })));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy })));
const TermsAndConditions = lazy(() => import('@/pages/TermsandConditions').then((m) => ({ default: m.TermsAndConditions })));
const BookingPolicy = lazy(() => import('@/pages/BookingPolicy').then((m) => ({ default: m.BookingPolicy })));
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<LoadingState />}><About /></Suspense>} />
          <Route path="/our-story" element={<Suspense fallback={<LoadingState />}><OurStory /></Suspense>} />
          <Route path="/wellness-programmes" element={<Suspense fallback={<LoadingState />}><WellnessProgrammes /></Suspense>} />
          <Route path="/naturopathy" element={<Suspense fallback={<LoadingState />}><Naturopathy /></Suspense>} />
          <Route path="/ayurveda" element={<Suspense fallback={<LoadingState />}><Ayurveda /></Suspense>} />
          <Route path="/yoga-meditation" element={<Suspense fallback={<LoadingState />}><YogaMeditation /></Suspense>} />
          <Route path="/treatments" element={<Suspense fallback={<LoadingState />}><Treatments /></Suspense>} />
          <Route path="/treatments/:slug" element={<Suspense fallback={<LoadingState />}><TreatmentDetail /></Suspense>} />
          <Route path="/accommodation" element={<Suspense fallback={<LoadingState />}><Accommodation /></Suspense>} />
          <Route path="/accommodation/:slug" element={<Suspense fallback={<LoadingState />}><RoomDetail /></Suspense>} />
          <Route path="/tariffs-packages" element={<Suspense fallback={<LoadingState />}><TariffsPackages /></Suspense>} />
          <Route path="/experiences" element={<Suspense fallback={<LoadingState />}><Experiences /></Suspense>} />
          <Route path="/gallery" element={<Suspense fallback={<LoadingState />}><Gallery /></Suspense>} />
          <Route path="/guest-guidelines" element={<Suspense fallback={<LoadingState />}><GuestGuidelines /></Suspense>} />
          <Route path="/wellness-concerns" element={<Suspense fallback={<LoadingState />}><WellnessConcerns /></Suspense>} />
          <Route path="/testimonials" element={<Suspense fallback={<LoadingState />}><Testimonials /></Suspense>} />
          <Route path="/blog" element={<Suspense fallback={<LoadingState />}><Blog /></Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={<LoadingState />}><BlogDetail /></Suspense>} />
          <Route path="/faqs" element={<Suspense fallback={<LoadingState />}><FAQs /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingState />}><Contact /></Suspense>} />
          <Route path="/plan-your-retreat" element={<Suspense fallback={<LoadingState />}><PlanYourRetreat /></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<LoadingState />}><PrivacyPolicy /></Suspense>} />
          <Route path="/terms-and-conditions" element={<Suspense fallback={<LoadingState />}><TermsAndConditions /></Suspense>} />
          <Route path="/booking-policy" element={<Suspense fallback={<LoadingState />}><BookingPolicy /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<LoadingState />}><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
