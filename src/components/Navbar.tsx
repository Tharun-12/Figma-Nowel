import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf, ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/content';
import { CONTACT } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? 'bg-ivory/95 backdrop-blur-md shadow-sm shadow-forest/5' : 'bg-transparent'
        }`}
      >
        <nav className="container-wide flex items-center justify-between py-4 lg:py-5">
          <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Nowal NatureCare home">
            <Leaf className={`h-7 w-7 transition-colors ${solid ? 'text-forest' : 'text-ivory'}`} strokeWidth={1.5} />
            <span className={`font-serif text-xl tracking-tight transition-colors ${solid ? 'text-forest' : 'text-ivory'}`}>
              Nowal NatureCare
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                      solid
                        ? isActive ? 'text-forest' : 'text-charcoal-400 hover:text-forest'
                        : isActive ? 'text-ivory' : 'text-ivory/80 hover:text-ivory'
                    }`
                  }
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </NavLink>

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2 w-72"
                    >
                      <div className="rounded-2xl border border-sage-200 bg-ivory p-2 shadow-xl shadow-forest/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-sage-100"
                          >
                            <span className="block text-sm font-medium text-forest">{child.label}</span>
                            {child.description && (
                              <span className="mt-0.5 block text-xs text-charcoal-400">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/plan-your-retreat" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-xs">
              Plan Your Retreat
            </Link>
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={`h-6 w-6 ${solid ? 'text-forest' : 'text-ivory'}`} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-forest-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] h-full w-full max-w-sm bg-ivory shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-sage-200">
                <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <Leaf className="h-6 w-6 text-forest" strokeWidth={1.5} />
                  <span className="font-serif text-lg text-forest">Nowal NatureCare</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-forest" strokeWidth={1.5} />
                </button>
              </div>

              <ul className="p-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-charcoal hover:bg-sage-100"
                        >
                          {item.label}
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <li key={child.to}>
                                  <Link
                                    to={child.to}
                                    className="block rounded-lg px-8 py-2.5 text-sm text-charcoal-400 hover:bg-sage-100 hover:text-forest"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.to}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-sage-100 hover:text-forest"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-6 pt-2">
                <Link to="/plan-your-retreat" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                  Plan Your Retreat
                </Link>
                <a href={CONTACT.phoneHref} className="mt-3 block text-center text-sm text-charcoal-400">
                  {CONTACT.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
