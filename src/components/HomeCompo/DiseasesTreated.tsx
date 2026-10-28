
import React from "react";

type Disease = {
  title: string;
  description: string;
};

const diseases: Disease[] = [
  {
    title: "Detoxification",
    description: "Healthy habits that support the body's natural functions.",
  },
  {
    title: "Digestive Disorders",
    description: "Nutrition and lifestyle habits that support digestive health.",
  },
  {
    title: "PCOS / PCOD",
    description: "Support for hormonal health and symptom management.",
  },
  {
    title: "Hormonal Imbalance",
    description: "Personalized lifestyle guidance for hormonal health.",
  },
  {
    title: "Obesity",
    description: "Guidance for sustainable weight management and healthier habits.",
  },
  {
    title: "Liver Diseases",
    description: "Healthy habits and appropriate care to support liver health.",
  },
  {
    title: "Menstrual Disorders",
    description: "Personalized support for menstrual health concerns.",
  },
  {
    title: "Hypertension",
    description: "Heart-healthy habits and blood pressure management.",
  },
  {
    title: "Respiratory Diseases",
    description: "Guidance for breathing health and appropriate respiratory care.",
  },
  {
    title: "Diabetes",
    description: "Lifestyle support alongside prescribed diabetes care.",
  },
  {
    title: "Pain Management",
    description: "Heart-healthy habits and blood pressure management.",
  },
  {
    title: "Respiratory Diseases",
    description: "Guidance for breathing health and appropriate respiratory care.",
  },
];

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M20 4c-8 0-14 3.5-14 10a6 6 0 0 0 6 6c6.5 0 8-8 8-16Z" />
      <path d="M4 21c2.5-5 6-8.5 11-11" />
      <path d="M4 11c3 .5 5 2 6 4" />
    </svg>
  );
}

const DiseasesTreated: React.FC = () => {
  return (
    <section
      aria-labelledby="diseases-treated-title"
      className="relative isolate w-full overflow-hidden bg-[#17241b] px-4 py-12 sm:px-7 sm:py-14 lg:px-8 lg:py-12"
    >
      {/* Full-section forest background */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 -z-20 bg-black/55"
        aria-hidden="true"
      />

      {/* Soft green and brown atmospheric tint */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#101b12]/45 via-[#24301d]/30 to-[#28170f]/55"
        aria-hidden="true"
      />

      {/* Decorative branch on the left */}
      <div
        className="pointer-events-none absolute bottom-0 left-[6.5%] top-0 hidden w-[5px] bg-gradient-to-r from-[#513622] via-[#b08a69] to-[#755039] shadow-[2px_0_5px_rgba(0,0,0,0.3)] sm:block"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1000px]">
        {/* Section heading */}
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-9 lg:mb-10">
          <h2
            id="diseases-treated-title"
            className="text-2xl font-semibold tracking-tight text-white drop-shadow-md sm:text-3xl lg:text-[30px]"
          >
            Diseases Treated
          </h2>

          <p className="mx-auto mt-4 max-w-[590px] text-xs leading-6 text-white/80 sm:text-sm sm:leading-[1.8]">
            Nowal NatureCare believes in healing from within—through detox
            and natural therapies that support your body's full well-being.
          </p>
        </header>

        {/* Responsive disease cards */}
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-2">
          {diseases.map((disease, index) => (
            <article
              key={`${disease.title}-${index}`}
              className="group flex min-h-[84px] items-center gap-3 rounded-xl border border-white/20 bg-white/[0.16] px-3.5 py-3 shadow-[0_5px_18px_rgba(0,0,0,0.10)] backdrop-blur-md transition duration-300 hover:border-white/35 hover:bg-white/[0.24] sm:min-h-[86px] sm:px-4 lg:min-h-[86px]"
            >
              {/* Icon tile */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#64836d] shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-[34px] sm:w-[34px]">
                <LeafIcon />
              </div>

              {/* Card text */}
              <div className="min-w-0 flex-1">
                <h3 className="text-[13px] font-medium leading-snug text-white sm:text-[13px]">
                  {disease.title}
                </h3>

                <p className="mt-1.5 text-[10px] leading-[1.6] text-white/75 sm:text-[10px] sm:leading-[1.55]">
                  {disease.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseasesTreated;
