import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Target, 
  Database, 
  Globe, 
  Brain, 
  Code, 
  Server, 
  Network,
  Lock,
  Eye,
  Zap,
  Settings,
  CheckCircle,
  TrendingUp,
  Award,
  Star,
  ArrowRight,
  BarChart3,
  Activity,
  Layers
} from 'lucide-react';

const SkillsVisualization = ({ showDetailed = false }) => {
  const [activeCategory, setActiveCategory] = useState('cybersecurity');
  const [animationStep, setAnimationStep] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const skillCategories = {
    cybersecurity: {
      name: 'Cybersecurity Expertise',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-qatar-navy to-qatar-maroon',
      description: 'Core cybersecurity competencies and specialized security skills',
      skills: [
        {
          name: 'Penetration Testing',
          level: 95,
          experience: '4+ years',
          tools: ['Metasploit', 'Burp Suite', 'Nmap', 'Kali Linux'],
          projects: 25,
          certifications: ['CEH (In Progress)', 'OSCP (Planned)'],
          description: 'Advanced ethical hacking and vulnerability assessment expertise'
        },
        {
          name: 'Network Security',
          level: 90,
          experience: '3+ years',
          tools: ['Wireshark', 'Snort', 'pfSense', 'Cisco ASA'],
          projects: 30,
          certifications: ['CCNA Security (In Progress)', 'CompTIA Security+'],
          description: 'Enterprise network protection and monitoring systems'
        },
        {
          name: 'Incident Response',
          level: 85,
          experience: '2+ years',
          tools: ['Splunk', 'SIEM', 'Volatility', 'Autopsy'],
          projects: 15,
          certifications: ['GCIH (Planned)', 'SANS FOR508'],
          description: 'Rapid threat detection, analysis, and containment'
        },
        {
          name: 'Risk Assessment',
          level: 88,
          experience: '3+ years',
          tools: ['Nessus', 'OpenVAS', 'Qualys', 'RiskLens'],
          projects: 20,
          certifications: ['CISSP (Planned)', 'CISA (Studying)'],
          description: 'Comprehensive security auditing and compliance'
        },
        {
          name: 'Malware Analysis',
          level: 80,
          experience: '2+ years',
          tools: ['IDA Pro', 'Ghidra', 'Cuckoo Sandbox', 'YARA'],
          projects: 12,
          certifications: ['GREM (Planned)', 'GCTI'],
          description: 'Advanced threat analysis and reverse engineering'
        }
      ]
    },
    technical: {
      name: 'Technical Proficiency',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-600 to-purple-600',
      description: 'Programming languages, frameworks, and development tools',
      skills: [
        {
          name: 'Python/Scripting',
          level: 92,
          experience: '4+ years',
          tools: ['Django', 'Flask', 'Pandas', 'NumPy'],
          projects: 40,
          certifications: ['Python Institute PCEP', 'AWS Python'],
          description: 'Security automation and tool development'
        },
        {
          name: 'JavaScript/Web',
          level: 85,
          experience: '3+ years',
          tools: ['React', 'Node.js', 'Next.js', 'Express'],
          projects: 25,
          certifications: ['AWS Developer', 'React Certified'],
          description: 'Full-stack development and web security'
        },
        {
          name: 'Database Systems',
          level: 83,
          experience: '3+ years',
          tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
          projects: 20,
          certifications: ['AWS Database', 'MongoDB Certified'],
          description: 'Database security and optimization'
        },
        {
          name: 'Cloud Platforms',
          level: 80,
          experience: '2+ years',
          tools: ['AWS', 'Azure', 'GCP', 'Docker'],
          projects: 18,
          certifications: ['AWS Solutions Architect', 'Azure Security'],
          description: 'Cloud security architecture and deployment'
        },
        {
          name: 'Linux/Systems',
          level: 88,
          experience: '4+ years',
          tools: ['Ubuntu', 'CentOS', 'Bash', 'PowerShell'],
          projects: 35,
          certifications: ['Linux+', 'RHCSA (Planned)'],
          description: 'System administration and hardening'
        }
      ]
    },
    frameworks: {
      name: 'Security Frameworks',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-green-600 to-teal-600',
      description: 'Industry standards, compliance frameworks, and methodologies',
      skills: [
        {
          name: 'NIST Framework',
          level: 90,
          experience: '3+ years',
          tools: ['NIST CSF', 'RMF', 'SP 800-53'],
          projects: 15,
          certifications: ['NIST Certified', 'Risk Management'],
          description: 'Comprehensive risk management and controls'
        },
        {
          name: 'ISO 27001',
          level: 85,
          experience: '2+ years',
          tools: ['ISO 27001', '27002', 'ISMS'],
          projects: 10,
          certifications: ['ISO 27001 Lead Auditor', 'ISMS Certified'],
          description: 'Information security management systems'
        },
        {
          name: 'OWASP',
          level: 88,
          experience: '3+ years',
          tools: ['OWASP Top 10', 'ASVS', 'SAMM'],
          projects: 22,
          certifications: ['OWASP Certified', 'Web Security'],
          description: 'Web application security standards'
        },
        {
          name: 'Zero Trust',
          level: 82,
          experience: '2+ years',
          tools: ['Zero Trust Architecture', 'BeyondCorp', 'SASE'],
          projects: 8,
          certifications: ['Zero Trust Certified', 'Cloud Security'],
          description: 'Modern security architecture principles'
        },
        {
          name: 'GDPR/Compliance',
          level: 80,
          experience: '2+ years',
          tools: ['GDPR', 'PCI DSS', 'SOX', 'HIPAA'],
          projects: 12,
          certifications: ['GDPR Certified', 'Privacy Professional'],
          description: 'Data protection and regulatory compliance'
        }
      ]
    },
    ai_ml: {
      name: 'AI/ML Security',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-600 to-pink-600',
      description: 'Artificial intelligence and machine learning in cybersecurity',
      skills: [
        {
          name: 'Machine Learning',
          level: 85,
          experience: '2+ years',
          tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
          projects: 15,
          certifications: ['ML Engineer', 'Deep Learning'],
          description: 'AI-powered threat detection and analysis'
        },
        {
          name: 'Data Science',
          level: 82,
          experience: '2+ years',
          tools: ['Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
          projects: 18,
          certifications: ['Data Science', 'Analytics'],
          description: 'Security data analysis and visualization'
        },
        {
          name: 'Neural Networks',
          level: 80,
          experience: '2+ years',
          tools: ['CNN', 'LSTM', 'GAN', 'Transformers'],
          projects: 10,
          certifications: ['Deep Learning', 'Neural Networks'],
          description: 'Advanced AI models for security applications'
        },
        {
          name: 'Behavioral Analysis',
          level: 78,
          experience: '1+ years',
          tools: ['UEBA', 'Anomaly Detection', 'Pattern Recognition'],
          projects: 8,
          certifications: ['Behavioral Analytics', 'UEBA Certified'],
          description: 'User and entity behavior analytics'
        }
      ]
    }
  };

  const currentCategory = skillCategories[activeCategory];

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimationStep(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView, animationStep]);

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-green-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    if (level >= 70) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-qatar-beige/20">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
              Technical Expertise
            </h2>
            <div className="section-divider"></div>
            <p className="text-lg text-elegant max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical skills across cybersecurity, development, and emerging technologies. 
              Continuously updated through hands-on experience and professional certifications.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-white text-qatar-maroon border-2 border-qatar-maroon shadow-elegant'
                    : 'bg-white text-qatar-navy hover:text-qatar-maroon hover:border-2 hover:border-qatar-maroon'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {Object.entries(skillCategories).map(([key, category]) => {
              const avgLevel = Math.round(
                category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
              );
              const totalProjects = category.skills.reduce((sum, skill) => sum + skill.projects, 0);
              
              return (
                <div
                  key={key}
                  className={`card-elegant p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-elegant-lg ${
                    activeCategory === key ? 'ring-2 ring-qatar-maroon' : ''
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold heading-secondary mb-2">
                    {category.name}
                  </h3>
                  <div className="text-3xl font-bold heading-primary mb-1">{avgLevel}%</div>
                  <div className="text-sm text-elegant mb-3">Average Proficiency</div>
                  <div className="text-xs text-qatar-gray">
                    {totalProjects} projects completed
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Skills Display */}
          <div className="card-elegant p-8 mb-16">
            <div className="flex items-center mb-8">
              <div className={`w-12 h-12 mr-4 rounded-lg bg-gradient-to-r ${currentCategory.color} flex items-center justify-center text-white`}>
                {currentCategory.icon}
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold heading-secondary">
                  {currentCategory.name}
                </h3>
                <p className="text-elegant">{currentCategory.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              {currentCategory.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`relative p-6 rounded-lg border transition-all duration-300 ${
                    hoveredSkill === skill.name 
                      ? 'border-qatar-maroon bg-qatar-beige/20 shadow-elegant' 
                      : 'border-gray-200 hover:border-qatar-beige'
                  }`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Skill Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-qatar-navy">{skill.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          skill.level >= 90 ? 'bg-green-100 text-green-800' :
                          skill.level >= 80 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {getSkillLabel(skill.level)}
                        </span>
                      </div>
                      <p className="text-elegant text-sm mb-3">{skill.description}</p>
                      <div className="text-xs text-qatar-gray">
                        {skill.experience} experience • {skill.projects} projects
                      </div>
                    </div>

                    {/* Skill Level Bar */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-qatar-navy">Proficiency</span>
                        <span className="text-sm font-bold text-qatar-maroon">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)} transition-all duration-1000 ease-out`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                      
                      {/* Circular Progress */}
                      <div className="flex items-center justify-center">
                        <div className="relative w-16 h-16">
                          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              className="text-gray-200"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={`${skill.level * 1.75} 175`}
                              className="text-qatar-maroon transition-all duration-1000 ease-out"
                              style={{
                                strokeDasharray: inView ? `${skill.level * 1.75} 175` : '0 175'
                              }}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-bold text-qatar-navy">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tools & Certifications */}
                    <div className="lg:w-1/3">
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-qatar-navy mb-2">Tools & Technologies</h5>
                        <div className="flex flex-wrap gap-1">
                          {skill.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-qatar-beige text-qatar-navy rounded text-xs font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-qatar-navy mb-2">Certifications</h5>
                        <div className="space-y-1">
                          {skill.certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center text-xs">
                              <Award className="w-3 h-3 text-qatar-gold mr-1" />
                              <span className="text-elegant">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Details */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute -top-2 -right-2 bg-qatar-navy text-white p-2 rounded-lg shadow-elegant-lg z-10">
                      <div className="text-xs font-semibold">Click to explore</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card-elegant p-6 text-center">
              <div className="text-4xl font-bold heading-primary mb-2">20+</div>
              <div className="text-sm text-elegant font-medium mb-2">Core Technologies</div>
              <div className="text-xs text-qatar-gray">Actively using in projects</div>
            </div>
            <div className="card-elegant p-6 text-center">
              <div className="text-4xl font-bold heading-primary mb-2">150+</div>
              <div className="text-sm text-elegant font-medium mb-2">Total Projects</div>
              <div className="text-xs text-qatar-gray">Across all skill areas</div>
            </div>
            <div className="card-elegant p-6 text-center">
              <div className="text-4xl font-bold heading-primary mb-2">15+</div>
              <div className="text-sm text-elegant font-medium mb-2">Certifications</div>
              <div className="text-xs text-qatar-gray">Completed and in progress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization; 