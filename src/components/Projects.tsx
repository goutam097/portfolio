import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration features, and analytics.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Weather API', 'Geolocation', 'CSS'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system for portfolio websites with drag-and-drop builder and SEO optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness tracker with workout plans, progress tracking, and nutrition guidance.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Redux', 'Charts'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
