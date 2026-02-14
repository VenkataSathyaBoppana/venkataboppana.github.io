import { useEffect, useRef, useState } from 'react';

interface SkillElement {
  symbol: string;
  name: string;
  number: string;
  category: 'language' | 'data' | 'cloud' | 'devops' | 'observability';
}

const skillElements: SkillElement[] = [
  // Languages
  { symbol: 'Py', name: 'Python', number: '01', category: 'language' },
  { symbol: 'Sq', name: 'SQL', number: '02', category: 'language' },
  { symbol: 'Sh', name: 'Bash', number: '03', category: 'language' },
  
  // Data Engineering
  { symbol: 'Sp', name: 'Spark', number: '04', category: 'data' },
  { symbol: 'Ps', name: 'PySpark', number: '05', category: 'data' },
  { symbol: 'Kf', name: 'Kafka', number: '06', category: 'data' },
  { symbol: 'Af', name: 'Airflow', number: '07', category: 'data' },
  { symbol: 'Db', name: 'DBT', number: '08', category: 'data' },
  { symbol: 'Dl', name: 'DeltaLake', number: '09', category: 'data' },
  
  // Cloud
  { symbol: 'Ad', name: 'AzureData', number: '10', category: 'cloud' },
  { symbol: 'Db', name: 'Databricks', number: '11', category: 'cloud' },
  { symbol: 'Sy', name: 'Synapse', number: '12', category: 'cloud' },
  { symbol: 'Ek', name: 'EKS', number: '13', category: 'cloud' },
  { symbol: 'S3', name: 'S3', number: '14', category: 'cloud' },
  { symbol: 'Ec', name: 'EC2', number: '15', category: 'cloud' },
  
  // DevOps
  { symbol: 'Tf', name: 'Terraform', number: '16', category: 'devops' },
  { symbol: 'An', name: 'Ansible', number: '17', category: 'devops' },
  { symbol: 'Dx', name: 'Docker', number: '18', category: 'devops' },
  { symbol: 'K8', name: 'Kubernetes', number: '19', category: 'devops' },
  { symbol: 'Jk', name: 'Jenkins', number: '20', category: 'devops' },
  
  // Observability
  { symbol: 'Pr', name: 'Prometheus', number: '21', category: 'observability' },
  { symbol: 'Gr', name: 'Grafana', number: '22', category: 'observability' },
  { symbol: 'El', name: 'ELK', number: '23', category: 'observability' },
  { symbol: 'Cw', name: 'CloudWatch', number: '24', category: 'observability' },
];

const categoryColors: Record<string, string> = {
  language: 'border-bb-green',
  data: 'border-bb-amber',
  cloud: 'border-blue-500',
  devops: 'border-purple-500',
  observability: 'border-pink-500',
};

const categoryGlows: Record<string, string> = {
  language: 'rgba(0, 255, 65,',
  data: 'rgba(255, 215, 0,',
  cloud: 'rgba(59, 130, 246,',
  devops: 'rgba(168, 85, 247,',
  observability: 'rgba(236, 72, 153,',
};

function ElementCard({ element, delay, isVisible }: { element: SkillElement; delay: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const borderColor = categoryColors[element.category];
  const glowColor = categoryGlows[element.category];

  return (
    <div
      className={`element-card cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        boxShadow: isHovered 
          ? `0 0 25px ${glowColor} 0.5), 0 0 50px ${glowColor} 0.3)` 
          : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Element Number */}
      <span className="element-number">{element.number}</span>
      
      {/* Element Symbol */}
      <div className={`element-abbr ${isHovered ? 'bb-glow' : ''}`}>
        {element.symbol}
      </div>
      
      {/* Element Name */}
      <span className={`element-name transition-colors duration-300 ${isHovered ? 'text-bb-green' : ''}`}>
        {element.name}
      </span>
      
      {/* Category Indicator */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1 ${borderColor} bg-current opacity-50`}
      />
    </div>
  );
}

export default function Skills() {
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
              Periodic Table // 02
            </span>
          </div>
          <h2 className="bb-heading">
            Technical <span className="bg-bb-green text-bb-black px-3">Elements</span>
          </h2>
          <p className="mt-4 text-bb-muted max-w-2xl">
            A comprehensive toolkit for building enterprise-grade data systems.
            Each element selected for reliability, scalability, and performance.
          </p>
        </div>

        {/* Periodic Table Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2 md:gap-3">
          {skillElements.map((element, index) => (
            <ElementCard
              key={element.symbol}
              element={element}
              delay={index * 50}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Legend */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: 'Languages', color: 'bg-bb-green', category: 'language' },
            { label: 'Data Engineering', color: 'bg-bb-amber', category: 'data' },
            { label: 'Cloud', color: 'bg-blue-500', category: 'cloud' },
            { label: 'DevOps', color: 'bg-purple-500', category: 'devops' },
            { label: 'Observability', color: 'bg-pink-500', category: 'observability' },
          ].map((item) => (
            <div key={item.category} className="flex items-center gap-2">
              <div className={`w-3 h-3 ${item.color}`} />
              <span className="font-mono text-xs text-bb-muted uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className={`mt-12 p-6 border-2 border-bb-gray bg-bb-charcoal/50 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-bb-green/10 border border-bb-green flex items-center justify-center flex-shrink-0">
              <span className="font-mono text-bb-green text-sm">i</span>
            </div>
            <div>
              <h4 className="text-bb-white font-semibold mb-1">
                Continuous Learning
              </h4>
              <p className="text-sm text-bb-muted">
                Currently expanding expertise in Generative AI, RAG architectures,
                and vector databases for next-generation data applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
