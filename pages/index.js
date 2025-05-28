import AdvancedLayout from '../components/AdvancedLayout';
import Testimonials from '../components/Testimonials';
import SkillsVisualization from '../components/SkillsVisualization';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Download, 
  Shield, 
  Target, 
  Database, 
  Globe, 
  CheckCircle, 
  Award, 
  Users, 
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Play,
  Pause,
  Calendar,
  Clock,
  Star,
  Zap,
  Eye,
  Lock,
  Server,
  Code,
  Brain,
  Activity,
  Briefcase,
  FileText,
  MessageCircle
} from 'lucide-react';

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.1 });

  const titles = [
    "Cybersecurity Professional",
    "Penetration Testing Specialist", 
    "Network Security Expert",
    "AI Security Researcher",
    "Incident Response Analyst"
  ];

  const stats = [
    { 
      value: "99.2%", 
      label: "Threat Detection Accuracy", 
      icon: <Target className="w-6 h-6" />,
      description: "AI-powered intrusion detection success rate"
    },
    { 
      value: "200+", 
      label: "Vulnerabilities Identified", 
      icon: <Shield className="w-6 h-6" />,
      description: "Critical security flaws discovered and patched"
    },
    { 
      value: "50+", 
      label: "Security Assessments", 
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Comprehensive penetration tests completed"
    },
    { 
      value: "4+", 
      label: "Years Experience", 
      icon: <Award className="w-6 h-6" />,
      description: "Professional cybersecurity expertise"
    },
  ];

  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive security assessments to identify vulnerabilities before attackers do",
      icon: <Target className="w-8 h-8" />,
      features: ["Network penetration testing", "Web application security", "Social engineering assessment", "Wireless security testing"],
      tools: ["Metasploit", "Burp Suite", "Nmap", "Kali Linux"],
      deliverables: "Detailed vulnerability report with remediation strategies"
    },
    {
      title: "Network Security",
      description: "Advanced network protection and monitoring solutions for enterprise environments",
      icon: <Shield className="w-8 h-8" />,
      features: ["Firewall configuration", "IDS/IPS deployment", "Network monitoring", "Traffic analysis"],
      tools: ["Wireshark", "Snort", "pfSense", "Cisco ASA"],
      deliverables: "Secure network architecture with 24/7 monitoring"
    },
    {
      title: "AI-Powered Security",
      description: "Next-generation threat detection using machine learning and behavioral analysis",
      icon: <Brain className="w-8 h-8" />,
      features: ["Anomaly detection", "Behavioral analysis", "Predictive threat modeling", "Automated response"],
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Python"],
      deliverables: "Intelligent security system with 95%+ accuracy"
    },
    {
      title: "Incident Response",
      description: "Rapid threat containment and forensic analysis for security breaches",
      icon: <Activity className="w-8 h-8" />,
      features: ["Threat hunting", "Digital forensics", "Malware analysis", "Recovery planning"],
      tools: ["Splunk", "Volatility", "Autopsy", "YARA"],
      deliverables: "Complete incident analysis and recovery roadmap"
    },
    {
      title: "Security Consulting",
      description: "Strategic cybersecurity guidance for digital transformation and compliance",
      icon: <Users className="w-8 h-8" />,
      features: ["Risk assessment", "Compliance auditing", "Security architecture", "Policy development"],
      tools: ["NIST Framework", "ISO 27001", "GDPR", "Risk assessment tools"],
      deliverables: "Comprehensive security strategy and implementation plan"  
    },
    {
      title: "Blockchain Security",
      description: "Specialized security analysis for blockchain applications and smart contracts",
      icon: <Database className="w-8 h-8" />,
      features: ["Smart contract auditing", "DeFi security", "Blockchain analysis", "Crypto security"],
      tools: ["Slither", "MythX", "Brownie", "Web3.py"],
      deliverables: "Detailed blockchain security assessment report"
    }
  ];

  const featuredProjects = [
    {
      title: "Neural Network Intrusion Detection System",
      description: "AI-powered system achieving 99.2% accuracy in real-time threat detection",
      image: "/projects/neural-ids.jpg",
      technologies: ["Python", "TensorFlow", "Wireshark", "Docker"],
      status: "Production",
      impact: "Reduced false positives by 75%",
      link: "/projects#neural-ids"
    },
    {
      title: "Blockchain Security Framework",
      description: "Comprehensive tool for smart contract vulnerability assessment",
      image: "/projects/blockchain-security.jpg", 
      technologies: ["Python", "Solidity", "Web3.py", "Ethereum"],
      status: "Active",
      impact: "Prevented $2M+ in potential losses",
      link: "/projects#blockchain-security"
    },
    {
      title: "Enterprise Penetration Testing Suite",
      description: "Advanced toolkit streamlining security assessment workflows",
      image: "/projects/pentest-suite.jpg",
      technologies: ["Python", "Metasploit", "Nmap", "Custom Scripts"],
      status: "Completed",
      impact: "40% reduction in testing time",
      link: "/projects#pentest-suite"
    }
  ];

  const experience = [
    {
      role: "IT Technician",
      company: "University of Westminster",
      period: "Jan 2025 - Present",
      location: "London, UK",
      type: "Full-time",
      highlights: [
        "Deployed next-generation firewall solutions across campus network",
        "Implemented zero-trust architecture reducing breach vectors by 75%",
        "Led cybersecurity training for 500+ staff and students"
      ]
    },
    {
      role: "Technology Consulting Intern",
      company: "PricewaterhouseCoopers (PwC)",
      period: "Jul - Aug 2024",
      location: "Doha, Qatar", 
      type: "Internship",
      highlights: [
        "Coordinated with Google and Microsoft on digital transformation",
        "Conducted cybersecurity assessments for critical infrastructure",
        "Presented findings to C-suite executives and government officials"
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "Sidra Holding LLC",
      period: "May - Jun 2024", 
      location: "Doha, Qatar",
      type: "Internship",
      highlights: [
        "Monitored network traffic for 200+ endpoints using SIEM",
        "Identified and mitigated 15+ potential security threats",
        "Developed automated scripts reducing response time by 60%"
      ]
    }
  ];

  const quickLinks = [
    { name: "View Projects", href: "/projects", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Download Resume", href: "/resume.pdf", icon: <FileText className="w-5 h-5" /> },
    { name: "Get In Touch", href: "/contact", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "About Me", href: "/about", icon: <Users className="w-5 h-5" /> }
  ];

  // Track if sections have ever been in view
  const [heroHasBeenInView, setHeroHasBeenInView] = useState(false);
  const [statsHasBeenInView, setStatsHasBeenInView] = useState(false);
  const [servicesHasBeenInView, setServicesHasBeenInView] = useState(false);
  const [projectsHasBeenInView, setProjectsHasBeenInView] = useState(false);
  const [experienceHasBeenInView, setExperienceHasBeenInView] = useState(false);

  useEffect(() => { if (heroInView) setHeroHasBeenInView(true); }, [heroInView]);
  useEffect(() => { if (statsInView) setStatsHasBeenInView(true); }, [statsInView]);
  useEffect(() => { if (servicesInView) setServicesHasBeenInView(true); }, [servicesInView]);
  useEffect(() => { if (projectsInView) setProjectsHasBeenInView(true); }, [projectsInView]);
  useEffect(() => { if (experienceInView) setExperienceHasBeenInView(true); }, [experienceInView]);

  // Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige via-white to-qatar-beige/50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div ref={heroRef} className={`text-center max-w-6xl mx-auto relative z-10 ${heroHasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl font-serif font-bold heading-primary mb-6 leading-tight">
              Jaber Farooqi
            </h1>
            <div className="w-32 h-1 gradient-qatar mx-auto mb-8"></div>
            
            {/* Typewriter Effect */}
            <div className="text-2xl sm:text-3xl font-medium text-qatar-maroon mb-8 h-12 flex items-center justify-center">
              <span className="mr-2">{titles[currentTitle]}</span>
              <span className={`inline-block w-1 h-8 bg-qatar-maroon ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
            </div>
            
            <p className="text-xl sm:text-2xl text-elegant max-w-4xl mx-auto mb-12 leading-relaxed">
              Passionate cybersecurity professional with expertise in penetration testing, 
              AI-powered threat detection, and enterprise security architecture. 
              <span className="block mt-4 text-lg text-qatar-gray">
                Based in London • Available globally • Committed to digital security excellence
              </span>
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              <Eye className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/Jaber-Farooqi-Resume.pdf"
              className="btn-secondary inline-flex items-center text-lg px-8 py-4 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {quickLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="card-elegant p-4 text-center hover:shadow-elegant-lg transition-all duration-300 group"
              >
                <div className="text-qatar-maroon mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="text-sm font-medium text-qatar-navy group-hover:text-qatar-maroon transition-colors">
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Professional Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`card-elegant p-6 text-center hover:shadow-elegant-lg transition-all duration-300 group ${
                  statsHasBeenInView ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-qatar-maroon mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold heading-primary mb-2">{stat.value}</div>
                <div className="text-sm text-elegant font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-qatar-gray leading-tight">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-qatar-navy rounded-full flex justify-center">
            <div className="w-1 h-3 bg-qatar-navy rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={servicesRef} className={`text-center mb-16 ${servicesHasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Cybersecurity Services
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to protect your digital infrastructure 
              and enable secure digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-elegant p-8 hover:shadow-elegant-xl transition-all duration-300 group ${
                  servicesHasBeenInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-qatar-maroon mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-bold heading-secondary mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-elegant mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-qatar-navy text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-elegant space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-qatar-navy text-sm mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-qatar-beige text-qatar-navy rounded text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs text-qatar-gray">
                      <strong>Deliverable:</strong> {service.deliverables}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Visualization */}
      <SkillsVisualization />

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige to-white">
        <div className="max-w-7xl mx-auto">
          <div ref={projectsRef} className={`text-center mb-16 ${projectsHasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Featured Projects
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Showcasing innovative cybersecurity solutions that demonstrate practical application 
              of advanced security expertise and cutting-edge technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`card-elegant p-0 overflow-hidden hover:shadow-elegant-xl transition-all duration-300 group ${
                  projectsHasBeenInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-qatar-navy to-qatar-maroon flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl font-bold text-white opacity-20">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production' ? 'bg-green-100 text-green-800' :
                      project.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold heading-secondary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-elegant mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-qatar-beige text-qatar-navy rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-qatar-gray">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                    <Link
                      href={project.link}
                      className="text-qatar-maroon hover:text-qatar-navy transition-colors text-sm font-medium flex items-center group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center text-lg group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Experience Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={experienceRef} className={`text-center mb-16 ${experienceHasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Professional Experience
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Proven track record of success in cybersecurity roles at prestigious organizations 
              including PwC, University of Westminster, and leading financial institutions.
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`card-elegant p-8 hover:shadow-elegant-lg transition-all duration-300 ${
                  experienceHasBeenInView ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 bg-qatar-maroon rounded-full mr-3"></div>
                      <span className="text-sm font-medium text-qatar-maroon">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold heading-secondary mb-2">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-qatar-navy mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex items-center text-elegant mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    <span className="inline-block px-3 py-1 bg-qatar-beige text-qatar-navy rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h5 className="font-semibold text-qatar-navy mb-4">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-elegant">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/resume"
              className="btn-secondary inline-flex items-center text-lg group"
            >
              View Complete Resume
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-qatar text-white relative overflow-hidden">
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6" style={{textShadow: '0 2px 8px rgba(0,0,0,0.25)'}}>
            Ready to Secure Your Digital Future?
          </h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto" style={{textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>
            Don't wait until it's too late. Proactive cybersecurity is the key to protecting your 
            organization's most valuable assets. Let's discuss how my expertise can help strengthen 
            your security posture and enable secure digital transformation.
          </p>
          
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:Jaberfarooqi@hotmail.com"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-semibold mb-2">Email</div>
              <div className="text-sm opacity-80">Jaberfarooqi@hotmail.com</div>
              <div className="text-xs opacity-60 mt-2">Response within 24 hours</div>
            </a>
            
            <a
              href="tel:+447745690989"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-semibold mb-2">Phone</div>
              <div className="text-sm opacity-80">+44(0)7745690989</div>
              <div className="text-xs opacity-60 mt-2">Mon-Fri, 9:00 AM - 6:00 PM GMT</div>
            </a>
            
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-semibold mb-2">Contact Form</div>
              <div className="text-sm opacity-80">Secure messaging</div>
              <div className="text-xs opacity-60 mt-2">Priority-based response</div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-qatar-maroon text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-qatar-navy transition-all duration-300 inline-flex items-center justify-center group"
            >
              <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="border-2 border-qatar-maroon text-qatar-maroon px-8 py-4 rounded-lg font-semibold text-lg hover:bg-qatar-maroon hover:text-white transition-all duration-300 inline-flex items-center justify-center group"
            >
              <Eye className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
