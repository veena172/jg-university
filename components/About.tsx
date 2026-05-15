"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-white py-28 overflow-hidden">
      {/* Accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-navy-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left visual */}
          <div className="relative reveal-left">
            {/* Large accent shape */}
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-navy-50 rounded-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gold-400/10 rounded-3xl -z-10" />

            {/* Main image placeholder with styled design */}
            <div className="relative bg-gradient-to-br from-navy-950 to-navy-800 rounded-3xl overflow-hidden aspect-[4/5] flex items-end p-8 shadow-2xl">
              {/* Abstract campus illustration */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white/40 rounded-2xl" />
                <div className="absolute top-16 left-16 w-32 h-32 border-2 border-gold-400/40 rounded-2xl" />
                <div className="absolute top-1/3 right-8 w-24 h-24 border border-white/20 rounded-full" />
                <div className="absolute bottom-1/3 left-12 w-16 h-40 bg-white/5 rounded-xl" />
                <div className="absolute bottom-1/3 left-32 w-12 h-52 bg-white/5 rounded-xl" />
                <div className="absolute bottom-1/3 left-48 w-14 h-36 bg-white/5 rounded-xl" />
              </div>
              {/* Quote overlay */}
              <div className="relative">
                <div className="text-gold-400 text-4xl font-display leading-none mb-2">"</div>
                <p className="text-white/90 text-lg font-display italic leading-snug">
                  Knowledge beyond books — wisdom for life.
                </p>
                <p className="text-white/50 text-sm mt-2 font-mono">— JG University Vision</p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-8 top-1/3 bg-white rounded-2xl shadow-2xl p-6 border border-navy-100">
              <div className="text-4xl font-display font-black text-navy-950 leading-none">17</div>
              <div className="text-navy-800/60 text-sm mt-1">Colleges under</div>
              <div className="text-navy-950 font-bold text-sm">ASIA Charitable Trust</div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="reveal stagger-1">
              <span className="text-gold-500 font-mono text-xs tracking-widest uppercase font-bold">
                Our Story
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-black text-navy-950 mt-3 mb-6 leading-tight">
                A New-Age University
                <br />
                <span className="text-navy-800/40">Rooted in 58 Years</span>
                <br />
                of Excellence
              </h2>
            </div>

            <div className="reveal stagger-2 space-y-5 text-navy-950/70 text-base leading-relaxed">
              <p>
                JG University is a UGC-approved institution sponsored by the ASIA Charitable Trust, 
                which has been transforming education since 1965 — managing 17 colleges and 3 schools 
                across Gujarat.
              </p>
              <p>
                We believe education must be both cognitive and experiential. Our programmes are 
                designed to evolve with industry demands, enabling students to enter employment or 
                self-employment seamlessly in a rapidly changing world.
              </p>
            </div>

            {/* Feature list */}
            <div className="reveal stagger-3 mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🏛️", title: "UGC Approved", desc: "Recognised & accredited university" },
                { icon: "🌐", title: "Global Outlook", desc: "International university collaborations" },
                { icon: "🤝", title: "Industry Links", desc: "IBM, ISRO, TCS and more" },
                { icon: "💡", title: "NEP 2020 Ready", desc: "Future-aligned curriculum" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3 p-4 rounded-2xl bg-navy-50 hover:bg-navy-100 transition-colors card-hover">
                  <div className="text-2xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <div className="font-bold text-navy-950 text-sm">{f.title}</div>
                    <div className="text-navy-950/50 text-xs mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal stagger-4 mt-10 flex items-center gap-6">
              <a
                href="#programs"
                className="bg-navy-950 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-navy-950/20"
              >
                View All Programs
              </a>
              <a href="#contact" className="text-navy-800 font-medium hover:text-gold-500 transition-colors flex items-center gap-2">
                Contact Admissions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
