import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('nowal-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('nowal-cookie-consent', 'accepted');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 rounded-2xl border border-sage-200 bg-ivory p-5 shadow-xl shadow-forest/10"
        >
          <div className="flex gap-4">
            <Leaf className="h-6 w-6 shrink-0 text-forest mt-0.5" strokeWidth={1.5} />
            <div className="flex-1">
              <p className="text-sm text-charcoal-400 leading-relaxed">
                We use cookies to enhance your browsing experience and analyse site traffic. By continuing, you agree to our{' '}
                <Link to="/privacy-policy" className="text-forest underline">Privacy Policy</Link>.
              </p>
              <div className="mt-3 flex gap-2">
                <button onClick={accept} className="btn-primary !py-2 !px-4 text-xs">Accept</button>
                <button onClick={() => setShow(false)} className="btn-ghost text-xs">Dismiss</button>
              </div>
            </div>
            <button onClick={() => setShow(false)} aria-label="Dismiss" className="text-charcoal-400 hover:text-charcoal">
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
