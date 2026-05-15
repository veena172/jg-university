"use client";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    id: "ug",
    label: "Undergraduate",
    icon: "🎓",
    color: "from-blue-500 to-indigo-600",
    programs: [
      "BBA / BBA (Hons)",
      "B.Com / B.Com (Hons)",
      "BCA / BCA (Hons)",
      "B.Tech — CSE, AI/ML, IoT",
      "iMBA (5-year integrated)",
      "iMCA / iMSc (IT)",
      "LL.B. — 3 years",
      "B.Sc. — Forensic Science",
      "B.Sc. — Quantum Computing",
    ],
  },
  {
    id: "pg",
    label: "Postgraduate",
    icon: "📚",
    color: "from-purple-500 to-pink-600",
    programs: [
      "MBA — 2 years",
      "M.Com (Hons)",
      "MCA / MCA (AI & Full Stack)",
      "Masters — International Trade",
      "Masters — Aviation & Hospitality",
      "M.Sc. — Cyber Security",
      "M.Sc. — Forensic Science",
      "M.Sc. — Clinical Embryology",
      "LL.M. — 2 years",
    ],
  },
  {
    id: "doctoral",
    label: "Doctoral",
    icon: "🔬",
    color: "from-emerald-500 to-teal-600",
    programs: [
      "Ph.D. — Commerce",
      "Ph.D. — Management",
      "Ph.D. — Computing",
      "Ph.D. — Law",
      "Ph.D. — Interdisciplinary",
    ],
  },
  {
    id: "cert",
    label: "Certificate",
    icon: "⚡",
    color: "from-amber-500 to-orange-600",
    programs: [
      "Data Science & AI/ML",
      "Blockchain",
      "Cyber Security",
      "Digital Marketing",
      "Mobile Applications",
      "Full Stack Architecture",
      "Azure DevOps",
      "Industrial IoT",
      "Metaverse",
    ],
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState("ug");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <section ref={sectionRef} id="programs" className="bg-navy-950 py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-gold-400 font-mono text-xs tracking-widest uppercase">Academics</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
            50+ Programmes Across
            <br />
            <span className="gradient-text">6 Schools of Study</span>
          </h2>
          <p className="text-white/50 text-base">
            From undergraduate to doctoral — industry-aligned programmes built for the future.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                active === cat.id
                  ? "bg-gold-500 text-navy-950 font-bold scale-105 shadow-lg shadow-gold-500/30"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs grid */}
        <div className="reveal">
          <div className="relative">
            {/* Active category header */}
            <div className={`bg-gradient-to-r ${activeCategory.color} rounded-3xl p-8 mb-6 flex items-center gap-4`}>
              <div className="text-5xl">{activeCategory.icon}</div>
              <div>
                <h3 className="text-white font-display font-black text-2xl">{activeCategory.label} Programmes</h3>
                <p className="text-white/70 text-sm mt-1">{activeCategory.programs.length} programmes available</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCategory.programs.map((prog, i) => (
                <div
                  key={prog}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-white font-medium text-sm group-hover:text-gold-400 transition-colors">{prog}</div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 group-hover:bg-gold-500 flex items-center justify-center transition-all duration-300">
                      <svg className="w-3 h-3 text-white/40 group-hover:text-navy-950 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/30"
          >
            Apply to Any Programme
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
