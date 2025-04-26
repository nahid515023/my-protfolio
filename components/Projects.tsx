import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "MyTutor Platform",
    description: "A comprehensive tutoring platform with dual authentication system for teachers and students. Features include role-based access control, reusable form components with validation, secure password handling, and dynamic panel switching functionality. Built with modern web technologies and best practices in secure authentication.",
    image: "https://placehold.co/800x600/3B82F6/FFFFFF/png?text=MyTutor+Platform&font=raleway",
    technologies: ["Next.js 14", "TypeScript", "JWT", "Tailwind CSS", "React", "Node.js"],
    category: ["fullstack", "frontend"],
    githubUrl: "https://github.com/nahid515023/mytutor-platform",
    liveUrl: "#"
  },
  {
    title: "GigLink",
    description: "A full-stack web platform connecting job posters with skilled individuals and shops for local part-time work. Implemented using MVC architecture with secure user authentication, job posting/bidding, and offline transaction support. Features responsive UI with EJS templates and efficient file handling.",
    image: "https://placehold.co/800x600/10B981/FFFFFF/png?text=GigLink&font=raleway",
    technologies: ["Node.js", "Express.js", "MongoDB", "EJS", "Multer", "Mongoose", "Bootstrap"],
    category: ["fullstack", "backend"],
    githubUrl: "https://github.com/nahid515023/GigLink",
    liveUrl: "#"
  },
  {
    title: "JnU Counseling Center App",
    description: "A comprehensive mental health platform for Jagannath University students. Built with React Native for cross-platform support and Node.js backend with CI/CD integration. Features secure appointment scheduling, counselor management, and real-time notifications using modern development practices.",
    image: "https://placehold.co/800x600/8B5CF6/FFFFFF/png?text=JnU+Counseling&font=raleway",
    technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Railway", "REST API"],
    category: ["mobile", "fullstack", "backend"],
    githubUrl: "https://github.com/nahid515023/JnU-Health-Care-Frontend",
    liveUrl: "https://github.com/nahid515023/JnU-Health-Care-backend"
  },
  {
    title: "E-commerce App Backend",
    description: "A scalable RESTful API for an e-commerce platform built with TypeScript and Prisma ORM. Implements comprehensive user authentication, role-based authorization, and robust error handling. Features include secure product management, cart operations, and order processing with data validation using Zod.",
    image: "https://placehold.co/800x600/EC4899/FFFFFF/png?text=E-commerce+Backend&font=raleway",
    technologies: ["Node.js", "Express.js", "TypeScript", "Prisma", "MySQL", "Zod", "REST API"],
    category: ["backend"],
    githubUrl: "https://github.com/nahid515023/Ecommerce-App-Backend",
    liveUrl: "#"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' }
  ];

  useEffect(() => {
    // Smooth scroll setup
    const smoothScroll = (e: any) => {
      if (e.target.hash) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      const filtered = activeTab === 'all'
        ? projects
        : projects.filter(project => project.category.includes(activeTab));
      setFilteredProjects(filtered);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={itemVariants}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 sm:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Explore my latest projects showcasing my technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="inline-flex p-1 space-x-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5 mr-2" />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
