import { FaCode, FaLaptop, FaMedal, FaTrophy, FaHackerrank } from 'react-icons/fa';

export default function Experience() {
  const competitions = [
    {
      title: "AUST IUPC 2025",
      description: "Team TrioOfUttaranchal_JnU — Rank 72/130 teams",
      icon: <FaTrophy className="w-6 h-6" />
    },
    {
      title: "UIU IUPC 2025",
      description: "Team TrioOfUttaranchal_JnU — Rank 65/160 teams",
      icon: <FaTrophy className="w-6 h-6" />
    },
    {
      title: "ICPC Onsite 2024",
      description: "Team TrioOfUttaranchal_JnU — Rank 192/309 teams",
      icon: <FaTrophy className="w-6 h-6" />
    },
    {
      title: "IEEE Xtreme 2024",
      description: "Team JnUxDefenders — Country Rank: 5/74 — Global Rank: 806/10079",
      icon: <FaHackerrank className="w-6 h-6" />
    },
    {
      title: "HackTheVerse Blockchain Hackathon 2023",
      description: "Shortlisted among 60+ teams. Designed and developed ERC-20 and ERC-721 native token contracts.",
      icon: <FaCode className="w-6 h-6" />
    },
    {
      title: "MIST Innovation Club – INVENTIOUS 4.1",
      description: "Participated in the national \"Project Showcase\" event at MIST, presenting innovative ideas. (March 7-8, 2025)",
      icon: <FaLaptop className="w-6 h-6" />
    }
  ];

  const codingProfiles = [
    {
      platform: "Codeforces",
      rank: "Specialist",
      details: "Max Rating: 1401, 1,350+ problems solved",
      link: "https://codeforces.com/profile/nahid_515023",
      icon: <FaMedal className="w-8 h-8 text-blue-500" />,
      color: "blue"
    },
    {
      platform: "CodeChef",
      rank: "3 Star Coder",
      details: "Max Rating: 1617",
      link: "https://www.codechef.com/users/nahid_515023",
      icon: <FaMedal className="w-8 h-8 text-orange-500" />,
      color: "orange"
    },
    {
      platform: "LeetCode",
      rank: "Problem Solver",
      details: "Solved 150+ problems",
      link: "https://leetcode.com/nahid515023/",
      icon: <FaMedal className="w-8 h-8 text-yellow-500" />,
      color: "yellow"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 sm:text-5xl mb-4">
            Experience & Achievements
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Competitions, hackathons, and programming profiles that showcase my journey
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <FaTrophy className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
              Competitions & Hackathons
            </h3>
            <div className="space-y-6">
              {competitions.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <FaCode className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
              Competitive Programming
            </h3>
            <div className="space-y-6">
              {codingProfiles.map((profile, index) => (
                <div 
                  key={index} 
                  className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      {profile.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {profile.platform}
                      </h4>
                      <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                        {profile.rank}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{profile.details}</p>
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    View Profile
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}