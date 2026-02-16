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
    'QA Tester',
    'Information Technology',
    'Future Millionaire'
  ];

  useEffect(() => {
    let timeout;
    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting && displayedText === currentTitle) {
      // Wait before starting to delete
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Move to next title
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else if (isDeleting) {
      // Delete character
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length - 1));
      }, 50);
    } else {
      // Type character
      timeout = setTimeout(() => {
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <aside className={`w-full lg:w-80 rounded-3xl p-8 sticky top-8 transition-all duration-500 ${
      isDark ? 'neu-card-dark' : 'neu-card'
    }`}>
      <div className="flex flex-col items-center">
        {/* Profile Image with smooth fade-in and neumorphic styling */}
        <div className="relative mb-6 animate-smooth-fade-in group" style={{ animationDelay: '200ms' }}>
          <div className={`relative w-40 h-40 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 ${
            isDark ? 'neu-raised-dark' : 'neu-raised'
          }`}>
            <img
              src={isDark ? "/profile2-light.png" : "/profile2-light.png"}
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-500"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/160x160/4a5568/ffffff?text=Your+Photo";
              }}
            />
          </div>
          <div className={`absolute bottom-3 right-3 w-6 h-6 bg-green-500 rounded-full border-4 animate-pulse ${
            isDark ? 'border-[#1a1a1a] neu-raised-dark' : 'border-[#e0e5ec] neu-raised'
          }`} style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)' }}></div>
        </div>

        {/* Name and Title with enhanced typography */}
        <div className="animate-fade-in-up text-center" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-4">
            Lei Marc L. Kadusale
          </h2>
          
          {/* Typing Animation Title with Neumorphic style */}
          <div className="relative h-10 flex items-center justify-center min-w-[200px]">
            <span className={`px-5 py-2.5 rounded-xl text-sm font-medium inline-block transition-all duration-300 ${
              isDark ? 'neu-pressed-dark text-gray-300' : 'neu-pressed text-gray-700'
            }`}>
              {displayedText}
              <span className="animate-pulse text-primary ml-0.5">|</span>
            </span>
          </div>
        </div>

        {/* Divider with neumorphic style */}
        <div className={`w-full h-1 rounded-full my-8 ${
          isDark ? 'neu-pressed-dark' : 'neu-pressed'
        }`}></div>

        {/* Contact Info with neumorphic cards */}
        <div className="w-full space-y-3">
          <div className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 animate-fade-in-up ${
            isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'
          }`} style={{ animationDelay: '500ms' }}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-300 ${
              isDark ? 'neu-pressed-dark' : 'neu-pressed'
            }`}>
              <FaEnvelope className="text-primary text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 font-medium">Email</p>
              <a href="mailto:leimarc@example.com" className="text-sm text-gray-900 dark:text-white hover:text-primary break-all transition-colors font-medium">
                leimarckadusale781@gmail.com
              </a>
            </div>
          </div>

          <div className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 animate-fade-in-up ${
            isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'
          }`} style={{ animationDelay: '600ms' }}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-300 ${
              isDark ? 'neu-pressed-dark' : 'neu-pressed'
            }`}>
              <FaPhone className="text-primary text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 font-medium">Phone</p>
              <a href="tel:+1234567890" className="text-sm text-gray-900 dark:text-white hover:text-primary transition-colors font-medium">
                0929 849 5615
              </a>
            </div>
          </div>

          <div className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 animate-fade-in-up ${
            isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'
          }`} style={{ animationDelay: '700ms' }}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-300 ${
              isDark ? 'neu-pressed-dark' : 'neu-pressed'
            }`}>
              <FaMapMarkerAlt className="text-primary text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1 font-medium">Location</p>
              <p className="text-sm text-gray-900 dark:text-white font-medium">Cavite City, Philippines</p>
            </div>
          </div>
        </div>

        {/* Social Links with neumorphic buttons */}
        <div className="flex gap-3 mt-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className={`w-12 h-12 flex items-center justify-center rounded-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary ${
               isDark ? 'neu-button-dark' : 'neu-button'
             }`}>
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className={`w-12 h-12 flex items-center justify-center rounded-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary ${
               isDark ? 'neu-button-dark' : 'neu-button'
             }`}>
            <FaGithub className="text-xl" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer"
             className={`w-12 h-12 flex items-center justify-center rounded-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary ${
               isDark ? 'neu-button-dark' : 'neu-button'
             }`}>
            <FaGoogle className="text-xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className={`w-12 h-12 flex items-center justify-center rounded-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary ${
               isDark ? 'neu-button-dark' : 'neu-button'
             }`}>
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
