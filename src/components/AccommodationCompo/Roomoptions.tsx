import { useState } from "react";
import {
  BedDouble,
  ShowerHead,
  Sparkles,
  Tv,
  Snowflake,
  Briefcase,
  Box,
  Leaf,
  Wifi,
  Waves,
  Target,
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

/* ----------------------------- Data ----------------------------- */

interface Room {
  id: string;
  tab: string;
  title: string;
  description: string;
  images: string[];
}

// Replace the image paths with your own (put files in /public/rooms/...)
const ROOMS: Room[] = [
  {
    id: "suite",
    tab: "Suite 2 Bed Room",
    title: "Suite 2 Bed Room",
    description:
      "“Experience luxury and comfort in our spacious 2-bedroom suite designed for families and groups.”",
    images: ["https://i.pinimg.com/1200x/48/19/37/48193717b7401d6648fd8e3b6ab3c1bd.jpg"],
  },
  {
    id: "cottage",
    tab: "Cottage Room with Garden And Plunge Pool",
    title: "Cottage Room with Garden & Plunge Pool",
    description:
      "“A private cottage opening onto a garden and your own plunge pool, made for slow, quiet stays.”",
    images: ["https://i.pinimg.com/736x/4f/9d/fa/4f9dfa24c637f524d0e75a72086b392a.jpg"],
  },
  {
    id: "king",
    tab: "Cottage Room (King Bed)",
    title: "Cottage Room (King Bed)",
    description:
      "“A warm, well-appointed cottage with a king bed, perfect for couples looking to unwind.”",
    images: ["https://i.pinimg.com/736x/31/3b/f1/313bf16ac23ead4de2fe183a05bb9e93.jpg"],
  },
];

interface Amenity {
  label: string;
  icon: LucideIcon;
  /** icon colour: green or gold, as in the design */
  tone?: "green" | "gold";
}

const AMENITIES: Amenity[] = [
  { label: "Comfy Beds", icon: BedDouble },
  { label: "Attached Bath", icon: ShowerHead },
  { label: "Daily Cleaning", icon: Sparkles, tone: "gold" },
  { label: "TV", icon: Tv },
  { label: "AC/Fan", icon: Snowflake },
  { label: "Lockers", icon: Briefcase },
  { label: "Mini Fridge", icon: Box },
  { label: "Green View", icon: Leaf },
  { label: "Wi-Fi", icon: Wifi },
  { label: "Swimming Pool", icon: Waves },
  { label: "Recreational Area", icon: Target },
  { label: "Banquet Hall & Dining", icon: UtensilsCrossed },
];

/* --------------------------- Small parts --------------------------- */

/** Gold line with a small diamond in the middle, shown under headings */
const OrnamentDivider = () => (
  <div className="mx-auto mt-1 flex items-center justify-center gap-2" aria-hidden="true">
    <span className="h-px w-10 bg-[#d9b36c]/70 sm:w-14" />
    <span className="h-1.5 w-1.5 rotate-45 bg-[#d9b36c]" />
    <span className="h-px w-10 bg-[#d9b36c]/70 sm:w-14" />
  </div>
);

/** Decorative leaf, used in the corners */
const Leaf2 = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 160"
    className={`pointer-events-none absolute ${className}`}
    fill="none"
    aria-hidden="true"
  >
    <path d="M50 155 C50 100 50 50 50 5" stroke="currentColor" strokeWidth="1" />
    {[25, 50, 75, 100, 125].map((y, i) => (
      <g key={y}>
        <path
          d={`M50 ${y} C ${30 - i * 2} ${y - 10}, ${15} ${y - 5}, ${10} ${y - 20}`}
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d={`M50 ${y} C ${70 + i * 2} ${y - 10}, ${85} ${y - 5}, ${90} ${y - 20}`}
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    ))}
  </svg>
);

/* ---------------------------- Component ---------------------------- */

export default function RoomOptions() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [slide, setSlide] = useState(0);

  const room = ROOMS[activeRoom];
  const total = room.images.length;

  const selectRoom = (i: number) => {
    setActiveRoom(i);
    setSlide(0);
  };
  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);

  return (
    <section className="relative w-full overflow-hidden bg-[#faf7f0] font-['Lora',serif] text-[#0f4a33]">
      {/* ======================= ROOM OPTIONS ======================= */}
      <div className="relative px-4 pb-8 pt-6 sm:px-8 md:pb-10 lg:px-12">
        <Leaf2 className="-left-4 top-0 h-40 w-24 rotate-[20deg] text-[#cfd8c0] sm:h-56 sm:w-32" />

        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Room Options
        </h2>
        <OrnamentDivider />

        {/* Tabs: horizontal scroll on mobile, centered wrap on larger screens */}
        <div
          role="tablist"
          aria-label="Room types"
          className="-mx-4 mt-5 flex gap-3 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {ROOMS.map((r, i) => {
            const active = i === activeRoom;
            return (
              <button
                key={r.id}
                role="tab"
                aria-selected={active}
                onClick={() => selectRoom(i)}
                className={`relative shrink-0 whitespace-nowrap rounded-md border px-5 py-2.5 text-xs transition-colors sm:text-sm ${
                  active
                    ? "border-[#0f4a33] bg-[#0f5a3c] font-semibold text-white shadow-md"
                    : "border-[#e4dccb] bg-[#f3efe6] text-[#2b3b33] hover:bg-[#ebe5d6]"
                }`}
              >
                {r.tab}
                {active && (
                  <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#0f5a3c]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div className="relative mx-auto mt-4 max-w-6xl overflow-hidden rounded-2xl border border-[#ecdcb8] bg-[#fdfbf6] p-2.5 shadow-[0_4px_18px_rgba(150,120,60,0.15)] sm:p-3">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.45fr_1fr] md:gap-4">
            {/* Image carousel */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#e9e2d0] md:aspect-[16/9.2]">
              {room.images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${room.title} – photo ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    i === slide ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <button
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#0f5a3c] text-white shadow-md transition hover:bg-[#0c4a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b36c] sm:h-10 sm:w-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#0f5a3c] text-white shadow-md transition hover:bg-[#0c4a31] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b36c] sm:h-10 sm:w-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {room.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    aria-current={i === slide}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === slide ? "bg-[#0f5a3c] ring-1 ring-white" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="px-3 pb-4 text-left sm:px-6 md:px-8 md:pb-0">
              <span className="mb-4 block h-0.5 w-10 bg-[#d9b36c]" />
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{room.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#2b3b33] sm:text-[15px]">
                {room.description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0f5a3c] px-7 py-3 text-base font-semibold text-white shadow-[0_3px_0_#0a3d29,0_6px_14px_rgba(15,90,60,0.35)] transition hover:bg-[#0c4a31] active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9b36c] focus-visible:ring-offset-2">
                Book Now
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= AMENITIES ======================= */}
      <div className="relative bg-gradient-to-b from-[#dfe6cf] via-[#eef0e1] to-[#f1f1e6] px-4 pb-8 pt-6 sm:px-8 lg:px-12">
        <Leaf2 className="-left-5 bottom-0 h-44 w-24 -rotate-[10deg] text-[#4f7a4a]/60 sm:h-56 sm:w-32" />
        <Leaf2 className="-right-5 bottom-0 h-44 w-24 rotate-[10deg] text-[#4f7a4a]/60 sm:h-56 sm:w-32" />

        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Included Amenities
        </h2>
        <OrnamentDivider />

        <ul className="relative mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {AMENITIES.map(({ label, icon: Icon, tone }) => (
            <li
              key={label}
              className="flex h-14 items-center gap-3 rounded-lg border border-[#ecdcb8] bg-[#fdfbf6]/90 px-3 shadow-sm sm:h-[52px] sm:gap-4 sm:px-5"
            >
              <Icon
                className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 ${
                  tone === "gold" ? "text-[#c99a4b]" : "text-[#0f4a33]"
                }`}
                strokeWidth={1.6}
              />
              <span className="text-xs font-medium leading-tight text-[#1f3b2d] sm:text-[13px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}