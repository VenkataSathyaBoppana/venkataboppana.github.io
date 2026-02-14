import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const contactLinks = [
  {
    name: 'Email',
    value: 'venkatassjb@gmail.com',
    icon: Mail,
    href: 'mailto:venkatassjb@gmail.com',
    color: 'green',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/venkata-boppana',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/venkata-sathya-sai-jashwanth-boppana/',
    color: 'amber',
  },
  {
    name: 'GitHub',
    value: 'github.com/VenkataSathyaBoppana',
    icon: Github,
    href: 'https://github.com/VenkataSathyaBoppana',
    color: 'green',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen py-24 flex items-center bg-bb-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bb-grid-bg pointer-events-none opacity-30" />
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-bb-green" />
            <span className="font-mono text-sm text-bb-green tracking-widest uppercase">
              Initiate Contact // 06
            </span>
            <div className="w-12 h-1 bg-bb-green" />
          </div>
          <h2 className="bb-heading">
            Let's <span className="bg-bb-green text-bb-black px-3">Talk</span>
          </h2>
          <p className="mt-4 text-bb-muted max-w-2xl mx-auto">
            Have a project in mind? Looking for a data engineer who can deliver
            measurable results? Let's discuss how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-4 p-4 bg-bb-charcoal border-2 border-bb-gray hover:${link.color === 'green' ? 'border-bb-green' : 'border-bb-amber'} transition-all duration-300`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 ${link.color === 'green' ? 'bg-bb-green/10 border-bb-green' : 'bg-bb-amber/10 border-bb-amber'} border-2 flex items-center justify-center`}
                  >
                    <link.icon
                      className={`w-5 h-5 ${link.color === 'green' ? 'text-bb-green' : 'text-bb-amber'}`}
                    />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-bb-muted uppercase tracking-wider">
                      {link.name}
                    </p>
                    <p className="text-bb-white font-medium">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location & Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-bb-charcoal border-2 border-bb-gray">
                <MapPin className="w-5 h-5 text-bb-green mb-2" />
                <p className="font-mono text-xs text-bb-muted uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-bb-white text-sm">Edison, NJ</p>
              </div>
              <div className="p-4 bg-bb-charcoal border-2 border-bb-gray">
                <Phone className="w-5 h-5 text-bb-amber mb-2" />
                <p className="font-mono text-xs text-bb-muted uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="text-bb-white text-sm">(334) 840-7584</p>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 border-2 border-bb-green/50 bg-bb-green/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-bb-green rounded-full animate-pulse" />
                <div>
                  <p className="text-bb-green font-medium">Available for Opportunities</p>
                  <p className="text-sm text-bb-muted">
                    Open to full-time roles and consulting projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bb-lab-card">
              <h3 className="text-xl font-bold text-bb-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-bb-green bg-bb-green/10 flex items-center justify-center">
                    <Send className="w-8 h-8 text-bb-green" />
                  </div>
                  <h4 className="text-bb-white font-semibold mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-bb-muted">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-bb-muted uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bb-black border-2 border-bb-gray text-bb-white placeholder-bb-muted focus:border-bb-green focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-bb-muted uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bb-black border-2 border-bb-gray text-bb-white placeholder-bb-muted focus:border-bb-green focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-bb-muted uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-bb-black border-2 border-bb-gray text-bb-white placeholder-bb-muted focus:border-bb-green focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-bb flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-bb-green border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
