import Image from 'next/image'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion } from 'framer-motion'
import NahidPic from '../public/images/nahid.jpg'

export default function Hero () {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className='relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden' data-section="hero">
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-[0.08]' />
        <div className='absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30' />
        <div className='absolute top-0 left-0 w-[30rem] h-[30rem] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-15 animate-blob' />
        <div className='absolute top-0 right-0 w-[28rem] h-[28rem] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-15 animate-blob animation-delay-2000' />
        <div className='absolute -bottom-40 left-1/2 w-[35rem] h-[35rem] bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-15 animate-blob animation-delay-4000' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='relative z-10'
          >
            <motion.h1
              className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I&apos;m{' '}
              <span className='relative group inline-block'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 animate-gradient-x'>
                  Nahid Hasan
                </span>
                <span className='absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100' />
              </span>
            </motion.h1>

            <motion.p
              className='mt-6 text-xl text-gray-600 dark:text-gray-300'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer & Competitive Programmer
            </motion.p>

            <motion.p
              className='mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I build modern web applications with cutting-edge technologies and
              solve complex algorithmic problems.
            </motion.p>

            <motion.div
              className='mt-8 flex flex-wrap gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              href='#contact'
              className='relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 overflow-hidden group cursor-pointer'
              >
              <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-xy'></span>
              <span className='relative flex items-center'>
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              </motion.a>
              
              <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              href='#projects'
              className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 cursor-pointer'
              >
              <span className="flex items-center">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              </motion.a>
              
              <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href='/images/Md_Nahid_Hasan_Resume.pdf'
              download
              className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white rounded-lg font-medium shadow-md hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300'
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
              </motion.a>
            </motion.div>

            <motion.div
              className='mt-8 flex space-x-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: FaGithub, href: 'https://github.com/nahid515023' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/nahid36' },
                { icon: FaTwitter, href: 'https://x.com/HasanNahid4288' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 p-2 bg-white/30 dark:bg-gray-800/30 rounded-full shadow-lg backdrop-blur-sm'
                >
                  <social.icon className='w-6 h-6' />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className='relative z-10'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className='relative w-full h-[400px] lg:h-[500px] group perspective-1000'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-lg filter blur-md opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:blur-xl' />
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg filter blur-xl transform -rotate-6 scale-105' />
              
              {/* Code inspired pattern */}
              <div className="absolute inset-y-0 left-0 w-10 h-full flex flex-col justify-between p-2 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <div className="flex flex-col gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1 w-full bg-indigo-400/50 rounded-full" />
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-1 w-8 bg-purple-400/50 rounded-full" />
                  ))}
                </div>
              </div>
              
              {/* Main image */}
              <Image
                src={NahidPic}
                alt='Nahid Hasan'
                width={500}
                height={500}
                className='relative z-10 object-cover w-full h-full rounded-lg shadow-2xl ring-4 ring-white/10 dark:ring-gray-700/20'
                priority
              />
              
              {/* Hover overlay with gradient */}
              <div className='absolute inset-0 z-20 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg' />
              
              {/* Hover badge */}
              <div className="absolute z-30 bottom-4 left-4 py-2 px-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 shadow-lg">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Full Stack Developer</span>
              </div>
            </motion.div>

            <motion.div
              className='absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            <motion.div
              className='absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
