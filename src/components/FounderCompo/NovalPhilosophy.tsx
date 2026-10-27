// import React from 'react';
// import { Leaf } from 'lucide-react';

// const NovalPhilosophy = () => {
//   return (
//     <div className="min-h-screen bg-[#F4F8EC] font-sans text-gray-800 overflow-hidden">
      
//       {/* ================= MAIN SECTION ================= */}
//       <section className="relative w-full max-w-[1600px] mx-auto bg-[#FAFCF5] flex flex-col lg:flex-row shadow-sm overflow-hidden min-h-[600px]">
        
//         {/* Background Decorative Leaves (Top Right & Bottom Right) */}
//         <div className="absolute top-0 right-0 w-48 h-48 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-40 translate-x-10 -translate-y-10 rotate-45 z-20 pointer-events-none"></div>
//         <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-30 translate-x-10 translate-y-10 -rotate-12 z-20 pointer-events-none hidden md:block"></div>

//         {/* LEFT COLUMN: Image Area */}
//         <div className="relative w-full lg:w-[55%] h-[300px] md:h-[450px] lg:h-auto z-10">
//           {/* Main Image */}
//           <img 
//             src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" // Replace with your mountain lake image
//             alt="Mountain Lake Sunrise" 
//             className="w-full h-full object-cover rounded-b-[40px] lg:rounded-b-none lg:rounded-r-[40px]"
//           />
          
//           {/* Organic Wave Overlay (Visible on Desktop/Tablet) */}
//           <div className="hidden lg:block absolute top-0 right-[-1px] h-full w-32 z-20 pointer-events-none">
//             <svg 
//               viewBox="0 0 100 800" 
//               preserveAspectRatio="none" 
//               className="w-full h-full fill-[#FAFCF5]"
//             >
//               <path d="M0,0 C50,150 100,250 30,400 C-30,550 60,700 0,800 L100,800 L100,0 Z" />
//             </svg>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Text Content */}
//         <div className="relative w-full lg:w-[45%] flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-24 z-30">
          
//           {/* Decorative Top Divider */}
//           <div className="flex items-center justify-center gap-4 mb-6">
//             <div className="h-[1px] w-12 bg-gray-400"></div>
//             <Leaf className="w-5 h-5 text-green-600" />
//             <div className="h-[1px] w-12 bg-gray-400"></div>
//           </div>

//           {/* Main Heading */}
//           <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-serif text-[#1a3c1a] text-center font-medium mb-8">
//             Every corner of Noval NatureCare radiates peace—where lush greenery, gentle serenity, and uplifting energy come together to soothe your soul
//           </h2>

//           {/* Small Divider */}
//           <div className="flex items-center justify-center gap-2 mb-8">
//             <div className="h-[1px] w-8 bg-green-700/50"></div>
//             <Leaf className="w-4 h-4 text-green-700" />
//             <div className="h-[1px] w-8 bg-green-700/50"></div>
//           </div>

//           {/* Body Text */}
//           <div className="text-[13px] md:text-sm text-gray-600 leading-relaxed text-justify md:text-left space-y-4">
//             <p>
//               At Noval NatureCare, we gently guide you to a deeper truth—your health has always been in your hands. Within our serene, holistic sanctuary, healing isn't separate from health—it's woven together through intention, care, and balance. We combine the wisdom of ancient traditions, the precision of modern science, and the nurturing touch of natural therapies to help your body and mind return to harmony. Here, wellness isn't treated—it's awakened. You'll find no shortcuts, only honest, organic pathways to restore what's already within you. Noval NatureCare is simply your guide—a gentle catalyst on your journey toward healing, renewal, and the quiet magic of holistic living.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= QUOTE SECTION (Bottom) ================= */}
//       <section className="relative w-full bg-gradient-to-r from-[#E2EED8] via-[#F4F8EC] to-[#E2EED8] py-16 md:py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
//         {/* Decorative Corner Leaves (Bottom Left) */}
//         <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 md:w-64 md:h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-60 rotate-12 pointer-events-none"></div>
        
//         {/* Decorative Corner Leaves (Bottom Right) */}
//         <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 md:w-64 md:h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-60 -rotate-45 scale-x-[-1] pointer-events-none"></div>

//         <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
//           {/* Quote Text */}
//           <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#1a3c1a] leading-relaxed mb-8">
//             “Your healing journey begins with a single breath,<br className="hidden md:block" /> grounded in nature and nurtured by intention.”
//           </h3>

//           {/* Decorative Bottom Divider */}
//           <div className="flex items-center justify-center gap-4 w-full max-w-md">
//             <div className="h-[1px] flex-1 bg-gray-400"></div>
//             <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest text-gray-600 font-semibold uppercase">
//               <Leaf className="w-4 h-4 text-green-700" />
//               <span>— Noval Philosophy</span>
//               <Leaf className="w-4 h-4 text-green-700" />
//             </div>
//             <div className="h-[1px] flex-1 bg-gray-400"></div>
//           </div>
          
//         </div>
//       </section>

//     </div>
//   );
// };

// export default NovalPhilosophy;




import React from "react";
import { Leaf } from "lucide-react";

/* ---------- Reusable inline SVG leaf (no external image dependency) ---------- */
const LeafSvg = ({ className = "", style = {}, light = false }) => (
  <svg viewBox="0 0 100 160" className={className} style={style} aria-hidden="true">
    <defs>
      <linearGradient id={light ? "lfL" : "lfD"} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={light ? "#a9c97a" : "#5f9a3c"} />
        <stop offset="100%" stopColor={light ? "#4f8a34" : "#1f5a22"} />
      </linearGradient>
    </defs>
    <path
      d="M50 2 C95 40 98 110 50 158 C2 110 5 40 50 2 Z"
      fill={`url(#${light ? "lfL" : "lfD"})`}
    />
    <path d="M50 8 L50 156" stroke="#d9ecb8" strokeWidth="1.6" opacity=".7" />
    {[30, 55, 80, 105].map((y) => (
      <g key={y} stroke="#d9ecb8" strokeWidth="1" opacity=".55" fill="none">
        <path d={`M50 ${y + 12} Q70 ${y} 84 ${y - 8}`} />
        <path d={`M50 ${y + 12} Q30 ${y} 16 ${y - 8}`} />
      </g>
    ))}
  </svg>
);

/* A small cluster of leaves on a branch */
const Branch = ({ className = "", flip = false }) => (
  <div className={`absolute pointer-events-none ${className}`} style={{ transform: flip ? "scaleX(-1)" : undefined }}>
    <LeafSvg className="absolute w-14 h-24" style={{ top: 0, left: 40, transform: "rotate(25deg)" }} />
    <LeafSvg className="absolute w-12 h-20" style={{ top: 50, left: 0, transform: "rotate(-35deg)" }} light />
    <LeafSvg className="absolute w-16 h-28" style={{ top: 70, left: 70, transform: "rotate(50deg)" }} />
    <LeafSvg className="absolute w-10 h-16" style={{ top: 10, left: -10, transform: "rotate(-60deg)" }} light />
  </div>
);

/* Divider: gold line – leaf – gold line */
const Divider = ({ size = "md" }) => (
  <div className="flex items-center justify-center gap-3">
    <span className={`h-px bg-[#c9b36b] ${size === "md" ? "w-20 md:w-24" : "w-14 md:w-20"}`} />
    <Leaf className={`${size === "md" ? "w-6 h-6" : "w-5 h-5"} text-[#3f7a2a]`} strokeWidth={1.6} />
    <span className={`h-px bg-[#c9b36b] ${size === "md" ? "w-20 md:w-24" : "w-14 md:w-20"}`} />
  </div>
);

const NowalPhilosophy = () => {
  return (
    <div className="w-full min-h-screen bg-[#eef4e4] font-sans overflow-x-hidden mt-6">
      <div className="w-full bg-white overflow-hidden">
        {/* ================= TOP: IMAGE + TEXT ================= */}
        <section className="relative flex flex-col lg:flex-row bg-gradient-to-br from-[#fbfdf4] to-[#f1f7e4]">
          {/* LEFT: scenic image */}
          <div className="relative w-full lg:w-[48%] h-[280px] md:h-[400px] lg:h-auto lg:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop"
              alt="Sunrise over a forested mountain lake"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* warm sun glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 via-transparent to-transparent" />

            {/* foliage top-left */}
            <LeafSvg className="absolute w-16 h-28 -top-4 left-1 opacity-90" style={{ transform: "rotate(-30deg)" }} />
            <LeafSvg className="absolute w-12 h-20 top-6 left-12 opacity-90" style={{ transform: "rotate(20deg)" }} light />
            <LeafSvg className="absolute w-14 h-24 -top-6 left-24 opacity-80" style={{ transform: "rotate(60deg)" }} />
            {/* foliage bottom-left */}
            <LeafSvg className="absolute w-14 h-24 bottom-2 left-0 opacity-90" style={{ transform: "rotate(10deg)" }} light />
            <LeafSvg className="absolute w-10 h-16 bottom-0 left-14 opacity-80" style={{ transform: "rotate(-25deg)" }} />
          </div>

          {/* Wavy green edge + cream curve (desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[42%] w-[12%] z-20 pointer-events-none">
            <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="w-full h-full">
              <path d="M30,0 C95,90 -10,150 45,230 C95,300 30,360 60,400 L100,400 L100,0 Z" fill="#6f9f55" opacity=".85" />
              <path d="M48,0 C100,95 8,150 60,230 C108,300 46,360 76,400 L100,400 L100,0 Z" fill="#fbfdf4" />
              <path d="M44,0 C98,95 4,150 56,230 C104,300 42,360 72,400" fill="none" stroke="#d8e8c0" strokeWidth="1.2" />
            </svg>
          </div>

          {/* Mobile curve */}
          <div className="lg:hidden h-4 -mt-4 relative z-20 bg-[#fbfdf4] rounded-t-[30px]" />

          {/* leaves hugging the wave */}
          <LeafSvg className="hidden lg:block absolute w-9 h-16 z-30 top-[8%] left-[40%] pointer-events-none" style={{ transform: "rotate(-40deg)" }} />
          <LeafSvg className="hidden lg:block absolute w-8 h-14 z-30 top-[16%] left-[44%] pointer-events-none" style={{ transform: "rotate(30deg)" }} light />
          <LeafSvg className="hidden lg:block absolute w-8 h-14 z-30 bottom-[14%] left-[43%] pointer-events-none" style={{ transform: "rotate(-150deg)" }} />

          {/* RIGHT: text */}
          <div className="relative z-30 flex-1 flex flex-col justify-center px-6 py-12 md:px-12 lg:pl-10 lg:pr-28 xl:pr-40">
            <Branch className="hidden lg:block -top-4 -right-10 w-40 h-40 opacity-95" flip />
            <Branch className="hidden lg:block bottom-0 -right-12 w-40 h-40 opacity-90" />

            <Divider />

            <h2 className="mt-6 text-center font-serif font-semibold text-[#1b3a1b] text-2xl md:text-[28px] leading-[1.3] tracking-tight">
              Every corner of Nowal NatureCare radiates peace—where lush greenery,
              gentle serenity, and uplifting energy come together to soothe your soul
            </h2>

            <div className="mt-6">
              <Divider size="sm" />
            </div>

            <p className="mt-6 text-[12.5px] md:text-[13px] leading-[1.75] text-gray-600 text-left">
              At Nowal NatureCare, we gently guide you to a deeper truth—your health has always been in
              your hands. Within our serene, holistic sanctuary, healing isn't separate from health—it's
              woven together through intention, care, and balance. We combine the wisdom of ancient
              traditions, the precision of modern science, and the nurturing touch of natural therapies to
              help your body and mind return to harmony. Here, wellness isn't treated—it's awakened.
              You'll find no shortcuts, only honest, organic pathways to restore what's already within you.
              Nowal NatureCare is simply your guide—a gentle catalyst on your journey toward healing,
              renewal, and the quiet magic of holistic living.
            </p>
          </div>
        </section>

        {/* ================= BOTTOM: QUOTE ================= */}
        <section className="relative overflow-hidden py-14 md:py-16 px-4 text-center bg-gradient-to-r from-[#dcebd0] via-[#eef6e6] to-[#dcebd0]">
          {/* misty light */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.75),transparent_65%)] pointer-events-none" />

          {/* bottom-left: leaves + stones */}
          <LeafSvg className="absolute w-16 h-28 -left-2 bottom-6 opacity-95" style={{ transform: "rotate(-10deg)" }} />
          <LeafSvg className="absolute w-14 h-24 left-12 bottom-2 opacity-90" style={{ transform: "rotate(35deg)" }} light />
          <LeafSvg className="absolute w-12 h-20 left-0 bottom-0 opacity-90" style={{ transform: "rotate(-60deg)" }} />
          <div className="absolute left-2 -bottom-3 w-28 h-14 rounded-[50%] bg-gradient-to-b from-[#8a8f84] to-[#4d524a] opacity-90" />
          <div className="absolute left-10 bottom-3 w-16 h-8 rounded-[50%] bg-gradient-to-b from-[#a3a89c] to-[#6a6f64] opacity-90" />
          <div className="absolute left-0 -bottom-2 w-32 h-5 rounded-[50%] bg-[#6f9b45] opacity-80" />

          {/* bottom-right: big leaves */}
          <LeafSvg className="absolute w-20 h-36 -right-2 bottom-2 opacity-95" style={{ transform: "rotate(25deg)" }} />
          <LeafSvg className="absolute w-16 h-28 right-12 -bottom-4 opacity-90" style={{ transform: "rotate(-30deg)" }} light />
          <LeafSvg className="absolute w-12 h-20 right-2 bottom-24 opacity-70" style={{ transform: "rotate(60deg)" }} />
          {/* faint ghost leaves */}
          <LeafSvg className="absolute w-16 h-28 right-[18%] top-2 opacity-10" style={{ transform: "rotate(-20deg)" }} light />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="font-serif italic font-medium text-[#1b3a1b] text-2xl md:text-[32px] leading-snug">
              “Your healing journey begins with a single breath,
              <br className="hidden md:block" /> grounded in nature and nurtured by intention.”
            </h3>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="h-px w-24 md:w-36 bg-[#b9a867]" />
              <Leaf className="w-6 h-6 text-[#3f7a2a]" strokeWidth={1.6} />
              <span className="h-px w-24 md:w-36 bg-[#b9a867]" />
            </div>

            <p className="mt-4 text-[11px] md:text-xs tracking-[0.25em] uppercase text-gray-600">
              — Nowal Philosophy
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NowalPhilosophy;