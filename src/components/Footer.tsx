// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Leaf, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube, ArrowRight, CheckCircle2 } from 'lucide-react';
// import { NAV_ITEMS, CONTACT } from '@/data/content';
// import { supabase } from '@/lib/supabase';

// export function Footer() {
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     setStatus('loading');
//     try {
//       const { error } = await supabase.from('newsletter_subscriptions').insert({ email });
//       if (error) {
//         if (error.code === '23505') {
//           setStatus('success');
//         } else {
//           setStatus('error');
//         }
//       } else {
//         setStatus('success');
//         setEmail('');
//       }
//     } catch {
//       setStatus('error');
//     }
//   };

//   return (
//     <footer className="bg-forest-800 text-ivory">
//       {/* Newsletter */}
//       <div className="border-b border-forest-700/50">
//         <div className="container-wide py-12 lg:py-16">
//           <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
//             <div>
//               <h3 className="font-serif text-2xl lg:text-3xl text-ivory">Stay Connected</h3>
//               <p className="mt-2 text-ivory/70 max-w-md">
//                 Receive seasonal wellness insights, retreat updates, and mindful living inspiration.
//               </p>
//             </div>
//             <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your email address"
//                 className="flex-1 rounded-full border border-forest-600 bg-forest-700/50 px-5 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-sage-400 focus:outline-none focus:ring-1 focus:ring-sage-400"
//                 aria-label="Email for newsletter"
//               />
//               <button
//                 type="submit"
//                 disabled={status === 'loading'}
//                 className="inline-flex items-center justify-center gap-2 rounded-full bg-sage-400 px-6 py-3 text-sm font-medium text-forest-800 transition-colors hover:bg-sage-300 disabled:opacity-60"
//               >
//                 {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
//                 {status !== 'loading' && <ArrowRight className="h-4 w-4" />}
//               </button>
//               {status === 'success' && (
//                 <p className="text-sm text-sage-200 flex items-center gap-1.5 sm:absolute sm:mt-16">
//                   <CheckCircle2 className="h-4 w-4" /> You're subscribed. Thank you.
//                 </p>
//               )}
//               {status === 'error' && (
//                 <p className="text-sm text-red-300 sm:absolute sm:mt-16">Something went wrong. Please try again.</p>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Main footer */}
//       <div className="container-wide py-14 lg:py-20">
//         <div className="grid gap-10 lg:grid-cols-12">
//           {/* Brand */}
//           <div className="lg:col-span-4">
//             <Link to="/" className="flex items-center gap-2.5">
//               <Leaf className="h-7 w-7 text-sage-300" strokeWidth={1.5} />
//               <span className="font-serif text-xl text-ivory">Nowal NatureCare</span>
//             </Link>
//             <p className="mt-4 text-sm leading-relaxed text-ivory/65 max-w-sm">
//               A holistic wellness retreat dedicated to natural healing, mindful living, and the restoration of balance through naturopathy, Ayurveda, yoga, and traditional therapies.
//             </p>
//             <div className="mt-6 flex gap-3">
//               {[
//                 { Icon: Facebook, label: 'Facebook' },
//                 { Icon: Instagram, label: 'Instagram' },
//                 { Icon: Youtube, label: 'YouTube' },
//               ].map(({ Icon, label }) => (
//                 <a
//                   key={label}
//                   href="#"
//                   aria-label={label}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-600 text-ivory/70 transition-colors hover:border-sage-400 hover:text-sage-300"
//                 >
//                   <Icon className="h-4 w-4" strokeWidth={1.5} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick links */}
//           <div className="lg:col-span-2">
//             <h4 className="text-xs uppercase tracking-wider-2 text-sage-300 font-medium">Explore</h4>
//             <ul className="mt-4 space-y-2.5">
//               {NAV_ITEMS.slice(0, 5).map((item) => (
//                 <li key={item.label}>
//                   <Link to={item.to} className="text-sm text-ivory/65 transition-colors hover:text-sage-300">
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Programmes */}
//           <div className="lg:col-span-2">
//             <h4 className="text-xs uppercase tracking-wider-2 text-sage-300 font-medium">Wellness</h4>
//             <ul className="mt-4 space-y-2.5">
//               <li><Link to="/naturopathy" className="text-sm text-ivory/65 hover:text-sage-300">Naturopathy</Link></li>
//               <li><Link to="/ayurveda" className="text-sm text-ivory/65 hover:text-sage-300">Ayurveda</Link></li>
//               <li><Link to="/yoga-meditation" className="text-sm text-ivory/65 hover:text-sage-300">Yoga & Meditation</Link></li>
//               <li><Link to="/treatments" className="text-sm text-ivory/65 hover:text-sage-300">Treatments</Link></li>
//               <li><Link to="/wellness-concerns" className="text-sm text-ivory/65 hover:text-sage-300">Wellness Concerns</Link></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="lg:col-span-4">
//             <h4 className="text-xs uppercase tracking-wider-2 text-sage-300 font-medium">Contact</h4>
//             <ul className="mt-4 space-y-3.5">
//               <li className="flex gap-3">
//                 <MapPin className="h-5 w-5 shrink-0 text-sage-300 mt-0.5" strokeWidth={1.5} />
//                 <span className="text-sm text-ivory/65">{CONTACT.address}</span>
//               </li>
//               <li>
//                 <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-sm text-ivory/65 hover:text-sage-300">
//                   <Phone className="h-5 w-5 shrink-0 text-sage-300" strokeWidth={1.5} />
//                   {CONTACT.phone}
//                 </a>
//               </li>
//               <li>
//                 <a href={CONTACT.whatsappHref} className="flex items-center gap-3 text-sm text-ivory/65 hover:text-sage-300">
//                   <MessageCircle className="h-5 w-5 shrink-0 text-sage-300" strokeWidth={1.5} />
//                   WhatsApp
//                 </a>
//               </li>
//               <li>
//                 <a href={CONTACT.emailHref} className="flex items-center gap-3 text-sm text-ivory/65 hover:text-sage-300">
//                   <Mail className="h-5 w-5 shrink-0 text-sage-300" strokeWidth={1.5} />
//                   {CONTACT.email}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Legal */}
//         <div className="mt-12 flex flex-col gap-4 border-t border-forest-700/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-xs text-ivory/50">
//             © {new Date().getFullYear()} Nowal NatureCare. All rights reserved.
//           </p>
//           <ul className="flex flex-wrap gap-x-5 gap-y-2">
//             <li><Link to="/privacy-policy" className="text-xs text-ivory/50 hover:text-sage-300">Privacy Policy</Link></li>
//             <li><Link to="/terms-and-conditions" className="text-xs text-ivory/50 hover:text-sage-300">Terms & Conditions</Link></li>
//             <li><Link to="/booking-policy" className="text-xs text-ivory/50 hover:text-sage-300">Cancellation & Booking Policy</Link></li>
//             <li><Link to="/guest-guidelines" className="text-xs text-ivory/50 hover:text-sage-300">Guest Guidelines</Link></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';
import { NAV_ITEMS, CONTACT } from '@/data/content';

export function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Newsletter subscription requires a backend service.
    setMessage('Newsletter subscriptions are temporarily unavailable.');
  };

  return (
    <footer className="bg-forest-800 text-ivory">
      {/* Newsletter */}
      <div className="border-b border-forest-700/50">
        <div className="container-wide py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-serif text-2xl text-ivory lg:text-3xl">
                Stay Connected
              </h3>
              <p className="mt-2 max-w-md text-ivory/70">
                Receive seasonal wellness insights, retreat updates, and
                mindful living inspiration.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row sm:items-start"
            >
              <div className="flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setMessage('');
                  }}
                  placeholder="Your email address"
                  className="w-full rounded-full border border-forest-600 bg-forest-700/50 px-5 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:border-sage-400 focus:outline-none focus:ring-1 focus:ring-sage-400"
                  aria-label="Email for newsletter"
                />

                {message && (
                  <p
                    role="status"
                    className="mt-3 text-sm text-ivory/70"
                  >
                    {message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sage-400 px-6 py-3 text-sm font-medium text-forest-800 transition-colors hover:bg-sage-300"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <Leaf
                className="h-7 w-7 text-sage-300"
                strokeWidth={1.5}
              />
              <span className="font-serif text-xl text-ivory">
                Nowal NatureCare
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
              A holistic wellness retreat dedicated to natural healing,
              mindful living, and the restoration of balance through
              naturopathy, Ayurveda, yoga, and traditional therapies.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-600 text-ivory/70 transition-colors hover:border-sage-400 hover:text-sage-300"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-widest text-sage-300">
              Explore
            </h4>

            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-ivory/65 transition-colors hover:text-sage-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wellness Programmes */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-widest text-sage-300">
              Wellness
            </h4>

            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/naturopathy" className="text-sm text-ivory/65 hover:text-sage-300">
                  Naturopathy
                </Link>
              </li>
              <li>
                <Link to="/ayurveda" className="text-sm text-ivory/65 hover:text-sage-300">
                  Ayurveda
                </Link>
              </li>
              <li>
                <Link to="/yoga-meditation" className="text-sm text-ivory/65 hover:text-sage-300">
                  Yoga & Meditation
                </Link>
              </li>
              <li>
                <Link to="/treatments" className="text-sm text-ivory/65 hover:text-sage-300">
                  Treatments
                </Link>
              </li>
              <li>
                <Link to="/wellness-concerns" className="text-sm text-ivory/65 hover:text-sage-300">
                  Wellness Concerns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-medium uppercase tracking-widest text-sage-300">
              Contact
            </h4>

            <ul className="mt-4 space-y-3.5">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-sage-300"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-ivory/65">
                  {CONTACT.address}
                </span>
              </li>

              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-center gap-3 text-sm text-ivory/65 hover:text-sage-300"
                >
                  <Phone className="h-5 w-5 shrink-0 text-sage-300" strokeWidth={1.5} />
                  {CONTACT.phone}
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.whatsappHref}
                  className="flex items-center gap-3 text-sm text-ivory/65 hover:text-sage-300"
                >
                  <MessageCircle className="h-5 w-5 shrink-0 text-sage-300" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-center gap-3 text-sm text-ivory/65 hover:text-sage-300"
                >
                  <Mail className="h-5 w-5 shrink-0 text-sage-300" strokeWidth={1.5} />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 flex flex-col gap-4 border-t border-forest-700/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Nowal NatureCare. All rights reserved.
          </p>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link to="/privacy-policy" className="text-xs text-ivory/50 hover:text-sage-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="text-xs text-ivory/50 hover:text-sage-300">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/booking-policy" className="text-xs text-ivory/50 hover:text-sage-300">
                Cancellation & Booking Policy
              </Link>
            </li>
            <li>
              <Link to="/guest-guidelines" className="text-xs text-ivory/50 hover:text-sage-300">
                Guest Guidelines
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
