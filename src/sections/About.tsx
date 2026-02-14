import { useEffect, useRef, useState } from 'react';
import { Database, Cloud, Server, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Database,
    title: 'High-Performance Pipelines',
    description: 'ETL/ELT systems delivering 30-40% throughput improvements',
    formula: 'ETL',
  },
  {
    icon: Cloud,
    title: 'Cloud Migrations',
    description: 'Zero-downtime migrations to Kubernetes & cloud-native architectures',
    formula: 'K8s',
  },
  {
    icon: Server,
    title: 'Streaming & Batch',
    description: 'Real-time Kafka pipelines and optimized batch processing',
    formula: 'Kf',
  },
  {
    icon: Shield,
    title: 'Banking-Grade Reliability',
    description: '99.9% availability with full compliance and audit readiness',
    formula: '99.9',
  },
];

export default function About() {
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
      { threshold: 0.2 }
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
              Profile // 01
            </span>
          </div>
          <h2 className="bb-heading">
            About <span className="bg-bb-green text-bb-black px-3">Me</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Main Text */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xl md:text-2xl text-bb-white leading-relaxed">
              I specialize in{' '}
              <span className="text-bb-green font-semibold bb-glow">
                high-performance ETL/ELT pipelines
              </span>{' '}
              across Azure, AWS, Snowflake, and Databricks.
            </p>

            <p className="text-bb-muted leading-relaxed">
              I have led migrations of legacy banking workloads into containerized{' '}
              <span className="text-bb-white">Kubernetes</span> environments using{' '}
              <span className="text-bb-white">Docker</span>,{' '}
              <span className="text-bb-white">Terraform</span>, and{' '}
              <span className="text-bb-white">Ansible</span> — achieving{' '}
              <span className="text-bb-green bb-glow">zero downtime</span> and reducing system
              outages by <span className="text-bb-green bb-glow">60%</span>.
            </p>

            <p className="text-bb-muted leading-relaxed">
              I design batch and real-time architectures using{' '}
              <span className="text-bb-white">Kafka</span>,{' '}
              <span className="text-bb-white">Spark</span>,{' '}
              <span className="text-bb-white">Airflow</span>,{' '}
              <span className="text-bb-white">DBT</span>, and{' '}
              <span className="text-bb-white">Stream Analytics</span>, consistently
              improving throughput by <span className="text-bb-green bb-glow">30-40%</span> while
              maintaining compliance and audit readiness.
            </p>

            <div className="pt-4 border-t-2 border-bb-gray">
              <p className="text-lg text-bb-white font-medium italic border-l-4 border-bb-green pl-4">
                "I engineer systems that scale predictably, recover cleanly, and remain
                observable under pressure."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bb-lab-card group p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Formula Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-bb-black border border-bb-green flex items-center justify-center">
                  <span className="font-mono text-xs text-bb-green font-bold">{item.formula}</span>
                </div>
                
                <div className="w-12 h-12 bg-bb-green/10 border border-bb-green/30 flex items-center justify-center mb-4 group-hover:bg-bb-green/20 transition-colors">
                  <item.icon className="w-6 h-6 text-bb-green" />
                </div>
                <h3 className="text-bb-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-bb-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar - Periodic Table Style */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-bb-gray transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: 'Cloud Platforms', value: 'Azure, AWS', symbol: 'Cl' },
            { label: 'Data Tools', value: 'Spark, Kafka, Airflow', symbol: 'Dt' },
            { label: 'DevOps Stack', value: 'K8s, Terraform, Docker', symbol: 'Do' },
            { label: 'Databases', value: 'Snowflake, Synapse', symbol: 'Db' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-bb-black p-6 text-center hover:bg-bb-charcoal transition-colors relative group"
            >
              <span className="font-mono text-xs text-bb-green absolute top-2 right-2">{item.symbol}</span>
              <div className="font-mono text-xs text-bb-muted uppercase tracking-wider mb-2">
                {item.label}
              </div>
              <div className="text-sm text-bb-white font-medium">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
