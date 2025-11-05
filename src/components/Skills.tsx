import { Code2, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 95 }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'Authentication', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Database',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'Supabase', level: 90 },
        { name: 'Redis', level: 75 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Others',
      skills: [
        { name: 'Git / GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'AWS / Vercel', level: 85 }
      ]
    }
  ];

  const technologies = [
    { name: 'React', icon: Layout },
    { name: 'Node.js', icon: Server },
    { name: 'TypeScript', icon: Code2 },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Tailwind', icon: Smartphone },
    { name: 'Git', icon: Wrench }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon size={20} className="text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
