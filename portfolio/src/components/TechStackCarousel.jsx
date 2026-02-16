import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiTypescript, SiJavascript, SiSupabase, SiNestjs, SiMysql } from 'react-icons/si';

const TechStackCarousel = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const techStack = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [techStack.length]);

  const getVisibleTechs = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(techStack[(currentIndex + i) % techStack.length]);
    }
    return visible;
  };

  return (
    <div className={`relative rounded-2xl p-4 md:p-5 overflow-hidden transition-all duration-500 ${
      isDark ? 'neu-card-dark' : 'neu-card'
    }`}>
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-yellow-400/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
          Tech Stack
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="hidden sm:inline">Auto-rotating</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
        {getVisibleTechs().map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${currentIndex}-${index}`}
              className={`group relative flex flex-col items-center justify-center p-3 md:p-4 rounded-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden ${
                isDark ? 'neu-flat-dark hover:neu-raised-dark' : 'neu-flat hover:neu-raised'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <Icon 
                  className="text-3xl md:text-4xl mb-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                  style={{ color: tech.color }}
                />
              </div>
              <span className="relative text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Enhanced Indicators with neumorphic style */}
      <div className="flex justify-center gap-2">
        {techStack.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-500 hover:scale-125 ${
              index === currentIndex
                ? 'w-8 h-2 bg-gradient-to-r from-primary to-yellow-400 shadow-md shadow-primary/30'
                : `w-2 h-2 ${isDark ? 'neu-raised-dark' : 'neu-raised'}`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;
