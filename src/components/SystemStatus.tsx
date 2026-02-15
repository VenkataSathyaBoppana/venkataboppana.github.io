import { useState, useEffect } from 'react';
import { Activity, Cpu, Database, Wifi } from 'lucide-react';

interface SystemStatusProps {
  currentSection: string;
}

const sectionNames: Record<string, string> = {
  hero: 'HOME',
  about: 'PROFILE',
  skills: 'ELEMENTS',
  experience: 'LAB NOTES',
  projects: 'LAB',
  certifications: 'CREDENTIALS',
  contact: 'CONTACT',
};

export default function SystemStatus({ currentSection }: SystemStatusProps) {
  const [currentTime, setCurrentTime] = useState('');
  const [uptime, setUptime] = useState(99.9);

  useEffect(() => {
    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Simulate uptime counter
    const uptimeInterval = setInterval(() => {
      setUptime((prev) => {
        if (prev >= 99.99) return 99.9;
        return prev + 0.001;
      });
    }, 5000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 hidden lg:block">
      <div className="bg-bb-charcoal/95 backdrop-blur-sm border-2 border-bb-gray p-4 shadow-bb-glow">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-bb-green" />
          <span className="font-mono text-xs text-bb-green uppercase tracking-widest">
            System Status
          </span>
        </div>

        {/* Status Grid */}
        <div className="space-y-2">
          {/* Current Section */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-bb-muted">SECTION</span>
            <span className="font-mono text-xs text-bb-white">
              {sectionNames[currentSection] || 'UNKNOWN'}
            </span>
          </div>

          {/* Uptime */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-bb-muted">UPTIME</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-bb-green rounded-full animate-pulse" />
              <span className="font-mono text-xs text-bb-green bb-glow">
                {uptime.toFixed(2)}%
              </span>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-bb-muted">TIME</span>
            <span className="font-mono text-xs text-bb-white">
              {currentTime}
            </span>
          </div>

          {/* Resources */}
          <div className="pt-2 border-t-2 border-bb-gray/50">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1" title="CPU">
                <Cpu className="w-3 h-3 text-bb-muted" />
                <span className="font-mono text-xs text-bb-green">12%</span>
              </div>
              <div className="flex items-center gap-1" title="Memory">
                <Database className="w-3 h-3 text-bb-muted" />
                <span className="font-mono text-xs text-bb-green">45%</span>
              </div>
              <div className="flex items-center gap-1" title="Network">
                <Wifi className="w-3 h-3 text-bb-muted" />
                <span className="font-mono text-xs text-bb-green">ON</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
