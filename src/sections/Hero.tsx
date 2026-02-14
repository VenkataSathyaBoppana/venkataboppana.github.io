import { useEffect, useState } from 'react';
import { Download, Mail, ChevronRight } from 'lucide-react';

const terminalLines = [
  '> Initializing data pipeline...',
  '> Loading Azure modules...',
  '> Connecting to Kafka cluster...',
  '> Optimizing Spark jobs...',
  '> System ready.',
];

const SmokeParticle = ({ delay, left, size = 80 }: { delay: number; left: string; size?: number }) => (
  <div
    className="absolute bottom-0 rounded-full pointer-events-none"
    style={{
      left,
      width: size,
      height: size,
      background: 'radial-gradient(circle, rgba(0, 255, 65, 0.12) 0%, transparent 70%)',
      animation: `smoke 8s ease-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setIsTypingComplete(true);
      return;
    }

    const line = terminalLines[currentLine];
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex <= line.length) {
        setDisplayText(line.slice(0, charIndex));
        charIndex++;
        setTimeout(typeChar, 25 + Math.random() * 15);
      } else {
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setDisplayText('');
        }, 600);
      }
    };

    typeChar();
  }, [currentLine]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bb-black">
      {/* Smoke Effect Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <SmokeParticle
            key={i}
            delay={i * 0.7}
            left={`${5 + i * 8}%`}
            size={60 + i * 10}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bb-black via-transparent to-bb-black pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 bb-grid-bg pointer-events-none opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {/* Breaking Bad Style Name Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-baseline gap-1">
            {['V', 'e', 'n', 'k', 'a', 't', 'a'].map((char, i) => (
              <span
                key={i}
                className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter ${
                  i === 0 ? 'bg-bb-green text-bb-black px-2' : 'text-bb-white'
                }`}
                style={{ 
                  textShadow: i === 0 ? 'none' : '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-baseline gap-1 mt-2">
            {['B', 'o', 'p', 'p', 'a', 'n', 'a'].map((char, i) => (
              <span
                key={i}
                className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter ${
                  i === 0 ? 'bg-bb-green text-bb-black px-2' : 'text-bb-white'
                }`}
                style={{ 
                  textShadow: i === 0 ? 'none' : '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Text */}
          <div className="space-y-8">
            {/* Status Indicator */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-bb-green rounded-full animate-pulse-green" />
              <span className="font-mono text-sm text-bb-green tracking-widest uppercase">
                System Online
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                <span className="text-bb-white">I Don't Move Data.</span>
                <br />
                <span className="text-bb-green bb-glow">
                  I Engineer Systems
                </span>
                <br />
                <span className="text-bb-white">That Survive Scale.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-bb-muted font-medium">
                Senior Cloud Data Engineer | DevOps Engineer
              </p>
              <p className="font-mono text-sm text-bb-green/80">
                Azure • AWS • Snowflake • Databricks • Kubernetes • Terraform
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="btn-bb flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="/Venkata_Boppana_Resume.pdf"
                download
                className="btn-amber flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 border-2 border-bb-gray text-bb-white font-mono text-sm tracking-widest uppercase transition-all duration-300 hover:border-bb-white"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Contact
              </button>
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="relative">
            <div className="relative lab-container overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-bb-gray/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-bb-amber/80" />
                <div className="w-3 h-3 rounded-full bg-bb-green/80" />
                <span className="ml-4 font-mono text-xs text-bb-muted">terminal — bash — 80x24</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm min-h-[280px] bg-bb-charcoal">
                {/* Previous Lines */}
                <div className="space-y-1 mb-2">
                  {terminalLines.slice(0, currentLine).map((line, index) => (
                    <div key={index} className="terminal-text opacity-60">
                      {line}
                    </div>
                  ))}
                </div>

                {/* Current Line */}
                {currentLine < terminalLines.length && (
                  <div className="terminal-text">
                    {displayText}
                    <span
                      className={`inline-block w-2 h-4 bg-bb-green ml-1 ${
                        showCursor ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                )}

                {/* Completion Message */}
                {isTypingComplete && (
                  <div className="mt-4 pt-4 border-t border-bb-gray/50">
                    <div className="flex items-center gap-2 text-bb-green">
                      <div className="w-2 h-2 bg-bb-green rounded-full animate-pulse" />
                      <span>All systems operational</span>
                    </div>
                    <div className="mt-2 text-bb-muted text-xs">
                      Ready to engineer your next data pipeline.
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Glow Effect */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,255,65,0.08)]" />
            </div>

            {/* Decorative Elements - Breaking Bad Style */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-bb-green/30" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-bb-amber/30" />
            
            {/* Chemical Element Badge */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-bb-charcoal border-2 border-bb-green flex flex-col items-center justify-center">
              <span className="font-mono text-xs text-bb-muted absolute top-1 left-1">23</span>
              <span className="font-mono text-2xl font-bold text-bb-green">V</span>
              <span className="font-mono text-[8px] text-bb-white absolute bottom-1">VANADIUM</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Periodic Table Style */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '6+', label: 'Years', symbol: 'Yr', num: '06' },
            { value: '99.9%', label: 'Uptime', symbol: 'Up', num: '99' },
            { value: '40%', label: 'Performance', symbol: 'Pf', num: '40' },
            { value: '60%', label: 'Downtime Cut', symbol: 'Dt', num: '60' },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative bg-bb-charcoal border-2 border-bb-gray p-4 hover:border-bb-green transition-all duration-300 group"
            >
              <span className="font-mono text-xs text-bb-muted absolute top-2 left-2">{stat.num}</span>
              <span className="font-mono text-xs text-bb-green absolute top-2 right-2">{stat.symbol}</span>
              <div className="pt-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-bb-green group-hover:bb-glow transition-all">{stat.value}</div>
                <div className="text-xs text-bb-muted mt-1 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bb-black to-transparent pointer-events-none" />
    </div>
  );
}
