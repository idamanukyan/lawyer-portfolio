export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Nare Manukyan
            </h3>
            <p className="text-white/60">
              Junior Lawyer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-white/60 hover:text-accent transition-colors">
                About
              </a>
              <a href="#practice-areas" className="block text-white/60 hover:text-accent transition-colors">
                Practice Areas
              </a>
              <a href="#experience" className="block text-white/60 hover:text-accent transition-colors">
                Experience
              </a>
              <a href="#contact" className="block text-white/60 hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-white/60">
              <a href="mailto:nareh200307@gmail.com" className="block hover:text-accent transition-colors">
                nareh200307@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-8">
          {/* Disclaimer */}
          <p className="text-white/40 text-xs leading-relaxed mb-6 max-w-4xl">
            <strong className="text-white/50">Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by visiting this website or submitting an inquiry. For advice regarding your specific legal situation, please schedule a consultation.
          </p>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              {currentYear} Nare Manukyan. All rights reserved.
            </p>
            <p className="text-white/30 text-xs">
              Junior Lawyer
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
