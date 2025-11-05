import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/goutam097', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/goutamsingh97', label: 'LinkedIn' },
    // { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:goutamsingh313@gmail.com', label: 'Email' }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Goutam Singh
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gradient-to-br hover:from-blue-600 hover:to-emerald-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Goutam Singh. Made with <Heart size={16} className="text-red-500 fill-current" /> and React
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
