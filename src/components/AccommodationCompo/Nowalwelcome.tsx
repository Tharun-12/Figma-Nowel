import React from "react";
import {
  CalendarDays,
  FileText,
  Car,
  DoorOpen,
  BedDouble,
  ClipboardList,
  CreditCard,
  Stethoscope,
  Leaf,
  Utensils,
  CloudDrizzle,
  Moon,
  CupSoda,
  ConciergeBell,
  type LucideIcon,
} from "lucide-react";

/* ---------- Types ---------- */
type Tone = "green" | "rose" | "amber" | "blue";

interface InfoCardProps {
  tone: Tone;
  icon: LucideIcon;
  title: string;
  text?: string;
  items?: string[];
}

interface MealProps {
  icon: LucideIcon;
  name: string;
  time: string;
}

/* ---------- Tone styles ---------- */
const toneStyles: Record<Tone, { card: string; title: string; iconWrap: string; icon: string }> = {
  green: {
    card: "bg-emerald-50/90 border-emerald-100",
    title: "text-emerald-900",
    iconWrap: "bg-emerald-100",
    icon: "text-emerald-800",
  },
  rose: {
    card: "bg-rose-50/90 border-rose-100",
    title: "text-rose-800",
    iconWrap: "bg-rose-100",
    icon: "text-rose-700",
  },
  amber: {
    card: "bg-orange-50/90 border-orange-100",
    title: "text-orange-800",
    iconWrap: "bg-orange-100",
    icon: "text-orange-700",
  },
  blue: {
    card: "bg-indigo-50/90 border-indigo-100",
    title: "text-indigo-900",
    iconWrap: "bg-indigo-100",
    icon: "text-indigo-700",
  },
};

/* ---------- Small reusable pieces ---------- */
const Divider: React.FC = () => (
  <div className="flex items-center justify-center gap-2 my-1" aria-hidden="true">
    <span className="h-px w-12 bg-amber-700/40" />
    <Leaf className="h-3 w-3 text-emerald-800" />
    <span className="h-px w-12 bg-amber-700/40" />
  </div>
);

const IconCircle: React.FC<{ icon: LucideIcon; className?: string; iconClass?: string }> = ({
  icon: Icon,
  className = "bg-emerald-100",
  iconClass = "text-emerald-800",
}) => (
  <div
    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 ${className}`}
  >
    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${iconClass}`} />
  </div>
);

const InfoCard: React.FC<InfoCardProps> = ({ tone, icon, title, text, items }) => {
  const s = toneStyles[tone];
  return (
    <article className={`flex gap-4 rounded-xl border p-4 shadow-sm sm:p-5 ${s.card}`}>
      <IconCircle icon={icon} className={s.iconWrap} iconClass={s.icon} />
      <div className="min-w-0">
        <h3 className={`font-serif text-lg font-bold sm:text-xl ${s.title}`}>{title}</h3>
        {text && <p className="mt-1 text-sm leading-relaxed text-slate-700">{text}</p>}
        {items && (
          <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-700 marker:text-slate-500">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

const Meal: React.FC<MealProps> = ({ icon: Icon, name, time }) => (
  <div className="flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3 shadow-sm">
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-100">
      <Icon className="h-5 w-5 text-orange-600" />
    </div>
    <div>
      <p className="font-serif text-sm font-bold text-slate-800">{name}</p>
      <p className="text-xs text-slate-600">{time}</p>
    </div>
  </div>
);

/* ---------- Main component ---------- */
const NowalWelcome: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-emerald-50/60 to-emerald-100/70 font-sans text-slate-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* ===== Header ===== */}
        <header className="text-center">
          <h1 className="font-serif text-3xl font-bold text-emerald-950 sm:text-4xl lg:text-5xl">
            Welcome to Nowal NatureCare
          </h1>
          <Divider />
          <p className="mt-2 font-serif text-base font-bold">Dear Valued Guest,</p>
          <p className="mx-auto mt-1 max-w-3xl text-sm leading-relaxed text-slate-700 sm:text-base">
            Welcome to your sanctuary of healing. We are honored to be part of your wellness journey and
            committed to ensuring you receive the maximum benefit from our natural healing programs.
          </p>
        </header>

        {/* ===== Booking Information ===== */}
        <section className="mt-6 rounded-2xl border border-emerald-100 bg-white/70 p-4 shadow-sm backdrop-blur sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[220px_1fr_280px]">
            {/* Title */}
            <div className="flex items-center gap-4">
              <IconCircle icon={CalendarDays} />
              <div>
                <h2 className="font-serif text-xl font-bold text-emerald-950 sm:text-2xl">
                  Booking Information
                </h2>
                <p className="mt-1 text-sm font-semibold">Check-in Time: 11:00 AM</p>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-3 border-slate-200 text-xs leading-relaxed text-slate-700 sm:text-sm lg:border-l lg:pl-6">
              <p>
                On receipt of your application, Nowal NatureCare will review it. On qualifying, the guest
                will be updated and will be asked to pay 3 day advance payment for selected accommodation
                as per the tariff rate if the stay is 7 or more days. In case of stay is less then 7 days,
                full payment is required to be paid.
              </p>
              <p>
                It is to note that few selective treatments are chargeable. A complete briefing will be
                given on arrival. On average, there will be Rs. 3000/- per day additional charges for
                treatment per person.
              </p>
              <p>
                On receipt of the payment, a confirmation letter will be sent by Email/Whatsapp with all
                necessary instructions.
              </p>
            </div>

            {/* Policy + Transport */}
            <div className="space-y-4 border-slate-200 text-xs text-slate-700 lg:border-l lg:pl-6">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100">
                  <FileText className="h-5 w-5 text-emerald-800" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Cancellation Policy:</p>
                  <p className="mt-1 leading-relaxed">
                    In case of cancellation of reservation 2 days before the arrival date, forfeiture of
                    the advance may be applied on sole discretion of the management NNC.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-100">
                  <Car className="h-5 w-5 text-emerald-800" />
                </span>
                <div>
                  <p className="font-bold text-slate-900">Transport:</p>
                  <p className="mt-1 leading-relaxed">
                    Car facility from Jaipur to Nowal while coming to NNC NatureCare and while returning is
                    available with nominal charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Arrival & Check-In ===== */}
        <section className="mt-8">
          <h2 className="text-center font-serif text-2xl font-bold text-emerald-950 sm:text-3xl">
            Arrival &amp; Check-In Process
          </h2>
          <Divider />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <InfoCard
              tone="green"
              icon={DoorOpen}
              title="Upon Arrival"
              text="Our security team will warmly welcome you and direct you to the Reception. Reception and Admission team will welcome you and complete the admission process and documentation."
            />
            <InfoCard
              tone="rose"
              icon={BedDouble}
              title="Room Settlement"
              items={[
                "Review the room inventory checklist upon arrival",
                "Report any discrepancies to Reception immediately",
                "Receive and thoroughly review your welcome information packet",
              ]}
            />
            <InfoCard
              tone="amber"
              icon={ClipboardList}
              title="Check-In Requirements"
              items={[
                "Present your admission confirmation letter and valid ID",
                "Our admission officer will assign your accommodation",
                "A dedicated attendant with golf cart will escort you to your room",
                "Enjoy a brief campus orientation tour",
              ]}
            />
            <InfoCard
              tone="green"
              icon={CreditCard}
              title="Payment Process"
              items={[
                "Settle room charges and estimated treatment costs upfront",
                "Payment accepted via Master/Visa cards or IMPS transfer",
                "Final billing reconciliation at departure",
              ]}
            />
          </div>

          {/* Medical + Treatment */}
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {/* Medical Consultation */}
            <article className="rounded-xl border border-rose-100 bg-rose-50/90 p-4 shadow-sm sm:p-5">
              <div className="flex gap-4">
                <IconCircle icon={Stethoscope} className="bg-rose-100" iconClass="text-rose-700" />
                <div className="grid min-w-0 flex-1 gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-rose-800 sm:text-xl">
                      Medical Consultation
                    </h3>
                    <p className="mt-1 text-sm font-bold text-rose-700">Doctor Availability:</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-700">
                      <li>Morning Session: 9:00 AM - 1:00 PM</li>
                      <li>Evening Session: 2:00 PM - 6:00 PM</li>
                    </ul>
                  </div>
                  <div className="sm:border-l sm:border-rose-200 sm:pl-4 sm:pt-8">
                    <p className="text-sm font-bold text-rose-700">During consultation:</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-700">
                      <li>Assess your current health status</li>
                      <li>Design your personalized treatment protocol</li>
                      <li>Prescribe your therapeutic diet plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Treatment Planning */}
            <article className="rounded-xl border border-indigo-100 bg-indigo-50/90 p-4 shadow-sm sm:p-5">
              <div className="flex gap-4">
                <IconCircle icon={Leaf} className="bg-indigo-100" iconClass="text-indigo-700" />
                <div className="grid min-w-0 flex-1 gap-4 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-indigo-900 sm:text-xl">
                      Treatment Planning
                    </h3>
                    <p className="mt-1 text-sm font-bold text-indigo-700">Wellness Team Consultations:</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-700">
                      <li>
                        <b>Yoga Teacher</b> - Design personalized yoga therapy
                      </li>
                      <li>
                        <b>Physiotherapy</b> - Treatment as per your diseases
                      </li>
                      <li>
                        <b>Acupuncture</b> - Provided after consultation
                      </li>
                    </ul>
                  </div>
                  <p className="text-xs italic text-slate-600 sm:max-w-[150px] sm:border-l sm:border-indigo-200 sm:pl-4 sm:pt-8">
                    Note: Consultations will be completed on your first day or the following morning.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ===== Meal Times ===== */}
        <section className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/80 p-4 shadow-sm sm:p-5">
          <div className="grid items-center gap-4 lg:grid-cols-[180px_1fr]">
            <div className="flex items-center gap-3">
              <IconCircle icon={Utensils} className="bg-emerald-100" iconClass="text-emerald-800" />
              <h2 className="font-serif text-xl font-bold text-emerald-950">Meal Times</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Meal icon={ConciergeBell} name="Lunch" time="11:00 AM - 12:00 PM" />
              <Meal icon={Moon} name="Dinner" time="6:30 PM - 7:30 PM" />
              <Meal icon={CupSoda} name="Juice Breaks" time="Multiple times" />
              <Meal icon={BedDouble} name="Bedtime" time="10:00 PM" />
            </div>
          </div>
        </section>

        {/* ===== Commitment ===== */}
        <footer className="mt-4 rounded-xl bg-emerald-100/80 px-4 py-5 text-center sm:px-8">
          <h2 className="font-serif text-xl font-bold text-emerald-950 sm:text-2xl">Our Commitment to You</h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            During your stay, our dedicated team members will be available to support and guide you. We’re
            here to ensure your healing journey is smooth, comfortable, and transformative.
          </p>
        </footer>
      </div>
    </main>
  );
};

export default NowalWelcome;