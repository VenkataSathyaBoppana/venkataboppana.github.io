import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Database, Zap, Lock } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  tech: string[];
  icon: React.ElementType;
  githubUrl: string;
  color: 'green' | 'amber';
}

const projects: Project[] = [
  {
    id: 'EXP-001',
    title: 'Modern Medallion Architecture',
    subtitle: 'Data Warehouse',
    description:
      'Designed a production-grade data warehouse using Medallion Architecture (Bronze, Silver, Gold) to process and store high-volume activity logs in Azure Synapse Analytics.',
    achievements: [
      'Improved data ingestion speed by 35%',
      'Achieved 99.9% data consistency',
      'Automated end-to-end ETL pipelines',
    ],
    tech: ['Azure Synapse', 'ADF', 'Python', 'SQL', 'Delta Lake'],
    icon: Database,
    githubUrl: 'https://github.com/VenkataSathyaBoppana/DataWareHouse_Activity',
    color: 'green',
  },
  {
    id: 'EXP-002',
    title: 'Formula One Lakehouse',
    subtitle: 'Analytics Platform',
    description:
      'Architected a cloud-native Lakehouse platform using Azure Databricks and PySpark to process and analyze over 70 years of historical Formula One racing, telemetry, and race data.',
    achievements: [
      'Processed 70+ years of historical data',
      'Integrated Key Vault for secure credentials',
      'Automated incremental data loads',
    ],
    tech: ['Databricks', 'PySpark', 'Azure Key Vault', 'ADFv2', 'Delta Lake'],
    icon: Zap,
    githubUrl: 'https://github.com/VenkataSathyaBoppana/Databricks_Project_On_Formula1',
    color: 'amber',
  },
];

function ProjectCard({
  project,
  delay,
  isVisible,
}: {
  project: Project;
  delay: number;
  isVisible: boolean;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const isGreen = project.color === 'green';

  return (
    <div
      ref={cardRef}
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
    >
      {/* Experiment ID Badge */}
      <div className="absolute -top-3 left-6 z-20">
        <div className={`px-3 py-1 bg-bb-black border-2 ${isGreen ? 'border-bb-green' : 'border-bb-amber'}`}>
          <span className={`font-mono text-xs ${isGreen ? 'text-bb-green' : 'text-bb-amber'}`}>
            {project.id}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className={`relative h-full bb-lab-card overflow-hidden`}
      >
        {/* Glow Effect on Hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${
              isGreen
                ? 'rgba(0, 255, 65, 0.12)'
                : 'rgba(255, 215, 0, 0.12)'
            } 0%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative p-6 pt-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-14 h-14 border-2 ${isGreen ? 'border-bb-green bg-bb-green/10' : 'border-bb-amber bg-bb-amber/10'} flex items-center justify-center`}
            >
              <project.icon className={`w-7 h-7 ${isGreen ? 'text-bb-green' : 'text-bb-amber'}`} />
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 border-2 border-bb-gray text-bb-muted hover:${isGreen ? 'border-bb-green text-bb-green' : 'border-bb-amber text-bb-amber'} transition-colors`}
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-bb-white mb-1">
            {project.title}
          </h3>
          <p className={`text-sm ${isGreen ? 'text-bb-green' : 'text-bb-amber'} mb-4`}>{project.subtitle}</p>

          {/* Description */}
          <p className="text-bb-muted text-sm mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Achievements */}
          <div className="space-y-2 mb-6">
            {project.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`w-1.5 h-1.5 ${isGreen ? 'bg-bb-green' : 'bg-bb-amber'}`}
                />
                <span className="text-sm text-bb-white">{achievement}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 bg-bb-black border border-bb-gray rounded-sm text-xs font-mono text-bb-muted hover:${isGreen ? 'border-bb-green text-bb-green' : 'border-bb-amber text-bb-amber'} transition-colors`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="relative p-4 border-t-2 border-bb-gray bg-bb-black/30">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 text-sm font-mono text-bb-muted hover:${isGreen ? 'text-bb-green' : 'text-bb-amber'} transition-colors`}
          >
            <span>View on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
              Lab Experiments // 04
            </span>
          </div>
          <h2 className="bb-heading">
            Projects <span className="bg-bb-green text-bb-black px-3">Lab</span>
          </h2>
          <p className="mt-4 text-bb-muted max-w-2xl">
            Production-ready data engineering solutions. Each experiment demonstrates
            enterprise-grade architecture and measurable business impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Coming Soon Card */}
        <div
          className={`mt-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bb-lab-card p-8 text-center border-dashed border-bb-gray">
            <div className="w-14 h-14 mx-auto mb-4 border-2 border-bb-gray flex items-center justify-center">
              <Lock className="w-6 h-6 text-bb-muted" />
            </div>
            <h3 className="text-bb-white font-semibold mb-2">
              More Experiments Coming Soon
            </h3>
            <p className="text-sm text-bb-muted">
              Currently working on Generative AI and RAG-based data pipelines.
              Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
