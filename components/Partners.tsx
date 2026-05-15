"use client";

const partners = [
  { name: "IBM", emoji: "🔵" },
  { name: "ISRO", emoji: "🚀" },
  { name: "Tata Consultancy Services", emoji: "💼" },
  { name: "Cognizant", emoji: "⚡" },
  { name: "ICICI Bank", emoji: "🏦" },
  { name: "Viacom18", emoji: "📺" },
  { name: "Godrej", emoji: "🏢" },
  { name: "SAC", emoji: "🛰️" },
  { name: "Asian-African CCI", emoji: "🌏" },
  { name: "Yudiz Solutions", emoji: "🎮" },
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section className="bg-navy-50 py-16 overflow-hidden border-y border-navy-100">
      <div className="text-center mb-10">
        <span className="text-navy-800/40 font-mono text-xs tracking-widest uppercase">
          Trusted Partners & Recruiters
        </span>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-50 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 mx-8 bg-white rounded-2xl px-6 py-3 shadow-sm border border-navy-100 hover:border-navy-300 transition-colors"
            >
              <span className="text-2xl">{p.emoji}</span>
              <span className="text-navy-950 font-medium text-sm whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
