import Layout from '../components/Layout';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Shield,
  Target,
  Database,
  Globe,
  CheckCircle,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Zap,
  Brain,
  Eye
} from 'lucide-react';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('experience');
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1 });

  const sections = [
    { id: 'experience', label: 'Professional Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <BookOpen size={18} /> },
    { id: 'skills', label: 'Technical Skills', icon: <Code size={18} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
  ];

  const experience = [
    {
      title: "IT Technician",
      company: "University of Westminster",
      location: "London, United Kingdom", 
      period: "January 2025 - Present",
      type: "Full-time",
      description: "Leading advanced network security implementations and enterprise infrastructure management.",
      achievements: [
        "Deployed next-generation firewall solutions across campus network infrastructure",
        "Implemented zero-trust security architecture reducing potential breach vectors by 75%",
        "Led cybersecurity awareness training programs for 500+ staff and students",
        "Optimized network performance resulting in 40% improvement in system reliability"
      ],
      technologies: ["Cisco ASA", "Palo Alto Networks", "VMware vSphere", "Active Directory", "Splunk"]
    },
    {
      title: "Technology Consulting Intern",
      company: "PricewaterhouseCoopers (PwC)",
      location: "Doha, Qatar",
      period: "July 2024 - August 2024",
      type: "Internship",
      description: "Coordinated with major technology stakeholders for national digital transformation initiatives.",
      achievements: [
        "Collaborated with Google and Microsoft on government cloud migration strategies",
        "Conducted comprehensive cybersecurity risk assessments for critical infrastructure",
        "Developed security frameworks for national digital identity systems",
        "Presented findings to C-suite executives and government officials"
      ],
      technologies: ["Google Cloud Platform", "Microsoft Azure", "Risk Assessment Tools", "Compliance Frameworks"]
    },
    {
      title: "Cyber Security Intern",
      company: "Sidra Holding LLC", 
      location: "Doha, Qatar",
      period: "May 2024 - June 2024",
      type: "Internship",
      description: "Specialized in network security monitoring and threat detection for financial services.",
      achievements: [
        "Monitored network traffic for 200+ endpoints using advanced SIEM solutions",
        "Identified and mitigated 15+ potential security threats during internship",
        "Developed automated threat detection scripts reducing response time by 60%",
        "Created comprehensive incident response procedures for the security team"
      ],
      technologies: ["Splunk Enterprise", "Wireshark", "Nessus", "Metasploit", "Python scripting"]
    },
    {
      title: "IT Department Intern",
      company: "Qatar International Islamic Bank",
      location: "Doha, Qatar", 
      period: "May 2023 - August 2023",
      type: "Internship",
      description: "Provided technical support and cybersecurity assistance in banking environment.",
      achievements: [
        "Supported 1000+ banking staff with technical issues and security protocols",
        "Implemented endpoint protection solutions across 500+ workstations",
        "Conducted security awareness training sessions for bank employees",
        "Assisted in developing disaster recovery procedures for critical banking systems"
      ],
      technologies: ["Windows Server", "Active Directory", "Endpoint Protection", "Banking Security Systems"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science (Honours) - Computer Science",
      institution: "University of Westminster",
      location: "London, United Kingdom",
      period: "September 2022 - June 2025",
      status: "Expected Graduation",
      details: [
        "Specialization in Cybersecurity and Network Security",
        "Relevant Coursework: Advanced Network Security, Cryptography, Ethical Hacking, Digital Forensics",
        "Current GPA: 3.8/4.0 (First Class Honours track)",
        "Member of Cybersecurity Society and Computing Student Association"
      ],
      projects: [
        "AI-Powered Intrusion Detection System (Final Year Project)",
        "Blockchain Security Analysis Framework", 
        "Advanced Penetration Testing Suite"
      ]
    },
    {
      degree: "Diploma of Higher Education",
      institution: "GEMS American Academy",
      location: "Doha, Qatar",
      period: "September 2018 - June 2021", 
      status: "Completed",
      details: [
        "Strong foundation in Mathematics, Science, and Technology",
        "Advanced Placement courses in Computer Science and Mathematics",
        "Graduated with High Honors - GPA: 3.9/4.0",
        "President of Technology Club and Robotics Team Captain"
      ],
      achievements: [
        "Qatar National Robotics Competition - 1st Place (2020)",
        "Mathematics Olympiad Regional Finalist (2019)",
        "Technology Innovation Award (2021)"
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Cybersecurity Specializations",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Penetration Testing", level: 95, description: "Advanced ethical hacking and vulnerability assessment" },
        { name: "Network Security", level: 90, description: "Firewall configuration, IDS/IPS, network monitoring" },
        { name: "Incident Response", level: 85, description: "Threat detection, forensics, recovery procedures" },
        { name: "Risk Assessment", level: 90, description: "Security auditing, compliance, risk management" }
      ]
    },
    {
      title: "Technical Tools & Platforms", 
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python/Scripting", level: 90, description: "Automation, security tools, data analysis" },
        { name: "Linux/Windows", level: 85, description: "System administration, security hardening" },
        { name: "Cloud Security", level: 80, description: "AWS, Azure, GCP security implementations" },
        { name: "SIEM Solutions", level: 85, description: "Splunk, Chronicle, security monitoring" }
      ]
    },
    {
      title: "Security Frameworks",
      icon: <Target className="w-6 h-6" />,
      skills: [
        { name: "NIST Framework", level: 90, description: "Risk management, security controls" },
        { name: "ISO 27001", level: 85, description: "Information security management systems" },
        { name: "OWASP", level: 85, description: "Web application security standards" },
        { name: "Zero Trust", level: 80, description: "Modern security architecture principles" }
      ]
    }
  ];

  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      status: "In Progress",
      expectedDate: "March 2025",
      credentialId: "ECC-2024-CEH-JF",
      description: "Advanced penetration testing and ethical hacking methodologies"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "Completed",
      completedDate: "November 2024",
      credentialId: "COMP001122334455",
      description: "Foundational cybersecurity concepts and best practices"
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Systems",
      status: "In Progress", 
      expectedDate: "April 2025",
      credentialId: "CISCO-2024-CCNA-JF",
      description: "Network security and infrastructure management"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Completed",
      completedDate: "September 2024", 
      credentialId: "AWS-CCP-JF-2024",
      description: "Cloud security fundamentals and AWS services"
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      status: "Completed",
      completedDate: "August 2024",
      credentialId: "GOOGLE-CYBER-JF-2024",
      description: "Comprehensive cybersecurity skills and incident response"
    }
  ];

  const languages = [
    { name: "English", level: "Native/Fluent", flag: "🇬🇧" },
    { name: "Arabic", level: "Native/Fluent", flag: "🇶🇦" }
  ];

  return (
    <Layout
      title="Resume - Jaber Farooqi | Cybersecurity Professional"
      description="Comprehensive resume of Jaber Farooqi - Cybersecurity Analyst with experience at PwC, University of Westminster, and expertise in penetration testing."
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige via-white to-qatar-beige/50">
        <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className={`${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Header with Contact Info */}
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-serif font-bold heading-primary mb-6">
                Professional Resume
              </h1>
              <div className="section-divider"></div>
              <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed mb-8">
                Experienced cybersecurity professional with proven expertise in network security, 
                penetration testing, and enterprise security architecture.
              </p>
              
              {/* Contact Information Bar */}
              <div className="card-elegant p-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 text-qatar-maroon mr-2" />
                    <span className="text-elegant">Jaberfarooqi@hotmail.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 text-qatar-maroon mr-2" />
                    <span className="text-elegant">+44(0)7745690989</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-qatar-maroon mr-2" />
                    <span className="text-elegant">London, United Kingdom</span>
        </div>
                  <div className="flex items-center justify-center">
                    <Globe className="w-5 h-5 text-qatar-maroon mr-2" />
                    <span className="text-elegant">jaberfarooqi.com</span>
                  </div>
                </div>
              </div>
              
              {/* Download Resume Button */}
              <div className="mt-8">
                <a
                  href="/Jaber-Farooqi-Resume.pdf"
                  className="btn-primary inline-flex items-center text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-1 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-qatar-navy text-white shadow-elegant'
                    : 'text-qatar-navy hover:bg-qatar-beige'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-qatar-beige/30">
        <div className="max-w-7xl mx-auto">
          <div ref={contentRef} className={`${contentInView ? 'animate-fade-in' : 'opacity-0'}`}>
            
            {/* Professional Experience */}
            {activeSection === 'experience' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
                    Professional Experience
          </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    Proven track record in cybersecurity across prestigious organizations including PwC, 
                    University of Westminster, and leading financial institutions.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <div key={index} className="card-elegant p-8 hover:shadow-elegant-lg transition-all duration-300">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className="flex items-center mb-2">
                            <div className="w-3 h-3 bg-qatar-maroon rounded-full mr-3"></div>
                            <span className="text-sm font-medium text-qatar-maroon">{job.period}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold heading-secondary mb-2">
                            {job.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-qatar-navy mb-2">
                            {job.company}
                          </h4>
                          <div className="flex items-center text-elegant mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <span className="inline-block px-3 py-1 bg-qatar-beige text-qatar-navy rounded-full text-sm font-medium">
                            {job.type}
                          </span>
                        </div>
                        
                        <div className="lg:w-2/3">
                          <p className="text-elegant leading-relaxed mb-6">
                            {job.description}
                          </p>
                          
                          <div className="mb-6">
                            <h5 className="font-semibold text-qatar-navy mb-3">Key Achievements:</h5>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                  <span className="text-elegant text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-qatar-navy mb-3">Technologies Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-qatar-navy rounded-full text-sm font-medium"
                                >
                                  {tech}
                  </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {activeSection === 'education' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
                    Educational Background
                  </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    Strong academic foundation in Computer Science with specialized focus on cybersecurity 
                    and network security from prestigious institutions.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="card-elegant p-8">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-1/3">
                          <div className="flex items-center mb-2">
                            <BookOpen className="w-5 h-5 text-qatar-maroon mr-2" />
                            <span className="text-sm font-medium text-qatar-maroon">{edu.period}</span>
                          </div>
                          <h3 className="text-xl font-serif font-bold heading-secondary mb-2">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg font-semibold text-qatar-navy mb-2">
                            {edu.institution}
                          </h4>
                          <div className="flex items-center text-elegant mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <div className="lg:w-2/3">
                          <div className="mb-6">
                            <h5 className="font-semibold text-qatar-navy mb-3">Program Details:</h5>
                            <ul className="space-y-2">
                              {edu.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Star className="w-4 h-4 text-qatar-gold mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-elegant text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {edu.projects && (
                            <div className="mb-4">
                              <h5 className="font-semibold text-qatar-navy mb-3">Notable Projects:</h5>
                              <div className="space-y-1">
                                {edu.projects.map((project, idx) => (
                                  <div key={idx} className="text-elegant text-sm">• {project}</div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {edu.achievements && (
              <div>
                              <h5 className="font-semibold text-qatar-navy mb-3">Achievements:</h5>
                              <div className="space-y-1">
                                {edu.achievements.map((achievement, idx) => (
                                  <div key={idx} className="flex items-center text-sm">
                                    <Award className="w-4 h-4 text-qatar-gold mr-2" />
                                    <span className="text-elegant">{achievement}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Languages */}
                <div className="card-elegant p-8">
                  <h3 className="text-2xl font-serif font-bold heading-secondary mb-6">
                    Languages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-qatar-beige/50 rounded-lg">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{lang.flag}</span>
                          <span className="font-semibold text-qatar-navy">{lang.name}</span>
                        </div>
                        <span className="text-elegant font-medium">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Technical Skills */}
            {activeSection === 'skills' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
                    Technical Expertise
                  </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    Comprehensive cybersecurity skills developed through hands-on experience, 
                    continuous learning, and practical application in enterprise environments.
                  </p>
                </div>
                
                <div className="space-y-12">
                  {skillCategories.map((category, index) => (
                    <div key={index} className="card-elegant p-8">
                      <div className="flex items-center mb-8">
                        <div className="text-qatar-maroon mr-4">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-serif font-bold heading-secondary">
                          {category.title}
                        </h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {category.skills.map((skill, idx) => (
                          <div key={idx} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <h4 className="font-semibold text-qatar-navy">{skill.name}</h4>
                              <span className="text-sm font-medium text-qatar-maroon">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-gradient-to-r from-qatar-navy to-qatar-maroon transition-all duration-1000"
                                style={{width: `${skill.level}%`}}
                              ></div>
                            </div>
                            <p className="text-elegant text-sm">{skill.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Additional Technical Competencies */}
                <div className="card-elegant p-8">
                  <h3 className="text-2xl font-serif font-bold heading-secondary mb-6 text-center">
                    Additional Technical Competencies
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[
                      'Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Kali Linux', 'Nessus',
                      'Splunk', 'VMware', 'Docker', 'Git', 'PostgreSQL', 'MongoDB',
                      'React.js', 'Node.js', 'Python', 'JavaScript', 'PowerShell', 'Bash'
                    ].map((tech, index) => (
                      <div key={index} className="text-center p-3 bg-qatar-beige/50 rounded-lg">
                        <span className="text-sm font-medium text-qatar-navy">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Certifications */}
            {activeSection === 'certifications' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
                    Professional Certifications
                  </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    Continuous professional development through industry-recognized certifications 
                    and specialized training programs in cybersecurity and related technologies.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {certifications.map((cert, index) => (
                    <div key={index} className="card-elegant p-8 hover:shadow-elegant-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-serif font-bold heading-secondary mb-2">
                            {cert.name}
                          </h3>
                          <h4 className="text-lg font-semibold text-qatar-navy mb-2">
                            {cert.issuer}
                          </h4>
                        </div>
                        <div className="flex-shrink-0">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            cert.status === 'Completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {cert.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-elegant text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-qatar-maroon mr-2" />
                          <span className="text-elegant">
                            {cert.status === 'Completed' 
                              ? `Completed: ${cert.completedDate}`
                              : `Expected: ${cert.expectedDate}`
                            }
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-qatar-maroon mr-2" />
                          <span className="text-elegant font-mono text-xs">
                            ID: {cert.credentialId}
                          </span>
                </div>
              </div>
            </div>
          ))}
        </div>

                {/* Certification Progress */}
                <div className="card-elegant p-8 bg-gradient-to-r from-qatar-navy to-qatar-maroon text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Continuous Learning Journey
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      Committed to staying at the forefront of cybersecurity through ongoing certification 
                      and professional development.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">3</div>
                        <div className="text-sm opacity-75">Completed Certifications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">2</div>
                        <div className="text-sm opacity-75">In Progress</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">5+</div>
                        <div className="text-sm opacity-75">Planned for 2025</div>
                      </div>
                    </div>
            </div>
          </div>
            </div>
            )}
        </div>
      </div>
    </section>
    </Layout>
  );
} 