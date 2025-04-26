import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.02]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                Nahid Hasan
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Full Stack Developer & Competitive Programmer
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              I build modern web applications with cutting-edge technologies
              and solve complex algorithmic problems.
            </p>
            
            <div className="mt-8 flex space-x-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              <Image
                src="https://placehold.co/800x1000/4F46E5/FFFFFF/png?text=Developer"
                alt="Developer"
                fill
                className="object-contain rounded-lg transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}