import { Outlet } from 'react-router-dom';
import Navbar  from '@/components/Navbar';
import Footer  from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { CookieConsent } from '@/components/CookieConsent';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export function Layout() {
  useScrollToTop();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
