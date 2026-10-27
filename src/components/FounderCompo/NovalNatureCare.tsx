// import React from 'react';
// import { Leaf, Award, Briefcase, HeartHandshake, Sprout, Quote } from 'lucide-react';

// const NovalNatureCare = () => {
//   return (
//     <div className="min-h-screen bg-white font-sans text-gray-800">
      
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//           style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000&auto=format&fit=crop')", // Replace with your actual background image
//           }}
//         >
//           {/* Gradient overlay to make text readable on the right side */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-white/90 lg:to-white/95"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex justify-end">
          
//           {/* Right Side Text Box */}
//           <div className="w-full lg:w-3/5 xl:w-1/2 text-center lg:text-left mt-32 lg:mt-0">
//             <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
//               <Leaf className="text-green-700 w-8 h-8" />
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-green-900 font-semibold tracking-tight">
//                 Noval NatureCare
//               </h1>
//             </div>
            
//             <h2 className="text-xl md:text-2xl italic text-green-800 mb-8 font-serif">
//               A Sanctuary for Holistic Natural Healing.
//             </h2>

//             <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed lg:pl-10 border-l-0 lg:border-l-2 lg:border-green-600/30">
//               <p>
//                 In the rush of modern life, it's the mindful pause — the moment of embracing natural healing — that brings us closer to true balance and vitality.
//               </p>
//               <p>
//                 At Noval, our philosophy is simple yet profound: <strong>health and healing always come first.</strong> We believe that every individual deserves the time and space to rejuvenate, rediscover their inner strength, and heal holistically — not just from today's stresses, but from the deeper strains of modern living.
//               </p>
//               <p className="font-semibold text-green-900 pt-2 text-right lg:text-right w-full block">
//                 — where Noval is a way of life.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT FOUNDER SECTION ================= */}
//       <section className="relative bg-[#e8f4e5] py-16 lg:py-24 overflow-hidden">
        
//         {/* Decorative Leaf Backgrounds (Top Right & Bottom Left) */}
//         <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/leaf-green-transparent-9.png')] bg-contain bg-no-repeat opacity-20 -translate-y-10 translate-x-10 rotate-45"></div>
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('https://www.transparentpng.com/thumb/leaves/leaf-green-transparent-9.png')] bg-contain bg-no-repeat opacity-20 translate-y-10 -translate-x-10 -rotate-12"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
          
//           <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
//             {/* Left Column: Image & Titles */}
//             <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start">
              
//               {/* Profile Image Card */}
//               <div className="relative w-64 h-72 md:w-72 md:h-80 bg-white rounded-[30px] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden shadow-xl border-4 border-white mb-8">
//                 <img 
//                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" // Replace with actual portrait
//                   alt="Shri Ram Niwas Noval" 
//                   className="w-full h-full object-cover object-top"
//                 />
//               </div>

//               {/* Name and Designation */}
//               <div className="text-center lg:text-left w-full">
//                 <h2 className="text-3xl font-bold text-green-900 mb-2 uppercase tracking-wide">
//                   Shri Ram Niwas Noval
//                 </h2>
//                 <h3 className="text-lg text-gray-700 font-semibold uppercase mb-8 pb-4 border-b-2 border-green-800/20 w-max mx-auto lg:mx-0">
//                   A Visionary Leader and Social Reformer
//                 </h3>

//                 {/* Credentials List */}
//                 <ul className="space-y-4 text-sm text-gray-700 font-medium">
//                   <li className="flex items-start gap-3">
//                     <Leaf className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
//                     <span>Founder of R.N. Noval Foundation</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <Briefcase className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
//                     <span>Chairman & MD of Three Leaves India</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <HeartHandshake className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
//                     <span>Social Reformer & Philanthropist</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <Sprout className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
//                     <span>Pioneer in Tea Industry Innovations</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Right Column: Bio Content */}
//             <div className="w-full lg:w-[65%] mt-4 lg:mt-0">
              
//               <div className="flex items-center gap-3 mb-8">
//                 <Leaf className="w-8 h-8 text-green-700" />
//                 <h2 className="text-2xl md:text-3xl font-serif text-green-900 font-semibold">
//                   About Our Founder
//                 </h2>
//               </div>

//               <div className="space-y-6 text-gray-700 leading-relaxed text-justify md:text-left">
//                 <p>
//                   Shri Ram Niwas Noval stands as an exemplary figure of first-generation entrepreneurship combined with unwavering social commitment. Born to Shri B.R. Noval, he completed his early education at his ancestral village Gahli (Bishnah) in Jammu district, Rajasthan.
//                 </p>
//                 <p>
//                   As the founder of R.N. Noval Foundation and co-founder, Chairman, and Managing Director of Three Leaves India Pvt. Ltd. (India's largest tea company), he has demonstrated a rare blend of compassion and business acumen. His company pioneered poly-pulverized packaging in the tea industry, showcasing his innovative thinking.
//                 </p>
                
//                 {/* Quote Block */}
//                 <div className="bg-white/60 backdrop-blur-sm border-l-4 border-green-700 p-6 rounded-r-xl my-8 relative">
//                   <Quote className="absolute top-4 left-4 w-8 h-8 text-green-700/20 -z-10" />
//                   <p className="italic text-gray-800 font-medium">
//                     "His humanitarian efforts during the COVID-19 pandemic, where he personally provided oxygen cylinders, food, and medical assistance to hundreds of families without seeking recognition, exemplify his selfless nature."
//                   </p>
//                 </div>

//                 <p>
//                   What truly distinguishes this Noval is his deep-rooted connection to his birthplace and his tireless service to rural communities. For nearly two decades, through his foundation, he has championed diverse causes including education, healthcare, environmental conservation, water harvesting, disaster relief, and the promotion of traditional Indian medicine systems.
//                 </p>
//                 <p>
//                   Shri Noval's most ambitious project is the Noval NatureCare Sanctuary in Village Panyali in Tehsil Bishnah. This healing sanctuary combines a serene luxury hospitality experience—spread across 3.5 acres—with traditional healing practices like Yoga, Ayurveda, and holistic wellness solutions. The sanctuary also offers spiritual tourism, meditation facilities, and premium guides while offering free healthcare services to underprivileged rural populations.
//                 </p>
//                 <p>
//                   His vision extends beyond personal success, emphasizing rural development, organic farming, and vocational education. He believes true progress lies in creating a holistic ecosystem of business acumen, social responsibility, and environmental stewardship, remaining approachable and a respectable personality in his neighboring villages for his selfless service to the community at large.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER SECTION ================= */}
//       <footer className="relative w-full py-16 lg:py-24 flex items-center justify-center overflow-hidden">
//         {/* Background Image with Dark Overlay */}
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//           style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop')", // Replace with your dark nature background
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         {/* Footer Content */}
//         <div className="relative z-10 text-center px-4">
//           <div className="flex items-center justify-center gap-3 mb-2">
//             <Leaf className="text-green-400 w-10 h-10" />
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-semibold tracking-tight">
//               Noval NatureCare
//             </h2>
//           </div>
//           <p className="text-lg md:text-2xl text-gray-200 italic font-serif mt-4">
//             A Sanctuary for Holistic Natural Healing.
//           </p>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default NovalNatureCare;


import React from "react";
import { Leaf, Landmark, Briefcase, Users, Sprout, Quote } from "lucide-react";

import HERO_BG from "@/assets/heroimage.jpg";
import FOUNDER_IMG from "@/assets/founders.jpg";
import FOOTER_BG from "@/assets/stonesimage.jpg";

const credentials = [
  { icon: Landmark, text: "Founder of R.N. Nowal Foundation" },
  { icon: Leaf, text: "Chairman & MD of Three Leaves India" },
  { icon: Users, text: "Social Reformer & Philanthropist" },
  { icon: Sprout, text: "Pioneer in Tea Industry Innovations" },
];

const NowalNatureCare = () => {
  return (
    <div className="min-h-screen bg-[#dfe9dc] p-2 md:p-4 font-sans text-gray-700">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-[#f3f8f1] shadow-xl">
        {/* ================= HERO ================= */}
        <section className="relative flex min-h-[420px] items-center overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-full bg-cover bg-left md:w-[66%]"
            style={{ backgroundImage: `url('${HERO_BG}')` }}
          />
          {/* fade photo into light panel on the right */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_45%,rgba(243,248,241,0.95)_64%,#f3f8f1_72%)] max-md:bg-[#f3f8f1]/80" />

          <Leaf className="absolute right-4 top-3 h-16 w-16 rotate-45 text-green-700/70" />
          <Leaf className="absolute right-0 bottom-6 h-14 w-14 -rotate-12 text-green-700/40" />
          <Leaf className="absolute left-3 bottom-4 h-14 w-14 rotate-[30deg] text-green-800/70" />

          <div className="relative z-10 ml-auto w-full px-6 py-14 text-center md:w-[55%] md:px-12 md:text-left">
            <Leaf className="mx-auto mb-1 h-5 w-5 text-green-700 md:mx-0 md:ml-24" />
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
              Nowal NatureCare
            </h1>
            <h2 className="mt-2 font-serif text-xl italic text-green-700 md:text-2xl">
              A Sanctuary for Holistic Natural Healing.
            </h2>

            <p className="mt-8 text-sm leading-relaxed md:text-base">
              In the rush of modern life, it's the mindful pause — the moment of
              embracing natural healing — that brings us closer to true balance
              and vitality.
            </p>
            <p className="mt-4 text-sm leading-relaxed md:text-base">
              At Nowal, our philosophy is simple yet profound:{" "}
              <strong className="text-gray-900">
                health and healing always come first.
              </strong>{" "}
              We believe that every individual deserves the time and space to
              rejuvenate, rediscover their inner strength, and heal holistically
              — not just from today's stressors, but from the deeper, unseen
              imbalances of our times. Step into a journey where Nowal is a way
              of life.
            </p>
          </div>
        </section>

        {/* ================= FOUNDER ================= */}
        <section className="relative bg-gradient-to-b from-[#f3f8f1] to-[#e6f1e3] px-4 py-10 md:px-8">
          <Leaf className="absolute left-2 top-24 h-20 w-20 -rotate-12 text-green-700/50" />

          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)_minmax(0,0.9fr)]">
            {/* Photo + name card */}
            <div className="relative flex flex-col items-center md:block">
              <div className="relative z-10 h-72 w-60 overflow-hidden rounded-2xl border-4 border-white shadow-lg md:absolute md:left-4 md:top-0 md:h-64 md:w-52">
                <img
                  src={FOUNDER_IMG}
                  alt="Shri Ram Niwas Nowal"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="-mt-6 w-full rounded-2xl bg-white/70 p-5 pt-10 shadow-sm md:ml-20 md:mt-6 md:w-auto md:min-h-[17rem] md:pl-40 md:pt-6">
                <h3 className="font-serif text-lg font-bold uppercase text-green-900 md:text-xl">
                  Shri Ram Niwas Nowal
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase leading-snug text-green-700">
                  A Visionary Leader
                  <br />
                  and Social Reformer
                </p>
                <ul className="mt-5 space-y-3 text-[13px] font-medium text-gray-700">
                  {credentials.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-700/80 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div className="mb-5 flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-700" />
                <h2 className="font-serif text-2xl font-semibold text-green-900">
                  About Our Founder
                </h2>
              </div>
              <div className="space-y-4 text-[13px] leading-relaxed">
                <p>
                  Shri Ram Niwas Nowal stands as an exemplary figure of
                  first-generation entrepreneurship combined with unwavering
                  social commitment. Born to Shri B.L. Nowal Sharma, he completed
                  his early education in his ancestral village Gadri (Badhali) in
                  Jaipur district, Rajasthan.
                </p>
                <p>
                  As the founder of R.N. Nowal Foundation and co-founder,
                  Chairman, and Managing Director of Three Leaves India Private
                  Limited, Shri Nowal has built a leading tea company based in
                  Guwahati that specializes in blending, packaging, and marketing
                  premium Assam tea at affordable prices. The company pioneered
                  poly-laminated packaging in the tea industry, showcasing his
                  innovative approach to business.
                </p>
                <p>
                  What truly distinguishes Shri Nowal is his deep-rooted
                  connection to his birthplace and relentless service to rural
                  communities. For nearly two decades, through his foundation, he
                  has championed diverse causes including education, healthcare,
                  environmental conservation, water harvesting, disaster relief,
                  and the promotion of traditional Indian medicine systems.
                </p>
              </div>
            </div>

            {/* Quote + vision */}
            <div>
              <div className="relative rounded-xl bg-[#d9ecd5] p-5 shadow-sm">
                <Quote className="mb-2 h-6 w-6 fill-green-800 text-green-800" />
                <p className="font-serif text-[15px] italic leading-snug text-green-900">
                  His humanitarian efforts during the COVID-19 pandemic, where he
                  personally provided medicine, food, financial support, and
                  medical assistance to hundreds of families without seeking
                  recognition, exemplifies his selfless nature.
                </p>
                <Leaf className="absolute -bottom-3 right-2 h-6 w-6 text-green-700" />
              </div>

              <div className="mt-5 space-y-4 text-[12px] leading-relaxed">
                <p>
                  Shri Nowal's most ambitious project is the Nowal NatureCare in
                  Gadri (Badhali), near the revered Khatu Shyam Temple. This
                  revolutionary initiative combines extra luxury hospitality with
                  traditional Indian healing systems, offering natural therapy,
                  yoga, Ayurveda, and holistic wellness solutions. The resort
                  serves dual purpose; providing world-class facilities for
                  premium guests while offering free healthcare services to
                  underprivileged rural populations.
                </p>
                <p>
                  His future vision includes establishing 'Sant Niwas' and
                  'Gurukul Parisar' to preserve indigenous cattle breeds, promote
                  organic farming, and provide value-based education rooted in
                  Indian spiritual traditions. Shri Nowal embodies the perfect
                  synthesis of business acumen, social responsibility, and
                  cultural preservation, making him a true nation-builder and a
                  respectable personality in his neighboring villages for his
                  yeoman service to the community at large.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="relative flex min-h-[260px] items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${FOOTER_BG}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#e6f1e3]/60 via-black/30 to-black/60" />
          <Leaf className="absolute left-4 bottom-6 h-16 w-16 rotate-12 text-green-500/70" />

          <div className="relative z-10 px-4 text-center">
            <h2 className="font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Nowal NatureCare
            </h2>
            <div className="mx-auto my-3 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-white/60" />
              <Leaf className="h-4 w-4 text-green-300" />
              <span className="h-px w-16 bg-white/60" />
            </div>
            <p className="font-serif text-lg italic text-green-100 md:text-2xl">
              A Sanctuary for Holistic Natural Healing.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NowalNatureCare;