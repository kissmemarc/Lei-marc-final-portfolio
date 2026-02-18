import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const { isDark } = useTheme();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Web Developer',
    'Frontend Developer',
    'UI/UX Designer',
    'Information Technology',
    'Future Millionaire'
  ];

  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <div className="w-full lg:w-80 sticky top-8 mx-auto">
      {/* Lanyard Clip - Hanging from ceiling */}
      <div className="flex justify-center mb-2 animate-fade-in">
        <div className="relative">
          {/* Clip/Hook */}
          <div className="relative w-12 h-8">
            {/* Clip body */}
            <div className={`absolute inset-0 rounded-t-2xl ${
              isDark ? 'bg-gradient-to-b from-blue-500 to-blue-600' : 'bg-gradient-to-b from-blue-400 to-blue-500'
            }`} style={{
              boxShadow: isDark 
                ? 'inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.3)'
                : 'inset 2px 2px 4px rgba(255,255,255,0.8), inset -2px -2px 4px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.2)'
            }}>
              {/* Clip hole */}
              <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`} style={{
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'
              }}></div>
            </div>
          </div>
          
          {/* Lanyard strap */}
          <div className={`w-3 h-3 mx-auto ${
            isDark ? 'bg-gradient-to-b from-gray-300 to-gray-400' : 'bg-gradient-to-b from-gray-200 to-gray-300'
          }`} style={{
            boxShadow: '2px 0 3px rgba(0,0,0,0.2), -2px 0 3px rgba(0,0,0,0.2)'
          }}></div>
        </div>
      </div>

      {/* ID Card - Modern Design with Wave Decorations and Wobble Animation */}
      <aside className={`w-full rounded-3xl overflow-hidden transition-all duration-500 animate-wobble relative ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`} style={{
        maxWidth: '320px',
        margin: '0 auto',
        transformOrigin: 'top center',
        boxShadow: isDark 
          ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
          : '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)'
      }}>
        {/* Top Wave Decoration */}
        <div className="relative h-32 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 128" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M0,0 L320,0 L320,96 Q240,128 160,96 T0,96 Z" fill="url(#waveGradient)" />
            <path d="M0,20 L320,20 L320,110 Q240,140 160,110 T0,110 Z" fill="url(#waveGradient)" opacity="0.5" />
          </svg>
        </div>

        {/* Profile Photo - Overlapping the wave */}
        <div className="relative -mt-20 flex justify-center animate-smooth-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="relative">
            <div className={`w-36 h-36 rounded-full overflow-hidden border-4 ${
              isDark ? 'border-gray-900' : 'border-white'
            }`} style={{
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
              <img
                src={isDark ? "/profile2-light.png" : "/profile2-light.png"}
                alt="Profile Photo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/144/4a5568/ffffff?text=Photo";
                }}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 pb-6 pt-4">
          {/* Name */}
          <div className="text-center mb-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h2 className={`text-xl font-bold mb-1 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              LEI MARC L. KADUSALE
            </h2>
            
            {/* Typing Animation Title */}
            <div className="relative h-8 flex items-center justify-center">
              <span className={`text-sm font-medium tracking-wide ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {displayedText.toUpperCase()}
                <span className="animate-pulse text-blue-500 ml-0.5">|</span>
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <FaEnvelope className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <a href="mailto:leimarckadusale781@gmail.com" className={`text-xs break-all transition-colors ${
                  isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>
                  leimarckadusale781@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <FaPhone className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div className="flex-1">
                <a href="tel:09298495615" className={`text-xs transition-colors ${
                  isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}>
                  09298495615
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDark ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <FaMapMarkerAlt className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </div>
              <div className="flex-1">
                <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Cavite, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                 isDark ? 'bg-gray-800 hover:bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'
               }`}>
              <FaLinkedin className={`text-xl ${isDark ? 'text-gray-400 hover:text-white' : 'text-blue-600 hover:text-white'}`} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                 isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-800'
               }`}>
              <FaGithub className={`text-xl ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-white'}`} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                 isDark ? 'bg-gray-800 hover:bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'
               }`}>
              <FaGoogle className={`text-xl ${isDark ? 'text-gray-400 hover:text-white' : 'text-blue-600 hover:text-white'}`} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${
                 isDark ? 'bg-gray-800 hover:bg-blue-500' : 'bg-gray-100 hover:bg-blue-500'
               }`}>
              <FaTwitter className={`text-xl ${isDark ? 'text-gray-400 hover:text-white' : 'text-blue-500 hover:text-white'}`} />
            </a>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="relative h-24 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 96" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M0,32 Q80,0 160,32 T320,32 L320,96 L0,96 Z" fill="url(#waveGradientBottom)" />
            <path d="M0,48 Q80,20 160,48 T320,48 L320,96 L0,96 Z" fill="url(#waveGradientBottom)" opacity="0.5" />
          </svg>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
