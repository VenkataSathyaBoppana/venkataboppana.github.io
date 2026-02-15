import { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  experimentId: string;
  achievements: {
    text: string;
    metric?: string;
    trend: 'up' | 'down' | 'neutral';
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'CVS Health',
    role: 'Senior Data Engineer',
    period: 'Sep 2023 - Present',
    location: 'Edison, NJ',
    experimentId: 'EXP-001',
    achievements: [
      { text: 'Increased data transformation efficiency', metric: '35%', trend: 'up' },
      { text: 'Improved pipeline throughput', metric: '30%', trend: 'up' },
      { text: 'Cut operational costs', metric: '20%', trend: 'down' },
      { text: 'Achieved system availability', metric: '99.9%', trend: 'up' },
    ],
  },
  {
    company: 'T-Mobile',
    role: 'Cloud Data Engineer - Intern',
    period: 'Jun 2023 - Aug 2023',
    location: 'Atlanta, GA',
    experimentId: 'EXP-002',
    achievements: [
      { text: 'Improved query performance', metric: '40%', trend: 'up' },
      { text: 'Enhanced data accessibility', metric: '30%', trend: 'up' },
      { text: 'Reduced processing latency', metric: '25%', trend: 'down' },
    ],
  },
  {
    company: 'HSBC',
    role: 'Data Engineer',
    period: 'Jan 2021 - May 2022',
    location: 'Hyderabad, India',
    experimentId: 'EXP-003',
    achievements: [
      { text: 'Increased processing throughput', metric: '40%', trend: 'up' },
      { text: 'Boosted data accuracy', metric: '20%', trend: 'up' },
      { text: 'Improved query performance', metric: '50%', trend: 'up' },
      { text: 'Reduced manual effort', metric: '60%', trend: 'down' },
    ],
  },
  {
    company: 'HSBC',
    role: 'Cloud Engineer',
    period: 'Jun 2018 - Dec 2020',
    location: 'Hyderabad, India',
    experimentId: 'EXP-004',
    achievements: [
      { text: 'Reduced system downtime', metric: '60%', trend: 'down' },
      { text: 'Accelerated deployment cycles', metric: '50%', trend: 'up' },
      { text: 'Reduced manual operations', metric: '25%', trend: 'down' },
      { text: 'Decreased MTTD', metric: '30%', trend: 'down' },
    ],
  },
];

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'neutral' }) {
  if (trend === 'up') {
    return <TrendingUp className="w-4 h-4 text-bb-green" />;
  }
  if (trend === 'down') {
    return <TrendingDown className="w-4 h-4 text-bb-green" />;
  }
  return <Minus className="w-4 h-4 text-bb-muted" />;
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen py-24 flex items-center bg-bb-black"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bb-grid-bg pointer-events-none opacity-30" />
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-bb-green" />
            <span className="font-mono text-sm text-bb-green tracking-widest uppercase">
              Lab Notes // 03
            </span>
          </div>
          <h2 className="bb-heading">
            Experience <span className="bg-bb-green text-bb-black px-3">Log</span>
          </h2>
          <p className="mt-4 text-bb-muted max-w-2xl">
            A track record of delivering measurable impact across banking,
            telecommunications, and healthcare industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-bb-gray md:-translate-x-1/2 hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-bb-black border-2 border-bb-green z-10 hidden md:block"
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)' }}
                />

                {/* Content Card */}
                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bb-lab-card">
                    {/* Experiment ID Badge */}
                    <div className="absolute -top-3 left-4">
                      <div className="px-3 py-1 bg-bb-black border border-bb-green">
                        <span className="font-mono text-xs text-bb-green">{exp.experimentId}</span>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pt-2">
                      <div>
                        <h3 className="text-xl font-bold text-bb-white">
                          {exp.role}
                        </h3>
                        <p className="text-bb-green font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-sm text-bb-muted">
                          {exp.period}
                        </p>
                        <p className="font-mono text-xs text-bb-muted/70">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-center gap-3 p-3 bg-bb-black/50 border border-bb-gray hover:border-bb-green/50 transition-colors"
                        >
                          <TrendIcon trend={achievement.trend} />
                          <div>
                            <p className="text-sm text-bb-white">
                              {achievement.text}
                            </p>
                            {achievement.metric && (
                              <p className="font-mono text-lg font-bold text-bb-green bb-glow">
                                {achievement.metric}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats - Periodic Table Style */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: 'Total Experience', value: '6+ Years', symbol: 'Yr', num: '06' },
            { label: 'Companies', value: '3', symbol: 'Co', num: '03' },
            { label: 'Industries', value: 'Banking, Telecom, Healthcare', symbol: 'In', num: '03' },
            { label: 'Certifications', value: '3', symbol: 'Ce', num: '03' },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative bg-bb-charcoal border-2 border-bb-gray p-4 hover:border-bb-green transition-all"
            >
              <span className="font-mono text-xs text-bb-muted absolute top-2 left-2">{stat.num}</span>
              <span className="font-mono text-xs text-bb-green absolute top-2 right-2">{stat.symbol}</span>
              <div className="pt-4 text-center">
                <div className="font-mono text-xs text-bb-muted uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-bb-white font-semibold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
