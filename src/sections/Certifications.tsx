import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  id: string;
  date: string;
  status: 'Active' | 'Expired';
  verifyUrl: string;
  skills: string[];
  element: string;
  number: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    id: 'AWS-DEV-2023',
    date: '2023',
    status: 'Active',
    verifyUrl: '#',
    skills: ['Lambda', 'API Gateway', 'DynamoDB', 'CI/CD'],
    element: 'Ad',
    number: '01',
  },
  {
    name: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    id: 'AWS-SAA-2023',
    date: '2023',
    status: 'Active',
    verifyUrl: '#',
    skills: ['EC2', 'VPC', 'S3', 'CloudFormation'],
    element: 'As',
    number: '02',
  },
  {
    name: 'Azure Administrator',
    issuer: 'Microsoft',
    id: 'MS-AZ104-2022',
    date: '2022',
    status: 'Active',
    verifyUrl: '#',
    skills: ['VMs', 'Storage', 'Networking', 'Security'],
    element: 'Az',
    number: '03',
  },
];

function CertificationCard({
  cert,
  delay,
  isVisible,
}: {
  cert: Certification;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Element Badge */}
      <div className="absolute -top-4 right-4 z-20">
        <div className="w-16 h-16 bg-bb-charcoal border-2 border-bb-green flex flex-col items-center justify-center">
          <span className="font-mono text-xs text-bb-muted absolute top-1 left-1">{cert.number}</span>
          <span className="font-mono text-xl font-bold text-bb-green">{cert.element}</span>
        </div>
      </div>

      {/* Card */}
      <div className="bb-id-card h-full">
        {/* Holographic Strip */}
        <div className="absolute top-4 right-24 w-20 h-6 bg-gradient-to-r from-bb-green/20 via-bb-amber/20 to-bb-green/20 opacity-50" />

        {/* Card Content */}
        <div className="relative z-10 pt-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-bb-green/10 border border-bb-green flex items-center justify-center">
                <Award className="w-6 h-6 text-bb-green" />
              </div>
              <div>
                <p className="font-mono text-xs text-bb-muted uppercase tracking-wider">
                  {cert.issuer}
                </p>
                <p className="font-mono text-xs text-bb-green">{cert.id}</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-bb-green rounded-full animate-pulse" />
            <span className="font-mono text-xs text-bb-green">
              {cert.status}
            </span>
          </div>

          {/* Certification Name */}
          <h3 className="text-lg font-bold text-bb-white mb-2">{cert.name}</h3>
          <p className="font-mono text-sm text-bb-muted mb-6">
            Issued: {cert.date}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-bb-black border border-bb-gray text-xs font-mono text-bb-muted"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t-2 border-bb-gray flex items-center justify-between">
            <div className="flex items-center gap-2 text-bb-green">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-mono">Verified</span>
            </div>
            <a
              href={cert.verifyUrl}
              className="flex items-center gap-1 text-xs font-mono text-bb-muted hover:text-bb-green transition-colors"
            >
              <span>Verify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-bb-green/5 to-transparent" />
      </div>
    </div>
  );
}

export default function Certifications() {
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
              Credentials // 05
            </span>
          </div>
          <h2 className="bb-heading">
            Certifications <span className="bg-bb-green text-bb-black px-3">ID</span>
          </h2>
          <p className="mt-4 text-bb-muted max-w-2xl">
            Industry-recognized certifications validating expertise in cloud
            architecture, data engineering, and DevOps practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              delay={index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 p-6 border-2 border-bb-gray bg-bb-charcoal/50 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-bb-white font-semibold mb-1">
                Continuous Learning
              </h4>
              <p className="text-sm text-bb-muted">
                Currently pursuing Databricks Data Engineer Associate and Terraform
                Associate certifications.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/venkata-sathya-sai-jashwanth-boppana/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bb flex items-center gap-2"
            >
              <span>View All</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
