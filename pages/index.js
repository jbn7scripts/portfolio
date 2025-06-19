import AdvancedLayout from '../components/AdvancedLayout';
import Testimonials from '../components/Testimonials';
import SkillsVisualization from '../components/SkillsVisualization';
import AnimatedSection from '../components/AnimatedSection';
import AnimatedSkillBar from '../components/AnimatedSkillBar';
import EnhancedButton from '../components/EnhancedButton';
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
    "Technology Enthusiast", 
    "Software Developer",
    "Security Researcher",
    "Problem Solver"
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

  const skills = [
    { skill: "JavaScript/React", percentage: 85, color: "qatar-maroon" },
    { skill: "Python", percentage: 80, color: "midnight-navy" },
    { skill: "Node.js", percentage: 75, color: "gold-accent" },
    { skill: "SQL/Databases", percentage: 70, color: "royal-blue" },
    { skill: "Cybersecurity", percentage: 65, color: "teal-blue" },
    { skill: "DevOps", percentage: 60, color: "qatar-maroon" }
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
    { name: "Download Resume", href: "/websiteresume.pdf", icon: <FileText className="w-5 h-5" /> },
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
      <AnimatedSection className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-soft-beige via-white to-soft-beige/50 relative overflow-hidden" animation="fadeInUp">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div ref={heroRef} className={`text-center max-w-6xl mx-auto relative z-10 ${heroHasBeenInView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Main Heading */}
          <AnimatedSection className="mb-8" animation="fadeInUp" delay={0.2}>
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
              Recent Computer Science graduate with a passion for technology and innovation. 
              <span className="block mt-4 text-lg text-charcoal/70">
                Based in London • Seeking opportunities • Eager to learn and grow
              </span>
            </p>
          </AnimatedSection>

          {/* Quick Actions */}
          <AnimatedSection className="flex flex-col sm:flex-row gap-6 justify-center mb-16" animation="fadeInUp" delay={0.4}>
            <EnhancedButton
              variant="primary"
              size="lg"
              className="inline-flex items-center text-lg px-8 py-4"
              onClick={() => window.location.href = '/projects'}
            >
              <Eye className="mr-2 w-5 h-5" />
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              className="inline-flex items-center text-lg px-8 py-4"
              onClick={() => window.open('/websiteresume.pdf', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </EnhancedButton>
          </AnimatedSection>
          
          {/* Quick Links */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16" animation="fadeInUp" delay={0.6}>
            {quickLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="card-elegant p-4 text-center hover:shadow-elegant-lg transition-all duration-300 group"
              >
                <div className="text-qatar-maroon mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div className="text-sm font-medium text-midnight-navy group-hover:text-qatar-maroon transition-colors">
                  {link.name}
                </div>
              </Link>
            ))}
          </AnimatedSection>

          {/* Professional Stats */}
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto" animation="fadeInUp" delay={0.8}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="card-elegant p-6 text-center hover:shadow-elegant-lg transition-all duration-300 group"
              >
                <div className="text-qatar-maroon mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold heading-primary mb-2">{stat.value}</div>
                <div className="text-sm text-elegant font-medium mb-2">{stat.label}</div>
                <div className="text-xs text-charcoal/70 leading-tight">{stat.description}</div>
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-midnight-navy rounded-full flex justify-center">
            <div className="w-1 h-3 bg-midnight-navy rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white" animation="fadeInUp">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Technical Expertise
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              A comprehensive skill set developed through academic projects, internships, and continuous learning.
            </p>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <AnimatedSkillBar
                key={skill.skill}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-beige/30" animation="fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Education & Skills
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Strong academic foundation in computer science with specialized knowledge in cybersecurity, 
              web development, and data analysis. Committed to continuous learning and professional growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <AnimatedSection
                key={edu.title}
                className="card-elegant p-8 hover:shadow-elegant-xl transition-all duration-300 group"
                animation="slideUp"
                delay={index * 0.1}
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
                    <h4 className="font-semibold text-midnight-navy text-sm mb-2">Key Features:</h4>
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
                    <h4 className="font-semibold text-midnight-navy text-sm mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-soft-beige text-midnight-navy rounded text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-midnight-navy text-sm mb-2">Deliverables:</h4>
                    <p className="text-sm text-elegant">{edu.deliverables}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-white" animation="fadeInUp">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Featured Projects
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              A selection of my most impactful projects showcasing technical skills and problem-solving abilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection
                key={project.title}
                className="card-elegant overflow-hidden hover:shadow-elegant-xl transition-all duration-300"
                animation="scaleIn"
                delay={index * 0.2}
              >
                <div className="h-48 bg-gradient-to-br from-qatar-maroon to-midnight-navy flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-elegant mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-soft-beige text-midnight-navy rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-charcoal/70 mb-4">{project.impact}</p>
                  <EnhancedButton
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = project.link}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </EnhancedButton>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <EnhancedButton
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </EnhancedButton>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-soft-beige/30" animation="fadeInUp">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Professional Experience
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Real-world experience gained through internships and part-time roles in technology and consulting.
            </p>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <AnimatedSection
                key={exp.role}
                className="card-elegant p-8 hover:shadow-elegant-lg transition-all duration-300"
                animation="fadeInLeft"
                delay={index * 0.2}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold heading-secondary">{exp.role}</h3>
                    <p className="text-qatar-maroon font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm text-charcoal/70">{exp.period}</p>
                    <p className="text-sm text-charcoal/70">{exp.location}</p>
                    <span className="inline-block px-3 py-1 bg-qatar-maroon/10 text-qatar-maroon rounded-full text-xs font-medium mt-1">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-elegant">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-qatar-maroon to-midnight-navy text-white" animation="fadeInUp">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can collaborate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnhancedButton
              variant="accent"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
              <Mail className="ml-2 w-5 h-5" />
            </EnhancedButton>
            <EnhancedButton
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-qatar-maroon"
              onClick={() => window.open('/websiteresume.pdf', '_blank')}
            >
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </EnhancedButton>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
