import { useState, useEffect } from 'react';
import { FaCalendar, FaClock, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Blog';

  const blogPosts = [
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Learn best practices for building large-scale React applications with proper architecture and state management.',
      date: 'Jan 15, 2024',
      readTime: '5 min read',
      category: 'React',
      image: 'https://via.placeholder.com/400x250/4a5568/ffffff?text=React',
      link: '#',
    },
    {
      title: 'Mastering Tailwind CSS',
      excerpt: 'A comprehensive guide to using Tailwind CSS effectively in your projects with tips and tricks.',
      date: 'Jan 10, 2024',
      readTime: '7 min read',
      category: 'CSS',
      image: 'https://via.placeholder.com/400x250/4a5568/ffffff?text=Tailwind',
      link: '#',
    },
    {
      title: 'Node.js Performance Optimization',
      excerpt: 'Discover techniques to optimize your Node.js applications for better performance and scalability.',
      date: 'Jan 5, 2024',
      readTime: '6 min read',
      category: 'Node.js',
      image: 'https://via.placeholder.com/400x250/4a5568/ffffff?text=Node.js',
      link: '#',
    },
    {
      title: 'Modern JavaScript Features',
      excerpt: 'Explore the latest JavaScript features and how to use them in your everyday coding.',
      date: 'Dec 28, 2023',
      readTime: '4 min read',
      category: 'JavaScript',
      image: 'https://via.placeholder.com/400x250/4a5568/ffffff?text=JavaScript',
      link: '#',
    },
    {
      title: 'Docker for Developers',
      excerpt: 'A practical guide to using Docker in your development workflow for better consistency.',
      date: 'Dec 20, 2023',
      readTime: '8 min read',
      category: 'DevOps',
      image: 'https://via.placeholder.com/400x250/4a5568/ffffff?text=Docker',
      link: '#',
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Learn how to write better TypeScript code with these proven best practices and patterns.',
      date: 'Dec 15, 2023',
      readTime: '6 min read',
      category: 'TypeScript',
      image: 'https://via.placeholder.com/400x250/4a5568/ffffff?text=TypeScript',
      link: '#',
    },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="group bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <FaCalendar className="text-primary" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-primary" />
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              
              <a
                href={post.link}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Read More
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
