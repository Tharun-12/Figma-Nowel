import React from 'react';
import { Leaf } from 'lucide-react';

const NovalPhilosophy = () => {
  return (
    <div className="min-h-screen bg-[#F4F8EC] font-sans text-gray-800 overflow-hidden">
      
      {/* ================= MAIN SECTION ================= */}
      <section className="relative w-full max-w-[1600px] mx-auto bg-[#FAFCF5] flex flex-col lg:flex-row shadow-sm overflow-hidden min-h-[600px]">
        
        {/* Background Decorative Leaves (Top Right & Bottom Right) */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-40 translate-x-10 -translate-y-10 rotate-45 z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-30 translate-x-10 translate-y-10 -rotate-12 z-20 pointer-events-none hidden md:block"></div>

        {/* LEFT COLUMN: Image Area */}
        <div className="relative w-full lg:w-[55%] h-[300px] md:h-[450px] lg:h-auto z-10">
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" // Replace with your mountain lake image
            alt="Mountain Lake Sunrise" 
            className="w-full h-full object-cover rounded-b-[40px] lg:rounded-b-none lg:rounded-r-[40px]"
          />
          
          {/* Organic Wave Overlay (Visible on Desktop/Tablet) */}
          <div className="hidden lg:block absolute top-0 right-[-1px] h-full w-32 z-20 pointer-events-none">
            <svg 
              viewBox="0 0 100 800" 
              preserveAspectRatio="none" 
              className="w-full h-full fill-[#FAFCF5]"
            >
              <path d="M0,0 C50,150 100,250 30,400 C-30,550 60,700 0,800 L100,800 L100,0 Z" />
            </svg>
          </div>
        </div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="relative w-full lg:w-[45%] flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 xl:px-24 z-30">
          
          {/* Decorative Top Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gray-400"></div>
            <Leaf className="w-5 h-5 text-green-600" />
            <div className="h-[1px] w-12 bg-gray-400"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight font-serif text-[#1a3c1a] text-center font-medium mb-8">
            Every corner of Noval NatureCare radiates peace—where lush greenery, gentle serenity, and uplifting energy come together to soothe your soul
          </h2>

          {/* Small Divider */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[1px] w-8 bg-green-700/50"></div>
            <Leaf className="w-4 h-4 text-green-700" />
            <div className="h-[1px] w-8 bg-green-700/50"></div>
          </div>

          {/* Body Text */}
          <div className="text-[13px] md:text-sm text-gray-600 leading-relaxed text-justify md:text-left space-y-4">
            <p>
              At Noval NatureCare, we gently guide you to a deeper truth—your health has always been in your hands. Within our serene, holistic sanctuary, healing isn't separate from health—it's woven together through intention, care, and balance. We combine the wisdom of ancient traditions, the precision of modern science, and the nurturing touch of natural therapies to help your body and mind return to harmony. Here, wellness isn't treated—it's awakened. You'll find no shortcuts, only honest, organic pathways to restore what's already within you. Noval NatureCare is simply your guide—a gentle catalyst on your journey toward healing, renewal, and the quiet magic of holistic living.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUOTE SECTION (Bottom) ================= */}
      <section className="relative w-full bg-gradient-to-r from-[#E2EED8] via-[#F4F8EC] to-[#E2EED8] py-16 md:py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Decorative Corner Leaves (Bottom Left) */}
        <div className="absolute bottom-[-20px] left-[-20px] w-48 h-48 md:w-64 md:h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-60 rotate-12 pointer-events-none"></div>
        
        {/* Decorative Corner Leaves (Bottom Right) */}
        <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 md:w-64 md:h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/green-leaf-png-2.png')] bg-contain bg-no-repeat opacity-60 -rotate-45 scale-x-[-1] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Quote Text */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#1a3c1a] leading-relaxed mb-8">
            “Your healing journey begins with a single breath,<br className="hidden md:block" /> grounded in nature and nurtured by intention.”
          </h3>

          {/* Decorative Bottom Divider */}
          <div className="flex items-center justify-center gap-4 w-full max-w-md">
            <div className="h-[1px] flex-1 bg-gray-400"></div>
            <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest text-gray-600 font-semibold uppercase">
              <Leaf className="w-4 h-4 text-green-700" />
              <span>— Noval Philosophy</span>
              <Leaf className="w-4 h-4 text-green-700" />
            </div>
            <div className="h-[1px] flex-1 bg-gray-400"></div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default NovalPhilosophy;