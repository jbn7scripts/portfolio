import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  FileText, 
  Briefcase, 
  MessageCircle, 
  Home,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
  Shield,
  Target,
  Award,
  Globe
} from 'lucide-react';

const Layout = ({ 
  children, 
  title = "Jaber Farooqi - Cybersecurity Professional", 
  description = "Experienced Cybersecurity Analyst and Penetration Testing Specialist based in London, UK. Expertise in network security, AI-powered threat detection, and enterprise security solutions."
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/', icon: <Home size={18} />, description: 'Welcome & Overview' },
    { name: 'About', href: '/about', icon: <User size={18} />, description: 'My Journey & Values' },
    { name: 'Resume', href: '/resume', icon: <FileText size={18} />, description: 'Experience & Skills' },
    { name: 'Projects', href: '/projects', icon: <Briefcase size={18} />, description: 'Security Solutions' },
    { name: 'Contact', href: '/contact', icon: <MessageCircle size={18} />, description: 'Get In Touch' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jaberfarooqi',
      icon: <Github size={20} />,
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jaberfarooqi',
      icon: <Linkedin size={20} />,
      description: 'Professional network'
    },
    {
      name: 'Email',
      href: 'mailto:Jaberfarooqi@hotmail.com',
      icon: <Mail size={20} />,
      description: 'Direct contact'
    }
  ];

  const achievements = [
    { icon: <Shield size={16} />, text: "99% Threat Detection Rate" },
    { icon: <Target size={16} />, text: "200+ Vulnerabilities Found" },
    { icon: <Award size={16} />, text: "15+ Certifications" },
    { icon: <Globe size={16} />, text: "Global Security Experience" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jaber Farooqi" />
        <meta name="keywords" content="cybersecurity, penetration testing, network security, infosec, security consultant, London, Qatar" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jaberfarooqi.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://jaberfarooqi.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://jaberfarooqi.com" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://jaberfarooqi.com/og-image.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://jaberfarooqi.com${router.asPath}`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-qatar-beige/20 via-white to-qatar-beige/20">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-gray-100' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-qatar-navy to-qatar-maroon rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                  JF
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-serif font-bold gradient-text-qatar">
                    Jaber Farooqi
                  </div>
                  <div className="text-xs text-qatar-gray font-medium">
                    Cybersecurity Professional
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      router.pathname === item.href
                        ? 'bg-qatar-navy text-white shadow-elegant'
                        : 'text-qatar-navy hover:bg-qatar-beige/50'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                    
                    {/* Hover tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-qatar-dark text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Social Links & Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                {/* Social Links - Desktop */}
                <div className="hidden md:flex items-center space-x-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="p-2 text-qatar-gray hover:text-qatar-navy transition-colors rounded-lg hover:bg-qatar-beige/50"
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      title={link.description}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-lg text-qatar-navy hover:bg-qatar-beige/50 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="bg-white border-t border-gray-100 shadow-elegant">
              <div className="px-4 py-6 space-y-4">
                {/* Navigation Links */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      router.pathname === item.href
                        ? 'bg-qatar-navy text-white'
                        : 'text-qatar-navy hover:bg-qatar-beige/50'
                    }`}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <div>
                        <div>{item.name}</div>
                        <div className={`text-xs ${
                          router.pathname === item.href ? 'text-white/70' : 'text-qatar-gray'
                        }`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={16} className="opacity-50" />
                  </Link>
                ))}
                
                {/* Social Links - Mobile */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex flex-col items-center p-3 text-qatar-gray hover:text-qatar-navy transition-colors rounded-lg hover:bg-qatar-beige/50"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        onClick={closeMenu}
                      >
                        {link.icon}
                        <span className="text-xs mt-1">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Stats - Mobile */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-xs text-qatar-gray">
                        <span className="text-qatar-maroon mr-2">{achievement.icon}</span>
                        {achievement.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-qatar-navy text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">
                    JF
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold">Jaber Farooqi</h3>
                    <p className="text-white/70 text-sm">Cybersecurity Professional</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-6">
                  Passionate cybersecurity professional specializing in penetration testing, 
                  network security, and innovative threat detection solutions. Based in London 
                  with global experience in protecting digital infrastructure.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-white/70">
                    <MapPin className="w-4 h-4 mr-1" />
                    London, UK
                  </div>
                  <div className="flex items-center text-sm text-white/70">
                    <Mail className="w-4 h-4 mr-1" />
                    Available 24/7
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-serif font-semibold mb-6">Navigation</h4>
                <ul className="space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors text-sm flex items-center group"
                      >
                        <span className="mr-2 group-hover:translate-x-1 transition-transform duration-200">
                          {item.icon}
                        </span>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-serif font-semibold mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <a
                    href="mailto:Jaberfarooqi@hotmail.com"
                    className="block text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 text-qatar-maroon" />
                      <div>
                        <div>Email</div>
                        <div className="text-xs text-white/50">Primary contact</div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="tel:+447745690989"
                    className="block text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 text-qatar-maroon" />
                      <div>
                        <div>Phone</div>
                        <div className="text-xs text-white/50">Urgent matters</div>
                      </div>
                    </div>
                  </a>
                  
                  {/* Social Links */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex space-x-4">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          title={link.description}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-white/60 text-sm mb-4 md:mb-0">
                  © 2025 Jaber Farooqi. All rights reserved. | Built with security in mind.
                </div>
                <div className="flex items-center space-x-6 text-sm text-white/60">
                  <span>Last updated: January 2025</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Available for projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-qatar-navy text-white rounded-full shadow-elegant-lg hover:bg-qatar-maroon transition-all duration-300 z-40 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        {/* Loading Overlay */}
        <div className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 ${
          router.isFallback ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-qatar-navy to-qatar-maroon rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 animate-pulse">
              JF
            </div>
            <div className="text-qatar-navy font-medium">Loading...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
