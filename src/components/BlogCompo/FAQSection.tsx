
import React, { useState } from "react";

const faqItems = [
  {
    question:
      "What is included in a couple wellness retreat at Nowal NatureCare?",
    answer:
      "A couple wellness retreat can include personalised naturopathy consultations, Ayurveda therapies, yoga and meditation, therapeutic treatments, nutritious meals, and peaceful nature-based experiences. The programme can be tailored to your individual wellness goals.",
  },
  {
    question:
      "What is the best time to visit Nowal NatureCare near Jaipur?",
    answer:
      "The cooler months, generally from October to March, are often comfortable for a wellness getaway near Jaipur. You can also plan your visit in other seasons depending on your preferred experiences and the retreat's availability.",
  },
  {
    question: "What is the recommended duration for a couple's retreat?",
    answer:
      "A three-night retreat is a good starting point for relaxation and reconnection. A five-night stay or a longer personalised programme may allow more time for therapies, mindful activities, and a restorative routine.",
  },
  {
    question:
      "How far is Nowal NatureCare from Jaipur, and how do we get there?",
    answer:
      "Travel time depends on the retreat's exact location and your starting point in Jaipur. Contact the Nowal NatureCare team for the precise route, current travel guidance, and available transfer arrangements.",
  },
];

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    aria-hidden="true"
  >
    <path d="m7 10 5 5 5-5" />
  </svg>
);

const QuestionIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M9.7 9a2.4 2.4 0 1 1 4.1 1.7c-1.1 1-1.8 1.2-1.8 2.8" />
    <path d="M12 16.8h.01" />
  </svg>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative isolate w-full overflow-hidden bg-[#f3e9d9] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Warm ivory background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(110deg, #faf7f1 0%, #f4ebdd 48%, #eee0c9 100%)",
        }}
      />

      {/* Subtle ambient highlights */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 12% 30%, rgba(255,255,255,0.65), transparent 45%), radial-gradient(ellipse at 90% 75%, rgba(222,193,151,0.15), transparent 42%)",
        }}
      />

      <div className="mx-auto w-full max-w-[650px]">
        {/* Heading */}
        <header className="mb-9 text-center sm:mb-10 md:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-2 text-[11px] font-semibold tracking-wide text-[#b6874c] shadow-[0_2px_8px_rgba(94,65,35,0.06)]">
            <QuestionIcon />
            <span>FAQ</span>
          </div>

          <h2
            id="faq-heading"
            className="font-serif text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#33271e] sm:text-[36px] md:text-[40px]"
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-2 text-sm text-[#786c60] sm:text-base">
            Everything You Need to Know
          </p>
        </header>

        {/* Accordion */}
        <div className="divide-y divide-[#d9c9b2]/0">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article key={item.question} className="w-full">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="group flex min-h-[50px] w-full items-center justify-between gap-4 rounded-md py-3 text-left transition-colors duration-200 hover:text-[#a8793d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd9255] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f3e9d9] sm:min-h-[51px] sm:py-3.5"
                  >
                    <span className="text-[13px] font-semibold leading-relaxed text-[#342c25] transition-colors group-hover:text-[#9d713b] sm:text-[14px] md:text-[15px]">
                      {item.question}
                    </span>

                    <span
                      className={`transition-colors duration-200 ${
                        isOpen
                          ? "text-[#8f652e]"
                          : "text-[#bd8c49]"
                      }`}
                    >
                      <ChevronDown open={isOpen} />
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-4 pr-7 sm:pb-5"
                >
                  <p className="text-[13px] leading-7 text-[#76695b] sm:text-sm">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
