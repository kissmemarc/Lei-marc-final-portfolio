import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Wave Layer 1 - Slowest */}
      <svg
        className="absolute bottom-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ width: '200%', height: '70vh', minHeight: '500px', left: '-50%' }}
      >
        <path
          className="animate-wave-slow"
          fill={isDark ? 'url(#gradient1-dark)' : 'url(#gradient1-light)'}
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
        <defs>
          <linearGradient id="gradient1-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#a8c0ff', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#3f2b96', stopOpacity: 0.6 }} />
          </linearGradient>
          <linearGradient id="gradient1-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: '#16213e', stopOpacity: 0.7 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave Layer 2 - Medium Speed */}
      <svg
        className="absolute bottom-0 opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ width: '200%', height: '65vh', minHeight: '480px', left: '-50%' }}
      >
        <path
          className="animate-wave-medium"
          fill={isDark ? 'url(#gradient2-dark)' : 'url(#gradient2-light)'}
          fillOpacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
        <defs>
          <linearGradient id="gradient2-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#667eea', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#764ba2', stopOpacity: 0.5 }} />
          </linearGradient>
          <linearGradient id="gradient2-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0f3460', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#16213e', stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave Layer 3 - Fastest */}
      <svg
        className="absolute bottom-0 opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ width: '200%', height: '60vh', minHeight: '460px', left: '-50%' }}
      >
        <path
          className="animate-wave-fast"
          fill={isDark ? 'url(#gradient3-dark)' : 'url(#gradient3-light)'}
          fillOpacity="1"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,202.7C672,224,768,256,864,250.7C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
              M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,224C672,224,768,192,864,165.3C960,139,1056,117,1152,128C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
            "
          />
        </path>
        <defs>
          <linearGradient id="gradient3-light" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#fbc2eb', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: '#a6c1ee', stopOpacity: 0.4 }} />
          </linearGradient>
          <linearGradient id="gradient3-dark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1a1a2e', stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: '#0f3460', stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Orbs for Extra Depth */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float ${
            isDark ? 'bg-blue-900/20' : 'bg-purple-300/30'
          }`}
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <div
          className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float ${
            isDark ? 'bg-purple-900/20' : 'bg-blue-300/30'
          }`}
          style={{ animationDelay: '2s', animationDuration: '10s' }}
        />
        <div
          className={`absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl animate-float ${
            isDark ? 'bg-indigo-900/20' : 'bg-pink-300/30'
          }`}
          style={{ animationDelay: '4s', animationDuration: '12s' }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
