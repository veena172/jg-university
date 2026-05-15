"use client";
import { useEffect, useRef } from "react";

const facilities = [
  { icon: "🔬", label: "IIoT Lab", desc: "Industrial Internet of Things research facility" },
  { icon: "💡", label: "R&D + Incubation", desc: "Start-up incubation and innovation hub" },
  { icon: "📖", label: "Tech-enabled Library", desc: "Digital library open 24×7" },
  { icon: "📶", label: "Wi-Fi Campus", desc: "High-speed internet across the entire campus" },
];

const campusHighlights = [
  { num: "40+", label: "Acres Campus" },
  { num: "500+", label: "Seat Auditorium" },
  { num: "24×7", label: "Facility Access" },
  { num: "200+", label: "Lab Workstations" },
];

export default function Campus() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-right, .reveal-left").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="campus" className="bg-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span className="text-gold-500 font-mono text-xs tracking-widest uppercase font-bold">Campus Life</span>
            <h2 className="font-display text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-6 leading-tight">
              A Campus Built
              <br />
              for <span className="text-navy-800/30">Exploration</span>
            </h2>
            <p className="text-navy-950/60 text-base leading-relaxed mb-8">
              JG University features a vibrant, tech-enabled campus that supports student 
              life, research, and innovation — with facilities designed to match the highest 
              academic standards.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {campusHighlights.map((h) => (
                <div key={h.label} className="bg-navy-50 rounded-2xl p-5 border border-navy-100">
                  <div className="font-display font-black text-3xl text-navy-950">{h.num}</div>
                  <div className="text-navy-950/50 text-sm mt-1">{h.label}</div>
                </div>
              ))}
            </div>

            {/* Facilities */}
            <div className="space-y-3">
              {facilities.map((f) => (
                <div key={f.label} className="flex items-center gap-4 p-4 rounded-2xl bg-navy-50 hover:bg-navy-100 transition-colors">
                  <div className="w-10 h-10 bg-navy-950 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <div className="text-navy-950 font-bold text-sm">{f.label}</div>
                    <div className="text-navy-950/50 text-xs">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — campus visual collage */}
          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Large top-left */}
              <div className="col-span-2 bg-gradient-to-br from-navy-900 to-navy-700 rounded-3xl aspect-[16/7] overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute border border-white/20 rounded-full"
                      style={{
                        width: `${60 + i * 15}px`,
                        height: `${60 + i * 15}px`,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  ))}
                </div>
                <div className="text-center z-10">
                  <div className="font-display font-black text-5xl text-gold-400 mb-2">JGU</div>
                  <div className="text-white/60 text-sm font-mono uppercase tracking-widest">Ahmedabad Campus</div>
                </div>
              </div>

              {[
                { label: "State-of-the-Art Labs", icon: "⚗️", bg: "from-blue-600 to-indigo-700" },
                { label: "Modern Classrooms", icon: "🏫", bg: "from-emerald-600 to-teal-700" },
                { label: "Sports Complex", icon: "🏀", bg: "from-orange-500 to-red-600" },
                { label: "Student Lounges", icon: "☕", bg: "from-purple-600 to-violet-700" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`bg-gradient-to-br ${item.bg} rounded-2xl aspect-square flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer`}
                >
                  <div className="text-4xl">{item.icon}</div>
                  <div className="text-white font-medium text-xs text-center px-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
