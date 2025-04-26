import { FaLaptopCode, FaServer, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

export default function Skills() {
  const skills = {
    languages: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"],
    frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "EJS"],
    backend: ["Node.js", "Express.js", "REST API Design", "Authentication Systems"],
    databases: ["MySQL", "MongoDB", "Mongoose", "Prisma ORM"],
    tools: ["Docker", "Git", "Linux", "Redis", "Postman", "Multer", "JWT", "Zod"],
    methodologies: ["Agile", "OOP", "Functional Programming", "MVC Architecture", "CI/CD"]
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 sm:text-5xl">
            Skills & Technologies
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            My technical toolkit that I've developed through projects and competitions
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-indigo-600 dark:text-indigo-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaLaptopCode size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-pink-600 dark:text-pink-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaLaptopCode size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Frontend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-green-600 dark:text-green-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaServer size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-blue-600 dark:text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaDatabase size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Databases & ORMs</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-purple-600 dark:text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaTools size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-orange-600 dark:text-orange-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
              <FaBrain size={36} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Methodologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.methodologies.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-lg text-sm font-medium transform hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
