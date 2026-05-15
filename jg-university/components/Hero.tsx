"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "58+", label: "Years of Legacy" },
  { value: "17", label: "Colleges Under ACT" },
  { value: "50+", label: "Programmes Offered" },
  { value: "10k+", label: "Alumni Worldwide" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = el.getBoundingClientRect();
      const x = ((clientX - left) / width - 0.5) * 20;
      const y = ((clientY - top) / height - 0.5) * 20;
      const blobs = el.querySelectorAll<HTMLElement>(".parallax-blob");
      blobs.forEach((b, i) => {
        const factor = (i + 1) * 0.4;
        b.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen bg-navy-950 overflow-hidden flex items-center"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated blobs */}
      <div className="parallax-blob absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-navy-800/60 to-navy-600/20 blob blur-3xl transition-transform duration-300 ease-out" />
      <div className="parallax-blob absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-gold-500/20 to-navy-800/30 blob blur-3xl transition-transform duration-300 ease-out" />
      <div className="parallax-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-3xl transition-transform duration-300 ease-out" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-gold-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-60 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-gold-400/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-60 left-60 w-1.5 h-1.5 bg-white/30 rounded-full animate-float" style={{ animationDelay: "3s" }} />

      {/* Diagonal accent line */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-xs font-mono tracking-widest uppercase">
                Admissions Open 2026–27
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Shape Your{" "}
              <span className="gradient-text">Future</span>{" "}
              <br />
              at JG University
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              A new-age, tech-driven university empowering students with industry-relevant skills, 
              experiential learning, and a global mindset — since 1965.
            </p>

            <div className="flex flex-wrap gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#apply"
                className="group relative bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gold-500/40 overflow-hidden"
              >
                <span className="relative z-10">Apply for 2026–27</span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </a>
              <a
                href="#programs"
                className="border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5 flex items-center gap-2"
              >
                Explore Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-display font-black text-2xl text-gold-400 leading-tight">{s.value}</div>
                  <div className="text-white/50 text-xs mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual panel */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Main card */}
            <div className="relative glass rounded-3xl p-8 border border-white/10">
              {/* Decorative grid inside */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: "🎓", label: "MBA / BBA" },
                  { icon: "💻", label: "BCA / MCA" },
                  { icon: "⚙️", label: "B.Tech" },
                  { icon: "📊", label: "B.Com / M.Com" },
                  { icon: "🔬", label: "M.Sc Programs" },
                  { icon: "⚖️", label: "LL.B / LL.M" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 text-center transition-all duration-300 hover:border-gold-500/30 hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="text-white/70 text-xs font-medium leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/50 text-xs uppercase tracking-widest font-mono">UGC Approved</span>
                  <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/30">✓ Verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"].map((c, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-navy-950 flex items-center justify-center text-[10px] font-bold text-white"
                        style={{ background: c }}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">10,000+ alumni placed globally</span>
                </div>
              </div>
            </div>

            {/* Floating badge cards */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 border border-gold-500/30 animate-float">
              <div className="text-gold-400 text-xs font-mono">NEP 2020</div>
              <div className="text-white text-sm font-bold">Compliant</div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 border border-white/20 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-white/50 text-xs font-mono">Partners</div>
              <div className="text-white text-sm font-bold">IBM · ISRO · TATA</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs uppercase tracking-widest font-mono">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
