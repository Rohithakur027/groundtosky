import type React from "react"

export const AviationGraphics = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Aviation Pattern */}
      <div className="absolute inset-0 aviation-bg opacity-30" />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 float-element">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/20">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-40 right-20 w-12 h-12 float-element">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary/20">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute bottom-40 left-20 w-20 h-20 float-element">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent/15">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" transform="rotate(45 50 50)" />
        </svg>
      </div>

      {/* Animated Plane */}
      <div className="absolute top-1/3 -left-20 animate-plane-fly">
        <svg width="60" height="40" viewBox="0 0 60 40" className="text-accent/30">
          <path
            d="M10 20 L25 15 L45 10 L50 15 L45 20 L50 25 L45 30 L25 25 L10 20 Z M25 15 L30 5 M25 25 L30 35"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Rotating Compass */}
      <div className="absolute bottom-20 right-10 w-24 h-24 animate-rotate opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M50 10 L55 45 L50 50 L45 45 Z" fill="currentColor" />
          <path d="M90 50 L55 55 L50 50 L55 45 Z" fill="currentColor" />
          <path d="M50 90 L45 55 L50 50 L55 55 Z" fill="currentColor" />
          <path d="M10 50 L45 45 L50 50 L45 55 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Cloud Elements */}
      <div className="absolute top-10 left-1/4 w-32 h-20 float-element opacity-5">
        <svg viewBox="0 0 100 60" className="w-full h-full text-primary">
          <path d="M20 40 Q10 30 20 20 Q30 10 40 20 Q50 10 60 20 Q70 10 80 20 Q90 30 80 40 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="absolute top-32 right-1/3 w-24 h-16 float-element opacity-5">
        <svg viewBox="0 0 100 60" className="w-full h-full text-accent">
          <path d="M15 45 Q5 35 15 25 Q25 15 35 25 Q45 15 55 25 Q65 15 75 25 Q85 35 75 45 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Dotted Flight Path */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="flightPath" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#06b6d4" opacity="0.1" />
            </pattern>
          </defs>
          <path
            d="M0 200 Q200 100 400 150 T800 200"
            fill="none"
            stroke="url(#flightPath)"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Pulsing Radar */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-32 rounded-full border border-accent/10 animate-pulse-glow" />
        <div
          className="absolute inset-4 rounded-full border border-accent/20 animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute inset-8 rounded-full border border-accent/30 animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}

export const InteractiveIcon = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return <div className={`micro-scale transition-all duration-200 ${className}`}>{children}</div>
}

export const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <div className="float-element will-change-transform" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  )
}
