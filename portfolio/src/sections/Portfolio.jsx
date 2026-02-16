import { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Portfolio';

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x300/4a5568/ffffff?text=E-Commerce',
      description: 'Full-stack e-commerce platform with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      category: 'Mobile Apps',
      image: 'https://via.placeholder.com/400x300/4a5568/ffffff?text=Task+Manager',
      description: 'Cross-platform task management application',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x300/4a5568/ffffff?text=Portfolio',
      description: 'Modern portfolio website with dark mode',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather App',
      category: 'Mobile Apps',
      image: 'https://via.placeholder.com/400x300/4a5568/ffffff?text=Weather+App',
      description: 'Real-time weather application with location services',
      technologies: ['React Native', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x300/4a5568/ffffff?text=Dashboard',
      description: 'Analytics dashboard for social media metrics',
      technologies: ['React', 'Chart.js', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile Apps',
      image: 'https://via.placeholder.com/400x300/4a5568/ffffff?text=Fitness',
      description: 'Fitness tracking app with workout plans',
      technologies: ['React Native', 'SQLite', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Web Development', 'Mobile Apps'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Typing animation effect
  useEffect(() => {
    setDisplayedText(''); // Reset text
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div>
      {/* Header with typing animation */}
      <div className="animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {displayedText}
          <span className="animate-pulse text-primary">|</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-yellow-400 rounded-full mb-8"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              activeFilter === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-card'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-primary hover:text-white"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="p-6">
              <span className="text-xs text-primary font-medium">{project.category}</span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2 mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
