import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TechStackCarousel from './components/TechStackCarousel';
import AnimatedBackground from './components/AnimatedBackground';
import About from './sections/About';
import Resume from './sections/Resume';
import Portfolio from './sections/Portfolio';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

function AppContent() {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('About');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen transition-all duration-500 relative" style={{
        background: isDark 
          ? 'linear-gradient(145deg, #0a0a0b, #1a1a1a)' 
          : 'linear-gradient(145deg, #e0e5ec, #f5f7fa)'
      }}>
        {/* Animated Wave Background */}
        <AnimatedBackground />

        {/* Background Pattern Overlay */}
        <div className="fixed inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 z-20">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Sidebar with enhanced animation */}
            <div 
              className={`lg:sticky lg:top-8 lg:self-start transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <Sidebar />
            </div>

            {/* Main Content */}
            <div 
              className={`flex-1 transition-all duration-1000 ease-out delay-150 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
              
              {/* Tech Stack Carousel with enhanced styling */}
              <div 
                className="animate-fade-in-up mb-6" 
                style={{ animationDelay: '400ms' }}
              >
                <TechStackCarousel />
              </div>

              {/* Content Section with neumorphic card design */}
              <div 
                className={`rounded-3xl p-6 sm:p-8 lg:p-12 animate-fade-in-up transition-all duration-500 ${
                  isDark ? 'neu-card-dark' : 'neu-card'
                }`}
                style={{ animationDelay: '600ms' }}
              >
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
