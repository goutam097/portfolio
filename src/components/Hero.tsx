import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 animate-slide-down">
            <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent animate-slide-up">
            Hi, I'm Goutam Singh
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 animate-slide-up animation-delay-200">
            Full Stack Developer & UI/UX Enthusiast
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            I craft beautiful, functional, and user-friendly web experiences.
            Passionate about clean code and elegant design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center animate-slide-up animation-delay-800">
            <a href="https://github.com/goutam097" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/goutamsingh97" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="goutamsingh313@gmail.com"
               className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
