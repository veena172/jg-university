export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0e0f3a] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-950 font-display font-black text-lg">JG</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">JG University</div>
                <div className="text-gold-400/60 text-[10px] tracking-widest uppercase font-mono">Est. 1965</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              A UGC-approved, tech-driven university empowering future leaders across Gujarat and beyond.
            </p>
            <div className="flex gap-3 mt-6">
              {["𝕏", "in", "f", "▶"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all text-sm"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider font-mono">Programs</h4>
            <ul className="space-y-3">
              {["MBA / BBA", "B.Tech / MCA", "B.Com / M.Com", "LL.B / LL.M", "Ph.D Programmes", "Certificate Courses"].map((p) => (
                <li key={p}>
                  <a href="#programs" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* University */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider font-mono">University</h4>
            <ul className="space-y-3">
              {["About JG", "Leadership", "Faculty", "Campus", "Partners", "Alumni Network"].map((p) => (
                <li key={p}>
                  <a href="#about" className="text-white/40 hover:text-gold-400 text-sm transition-colors">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider font-mono">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gold-400 text-sm flex-shrink-0 mt-0.5">📍</span>
                <span className="text-white/40 text-sm leading-snug">
                  Near Nirma University, S.G. Highway,<br />Ahmedabad – 382481, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400 text-sm">📞</span>
                <a href="tel:+917926600451" className="text-white/40 hover:text-white text-sm transition-colors">
                  +91 79 2660 0451
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400 text-sm">📧</span>
                <a href="mailto:admissions@jguni.in" className="text-white/40 hover:text-white text-sm transition-colors">
                  admissions@jguni.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-400 text-sm">🌐</span>
                <a
                  href="https://jguni.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-gold-400 text-sm transition-colors"
                >
                  jguni.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 JG University, Ahmedabad. UGC Approved — Sponsored by ASIA Charitable Trust.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Grievance"].map((l) => (
              <a key={l} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
