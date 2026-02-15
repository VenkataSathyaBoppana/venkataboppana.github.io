interface ScrollProgressProps {
  progress: number;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-bb-gray/50 z-50">
        <div
          className="h-full bg-bb-green transition-all duration-100 ease-out"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 15px rgba(0, 255, 65, 0.8)',
          }}
        />
      </div>

      {/* Side Progress Indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
        <div className="relative h-32 w-1 bg-bb-gray/50 overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 bg-bb-green transition-all duration-100 ease-out"
            style={{
              height: `${progress}%`,
              boxShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
            }}
          />
        </div>
        
        {/* Progress Percentage */}
        <div className="absolute -right-1 top-0 -translate-y-full pb-2">
          <span className="font-mono text-xs text-bb-green bb-glow">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </>
  );
}
