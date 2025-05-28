import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "IDS with ML Algorithms",
      description: "An intelligent intrusion detection system leveraging machine learning algorithms for real-time threat detection and anomaly analysis. Built with Python and integrated with network monitoring tools.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Wireshark", "Suricata"],
      features: ["Real-time Network Monitoring", "ML-based Anomaly Detection", "Threat Classification", "Alert System", "Performance Analytics"],
      liveUrl: "https://github.com/jaberfarooqi/ids-ml",
      githubUrl: "https://github.com/jaberfarooqi/ids-ml",
      date: "2024",
      status: "Completed"
    },
    {
      id: 2,
      title: "Blockchain Security Analysis Tool",
      description: "A comprehensive security analysis tool for blockchain infrastructure, featuring smart contract vulnerability detection and protocol-level security assessment using industry-standard tools.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Solidity", "Remix IDE", "Web3.py", "Ethereum"],
      features: ["Smart Contract Analysis", "Vulnerability Detection", "Security Reporting", "Blockchain Monitoring", "Threat Assessment"],
      liveUrl: null,
      githubUrl: "https://github.com/jaberfarooqi/blockchain-security",
      date: "2024",
      status: "Completed"
    },
    {
      id: 3,
      title: "Stroke Prediction Model",
      description: "A machine learning model for early stroke prediction using healthcare data analysis. Implements various ML algorithms to identify high-risk patients and provide predictive insights.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
      features: ["Data Preprocessing", "Feature Engineering", "Multiple ML Models", "Risk Assessment", "Visualization Dashboard"],
      liveUrl: "https://github.com/jaberfarooqi/stroke-prediction",
      githubUrl: "https://github.com/jaberfarooqi/stroke-prediction",
      date: "2023",
      status: "Completed"
    },
    {
      id: 4,
      title: "Financial Forecasting Model",
      description: "An advanced financial forecasting system using time series analysis and machine learning to predict market trends and financial indicators with high accuracy.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "LSTM", "Prophet", "Pandas", "Plotly"],
      features: ["Time Series Analysis", "Trend Prediction", "Risk Modeling", "Interactive Charts", "Performance Metrics"],
      liveUrl: null,
      githubUrl: "https://github.com/jaberfarooqi/financial-forecasting",
      date: "2023",
      status: "Completed"
    },
    {
      id: 5,
      title: "University Inventory System",
      description: "A comprehensive inventory management system for university resources with real-time tracking, automated alerts, and detailed reporting capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap"],
      features: ["Asset Tracking", "Automated Alerts", "Report Generation", "User Management", "Audit Trail"],
      liveUrl: null,
      githubUrl: "https://github.com/jaberfarooqi/university-inventory",
      date: "2023",
      status: "Completed"
    },
    {
      id: 6,
      title: "Network Traffic Analyzer",
      description: "A real-time network traffic analysis tool built during banking internship, featuring packet inspection, threat detection, and comprehensive security monitoring.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Wireshark", "Scapy", "Flask", "SQLite"],
      features: ["Packet Analysis", "Real-time Monitoring", "Threat Detection", "Security Alerts", "Traffic Visualization"],
      liveUrl: null,
      githubUrl: "https://github.com/jaberfarooqi/network-analyzer",
      date: "2023",
      status: "Completed"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-900 text-green-300';
      case 'Ongoing':
        return 'bg-blue-900 text-blue-300';
      case 'Planning':
        return 'bg-yellow-900 text-yellow-300';
      default:
        return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills in full-stack development, 
            machine learning, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 flex items-center justify-center">
                <div className="text-white text-lg font-medium">Project Screenshot</div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-slate-400 text-sm flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-200 mb-2 flex items-center">
                    <Tag size={14} className="mr-1" />
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Features:</h4>
                  <ul className="text-slate-400 text-sm space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Interested in My Work?</h2>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always working on new projects and learning new technologies. 
              Check out my GitHub for more projects and contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
              >
                <Github className="mr-2" size={20} />
                View GitHub Profile
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}