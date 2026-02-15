import { Heart, Code, Database } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t-2 border-bb-gray bg-bb-black">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border-2 border-bb-green bg-bb-green/10 flex items-center justify-center">
              <Database className="w-6 h-6 text-bb-green" />
            </div>
            <div>
              <p className="text-bb-white font-semibold">Venkata Boppana</p>
              <p className="font-mono text-xs text-bb-muted">
                Data Engineer • DevOps Engineer
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="text-bb-muted italic text-sm border-l-4 border-bb-green pl-4">
              "High reliability is not an accident. It is engineered."
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-bb-muted hover:text-bb-green transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-wider">
              Back to Top
            </span>
            <div className="w-10 h-10 border-2 border-bb-gray flex items-center justify-center hover:border-bb-green transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t-2 border-bb-gray/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="font-mono text-xs text-bb-muted">
            © {currentYear} Venkata Boppana. All rights reserved.
          </p>

          {/* Built With */}
          <div className="flex items-center gap-2 text-bb-muted">
            <Code className="w-4 h-4" />
            <span className="font-mono text-xs">
              Built with React + TypeScript + Tailwind
            </span>
          </div>

          {/* Made With */}
          <div className="flex items-center gap-1 text-bb-muted">
            <span className="font-mono text-xs">Made with</span>
            <Heart className="w-3 h-3 text-bb-green fill-bb-green" />
            <span className="font-mono text-xs">in New Jersey</span>
          </div>
        </div>

        {/* System Status Footer */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-bb-charcoal border-2 border-bb-gray">
            <div className="w-2 h-2 bg-bb-green rounded-full animate-pulse" />
            <span className="font-mono text-xs text-bb-muted">
              System Stable
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-bb-charcoal border-2 border-bb-gray">
            <span className="font-mono text-xs text-bb-green">99.9%</span>
            <span className="font-mono text-xs text-bb-muted">Uptime</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-bb-charcoal border-2 border-bb-gray">
            <span className="font-mono text-xs text-bb-amber">v2.0</span>
            <span className="font-mono text-xs text-bb-muted">Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
