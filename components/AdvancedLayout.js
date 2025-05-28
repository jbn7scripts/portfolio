import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon, Shield, Zap, Terminal, Award } from 'lucide-react';
import MatrixRain from './MatrixRain';
import ParticleField from './ParticleField';

const AdvancedLayout = ({ children, title = "Jaber Ali Farooqi - Cybersecurity Expert", description = "Advanced Cybersecurity Analyst & Penetration Testing Specialist" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', icon: <Terminal size={16} /> },
    { name: 'About', href: '/about', icon: <Shield size={16} /> },
    { name: 'Resume', href: '/resume', icon: <Award size={16} /> },
    { name: 'Projects', href: '/projects', icon: <Zap size={16} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        {/* Matrix Background */}
        <MatrixRain />
        
        {/* Particle Field */}
        <ParticleField />
        
        {/* Cyber Grid Background */}
        <div className="fixed inset-0 cyber-background z-0"></div>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/30' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center">
                <span className="font-['Orbitron'] font-bold text-xl md:text-2xl tracking-wide cyber-text glow-text">JAF</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                      router.pathname === item.href
                        ? 'text-cyan-400 bg-cyan-400/10 neon-border'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 neon-border"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-3 rounded-lg font-medium transition-all duration-300 ${
                      router.pathname === item.href
                        ? 'text-cyan-400 bg-cyan-400/10 neon-border'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="relative z-20 pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-20 bg-black/80 backdrop-blur-md border-t border-cyan-500/30">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 font-['Rajdhani']">
                  © 2025 Jaber Ali Farooqi. Secured with Next.js & Advanced Cybersecurity.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/jaberfarooqi"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/jaberfarooqi"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:Jaberfarooqi@hotmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdvancedLayout; 