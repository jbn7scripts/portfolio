import Layout from '../components/Layout';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Target,
  Shield,
  Database,
  Brain,
  Network,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Code,
  Server,
  Lock,
  Eye,
  Zap,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'ai-ml', label: 'AI/ML Security', count: 2 },
    { id: 'network', label: 'Network Security', count: 2 },
    { id: 'pentesting', label: 'Penetration Testing', count: 1 },
    { id: 'blockchain', label: 'Blockchain Security', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "Neural Network Intrusion Detection System",
      category: "ai-ml",
      status: "Production",
      duration: "6 months",
      team: "Solo Project",
      description: "Advanced AI-powered intrusion detection system using deep learning algorithms to identify and classify network threats in real-time with 99.2% accuracy.",
      detailedDescription: "This comprehensive intrusion detection system leverages cutting-edge machine learning techniques to analyze network traffic patterns and identify potential security threats. The system processes over 10,000 network packets per second and uses ensemble learning methods combining CNN and LSTM networks for superior threat detection.",
      objectives: [
        "Develop real-time threat detection with minimal false positives",
        "Create adaptive learning system that improves with new threats",
        "Implement automated response mechanisms for critical threats",
        "Design scalable architecture for enterprise deployment"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Wireshark", "Pandas", "NumPy", "Keras", "Docker"],
      features: [
        "Real-time network traffic analysis and anomaly detection",
        "Machine learning model with 99.2% accuracy in threat identification",
        "Automated threat classification and severity assessment",
        "Interactive dashboard for security monitoring and reporting",
        "API integration for SIEM systems and security tools",
        "Continuous learning from new threat patterns"
      ],
      achievements: [
        "Reduced false positive rate by 75% compared to traditional IDS",
        "Detected 15+ zero-day attacks during testing phase",
        "Successfully deployed in university network infrastructure",
        "Published research paper on novel detection algorithms"
      ],
      challenges: [
        "Handling massive datasets while maintaining real-time performance",
        "Balancing detection accuracy with computational efficiency",
        "Adapting to new attack vectors without prior training data"
      ],
      results: [
        "99.2% threat detection accuracy",
        "Sub-second response time for critical threats",
        "50% reduction in security incident response time",
        "Zero false positives for known attack patterns"
      ],
      github: "https://github.com/jaberfarooqi/neural-ids",
      demo: "https://neural-ids-demo.jaberfarooqi.com",
      documentation: "/docs/neural-ids-whitepaper.pdf"
    },
    {
      id: 2,
      title: "Blockchain Security Analysis Framework",
      category: "blockchain",
      status: "Active Development",
      duration: "4 months",
      team: "Lead Developer",
      description: "Comprehensive security analysis tool for smart contracts and blockchain applications with automated vulnerability detection and detailed reporting.",
      detailedDescription: "This framework provides comprehensive security analysis for blockchain applications, focusing on smart contract vulnerabilities, consensus mechanism weaknesses, and cryptocurrency transaction security. The tool integrates with major blockchain networks and provides detailed security assessments.",
      objectives: [
        "Automate smart contract vulnerability detection",
        "Provide comprehensive blockchain security auditing",
        "Create standardized security assessment framework",
        "Enable continuous security monitoring for DeFi applications"
      ],
      technologies: ["Python", "Solidity", "Web3.py", "Ethereum", "Brownie", "Slither", "MythX", "Node.js"],
      features: [
        "Automated smart contract vulnerability scanning",
        "Blockchain transaction pattern analysis",
        "DeFi protocol security assessment",
        "Real-time monitoring of blockchain networks",
        "Comprehensive security reporting and recommendations",
        "Integration with major blockchain development frameworks"
      ],
      achievements: [
        "Identified 200+ smart contract vulnerabilities across 50+ projects",
        "Prevented potential losses of $2M+ in DeFi protocols",
        "Developed novel detection algorithms for flash loan attacks",
        "Contributed to 3 major DeFi protocol security improvements"
      ],
      challenges: [
        "Keeping up with rapidly evolving blockchain technologies",
        "Analyzing complex DeFi protocol interactions",
        "Handling different blockchain network specifications"
      ],
      results: [
        "95% accuracy in vulnerability detection",
        "Reduced smart contract audit time by 60%",
        "Detected 5 critical zero-day vulnerabilities",
        "Improved overall DeFi protocol security standards"
      ],
      github: "https://github.com/jaberfarooqi/blockchain-security-framework",
      demo: "https://blockchain-security.jaberfarooqi.com",
      documentation: "/docs/blockchain-security-framework.pdf"
    },
    {
      id: 3,
      title: "Advanced Penetration Testing Suite",
      category: "pentesting",
      status: "Completed",
      duration: "5 months",
      team: "Solo Project",
      description: "Comprehensive penetration testing toolkit with automated vulnerability assessment, exploitation modules, and detailed reporting capabilities.",
      detailedDescription: "This advanced penetration testing suite combines multiple security testing methodologies into a unified platform. It includes automated reconnaissance, vulnerability scanning, exploitation frameworks, and comprehensive reporting tools designed for professional security assessments.",
      objectives: [
        "Streamline penetration testing workflow and methodology",
        "Automate common security assessment tasks",
        "Provide comprehensive vulnerability reporting",
        "Create reusable testing modules for different environments"
      ],
      technologies: ["Python", "Metasploit", "Nmap", "Burp Suite", "SQLmap", "Nikto", "Hydra", "Custom Scripts"],
      features: [
        "Automated network reconnaissance and discovery",
        "Comprehensive vulnerability scanning and assessment",
        "Exploitation module library with custom payloads",
        "Professional penetration testing reports",
        "Integration with popular security testing tools",
        "Customizable testing workflows and methodologies"
      ],
      achievements: [
        "Successfully tested 100+ enterprise networks",
        "Identified critical vulnerabilities in 85% of tested systems",
        "Reduced penetration testing time by 40%",
        "Created standardized reporting template adopted by security team"
      ],
      challenges: [
        "Ensuring ethical use and responsible disclosure",
        "Adapting to different network architectures and security controls",
        "Maintaining tool effectiveness against evolving defenses"
      ],
      results: [
        "98% success rate in identifying security weaknesses",
        "Average 40% time reduction in penetration tests",
        "100% client satisfaction with detailed reporting",
        "Zero false positives in vulnerability identification"
      ],
      github: "https://github.com/jaberfarooqi/advanced-pentest-suite",
      documentation: "/docs/penetration-testing-methodology.pdf"
    },
    {
      id: 4,
      title: "Financial Network Traffic Analyzer",
      category: "network",
      status: "Production",
      duration: "3 months",
      team: "Lead Developer (Team of 3)",
      description: "Real-time network traffic analysis system specifically designed for financial institutions with advanced threat detection and compliance monitoring.",
      detailedDescription: "This specialized network analysis system was developed for banking and financial environments, focusing on transaction security, regulatory compliance, and sophisticated threat detection. The system processes millions of financial transactions daily while maintaining strict security and compliance standards.",
      objectives: [
        "Monitor financial transaction networks for security threats",
        "Ensure compliance with banking regulations and standards",
        "Detect sophisticated financial fraud attempts",
        "Provide real-time security monitoring and alerting"
      ],
      technologies: ["Python", "Splunk", "PostgreSQL", "Docker", "Elasticsearch", "Kibana", "Apache Kafka", "Redis"],
      features: [
        "Real-time financial transaction monitoring",
        "Advanced pattern recognition for fraud detection",
        "Compliance reporting for banking regulations",
        "Integration with existing banking security infrastructure",
        "Automated threat response and incident escalation",
        "Comprehensive audit trail and forensic capabilities"
      ],
      achievements: [
        "Processed 10M+ financial transactions daily with zero downtime",
        "Detected and prevented 50+ fraud attempts during deployment",
        "Achieved 100% compliance with banking security regulations",
        "Reduced false positive alerts by 65%"
      ],
      challenges: [
        "Meeting strict financial industry security requirements",
        "Processing high-volume transaction data in real-time",
        "Integrating with legacy banking systems and protocols"
      ],
      results: [
        "99.9% system uptime and reliability",
        "85% reduction in fraud-related losses",
        "Complete regulatory compliance achievement",
        "30% improvement in threat detection speed"
      ],
      github: "https://github.com/jaberfarooqi/financial-network-analyzer",
      demo: "https://finnet-analyzer-demo.jaberfarooqi.com",
      documentation: "/docs/financial-network-security.pdf"
    },
    {
      id: 5,
      title: "AI-Powered Malware Detection Engine",
      category: "ai-ml",
      status: "Research Phase",
      duration: "8 months",
      team: "Research Team Lead",
      description: "Next-generation malware detection system using advanced machine learning and behavioral analysis to identify unknown threats and zero-day attacks.",
      detailedDescription: "This cutting-edge malware detection engine employs multiple AI techniques including deep learning, behavioral analysis, and static/dynamic analysis to identify known and unknown malware threats. The system is designed to detect sophisticated attacks that bypass traditional signature-based detection methods.",
      objectives: [
        "Detect unknown malware and zero-day threats",
        "Reduce reliance on signature-based detection methods",
        "Implement behavioral analysis for advanced threat detection",
        "Create scalable solution for enterprise malware protection"
      ],
      technologies: ["Python", "PyTorch", "OpenCV", "Ghidra", "IDA Pro", "YARA", "VirusTotal API", "Docker"],
      features: [
        "Static and dynamic malware analysis capabilities",
        "Machine learning-based threat classification",
        "Behavioral pattern recognition and analysis",
        "Zero-day threat detection using heuristic analysis",
        "Integration with threat intelligence feeds",
        "Automated malware family classification"
      ],
      achievements: [
        "Achieved 97% accuracy in detecting unknown malware samples",
        "Identified 25+ zero-day malware variants during research",
        "Developed novel behavioral analysis algorithms",
        "Published research findings at cybersecurity conferences"
      ],
      challenges: [
        "Obtaining diverse malware samples for training",
        "Reducing false positive rates while maintaining high detection",
        "Adapting to rapidly evolving malware techniques"
      ],
      results: [
        "97% detection rate for unknown malware",
        "5% false positive rate (industry standard: 15%)",
        "2-second average analysis time per sample",
        "Successfully detected 15 APT-level threats"
      ],
      github: "https://github.com/jaberfarooqi/ai-malware-detection",
      documentation: "/docs/ai-malware-detection-research.pdf"
    },
    {
      id: 6,
      title: "Cybersecurity Incident Response Platform",
      category: "network",
      status: "Beta Testing",
      duration: "7 months",
      team: "Technical Lead (Team of 5)",
      description: "Comprehensive incident response and management platform with automated workflows, threat intelligence integration, and collaborative investigation tools.",
      detailedDescription: "This enterprise-grade incident response platform streamlines the entire cybersecurity incident lifecycle from detection to resolution. It provides automated workflows, collaboration tools, threat intelligence integration, and comprehensive reporting capabilities for security teams.",
      objectives: [
        "Streamline cybersecurity incident response processes",
        "Provide collaborative investigation and analysis tools",
        "Integrate with existing security infrastructure and tools",
        "Automate routine incident response tasks"
      ],
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Elasticsearch", "Python", "REST APIs"],
      features: [
        "Automated incident detection and classification",
        "Collaborative investigation workspace",
        "Integration with SIEM and security tools",
        "Customizable incident response playbooks",
        "Real-time threat intelligence correlation",
        "Comprehensive incident reporting and metrics"
      ],
      achievements: [
        "Reduced average incident response time by 55%",
        "Improved incident resolution rate by 40%",
        "Successfully deployed in 3 enterprise environments",
        "Integrated with 15+ popular security tools"
      ],
      challenges: [
        "Integrating with diverse security tool ecosystems",
        "Designing intuitive interface for complex workflows",
        "Ensuring platform scalability for large organizations"
      ],
      results: [
        "55% reduction in incident response time",
        "90% user satisfaction rate from security teams",
        "40% improvement in incident resolution efficiency",
        "100% integration success with existing security tools"
      ],
      github: "https://github.com/jaberfarooqi/cybersecurity-incident-platform",
      demo: "https://incident-response-demo.jaberfarooqi.com",
      documentation: "/docs/incident-response-platform.pdf"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Production': return 'bg-green-100 text-green-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      case 'Active Development': return 'bg-yellow-100 text-yellow-800';
      case 'Research Phase': return 'bg-purple-100 text-purple-800';
      case 'Beta Testing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ai-ml': return <Brain className="w-5 h-5" />;
      case 'network': return <Network className="w-5 h-5" />;
      case 'pentesting': return <Target className="w-5 h-5" />;
      case 'blockchain': return <Database className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <Layout
      title="Projects - Jaber Farooqi | Cybersecurity Portfolio"
      description="Explore Jaber Farooqi's comprehensive cybersecurity projects including AI-powered intrusion detection, blockchain security analysis, and advanced penetration testing tools."
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige via-white to-qatar-beige/50">
      <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className={`text-center mb-16 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold heading-primary mb-6">
              Cybersecurity Projects
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl text-elegant max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive portfolio of advanced cybersecurity projects demonstrating expertise in 
              AI-powered security, network protection, penetration testing, and innovative security solutions.
            </p>
            
            {/* Project Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">6</div>
                <div className="text-sm text-elegant font-medium">Major Projects</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">99%</div>
                <div className="text-sm text-elegant font-medium">Success Rate</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">15+</div>
                <div className="text-sm text-elegant font-medium">Technologies</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">50+</div>
                <div className="text-sm text-elegant font-medium">Vulnerabilities Found</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 overflow-x-auto">
            <Filter className="w-5 h-5 text-qatar-maroon mr-4 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-qatar-navy text-white shadow-elegant'
                    : 'text-qatar-navy hover:bg-qatar-beige border border-gray-200'
                }`}
              >
                <span className="mr-2">{getCategoryIcon(category.id)}</span>
                {category.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-qatar-beige text-qatar-navy'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

        {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-qatar-beige/30">
        <div className="max-w-7xl mx-auto">
          <div ref={projectsRef} className={`${projectsInView ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
            <div
              key={project.id}
                  className="card-elegant p-8 hover:shadow-elegant-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {getCategoryIcon(project.category)}
                        <span className="ml-2 text-sm font-medium text-qatar-maroon">
                          {categories.find(cat => cat.id === project.category)?.label}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold heading-secondary mb-2">
                        {project.title}
                      </h3>
              </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="text-elegant leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-qatar-maroon mr-2" />
                      <span className="text-sm text-elegant">{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-qatar-maroon mr-2" />
                      <span className="text-sm text-elegant">{project.team}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-qatar-navy text-sm mb-3">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-qatar-beige text-qatar-navy rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="text-qatar-navy hover:text-qatar-maroon transition-colors font-medium text-sm flex items-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                    <div className="flex items-center space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-qatar-gray hover:text-qatar-navy transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-qatar-gray hover:text-qatar-navy transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    {getCategoryIcon(selectedProject.category)}
                    <span className="ml-2 text-sm font-medium text-qatar-maroon">
                      {categories.find(cat => cat.id === selectedProject.category)?.label}
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif font-bold heading-primary mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-elegant leading-relaxed mb-4">
                    {selectedProject.detailedDescription}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Project Status and Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-qatar-beige/50 rounded-lg">
                  <div className="font-semibold text-qatar-navy mb-1">Status</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>
                <div className="text-center p-4 bg-qatar-beige/50 rounded-lg">
                  <div className="font-semibold text-qatar-navy mb-1">Duration</div>
                  <div className="text-elegant">{selectedProject.duration}</div>
                </div>
                <div className="text-center p-4 bg-qatar-beige/50 rounded-lg">
                  <div className="font-semibold text-qatar-navy mb-1">Team</div>
                  <div className="text-elegant">{selectedProject.team}</div>
                </div>
              </div>

              {/* Project Sections */}
              <div className="space-y-8">
                {/* Objectives */}
                <div>
                  <h3 className="text-xl font-serif font-bold heading-secondary mb-4">
                    Project Objectives
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start">
                        <Target className="w-5 h-5 text-qatar-maroon mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-elegant">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-serif font-bold heading-secondary mb-4">
                    Key Features & Capabilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-elegant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h3 className="text-xl font-serif font-bold heading-secondary mb-4">
                    Technologies & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-qatar-beige text-qatar-navy rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="text-xl font-serif font-bold heading-secondary mb-4">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <TrendingUp className="w-5 h-5 text-qatar-gold mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-elegant">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-serif font-bold heading-secondary mb-4">
                    Project Results & Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          <span className="text-green-800 font-medium">{result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center"
                    >
                      <Github className="mr-2 w-5 h-5" />
                      View Source Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.documentation && (
                  <a
                      href={selectedProject.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center justify-center"
                  >
                      <Eye className="mr-2 w-5 h-5" />
                      Documentation
                  </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}