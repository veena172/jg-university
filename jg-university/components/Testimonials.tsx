"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    degree: "Alumni",
    text: "I owe a great deal to JG for shaping me into the person I am. The faculty members were more than just teachers — they served as mentors at every step of our journey. The values I imbibed at JG continue to serve as a guiding light for me.",
    color: "from-yellow-400 to-orange-500",
    initial: "J",
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Lead, TCS",
    degree: "BCA Graduate",
    text: "My education at JG played a pivotal role in shaping my career. The BCA program provided a strong foundation in IT, and the focus on real-world training gave me the opportunity to apply my knowledge in actual scenarios.",
    color: "from-blue-400 to-indigo-500",
    initial: "Y",
  },
  {
    name: "Krishna Soni",
    role: "Assistant Manager, ICICI Bank",
    degree: "BBA Graduate",
    text: "The Management programme has cutting-edge course design and hands-on experience projects. I was encouraged to uncover skills I never knew I possessed. The emphasis on personality development helped me build a fulfilling career.",
    color: "from-emerald-400 to-teal-500",
    initial: "K",
  },
  {
    name: "Disha Thaker",
    role: "Project Associate, Cognizant",
    degree: "BCA Graduate",
    text: "I gained a solid foundation in computer science and programming. The emphasis on practical learning through projects allowed me to apply my skills meaningfully. JG's dedication to staying current with tech trends has been invaluable.",
    color: "from-pink-400 to-rose-500",
    initial: "D",
  },
  {
    name: "Parth Raval",
    role: "Creative Producer, Colors Gujarati",
    degree: "Alumni",
    text: "My education at JG has been instrumental in shaping my career. The comprehensive academic programme and exceptional faculty provided me with a solid grounding in my chosen field, preparing me well for the media industry.",
    color: "from-violet-400 to-purple-500",
    initial: "P",
  },
  {
    name: "Aayushi Gor",
    role: "HR Trainer, Godrej & Boyce",
    degree: "BBA Graduate",
    text: "My time at JG has enriched my life in many ways. The faculty were supportive and dedicated — they challenged us to think critically, communicate effectively, and work collaboratively. Skills that have been invaluable in my career.",
    color: "from-amber-400 to-yellow-500",
    initial: "A",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

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

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="bg-navy-950 py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-navy-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 reveal">
          <span className="text-gold-400 font-mono text-xs tracking-widest uppercase">Alumni Voices</span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-white mt-3 mb-4 leading-tight">
            Stories That
            <br />
            <span className="gradient-text">Inspire</span>
          </h2>
        </div>

        <div className="reveal grid lg:grid-cols-5 gap-8 items-start">
          {/* Featured testimonial */}
          <div className="lg:col-span-3">
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-10 min-h-[320px]">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 font-display text-8xl text-white/5 leading-none select-none">"</div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-display font-black text-xl flex-shrink-0`}>
                  {testimonials[active].initial}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{testimonials[active].name}</div>
                  <div className="text-gold-400 text-sm">{testimonials[active].role}</div>
                  <div className="text-white/40 text-xs font-mono mt-0.5">{testimonials[active].degree}</div>
                </div>
              </div>

              <p className="text-white/75 text-base leading-relaxed italic">
                "{testimonials[active].text}"
              </p>

              {/* Pagination dots */}
              <div className="flex items-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === active ? "w-8 h-2 bg-gold-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`text-left flex items-center gap-3 p-4 rounded-2xl border transition-all duration-300 ${
                  i === active
                    ? "bg-white/10 border-gold-500/30 scale-105"
                    : "bg-white/[0.03] border-white/5 hover:bg-white/5"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-display font-black flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
                {i === active && (
                  <div className="ml-auto w-2 h-2 bg-gold-400 rounded-full flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
