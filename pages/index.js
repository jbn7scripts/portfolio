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
  MessageCircle,
  GraduationCap,
  BookOpen,
  Lightbulb
} from 'lucide-react';

export default function Home() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1 });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.1 });

  const titles = [
    "Computer Science Graduate",
    "Cybersecurity Enthusiast", 
    "Technology Professional",
    "Security Researcher",
    "Software Developer"
  ];

  const stats = [
    { 
      value: "BSc", 
      label: "Computer Science Degree", 
      icon: <GraduationCap className="w-6 h-6" />,
      description: "University of Westminster, London"
    },
    { 
      value: "15+", 
      label: "Academic Projects", 
      icon: <BookOpen className="w-6 h-6" />,
      description: "Cybersecurity and software development"
    },
    { 
      value: "8+", 
      label: "Technical Skills", 
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Programming languages and security tools"
    },
    { 
      value: "2+", 
      label: "Internships", 
      icon: <Award className="w-6 h-6" />,
      description: "PwC and Sidra Holding experience"
    },
  ];

  const education = [
    {
      title: "Computer Science Foundation",
      description: "Strong theoretical and practical foundation in computer science principles",
      icon: <BookOpen className="w-8 h-8" />,
      features: ["Data structures & algorithms", "Software engineering", "Database systems", "Computer networks"],
      tools: ["Java", "Python", "SQL", "Git"],
      deliverables: "Solid programming and problem-solving skills"
    },
    {
      title: "Cybersecurity Knowledge",
      description: "Academic and self-directed learning in cybersecurity fundamentals",
      icon: <Shield className="w-8 h-8" />,
      features: ["Network security", "Cryptography", "Ethical hacking", "Security protocols"],
      tools: ["Wireshark", "Kali Linux", "Metasploit", "Nmap"],
      deliverables: "Understanding of security principles and tools"
    },
    {
      title: "Web Development",
      description: "Full-stack development skills for modern web applications",
      icon: <Code className="w-8 h-8" />,
      features: ["Frontend development", "Backend systems", "API design", "Database integration"],
      tools: ["React", "Node.js", "JavaScript", "MongoDB"],
      deliverables: "Functional web applications and services"
    },
    {
      title: "Data Analysis",
      description: "Skills in data processing, analysis, and visualization",
      icon: <Brain className="w-8 h-8" />,
      features: ["Statistical analysis", "Data visualization", "Machine learning basics", "Python libraries"],
      tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      deliverables: "Data-driven insights and reports"
    },
    {
      title: "Professional Skills",
      description: "Soft skills and professional development for workplace success",
      icon: <Users className="w-8 h-8" />,
      features: ["Team collaboration", "Problem solving", "Communication", "Project management"],
      tools: ["Agile methodologies", "Documentation", "Presentation skills", "Time management"],
      deliverables: "Professional readiness and adaptability"
    },
    {
      title: "Continuous Learning",
      description: "Commitment to staying current with technology trends and best practices",
      icon: <Lightbulb className="w-8 h-8" />,
      features: ["Online courses", "Certification preparation", "Industry research", "Open source contribution"],
      tools: ["Coursera", "Udemy", "GitHub", "Security blogs"],
      deliverables: "Up-to-date knowledge and skills"
    }
  ];

  const featuredProjects = [
    {
      title: "Network Security Monitoring Tool",
      description: "Academic project developing a basic network traffic analyzer",
      image: "/projects/network-monitor.jpg",
      technologies: ["Python", "Wireshark", "SQLite", "Tkinter"],
      status: "Academic",
      impact: "Learned network protocols and security monitoring",
      link: "/projects#network-monitor"
    },
    {
      title: "Web Application Security Scanner",
      description: "Educational tool for identifying common web vulnerabilities",
      image: "/projects/web-scanner.jpg", 
      technologies: ["Python", "Flask", "SQLite", "HTML/CSS"],
      status: "Learning Project",
      impact: "Gained understanding of web security principles",
      link: "/projects#web-scanner"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      status: "Active",
      impact: "Demonstrated full-stack development skills",
      link: "/projects#portfolio"
    }
  ];

  const experience = [
    {
      role: "IT Technician",
      company: "University of Westminster",
      period: "Jan 2025 - Present",
      location: "London, UK",
      type: "Part-time",
      highlights: [
        "Providing technical support to students and staff",
        "Maintaining computer lab equipment and software",
        "Assisting with basic network troubleshooting"
      ]
    },
    {
      role: "Technology Consulting Intern",
      company: "PricewaterhouseCoopers (PwC)",
      period: "Jul - Aug 2024",
      location: "Doha, Qatar", 
      type: "Internship",
      highlights: [
        "Assisted with digital transformation projects",
        "Learned about enterprise technology solutions",
        "Gained exposure to consulting methodologies"
      ]
    },
    {
      role: "Cyber Security Intern",
      company: "Sidra Holding LLC",
      period: "May - Jun 2024", 
      location: "Doha, Qatar",
      type: "Internship",
      highlights: [
        "Monitored network traffic using SIEM tools",
        "Assisted with basic security assessments",
        "Learned about enterprise security practices"
      ]
    }
  ];

  const quickLinks = [
    { name: "View Projects", href: "/projects", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Download Resume", href: "/JaberAliFarooqi_CV.pdf", icon: <FileText className="w-5 h-5" /> },
    { name: "Get In Touch", href: "/contact", icon: <MessageCircle className="w-5 h-5" /> },
    { name: "About Me", href: "/about", icon: <Users className="w-5 h-5" /> }
  ];

  // Track if sections have ever been in view
  const [heroHasBeenInView, setHeroHasBeenInView] = useState(false);
  const [statsHasBeenInView, setStatsHasBeenInView] = useState(false);
  const [educationHasBeenInView, setEducationHasBeenInView] = useState(false);
  const [projectsHasBeenInView, setProjectsHasBeenInView] = useState(false);
  const [experienceHasBeenInView, setExperienceHasBeenInView] = useState(false);

  useEffect(() => { if (heroInView) setHeroHasBeenInView(true); }, [heroInView]);
  useEffect(() => { if (statsInView) setStatsHasBeenInView(true); }, [statsInView]);
  useEffect(() => { if (educationInView) setEducationHasBeenInView(true); }, [educationInView]);
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
              Recent Computer Science graduate with a passion for cybersecurity and technology. 
              <span className="block mt-4 text-lg text-qatar-gray">
                Based in London • Seeking opportunities • Eager to learn and grow
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
              href="/JaberAliFarooqi_CV.pdf"
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

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={educationRef} className={`text-center mb-16 ${educationHasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Education
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Strong academic foundation in computer science with specialized knowledge in cybersecurity, 
              web development, and data analysis. Committed to continuous learning and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.title}
                className={`card-elegant p-8 hover:shadow-elegant-xl transition-all duration-300 group ${
                  educationHasBeenInView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-qatar-maroon mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {edu.icon}
                  </div>
                <h3 className="text-xl font-serif font-bold heading-secondary mb-4 text-center">
                  {edu.title}
                  </h3>
                <p className="text-elegant mb-6 leading-relaxed text-center">
                  {edu.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-qatar-navy text-sm mb-2">Key Features:</h4>
                    <ul className="text-sm text-elegant space-y-1">
                      {edu.features.map((feature, idx) => (
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
                      {edu.tools.map((tool, idx) => (
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
                      <strong>Deliverable:</strong> {edu.deliverables}
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
              Academic and personal projects demonstrating practical application of cybersecurity concepts, 
              programming skills, and problem-solving abilities developed through coursework and self-directed learning.
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
              Valuable internship experience at prestigious organizations including PwC and Sidra Holding, 
              providing exposure to enterprise technology and cybersecurity practices.
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
            Ready to Start My Professional Journey?
          </h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto" style={{textShadow: '0 1px 4px rgba(0,0,0,0.18)'}}>
            I'm excited to bring my academic knowledge, technical skills, and passion for cybersecurity 
            to your organization. Let's discuss how I can contribute to your team and grow together.
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
              Get In Touch
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
