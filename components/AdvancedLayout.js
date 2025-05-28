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

const AdvancedLayout = ({ 
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

      <div className="min-h-screen bg-gradient-to-br from-soft-beige/20 via-white to-soft-beige/20">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-elegant border-b border-warm-taupe/20' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-qatar-maroon to-gold-accent rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                  JF
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-serif font-bold gradient-text-qatar">
                    Jaber Farooqi
                  </div>
                  <div className="text-xs text-charcoal font-medium">
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
                        ? 'bg-qatar-maroon text-white shadow-elegant'
                        : 'text-midnight-navy hover:bg-soft-beige/50'
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                    
                    {/* Hover tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-midnight-navy text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
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
                      className="p-2 text-charcoal hover:text-qatar-maroon transition-colors rounded-lg hover:bg-soft-beige/50"
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
                  className="lg:hidden p-2 rounded-lg text-qatar-maroon hover:bg-soft-beige/50 transition-colors"
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
            <div className="bg-white border-t border-warm-taupe/20 shadow-elegant">
              <div className="px-4 py-6 space-y-4">
                {/* Navigation Links */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                      router.pathname === item.href
                        ? 'bg-qatar-maroon text-white'
                        : 'text-midnight-navy hover:bg-soft-beige/50'
                    }`}
                    onClick={closeMenu}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <div>
                        <div>{item.name}</div>
                        <div className={`text-xs ${
                          router.pathname === item.href ? 'text-white/70' : 'text-charcoal'
                        }`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <ExternalLink size={16} className="opacity-50" />
                  </Link>
                ))}
                
                {/* Social Links - Mobile */}
                <div className="pt-6 border-t border-warm-taupe/20">
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex flex-col items-center p-3 text-charcoal hover:text-qatar-maroon transition-colors rounded-lg hover:bg-soft-beige/50"
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
                <div className="pt-6 border-t border-warm-taupe/20">
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-xs text-charcoal">
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
        <main className="pt-20">
          {children}
        </main>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-qatar-maroon text-white rounded-full shadow-elegant-lg transition-all duration-300 transform hover:scale-110 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>

        {/* Footer */}
        <footer className="bg-white border-t border-warm-taupe/20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-qatar-maroon to-gold-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    JF
                  </div>
                  <div>
                    <div className="text-xl font-serif font-bold gradient-text-qatar">
                      Jaber Farooqi
                    </div>
                    <div className="text-xs text-charcoal font-medium">
                      Cybersecurity Professional
                    </div>
                  </div>
                </div>
                <p className="text-sm text-charcoal">
                  Protecting digital assets and securing the future through innovative cybersecurity solutions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-serif font-bold text-qatar-maroon mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center text-sm text-charcoal hover:text-qatar-maroon transition-colors"
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-serif font-bold text-qatar-maroon mb-4">Contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:Jaberfarooqi@hotmail.com"
                    className="flex items-center text-sm text-charcoal hover:text-qatar-maroon transition-colors"
                  >
                    <Mail size={16} className="mr-2" />
                    Jaberfarooqi@hotmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/jaberfarooqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-charcoal hover:text-qatar-maroon transition-colors"
                  >
                    <Linkedin size={16} className="mr-2" />
                    linkedin.com/in/jaberfarooqi
                  </a>
                  <a
                    href="https://github.com/jaberfarooqi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-charcoal hover:text-qatar-maroon transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    github.com/jaberfarooqi
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-warm-taupe/20 text-center text-sm text-charcoal">
              <p>© {new Date().getFullYear()} Jaber Farooqi. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdvancedLayout; 