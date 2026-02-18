import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Wave Layer 1 - Slowest - Using CSS-only animation */}
      <div
        className="absolute bottom-0 left-0 w-full h-screen opacity-20"
        style={{ minHeight: '100vh' }}
      >
        <div
          className="absolute inset-0 animate-wave-1"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.7) 40%, transparent 100%)'
              : 'radial-gradient(ellipse 50% 80% at 50% 100%, rgba(168, 192, 255, 0.8) 0%, rgba(63, 43, 150, 0.6) 40%, transparent 100%)',
            transform: 'translateZ(0)', // Force GPU acceleration
            willChange: 'transform',
          }}
        />
      </div>

      {/* Wave Layer 2 - Medium Speed */}
      <div
        className="absolute bottom-0 left-0 w-full h-[95vh] opacity-15"
        style={{ minHeight: '95vh' }}
      >
        <div
          className="absolute inset-0 animate-wave-2"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 45% 75% at 50% 100%, rgba(15, 52, 96, 0.8) 0%, rgba(22, 33, 62, 0.6) 40%, transparent 100%)'
              : 'radial-gradient(ellipse 45% 75% at 50% 100%, rgba(102, 126, 234, 0.7) 0%, rgba(118, 75, 162, 0.5) 40%, transparent 100%)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Wave Layer 3 - Fastest */}
      <div
        className="absolute bottom-0 left-0 w-full h-[90vh] opacity-10"
        style={{ minHeight: '90vh' }}
      >
        <div
          className="absolute inset-0 animate-wave-3"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 40% 70% at 50% 100%, rgba(26, 26, 46, 0.7) 0%, rgba(15, 52, 96, 0.5) 40%, transparent 100%)'
              : 'radial-gradient(ellipse 40% 70% at 50% 100%, rgba(251, 194, 235, 0.6) 0%, rgba(166, 193, 238, 0.4) 40%, transparent 100%)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Floating Orbs for Extra Depth - Optimized */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full animate-float-optimized ${
            isDark ? 'bg-blue-900/20' : 'bg-purple-300/30'
          }`}
          style={{
            animationDelay: '0s',
            animationDuration: '8s',
            filter: 'blur(60px)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
        <div
          className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full animate-float-optimized ${
            isDark ? 'bg-purple-900/20' : 'bg-blue-300/30'
          }`}
          style={{
            animationDelay: '2s',
            animationDuration: '10s',
            filter: 'blur(60px)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
        <div
          className={`absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full animate-float-optimized ${
            isDark ? 'bg-indigo-900/20' : 'bg-pink-300/30'
          }`}
          style={{
            animationDelay: '4s',
            animationDuration: '12s',
            filter: 'blur(60px)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
