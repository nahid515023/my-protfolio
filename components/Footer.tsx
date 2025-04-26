import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://github.com/nahid-hasan-noyon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/md-nahid-hasan-noyon/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:nahid515023@gmail.com" className="text-gray-400 hover:text-white">
              <FaEnvelope size={24} />
            </a>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-center md:text-right text-gray-400">
              &copy; {currentYear} Md Nahid Hasan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}