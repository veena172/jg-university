"use client";
import { useEffect, useRef } from "react";

const strengths = [
  {
    icon: "🧠",
    title: "Whole Brain Learning",
    description: "Pedagogy that empowers learners to acquire future-proof technical skills while moulding them into creative thinkers and problem solvers.",
    accent: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/30",
  },
  {
    icon: "🔗",
    title: "Interdisciplinary Approach",
    description: "Students from diverse backgrounds connect, ideate, and solve real problems using different conceptual frameworks and methodologies.",
    accent: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    icon: "🏭",
    title: "Immersive & Experiential",
    description: "Hands-on exposure to real-life projects, full-pay on-the-job training, and cross-cultural internships develop practical expertise.",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    icon: "👩‍🏫",
    title: "Academia & Industry Faculty",
    description: "Dynamic scholars with vast academic knowledge and real-world experience inspire students at every stage of their journey.",
    accent: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
  },
  {
    icon: "🌍",
    title: "Global Collaborations",
    description: "Partnerships with foreign universities for curriculum development, joint delivery, and student exchange programmes.",
    accent: "from-cyan-500/20 to-sky-500/20",
    border: "border-cyan-500/30",
  },
  {
    icon: "💻",
    title: "Tech-Enabled Campus",
    description: "Wi-Fi enabled campus, IIoT Lab, R&D Incubation Centre, and a fully digital, tech-enabled library open 24×7.",
    accent: "from-rose-500/20 to-red-500/20",
    border: "border-rose-500/30",
  },
];

const salientFeatures = [
  "National Education Policy (NEP) 2020 & UGC Compliant",
  "Full Pay On-The-Job Training Opportunities",
  "Cross-Cultural & Cross-Sectoral Internships",
  "Course-Embedded Capstone Projects",
  "Hands-on Experience with Emerging Tech",
  "24×7 Accessibility of Campus Facilities",
  "Industry Use-Cases in Every Programme",
  "Global Alumni Network of 10,000+",
];

export default function Strengths() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="strengths" className="bg-white py-28 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-gold-500 font-mono text-xs tracking-widest uppercase font-bold">Why JG?</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-4 leading-tight">
            Built for the
            <br />
            <span className="text-navy-800/30">Leaders of Tomorrow</span>
          </h2>
          <p className="text-navy-950/50 text-base">
            Our unique approach combines academic rigour with real-world experience, 
            producing graduates who are truly industry-ready.
          </p>
        </div>

        {/* Strengths grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className={`reveal stagger-${Math.min(i + 1, 6)} group relative bg-gradient-to-br ${s.accent} border ${s.border} rounded-3xl p-8 overflow-hidden card-hover`}
            >
              {/* Background glow */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/30 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</div>
                <h3 className="font-display font-black text-navy-950 text-xl mb-3 leading-tight">{s.title}</h3>
                <p className="text-navy-950/60 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Salient features strip */}
        <div className="reveal bg-navy-950 rounded-3xl p-10">
          <div className="text-center mb-8">
            <h3 className="font-display font-black text-white text-2xl">JG University Salient Features</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {salientFeatures.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/70 text-sm leading-snug">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
