// import { useEffect, useState } from 'react';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import { Leaf, ChevronDown, Menu, X } from 'lucide-react';
// import { NAV_ITEMS } from '@/data/content';
// import { CONTACT } from '@/data/content';

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     setMobileOpen(false);
//     setMobileExpanded(null);
//   }, [location.pathname]);

//   const solid = scrolled || !isHome;

//   return (
//     <>
//       <header
//         className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
//           solid ? 'bg-ivory/95 backdrop-blur-md shadow-sm shadow-forest/5' : 'bg-transparent'
//         }`}
//       >
//         <nav className="container-wide flex items-center justify-between py-4 lg:py-5">
//           <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Nowal NatureCare home">
//             <Leaf className={`h-7 w-7 transition-colors ${solid ? 'text-forest' : 'text-ivory'}`} strokeWidth={1.5} />
//             <span className={`font-serif text-xl tracking-tight transition-colors ${solid ? 'text-forest' : 'text-ivory'}`}>
//               Nowal NatureCare
//             </span>
//           </Link>

//           {/* Desktop nav */}
//           <ul className="hidden lg:flex items-center gap-1">
//             {NAV_ITEMS.map((item) => (
//               <li
//                 key={item.label}
//                 className="relative"
//                 onMouseEnter={() => item.children && setOpenDropdown(item.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <NavLink
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
//                       solid
//                         ? isActive ? 'text-forest' : 'text-charcoal-400 hover:text-forest'
//                         : isActive ? 'text-ivory' : 'text-ivory/80 hover:text-ivory'
//                     }`
//                   }
//                 >
//                   {item.label}
//                   {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
//                 </NavLink>

//                 <AnimatePresence>
//                   {item.children && openDropdown === item.label && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 8 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute left-0 top-full pt-2 w-72"
//                     >
//                       <div className="rounded-2xl border border-sage-200 bg-ivory p-2 shadow-xl shadow-forest/10">
//                         {item.children.map((child) => (
//                           <Link
//                             key={child.to}
//                             to={child.to}
//                             className="block rounded-xl px-4 py-3 transition-colors hover:bg-sage-100"
//                           >
//                             <span className="block text-sm font-medium text-forest">{child.label}</span>
//                             {child.description && (
//                               <span className="mt-0.5 block text-xs text-charcoal-400">{child.description}</span>
//                             )}
//                           </Link>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </li>
//             ))}
//           </ul>

//           <div className="flex items-center gap-3">
//             <Link to="/plan-your-retreat" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-xs">
//               Plan Your Retreat
//             </Link>
//             <button
//               className="lg:hidden p-2 -mr-2"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//             >
//               <Menu className={`h-6 w-6 ${solid ? 'text-forest' : 'text-ivory'}`} strokeWidth={1.5} />
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-[60] bg-forest-900/40 backdrop-blur-sm lg:hidden"
//               onClick={() => setMobileOpen(false)}
//             />
//             <motion.aside
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//               className="fixed right-0 top-0 z-[70] h-full w-full max-w-sm bg-ivory shadow-2xl lg:hidden overflow-y-auto"
//             >
//               <div className="flex items-center justify-between p-6 border-b border-sage-200">
//                 <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
//                   <Leaf className="h-6 w-6 text-forest" strokeWidth={1.5} />
//                   <span className="font-serif text-lg text-forest">Nowal NatureCare</span>
//                 </Link>
//                 <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
//                   <X className="h-6 w-6 text-forest" strokeWidth={1.5} />
//                 </button>
//               </div>

//               <ul className="p-4">
//                 {NAV_ITEMS.map((item) => (
//                   <li key={item.label}>
//                     {item.children ? (
//                       <>
//                         <button
//                           onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
//                           className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-charcoal hover:bg-sage-100"
//                         >
//                           {item.label}
//                           <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
//                         </button>
//                         <AnimatePresence>
//                           {mobileExpanded === item.label && (
//                             <motion.ul
//                               initial={{ height: 0, opacity: 0 }}
//                               animate={{ height: 'auto', opacity: 1 }}
//                               exit={{ height: 0, opacity: 0 }}
//                               transition={{ duration: 0.25 }}
//                               className="overflow-hidden"
//                             >
//                               {item.children.map((child) => (
//                                 <li key={child.to}>
//                                   <Link
//                                     to={child.to}
//                                     className="block rounded-lg px-8 py-2.5 text-sm text-charcoal-400 hover:bg-sage-100 hover:text-forest"
//                                   >
//                                     {child.label}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </motion.ul>
//                           )}
//                         </AnimatePresence>
//                       </>
//                     ) : (
//                       <Link
//                         to={item.to}
//                         className="block rounded-xl px-4 py-3 text-base font-medium text-charcoal hover:bg-sage-100 hover:text-forest"
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="p-6 pt-2">
//                 <Link to="/plan-your-retreat" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
//                   Plan Your Retreat
//                 </Link>
//                 <a href={CONTACT.phoneHref} className="mt-3 block text-center text-sm text-charcoal-400">
//                   {CONTACT.phone}
//                 </a>
//               </div>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }




// import React, { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   Menu, 
//   X, 
//   ChevronDown, 
//   ChevronRight, 
//   Home, 
//   Info, 
//   Heart, 
//   Hotel, 
//   Images, 
//   Phone, 
//   ShoppingBag, 
//   Calendar,
//   Users,
//   User,
//   Clock,
//   Leaf,
//   Activity,
//   Utensils,
//   Gem,
//   MapPin,
//   Briefcase,
//   BookOpen,
//   Shield,
//   PartyPopper,
//   Megaphone,
//   PenTool
// } from 'lucide-react';
// import logo from '../assets/navbarlogo.png';

// import { useNavigate } from 'react-router-dom';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [isLaptop, setIsLaptop] = useState(false);
//   const navRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate();
//   const [openSubDropdowns, setOpenSubDropdowns] = useState<Record<string, boolean>>({});

//   // Handle responsive breakpoints and scroll effect
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 1024);
//       setIsTablet(width >= 768 && width < 1024);
//       setIsLaptop(width >= 1024 && width < 1440);
//     };

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 20);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // const handleBookNow = () => {
//   //   if (window.location.pathname === '/contact') {
//   //     scrollToSection('contact-form');
//   //   } else {
//   //     navigate('/contact');
//   //     setTimeout(() => scrollToSection('contact-form'), 100);
//   //   }
//   // };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//         setOpenDropdown(null);
//         setOpenSubDropdowns({});
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const toggleSubDropdown = (parentId: string, subId: string) => {
//     setOpenSubDropdowns(prev => ({
//       ...prev,
//       [`${parentId}-${subId}`]: !prev[`${parentId}-${subId}`]
//     }));
//   };

//   const closeAllDropdowns = () => {
//     setIsOpen(false);
//     setOpenDropdown(null);
//     setOpenSubDropdowns({});
//   };

//   // Define dropdown arrays with icons
//   const aboutUsDropdown = [
//     { name: 'Nowal NatureCare', path: '/Ourstory', icon: <Leaf className="w-4 h-4" />, description: 'Our holistic healing philosophy' },
//     { name: 'About Founder', path: '/experience#mantra', icon: <User className="w-4 h-4" />, description: 'Meet our visionary leader' },
//     { name: 'Healing Team', path: '/healing-team', icon: <Users className="w-4 h-4" />, description: 'Our expert practitioners' },
//     { name: 'Daily Routine', path: '/dincharya', icon: <Clock className="w-4 h-4" />, description: 'Structured wellness schedule' },
//   ];

//   const treatmentsDropdown = [
//     { 
//       name: 'Holistic Programs', 
//       path: '/programs',
//       icon: <Activity className="w-4 h-4" />,
//       description: 'Comprehensive wellness packages',
//       submenu: [
//         { name: 'Naturopathy Wonders', path: '/narutopathy', icon: <Leaf className="w-4 h-4" /> },
//         { name: 'Yoga & Meditation', path: '/yoga', icon: <Activity className="w-4 h-4" /> },
//         { name: 'Diet & Nutrition', path: '/diet', icon: <Utensils className="w-4 h-4" /> },
//         { name: 'Ayurveda', path: '/ayurveda', icon: <Gem className="w-4 h-4" /> },
//         { name: 'Acupuncture', path: '/Holistictherapy', icon: <Shield className="w-4 h-4" /> },
//         { name: 'Physiotherapy', path: '/physiotheraphy', icon: <Activity className="w-4 h-4" /> },
//       ]
//     }
//   ];

//   const accommodationsDropdown = [
//     { name: 'Accommodation Details', path: '/accomadation', icon: <Hotel className="w-4 h-4" />, description: 'Room options & amenities' },
//     { name: 'Accommodation Guidelines', path: '/guidliness', icon: <BookOpen className="w-4 h-4" />, description: 'Stay information & policies' },
//   ];

//   const celebrationsDropdown = [
//     { name: 'Wedding & Events', path: '/wedding', icon: <PartyPopper className="w-4 h-4" />, description: 'Beautiful celebrations and special occasions' },
//   ];

//   const contactUsDropdown = [
//     { name: 'Contact Information', path: '/contact', icon: <MapPin className="w-4 h-4" />, description: 'Get in touch with us' },
//     { name: 'Career Opportunities', path: '/career', icon: <Briefcase className="w-4 h-4" />, description: 'Join our healing team' },
//   ];

//   return (
//     <>
//       <nav 
//         ref={navRef}
//         className={`fixed w-full z-50 transition-all duration-300 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md shadow-lg py-1'
//             : 'bg-gradient-to-r from-green-50 to-emerald-100 py-2 shadow-md'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-4 xl:px-6">
//           <div className="flex justify-between items-center h-14 sm:h-16">
//             {/* Left side - Menu Toggle and Logo */}
//             <div className="flex items-center flex-shrink-0">
//               {/* Menu Toggle Button - Hidden on mobile */}
//               <div className="hidden lg:flex items-center mr-2">
//                 <button
//                   className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
//                     isScrolled 
//                       ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
//                       : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
//                   } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500`}
//                   onClick={() => setIsSidebarOpen(true)}
//                 >
//                   <span className="sr-only">Open sidebar menu</span>
//                   <Menu className="block h-5 w-5" aria-hidden="true" />
//                 </button>
//               </div>

//               {/* Logo */}
//               <div className="flex items-center">
//                 <NavLink to="/" className="flex items-center" onClick={closeAllDropdowns}>
//                   <img 
//                     src={logo} 
//                     alt="Company Logo" 
//                     className="h-14 lg:h-15 w-20 hover:scale-105 transition-transform duration-300"
//                   />
//                 </NavLink>
//               </div>
//             </div>

//             {/* Centered Desktop Navigation */}
//             <div className="hidden lg:flex items-center justify-center flex-1">
//               <div className="flex items-center justify-center space-x-1">
//                 {/* Home Button */}
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `flex items-center px-2.5 py-2 rounded-lg transition-all duration-200 font-medium text-sm font-serif ${
//                       isActive 
//                         ? 'bg-green-100 text-green-700 shadow-inner' 
//                         : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                     }`
//                   }
//                   onClick={closeAllDropdowns}
//                 >
//                   <Home className="w-4 h-4 mr-1.5" />
//                   <span className="whitespace-nowrap">Home</span>
//                 </NavLink>

//                 {/* About Us */}
//                 <div className="relative group">
//                   <button 
//                     className="flex items-center px-2.5 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 font-medium text-sm font-serif group whitespace-nowrap"
//                     onMouseEnter={() => !isMobile && setOpenDropdown('desktop-about')}
//                     onClick={() => isMobile && toggleDropdown('desktop-about')}
//                   >
//                     <Info className="w-4 h-4 mr-1.5" />
//                     <span>About</span>
//                     <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>
//                   <div 
//                     className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-3 z-50 ${
//                       isMobile 
//                         ? (openDropdown === 'desktop-about' ? 'block' : 'hidden')
//                         : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
//                     } grid grid-cols-2 gap-1`}
//                     onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//                   >
//                     {aboutUsDropdown.map((item, index) => (
//                       <NavLink 
//                         key={index} 
//                         to={item.path} 
//                         className={({ isActive }) => 
//                           `flex flex-col p-2 rounded-lg font-sans ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-150 group/item`
//                         }
//                         onClick={closeAllDropdowns}
//                       >
//                         <div className="flex items-center mb-1">
//                           <div className="p-1 bg-green-100 rounded-md mr-2 group-hover/item:bg-green-200 transition-colors">
//                             {item.icon}
//                           </div>
//                           <span className="font-medium text-sm font-serif">{item.name}</span>
//                         </div>
//                         <p className="text-xs text-gray-500 pl-7 group-hover/item:text-gray-700 font-sans leading-tight">{item.description}</p>
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Treatments */}
//                 <div className="relative group">
//                   <button 
//                     className="flex items-center px-2.5 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 font-medium text-sm font-serif group whitespace-nowrap"
//                     onMouseEnter={() => !isMobile && setOpenDropdown('desktop-treatments')}
//                     onClick={() => isMobile && toggleDropdown('desktop-treatments')}
//                   >
//                     <Heart className="w-4 h-4 mr-1.5" />
//                     <span>Treatments</span>
//                     <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>
//                   <div 
//                     className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-3 z-50 ${
//                       isMobile 
//                         ? (openDropdown === 'desktop-treatments' ? 'block' : 'hidden')
//                         : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
//                     }`}
//                     onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//                   >
//                     <div className="px-2">
//                       {treatmentsDropdown.map((item, index) => (
//                         <div key={index} className="relative group/sub">
//                           {item.submenu ? (
//                             <>
//                               <div 
//                                 className="flex justify-between items-start p-2 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors duration-150 group/item font-sans"
//                                 onMouseEnter={() => !isMobile && setOpenDropdown(`desktop-treatments-sub-${index}`)}
//                                 onClick={() => isMobile && toggleSubDropdown('desktop-treatments', `sub-${index}`)}
//                               >
//                                 <div className="flex items-start">
//                                   <div className="p-1 bg-blue-100 rounded-md mr-2 group-hover/item:bg-blue-200 transition-colors mt-0.5">
//                                     {item.icon}
//                                   </div>
//                                   <div>
//                                     <div className="font-medium text-sm font-serif">{item.name}</div>
//                                     <p className="text-xs text-gray-500 mt-0.5 group-hover/item:text-gray-700 font-sans">{item.description}</p>
//                                   </div>
//                                 </div>
//                                 <ChevronRight className="w-4 h-4 text-gray-400 mt-1" />
//                               </div>
                              
//                               <div 
//                                 className={`${
//                                   isMobile 
//                                     ? (openSubDropdowns[`desktop-treatments-sub-${index}`] ? 'block' : 'hidden')
//                                     : 'absolute left-full top-0 ml-1 w-56 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-2 z-50 hidden group-hover/sub:block'
//                                 } ${openDropdown === `desktop-treatments-sub-${index}` ? 'block' : ''}`}
//                                 onMouseLeave={() => !isMobile && setOpenDropdown('desktop-treatments')}
//                               >
//                                 <h4 className="px-3 py-1 font-medium text-xs text-gray-700 border-b border-gray-100 mb-1 font-serif">{item.name}</h4>
//                                 {item.submenu.map((subItem, subIndex) => (
//                                   <NavLink 
//                                     key={subIndex} 
//                                     to={subItem.path} 
//                                     className={({ isActive }) => 
//                                       `flex items-center px-3 py-1.5 text-sm font-sans ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-150`
//                                     }
//                                     onClick={closeAllDropdowns}
//                                   >
//                                     <span className="mr-2 opacity-70">{subItem.icon}</span>
//                                     {subItem.name}
//                                   </NavLink>
//                                 ))}
//                               </div>
//                             </>
//                           ) : (
//                             <NavLink 
//                               to={item.path}
//                               className={({ isActive }) => 
//                                 `flex items-start p-2 rounded-lg font-sans ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-150 group/item`
//                               }
//                               onClick={closeAllDropdowns}
//                             >
//                               <div className="p-1 bg-blue-100 rounded-md mr-2 group-hover/item:bg-blue-200 transition-colors mt-0.5">
//                                 {item.icon}
//                               </div>
//                               <div>
//                                 <div className="font-medium text-sm font-serif">{item.name}</div>
//                                 <p className="text-xs text-gray-500 mt-0.5 group-hover/item:text-gray-700 font-sans">{item.description}</p>
//                               </div>
//                             </NavLink>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Accommodations */}
//                 <div className="relative group">
//                   <button 
//                     className="flex items-center px-2.5 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 font-medium text-sm font-serif group whitespace-nowrap"
//                     onMouseEnter={() => !isMobile && setOpenDropdown('desktop-accommodations')}
//                     onClick={() => isMobile && toggleDropdown('desktop-accommodations')}
//                   >
//                     <Hotel className="w-4 h-4 mr-1.5" />
//                     <span>Accommodations</span>
//                     <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>
//                   <div 
//                     className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-3 z-50 ${
//                       isMobile 
//                         ? (openDropdown === 'desktop-accommodations' ? 'block' : 'hidden')
//                         : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
//                     }`}
//                     onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//                   >
//                     <div className="px-2">
//                       <h3 className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-2 pl-2 font-serif">Stay With Us</h3>
//                       <div className="grid grid-cols-1 gap-1">
//                         {accommodationsDropdown.map((item, index) => (
//                           <NavLink 
//                             key={index} 
//                             to={item.path} 
//                             className={({ isActive }) => 
//                               `flex items-start p-2 rounded-lg font-sans ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-150 group/item`
//                             }
//                             onClick={closeAllDropdowns}
//                           >
//                             <div className="p-1 bg-amber-100 rounded-md mr-2 group-hover/item:bg-amber-200 transition-colors mt-0.5">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <div className="font-medium text-sm font-serif">{item.name}</div>
//                               <p className="text-xs text-gray-500 mt-0.5 group-hover/item:text-gray-700 font-sans">{item.description}</p>
//                             </div>
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Gallery */}
//                 <NavLink
//                   to="/image"
//                   className={({ isActive }) =>
//                     `flex items-center px-2.5 py-2 rounded-lg transition-all duration-200 font-medium text-sm font-serif whitespace-nowrap ${
//                       isActive 
//                         ? 'bg-green-100 text-green-700 shadow-inner' 
//                         : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                     }`
//                   }
//                   onClick={closeAllDropdowns}
//                 >
//                   <Images className="w-4 h-4 mr-1.5" />
//                   <span>Gallery</span>
//                 </NavLink>

//                 {/* Blog - Simple Link */}
//                 <NavLink
//                   to="/blog"
//                   className={({ isActive }) =>
//                     `flex items-center px-2.5 py-2 rounded-lg transition-all duration-200 font-medium text-sm font-serif whitespace-nowrap ${
//                       isActive 
//                         ? 'bg-green-100 text-green-700 shadow-inner' 
//                         : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                     }`
//                   }
//                   onClick={closeAllDropdowns}
//                 >
//                   <PenTool className="w-4 h-4 mr-1.5" />
//                   <span>Blog</span>
//                 </NavLink>

//                 {/* Celebrations */}
//                 <div className="relative group">
//                   <button 
//                     className="flex items-center px-2.5 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 font-medium text-sm font-serif group whitespace-nowrap"
//                     onMouseEnter={() => !isMobile && setOpenDropdown('desktop-celebrations')}
//                     onClick={() => isMobile && toggleDropdown('desktop-celebrations')}
//                   >
//                     <PartyPopper className="w-4 h-4 mr-1.5" />
//                     <span>Celebrations</span>
//                     <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>
//                   <div 
//                     className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-3 z-50 ${
//                       isMobile 
//                         ? (openDropdown === 'desktop-celebrations' ? 'block' : 'hidden')
//                         : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
//                     }`}
//                     onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//                   >
//                     <div className="px-2">
//                       <h3 className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-2 pl-2 font-serif">Special Celebrations</h3>
//                       <div className="grid grid-cols-1 gap-1">
//                         {celebrationsDropdown.map((item, index) => (
//                           <NavLink 
//                             key={index} 
//                             to={item.path} 
//                             className={({ isActive }) => 
//                               `flex items-start p-2 rounded-lg font-sans ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-150 group/item`
//                             }
//                             onClick={closeAllDropdowns}
//                           >
//                             <div className="p-1 bg-pink-100 rounded-md mr-2 group-hover/item:bg-pink-200 transition-colors mt-0.5">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <div className="font-medium text-sm font-serif">{item.name}</div>
//                               <p className="text-xs text-gray-500 mt-0.5 group-hover/item:text-gray-700 font-sans">{item.description}</p>
//                             </div>
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Contact Us */}
//                 <div className="relative group">
//                   <button 
//                     className="flex items-center px-2.5 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 font-medium text-sm font-serif group whitespace-nowrap"
//                     onMouseEnter={() => !isMobile && setOpenDropdown('desktop-contact')}
//                     onClick={() => isMobile && toggleDropdown('desktop-contact')}
//                   >
//                     <Phone className="w-4 h-4 mr-1.5" />
//                     <span>Contact</span>
//                     <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
//                   </button>
//                   <div 
//                     className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-3 z-50 ${
//                       isMobile 
//                         ? (openDropdown === 'desktop-contact' ? 'block' : 'hidden')
//                         : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
//                     }`}
//                     onMouseLeave={() => !isMobile && setOpenDropdown(null)}
//                   >
//                     <div className="px-2">
//                       <h3 className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-2 pl-2 font-serif">Get In Touch</h3>
//                       <div className="grid grid-cols-1 gap-1">
//                         {contactUsDropdown.map((item, index) => (
//                           <NavLink 
//                             key={index} 
//                             to={item.path} 
//                             className={({ isActive }) => 
//                               `flex items-start p-2 rounded-lg font-sans ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-gray-50'} transition-colors duration-150 group/item`
//                             }
//                             onClick={closeAllDropdowns}
//                           >
//                             <div className="p-1 bg-purple-100 rounded-md mr-2 group-hover/item:bg-purple-200 transition-colors mt-0.5">
//                               {item.icon}
//                             </div>
//                             <div>
//                               <div className="font-medium text-sm font-serif">{item.name}</div>
//                               <p className="text-xs text-gray-500 mt-0.5 group-hover/item:text-gray-700 font-sans">{item.description}</p>
//                             </div>
//                           </NavLink>
//                         ))}
//                       </div>
                      
//                       <div className="mt-3 pt-3 border-t border-gray-100">
//                         <div className="bg-gray-50 rounded-lg p-2">
//                           <div className="flex items-center text-xs font-medium text-gray-700 mb-0.5 font-serif">
//                             <Phone className="w-3 h-3 mr-1.5 text-green-600" />
//                             <span>+9251582672</span>
//                           </div>
//                           <div className="text-xs text-gray-500 font-sans">Mon-Sun, 7:00 AM - 7:00 PM</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Action Buttons Only */}
//             <div className="flex items-center space-x-2">
//               {/* Action Buttons - Desktop */}
//               <div className="hidden lg:flex items-center space-x-2">
//                 <NavLink
//                   to=" "
//                   className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium text-sm font-serif shadow-md hover:shadow-lg group/btn whitespace-nowrap"
//                   onClick={closeAllDropdowns}
//                 >
//                   <ShoppingBag className="w-4 h-4 mr-1" />
//                   <span>Products</span>
//                 </NavLink>

//                 <button
//                   // onClick={handleBookNow}
//                   className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-sm font-serif shadow-md hover:shadow-lg group/btn whitespace-nowrap"
//                 >
//                   <Calendar className="w-4 h-4 mr-1" />
//                   <span>Book Now</span>
//                 </button>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="lg:hidden flex items-center">
//                 <button
//                   className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-200 ${
//                     isScrolled
//                       ? 'text-gray-700 hover:text-green-600 hover:bg-green-50'
//                       : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
//                   } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500`}
//                   onClick={() => setIsOpen(!isOpen)}
//                 >
//                   <span className="sr-only">Open main menu</span>
//                   {isOpen ? (
//                     <X className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Menu className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
//           isOpen ? 'max-h-screen' : 'max-h-0'
//         }`}>
//           <div className="px-3 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200 shadow-inner">
//             {/* Home Button - Mobile */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 rounded-md transition-all duration-200 font-medium text-base font-serif ${
//                   isActive 
//                     ? 'bg-green-100 text-green-700' 
//                     : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Home className="w-5 h-5 mr-3" />
//               <span>Home</span>
//             </NavLink>

//             {/* About Us - Mobile */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif"
//                 onClick={() => toggleDropdown('mobile-about')}
//               >
//                 <div className="flex items-center">
//                   <Info className="w-5 h-5 mr-3" />
//                   <span>About Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'mobile-about' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'mobile-about' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-8 space-y-1">
//                   {aboutUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-md text-sm font-serif ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Treatments - Mobile */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif"
//                 onClick={() => toggleDropdown('mobile-treatments')}
//               >
//                 <div className="flex items-center">
//                   <Heart className="w-5 h-5 mr-3" />
//                   <span>Treatments</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'mobile-treatments' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'mobile-treatments' ? 'max-h-[500px]' : 'max-h-0'
//               }`}>
//                 <div className="pl-8 space-y-1">
//                   {treatmentsDropdown.map((item, index) => (
//                     <div key={index}>
//                       {item.submenu ? (
//                         <>
//                           <button 
//                             className="flex justify-between items-center w-full px-3 py-2.5 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 text-sm font-serif"
//                             onClick={() => toggleSubDropdown('mobile-treatments', `sub-${index}`)}
//                           >
//                             <div className="flex items-center">
//                               <span className="mr-3">{item.icon}</span>
//                               <span>{item.name}</span>
//                             </div>
//                             <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
//                               openSubDropdowns[`mobile-treatments-sub-${index}`] ? 'rotate-180' : ''
//                             }`} />
//                           </button>
//                           <div className={`transition-all duration-200 overflow-hidden ${
//                             openSubDropdowns[`mobile-treatments-sub-${index}`] ? 'max-h-96' : 'max-h-0'
//                           }`}>
//                             <div className="pl-6 space-y-1">
//                               {item.submenu.map((subItem, subIndex) => (
//                                 <NavLink 
//                                   key={subIndex} 
//                                   to={subItem.path}
//                                   className={({ isActive }) => 
//                                     `flex items-center px-3 py-2 rounded-md text-sm font-serif ${
//                                       isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                                     } transition-colors duration-150`
//                                   }
//                                   onClick={closeAllDropdowns}
//                                 >
//                                   <span className="mr-3">{subItem.icon}</span>
//                                   {subItem.name}
//                                 </NavLink>
//                               ))}
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <NavLink 
//                           to={item.path}
//                           className={({ isActive }) => 
//                             `flex items-center px-3 py-2.5 rounded-md text-sm font-serif ${
//                               isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                             } transition-colors duration-150`
//                           }
//                           onClick={closeAllDropdowns}
//                         >
//                           <span className="mr-3">{item.icon}</span>
//                           {item.name}
//                         </NavLink>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Accommodations - Mobile */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif"
//                 onClick={() => toggleDropdown('mobile-accommodations')}
//               >
//                 <div className="flex items-center">
//                   <Hotel className="w-5 h-5 mr-3" />
//                   <span>Accommodations</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'mobile-accommodations' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'mobile-accommodations' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-8 space-y-1">
//                   {accommodationsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-md text-sm font-serif ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Gallery - Mobile */}
//             <NavLink
//               to="/image"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif ${
//                   isActive ? 'bg-green-50 text-green-700 font-semibold' : ''
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Images className="w-5 h-5 mr-3" />
//               <span>Gallery</span>
//             </NavLink>

//             {/* Blog - Mobile (Simple Link) */}
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif ${
//                   isActive ? 'bg-green-50 text-green-700 font-semibold' : ''
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <PenTool className="w-5 h-5 mr-3" />
//               <span>Blog</span>
//             </NavLink>

//             {/* Celebrations - Mobile */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif"
//                 onClick={() => toggleDropdown('mobile-celebrations')}
//               >
//                 <div className="flex items-center">
//                   <PartyPopper className="w-5 h-5 mr-3" />
//                   <span>Celebrations</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'mobile-celebrations' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'mobile-celebrations' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-8 space-y-1">
//                   {celebrationsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-md text-sm font-serif ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Contact Us - Mobile */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium text-base font-serif"
//                 onClick={() => toggleDropdown('mobile-contact')}
//               >
//                 <div className="flex items-center">
//                   <Phone className="w-5 h-5 mr-3" />
//                   <span>Contact Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'mobile-contact' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'mobile-contact' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-8 space-y-1">
//                   {contactUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-md text-sm font-serif ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons - Mobile */}
//             <div className="pt-4 space-y-2 border-t border-gray-200">
//               <NavLink
//                 to=" "
//                 className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium text-center shadow-md font-serif"
//                 onClick={closeAllDropdowns}
//               >
//                 <ShoppingBag className="w-5 h-5 mr-2" />
//                 <span>Our Products</span>
//               </NavLink>

//               <button
//                 // onClick={handleBookNow}
//                 className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-center shadow-md font-serif"
//               >
//                 <Calendar className="w-5 h-5 mr-2" />
//                 <span>Book Now</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Sidebar Component */}
//       {/* <Sidebar 
//         isOpen={isSidebarOpen} 
//         onClose={() => setIsSidebarOpen(false)} 
//       /> */}
//     </>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Heart, 
  Hotel, 
  Images, 
  Phone, 
  ShoppingBag, 
  Calendar,
  Users,
  User,
  Clock,
  Leaf,
  Activity,
  Utensils,
  Gem,
  MapPin,
  Briefcase,
  BookOpen,
  Shield,
  PartyPopper,
  PenTool
} from 'lucide-react';
import logo from '../assets/navbarlogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [openSubDropdowns, setOpenSubDropdowns] = useState<Record<string, boolean>>({});

  // Handle responsive breakpoints and scroll effect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdowns({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleSubDropdown = (parentId: string, subId: string) => {
    setOpenSubDropdowns(prev => ({
      ...prev,
      [`${parentId}-${subId}`]: !prev[`${parentId}-${subId}`]
    }));
  };

  const closeAllDropdowns = () => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdowns({});
  };

  // --- Dropdown Data (Kept your original data intact) ---
  const aboutUsDropdown = [
    { name: 'Nowal NatureCare', path: '/our-story', icon: <Leaf className="w-4 h-4" />, description: 'Our holistic healing philosophy' },
    { name: 'About Founder', path: '/experiences', icon: <User className="w-4 h-4" />, description: 'Meet our visionary leader' },
    { name: 'Healing Team', path: '/healing-team', icon: <Users className="w-4 h-4" />, description: 'Our expert practitioners' },
    { name: 'Daily Routine', path: '/dincharya', icon: <Clock className="w-4 h-4" />, description: 'Structured wellness schedule' },
  ];

  const treatmentsDropdown = [
    { 
      name: 'Holistic Programs', 
      path: '/programs',
      icon: <Activity className="w-4 h-4" />,
      description: 'Comprehensive wellness packages',
      submenu: [
        { name: 'Naturopathy Wonders', path: '/narutopathy', icon: <Leaf className="w-4 h-4" /> },
        { name: 'Yoga & Meditation', path: '/yoga-meditation', icon: <Activity className="w-4 h-4" /> },
        { name: 'Diet & Nutrition', path: '/diet', icon: <Utensils className="w-4 h-4" /> },
        { name: 'Ayurveda', path: '/ayurveda', icon: <Gem className="w-4 h-4" /> },
        { name: 'Acupuncture', path: '/Holistictherapy', icon: <Shield className="w-4 h-4" /> },
        { name: 'Physiotherapy', path: '/physiotheraphy', icon: <Activity className="w-4 h-4" /> },
      ]
    }
  ];

  const accommodationsDropdown = [
    { name: 'Accommodation Details', path: '/accommodation', icon: <Hotel className="w-4 h-4" />, description: 'Room options & amenities' },
    { name: 'Accommodation Guidelines', path: '/guidliness', icon: <BookOpen className="w-4 h-4" />, description: 'Stay information & policies' },
  ];

  const celebrationsDropdown = [
    { name: 'Wedding & Events', path: '/wedding', icon: <PartyPopper className="w-4 h-4" />, description: 'Beautiful celebrations and special occasions' },
  ];

  const contactUsDropdown = [
    { name: 'Contact Information', path: '/contact', icon: <MapPin className="w-4 h-4" />, description: 'Get in touch with us' },
    { name: 'Career Opportunities', path: '/career', icon: <Briefcase className="w-4 h-4" />, description: 'Join our healing team' },
  ];

  // --- Reusable classes for nav links ---
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-3 py-1.5 rounded-full transition-all duration-200 text-sm font-medium ${
      isActive 
        ? 'bg-[#E8F0E8] text-[#2B5A36]' // Light sage green background, dark green text (matches Home button in image)
        : 'text-gray-600 hover:text-[#2B5A36] hover:bg-gray-50'
    }`;

  const dropdownBtnClass = "flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-gray-600 hover:text-[#2B5A36] hover:bg-gray-50 transition-all duration-200";

  return (
    <>
      {/* Added top border/bg to match the image container */}
      <div className="bg-[#333333] h-1 w-full absolute top-0 z-50"></div>
      
      <nav 
        ref={navRef}
        className={`fixed w-full z-40 transition-all duration-300 border-b border-gray-100 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-1'
            : 'bg-white py-2'
        }`}
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }} // Clean font
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            
            {/* 1. Left side - Hamburger & Logo */}
            <div className="flex items-center flex-shrink-0 space-x-4">
              <button
                className="text-gray-600 hover:text-[#2B5A36] focus:outline-none"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <NavLink to="/" className="flex items-center" onClick={closeAllDropdowns}>
                <img 
                  src={logo} 
                  alt="NOWAL" 
                  className="h-12 w-auto object-contain"
                />
              </NavLink>
            </div>

            {/* 2. Centered Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-1">
              
              <NavLink to="/" className={navLinkClass} onClick={closeAllDropdowns}>
                Home
              </NavLink>

              {/* About Us */}
              <div className="relative group">
                <button 
                  className={dropdownBtnClass}
                  onMouseEnter={() => !isMobile && setOpenDropdown('desktop-about')}
                  onClick={() => isMobile && toggleDropdown('desktop-about')}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-1 w-64 rounded-xl shadow-lg bg-white border border-gray-100 py-3 z-50 ${
                    isMobile 
                      ? (openDropdown === 'desktop-about' ? 'block' : 'hidden')
                      : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
                  }`}
                  onMouseLeave={() => !isMobile && setOpenDropdown(null)}
                >
                  {aboutUsDropdown.map((item, index) => (
                    <NavLink key={index} to={item.path} className="flex items-center px-4 py-2 hover:bg-[#F3F8F4] hover:text-[#2B5A36] text-sm text-gray-700" onClick={closeAllDropdowns}>
                      <span className="mr-3 text-[#2B5A36] opacity-70">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Treatments */}
              <div className="relative group">
                <button 
                  className={dropdownBtnClass}
                  onMouseEnter={() => !isMobile && setOpenDropdown('desktop-treatments')}
                  onClick={() => isMobile && toggleDropdown('desktop-treatments')}
                >
                  <span>Treatments</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div 
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-1 w-64 rounded-xl shadow-lg bg-white border border-gray-100 py-3 z-50 ${
                    isMobile ? (openDropdown === 'desktop-treatments' ? 'block' : 'hidden') : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200'
                  }`}
                  onMouseLeave={() => !isMobile && setOpenDropdown(null)}
                >
                  {treatmentsDropdown.map((item, index) => (
                    <div key={index} className="relative group/sub">
                      <div className="flex justify-between items-center px-4 py-2 hover:bg-[#F3F8F4] hover:text-[#2B5A36] text-sm text-gray-700 cursor-pointer">
                        <div className="flex items-center">
                           <span className="mr-3 text-[#2B5A36] opacity-70">{item.icon}</span>
                           {item.name}
                        </div>
                        {item.submenu && <ChevronDown className="w-4 h-4 -rotate-90" />}
                      </div>
                      {item.submenu && (
                        <div className="absolute left-full top-0 ml-1 w-56 rounded-xl shadow-lg bg-white border border-gray-100 py-2 hidden group-hover/sub:block">
                          {item.submenu.map((subItem, subIndex) => (
                            <NavLink key={subIndex} to={subItem.path} className="flex items-center px-4 py-2 hover:bg-[#F3F8F4] hover:text-[#2B5A36] text-sm text-gray-700" onClick={closeAllDropdowns}>
                              <span className="mr-2 opacity-50">{subItem.icon}</span>
                              {subItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Accommodations */}
              <div className="relative group">
                <button 
                  className={dropdownBtnClass}
                  onMouseEnter={() => !isMobile && setOpenDropdown('desktop-acc')}
                  onClick={() => isMobile && toggleDropdown('desktop-acc')}
                >
                  <span>Accommodations</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-64 rounded-xl shadow-lg bg-white border border-gray-100 py-3 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" onMouseLeave={() => !isMobile && setOpenDropdown(null)}>
                  {accommodationsDropdown.map((item, index) => (
                    <NavLink key={index} to={item.path} className="flex items-center px-4 py-2 hover:bg-[#F3F8F4] hover:text-[#2B5A36] text-sm text-gray-700" onClick={closeAllDropdowns}>
                      <span className="mr-3 text-[#2B5A36] opacity-70">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink to="/image" className={navLinkClass} onClick={closeAllDropdowns}>
                Gallery
              </NavLink>
              
              <NavLink to="/blog" className={navLinkClass} onClick={closeAllDropdowns}>
                Blog
              </NavLink>

              <NavLink to="/wedding" className={navLinkClass} onClick={closeAllDropdowns}>
                Celebrations
              </NavLink>

              <NavLink to="/contact" className={navLinkClass} onClick={closeAllDropdowns}>
                Contact
              </NavLink>
              
             
            </div>

            {/* 3. Right side - Action Buttons */}
            <div className="flex items-center space-x-3">
              <div className="hidden lg:flex items-center space-x-3">
                <NavLink
                  to=" "
                  className="px-5 py-2.5 bg-[#E7A100] text-white rounded-full hover:bg-[#d49400] transition-all duration-200 font-medium text-sm shadow-sm"
                  onClick={closeAllDropdowns}
                >
                  Products
                </NavLink>

                <button
                  className="px-5 py-2.5 bg-[#1E4D2B] text-white rounded-full hover:bg-[#153820] transition-all duration-200 font-medium text-sm shadow-sm"
                >
                  Book Now
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <button
                  className="text-gray-700 hover:text-[#2B5A36] focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Kept your existing logic for mobile dropdowns) */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
             {/* Mobile Links - simplified for space but using your exact paths */}
             <NavLink to="/" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Home</NavLink>
             
             {/* About Us Mobile */}
             <div>
               <button className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={() => toggleDropdown('m-about')}>
                 About Us <ChevronDown className={`w-4 h-4 ${openDropdown === 'm-about' ? 'rotate-180' : ''}`} />
               </button>
               {openDropdown === 'm-about' && (
                 <div className="pl-6 bg-gray-50 rounded-md py-1">
                   {aboutUsDropdown.map((item, i) => (
                     <NavLink key={i} to={item.path} className="block px-3 py-2 text-sm text-gray-600" onClick={closeAllDropdowns}>{item.name}</NavLink>
                   ))}
                 </div>
               )}
             </div>

             {/* Treatments Mobile */}
             <div>
               <button className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={() => toggleDropdown('m-treat')}>
                 Treatments <ChevronDown className={`w-4 h-4 ${openDropdown === 'm-treat' ? 'rotate-180' : ''}`} />
               </button>
               {openDropdown === 'm-treat' && (
                 <div className="pl-6 bg-gray-50 rounded-md py-1">
                   {treatmentsDropdown[0].submenu?.map((item, i) => (
                     <NavLink key={i} to={item.path} className="block px-3 py-2 text-sm text-gray-600" onClick={closeAllDropdowns}>{item.name}</NavLink>
                   ))}
                 </div>
               )}
             </div>

             {/* Other Mobile Links */}
             <NavLink to="/accomadation" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Accommodations</NavLink>
             <NavLink to="/image" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Gallery</NavLink>
             <NavLink to="/blog" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Blog</NavLink>
             <NavLink to="/wedding" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Celebrations</NavLink>
             <NavLink to="/contact" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Contact</NavLink>
             <NavLink to="/career" className="block px-3 py-3 text-gray-700 hover:bg-[#F3F8F4] rounded-md font-medium" onClick={closeAllDropdowns}>Career</NavLink>

             {/* Mobile Action Buttons */}
             <div className="pt-4 space-y-3 mt-4 border-t border-gray-100">
               <NavLink to=" " className="block w-full text-center px-4 py-3 bg-[#E7A100] text-white rounded-full font-medium" onClick={closeAllDropdowns}>Products</NavLink>
               <button className="block w-full text-center px-4 py-3 bg-[#1E4D2B] text-white rounded-full font-medium">Book Now</button>
             </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;