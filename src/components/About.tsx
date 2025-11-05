import { Code, Palette, Rocket, Users } from 'lucide-react';
import userImage from '../assets/goutam2mb.jpg'

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and user experience'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience building
                modern web applications. I specialize in React, Node.js, and creating seamless
                user experiences that make a difference.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity about how websites work,
                and has evolved into a career I'm truly passionate about. I love turning complex
                problems into simple, beautiful solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/* <div className="text-6xl mb-4">👨‍💻</div> */}
                    {/* <p className="text-gray-600 dark:text-gray-400">Your Photo Here</p> */}
                    <img src={userImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
