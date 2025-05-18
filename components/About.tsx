import Image from 'next/image';
import profile from '../public/images/profile.jpg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-[0.05]" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-indigo-400/5 to-purple-400/5 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20" />
        
        {/* Animated circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 sm:text-5xl animate-gradient">
            About Me
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300"
          >
            <p>Computer Science and Engineering student with a passion for building web applications and solving complex problems</p>
          </motion.div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md mx-auto md:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform rotate-6 scale-105 opacity-20 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-102 transition-all duration-300 aspect-[4/5] group">
              <Image
                src={profile}
                alt="Profile"
                width={500}
                height={625}
                className="rounded-2xl object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                I'm a passionate Computer Science student at Jagannath University, focusing on full-stack development and competitive programming. With a strong foundation in both frontend and backend technologies, I specialize in building secure, scalable web applications.
              </p>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8"
            >
              My technical expertise spans modern web technologies including <span className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">React.js</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">Next.js</span>, <span className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">Node.js</span>, and <span className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors">TypeScript</span>. I'm proficient with database technologies like MongoDB and MySQL, and I have experience with cloud platforms.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8"
            >
              As a <span className="font-semibold text-indigo-600 dark:text-indigo-400">Codeforces Specialist</span> with over 1,350 problems solved, I've honed my problem-solving skills through algorithmic competitions. My participation in prestigious contests like ICPC and IEEE Xtreme has further strengthened my analytical and coding abilities.
            </motion.p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="group p-6 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-indigo-500 mr-3 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">B.Sc. in Computer Science and Engineering</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Jagannath University</p>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">2020 - 2025 (Expected)</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="group p-6 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-indigo-500 mr-3 group-hover:text-indigo-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Location & Availability</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Dhaka, Bangladesh</p>
                <div className="mt-3 flex flex-col space-y-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <span className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for Work
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></span>
                    Full-time Opportunities
                  </span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/nahid36/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors duration-200 group"
                >
                  <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}