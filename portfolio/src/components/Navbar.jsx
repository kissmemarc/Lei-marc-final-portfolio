import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  return (
    <nav className={`rounded-3xl px-8 py-5 mb-6 transition-all duration-500 ${
      isDark ? 'neu-card-dark' : 'neu-card'
    }`}>
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <button
              key={item}
              onClick={() => setActiveSection(item)}
              className={`text-base font-semibold transition-all duration-300 relative animate-fade-in-up group ${
                activeSection === item
                  ? 'text-primary scale-110'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
              {activeSection === item && (
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full animate-scale-in shadow-sm shadow-primary/50"></span>
              )}
              {activeSection !== item && (
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden text-2xl transition-all duration-300 hover:scale-110 w-12 h-12 flex items-center justify-center rounded-xl ${
            isDark ? 'neu-button-dark text-gray-300 hover:text-primary' : 'neu-button text-gray-600 hover:text-primary'
          }`}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Theme Toggle with neumorphic styling */}
        <button
          onClick={toggleTheme}
          className={`ml-auto md:ml-0 w-14 h-14 flex items-center justify-center rounded-2xl hover:scale-110 hover:rotate-12 transition-all duration-300 animate-fade-in text-gray-700 dark:text-gray-300 hover:text-primary ${
            isDark ? 'neu-button-dark' : 'neu-button'
          }`}
        >
          {isDark ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Navigation with neumorphic styling */}
      {isMobileMenuOpen && (
        <div className={`md:hidden mt-6 pt-6 rounded-xl animate-fade-in-up ${
          isDark ? 'neu-pressed-dark' : 'neu-pressed'
        }`} style={{ padding: '1px' }}>
          <div className="flex flex-col gap-3 p-4">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-base font-semibold transition-all duration-300 px-4 py-3 rounded-xl animate-slide-in-left ${
                  activeSection === item
                    ? `text-primary ${isDark ? 'neu-pressed-dark' : 'neu-pressed'}`
                    : `text-gray-600 dark:text-gray-400 hover:text-primary ${isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'}`
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
