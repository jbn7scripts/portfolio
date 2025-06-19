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
  ArrowRight,
  BookOpen,
  Lightbulb,
  User
} from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'academic', label: 'Academic Projects', count: 3 },
    { id: 'learning', label: 'Learning Projects', count: 2 },
    { id: 'personal', label: 'Personal Projects', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "Network Security Monitoring Tool",
      category: "academic",
      status: "Academic Project",
      duration: "3 months",
      team: "Solo Project",
      description: "Basic network traffic analyzer developed as part of computer networks coursework to understand network protocols and security monitoring.",
      detailedDescription: "This project was developed during my computer networks course to gain practical understanding of network protocols, packet analysis, and basic security monitoring. The tool captures and analyzes network traffic to identify potential security issues and unusual patterns.",
      objectives: [
        "Learn network protocol analysis and packet inspection",
        "Understand basic network security concepts",
        "Develop practical skills in network monitoring",
        "Create a functional security analysis tool"
      ],
      technologies: ["Python", "Wireshark", "SQLite", "Tkinter", "Scapy", "Matplotlib"],
      features: [
        "Real-time network packet capture and analysis",
        "Basic protocol identification and classification",
        "Simple anomaly detection for unusual traffic patterns",
        "User-friendly GUI for monitoring and reporting",
        "Data storage and historical analysis capabilities",
        "Basic alert system for suspicious activities"
      ],
      achievements: [
        "Successfully captured and analyzed network traffic",
        "Identified common network protocols and their characteristics",
        "Developed understanding of network security fundamentals",
        "Received high marks for practical implementation"
      ],
      challenges: [
        "Learning complex network protocols and packet structures",
        "Handling large volumes of network data efficiently",
        "Creating an intuitive user interface for data visualization"
      ],
      results: [
        "Functional network monitoring tool",
        "Improved understanding of network security",
        "Practical experience with Python networking libraries",
        "Academic project completed successfully"
      ],
      github: "https://github.com/jbn7scripts/network-monitor",
      demo: null,
      documentation: null
    },
    {
      id: 2,
      title: "Web Application Security Scanner",
      category: "learning",
      status: "Learning Project",
      duration: "2 months",
      team: "Solo Project",
      description: "Educational tool for identifying common web vulnerabilities like SQL injection, XSS, and CSRF attacks.",
      detailedDescription: "This project was developed to learn about web application security and common vulnerabilities. It includes basic scanning capabilities for educational purposes and helps understand how web attacks work and how to prevent them.",
      objectives: [
        "Learn about common web application vulnerabilities",
        "Understand how security scanning tools work",
        "Develop practical web security knowledge",
        "Create educational security testing tool"
      ],
      technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript", "Requests", "BeautifulSoup"],
      features: [
        "Basic SQL injection vulnerability detection",
        "Cross-site scripting (XSS) testing",
        "Cross-site request forgery (CSRF) detection",
        "Simple web crawler for link discovery",
        "Basic vulnerability reporting interface",
        "Educational explanations of found vulnerabilities"
      ],
      achievements: [
        "Learned about web application security fundamentals",
        "Developed understanding of common attack vectors",
        "Created functional security testing tool",
        "Gained practical experience with web technologies"
      ],
      challenges: [
        "Understanding complex web security concepts",
        "Implementing secure coding practices",
        "Creating comprehensive vulnerability detection logic"
      ],
      results: [
        "Educational web security scanner",
        "Improved web security knowledge",
        "Practical experience with web development",
        "Understanding of security testing methodologies"
      ],
      github: "https://github.com/jbn7scripts/web-security-scanner",
      demo: null,
      documentation: null
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "personal",
      status: "Active",
      duration: "1 month",
      team: "Solo Project",
      description: "Personal portfolio website showcasing skills, projects, and professional information built with modern web technologies.",
      detailedDescription: "This portfolio website demonstrates full-stack development skills using modern web technologies. It includes responsive design, interactive elements, and showcases my academic projects and skills in an engaging way.",
      objectives: [
        "Create professional online presence",
        "Demonstrate web development skills",
        "Showcase academic projects and achievements",
        "Learn modern web development frameworks"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Git"],
      features: [
        "Responsive design for all devices",
        "Interactive project showcase",
        "Professional contact forms",
        "Modern UI/UX design",
        "SEO optimization",
        "Fast loading and performance"
      ],
      achievements: [
        "Successfully deployed professional portfolio",
        "Demonstrated full-stack development skills",
        "Created engaging user experience",
        "Learned modern web development practices"
      ],
      challenges: [
        "Learning Next.js and React framework",
        "Implementing responsive design",
        "Optimizing performance and SEO"
      ],
      results: [
        "Professional portfolio website",
        "Improved web development skills",
        "Online presence for job applications",
        "Practical experience with modern frameworks"
      ],
      github: "https://github.com/jbn7scripts/portfolio",
      demo: "https://jaberfarooqi.com",
      documentation: null
    },
    {
      id: 4,
      title: "Data Analysis Project",
      category: "academic",
      status: "Academic Project",
      duration: "2 months",
      team: "Solo Project",
      description: "Statistical analysis project using Python to analyze cybersecurity datasets and identify patterns in security incidents.",
      detailedDescription: "This academic project focused on data analysis and visualization using Python. I worked with cybersecurity datasets to understand patterns in security incidents, learning about data processing, statistical analysis, and visualization techniques.",
      objectives: [
        "Learn data analysis and visualization techniques",
        "Apply statistical methods to cybersecurity data",
        "Develop Python programming skills",
        "Create meaningful insights from large datasets"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "SQLite"],
      features: [
        "Data cleaning and preprocessing",
        "Statistical analysis and hypothesis testing",
        "Data visualization and chart creation",
        "Pattern recognition in security data",
        "Report generation with findings",
        "Interactive data exploration"
      ],
      achievements: [
        "Successfully analyzed large cybersecurity datasets",
        "Created meaningful visualizations and insights",
        "Developed strong data analysis skills",
        "Received excellent feedback on project presentation"
      ],
      challenges: [
        "Working with large and complex datasets",
        "Learning statistical analysis concepts",
        "Creating clear and meaningful visualizations"
      ],
      results: [
        "Comprehensive data analysis report",
        "Improved Python and data science skills",
        "Understanding of cybersecurity data patterns",
        "Academic project completed successfully"
      ],
      github: "https://github.com/jbn7scripts/data-analysis-project",
      demo: null,
      documentation: null
    },
    {
      id: 5,
      title: "Basic Cryptography Implementation",
      category: "learning",
      status: "Learning Project",
      duration: "1 month",
      team: "Solo Project",
      description: "Educational implementation of basic cryptographic algorithms including encryption, decryption, and hash functions.",
      detailedDescription: "This project was developed to learn about cryptography fundamentals. I implemented basic cryptographic algorithms from scratch to understand how encryption, decryption, and hashing work in practice.",
      objectives: [
        "Learn cryptography fundamentals and algorithms",
        "Implement basic encryption and decryption",
        "Understand hash functions and digital signatures",
        "Develop secure coding practices"
      ],
      technologies: ["Python", "Cryptography", "Hashlib", "Base64", "Math", "Random"],
      features: [
        "Symmetric encryption (AES-like implementation)",
        "Asymmetric encryption (RSA-like implementation)",
        "Hash function implementations",
        "Digital signature creation and verification",
        "Key generation and management",
        "Educational documentation and examples"
      ],
      achievements: [
        "Learned cryptography fundamentals",
        "Implemented working cryptographic algorithms",
        "Developed understanding of security principles",
        "Created educational materials for learning"
      ],
      challenges: [
        "Understanding complex mathematical concepts",
        "Implementing secure cryptographic algorithms",
        "Ensuring proper key management practices"
      ],
      results: [
        "Functional cryptography library",
        "Improved understanding of security concepts",
        "Educational resource for others",
        "Practical experience with cryptography"
      ],
      github: "https://github.com/jbn7scripts/cryptography-learning",
      demo: null,
      documentation: null
    },
    {
      id: 6,
      title: "Simple Chat Application",
      category: "academic",
      status: "Academic Project",
      duration: "3 months",
      team: "Group Project (3 members)",
      description: "Basic chat application with encryption features developed as part of software engineering coursework.",
      detailedDescription: "This group project focused on software engineering principles, including requirements analysis, design, implementation, and testing. The application includes basic chat functionality with simple encryption features.",
      objectives: [
        "Learn software engineering methodologies",
        "Work effectively in a team environment",
        "Implement secure communication features",
        "Apply software development best practices"
      ],
      technologies: ["Java", "Swing", "Socket Programming", "SQLite", "Git", "JUnit"],
      features: [
        "Real-time messaging between users",
        "Basic user authentication system",
        "Simple message encryption",
        "User interface with Java Swing",
        "Database storage for messages",
        "Basic error handling and validation"
      ],
      achievements: [
        "Successfully completed group project",
        "Learned team collaboration and version control",
        "Implemented working chat application",
        "Applied software engineering principles"
      ],
      challenges: [
        "Coordinating work with team members",
        "Learning Java and Swing framework",
        "Implementing network communication features"
      ],
      results: [
        "Functional chat application",
        "Improved teamwork and collaboration skills",
        "Understanding of software development lifecycle",
        "Academic project completed successfully"
      ],
      github: "https://github.com/jbn7scripts/chat-application",
      demo: null,
      documentation: null
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
      case 'Academic Project': return 'bg-indigo-100 text-indigo-800';
      case 'Learning Project': return 'bg-teal-100 text-teal-800';
      case 'Active': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'academic': return <BookOpen className="w-5 h-5" />;
      case 'learning': return <Lightbulb className="w-5 h-5" />;
      case 'personal': return <User className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <main className="flex-1 py-20 lg:py-24">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige via-white to-qatar-beige/50">
      <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className={`text-center mb-16 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold heading-primary mb-6">
              Cybersecurity Projects
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl text-elegant max-w-4xl mx-auto leading-relaxed mb-8">
              Collection of academic and personal projects demonstrating practical application of cybersecurity concepts, 
              programming skills, and problem-solving abilities developed through coursework and self-directed learning.
            </p>
            
            {/* Project Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">6</div>
                <div className="text-sm text-elegant font-medium">Projects</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">3</div>
                <div className="text-sm text-elegant font-medium">Academic</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">8+</div>
                <div className="text-sm text-elegant font-medium">Technologies</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">100%</div>
                <div className="text-sm text-elegant font-medium">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === 'all'
              ? 'bg-white text-qatar-maroon border-2 border-qatar-maroon shadow-elegant'
              : 'bg-white text-qatar-navy hover:text-qatar-maroon hover:border-2 hover:border-qatar-maroon'
          }`}
        >
          <Code size={18} className="mr-2" />
          All Projects
          <span className="ml-2 text-sm opacity-75">{categories.find(c => c.id === 'all').count}</span>
        </button>

        <button
          onClick={() => setSelectedCategory('academic')}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === 'academic'
              ? 'bg-white text-qatar-maroon border-2 border-qatar-maroon shadow-elegant'
              : 'bg-white text-qatar-navy hover:text-qatar-maroon hover:border-2 hover:border-qatar-maroon'
          }`}
        >
          <BookOpen size={18} className="mr-2" />
          Academic Projects
          <span className="ml-2 text-sm opacity-75">{categories.find(c => c.id === 'academic').count}</span>
        </button>

        <button
          onClick={() => setSelectedCategory('learning')}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === 'learning'
              ? 'bg-white text-qatar-maroon border-2 border-qatar-maroon shadow-elegant'
              : 'bg-white text-qatar-navy hover:text-qatar-maroon hover:border-2 hover:border-qatar-maroon'
          }`}
        >
          <Lightbulb size={18} className="mr-2" />
          Learning Projects
          <span className="ml-2 text-sm opacity-75">{categories.find(c => c.id === 'learning').count}</span>
        </button>

        <button
          onClick={() => setSelectedCategory('personal')}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === 'personal'
              ? 'bg-white text-qatar-maroon border-2 border-qatar-maroon shadow-elegant'
              : 'bg-white text-qatar-navy hover:text-qatar-maroon hover:border-2 hover:border-qatar-maroon'
          }`}
        >
          <User size={18} className="mr-2" />
          Personal Projects
          <span className="ml-2 text-sm opacity-75">{categories.find(c => c.id === 'personal').count}</span>
        </button>
        </div>

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
    </main>
  );
}