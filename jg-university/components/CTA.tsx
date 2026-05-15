"use client";
import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="apply" className="relative bg-navy-950 py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-gold-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gold-400 text-xs font-mono tracking-widest uppercase">Applications Open Now</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Your Journey Begins
            <br />
            <span className="gradient-text">in 2026–27</span>
          </h2>

          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
            Take the first step towards a future defined by excellence, opportunity, and impact. 
            Seats are limited — apply today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="https://jguni.in/admission-open.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gold-500 hover:bg-gold-400 text-navy-950 font-black text-lg px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="tel:+917926600451"
              className="border border-white/20 hover:border-white/50 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 hover:bg-white/5 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Admissions
            </a>
          </div>

          {/* Contact info grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📍", label: "Location", value: "Ahmedabad, Gujarat" },
              { icon: "📧", label: "Email", value: "admissions@jguni.in" },
              { icon: "🌐", label: "Website", value: "www.jguni.in" },
            ].map((c) => (
              <div key={c.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-white/40 text-xs font-mono uppercase tracking-wider mb-1">{c.label}</div>
                <div className="text-white font-medium text-sm">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
