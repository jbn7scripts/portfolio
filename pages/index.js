import { useState, useEffect } from 'react';
import AdvancedLayout from '../components/AdvancedLayout';
import CyberButton from '../components/CyberButton';
import Link from 'next/link';
import { ArrowRight, Download, Shield, Zap, Database, Globe, Target, Lock, Eye, Cpu, Wifi, Code, Terminal, Activity } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [typewriterText, setTypewriterText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Cybersecurity Analyst & Penetration Testing Specialist";

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  const skills = [
    { 
      name: 'Network Security', 
      icon: <Shield className="w-8 h-8" />, 
      technologies: ['Tipping Point', 'Snort', 'Wireshark', 'Suricata'],
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Penetration Testing', 
      icon: <Target className="w-8 h-8" />, 
      technologies: ['Metasploit', 'Kali Linux', 'Burp Suite', 'Nmap'],
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Threat Intelligence', 
      icon: <Eye className="w-8 h-8" />, 
      technologies: ['Splunk', 'Chronicle Security', 'YARA', 'SIEM'],
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'AI & Automation', 
      icon: <Cpu className="w-8 h-8" />, 
      technologies: ['Python Scripting', 'ML for Security', 'Anomaly Detection', 'Blockchain Security'],
      color: 'from-green-500 to-teal-500'
    },
  ];

  const stats = [
    { label: 'Security Audits', value: '50+', icon: <Lock className="w-6 h-6" /> },
    { label: 'Vulnerabilities Found', value: '200+', icon: <Target className="w-6 h-6" /> },
    { label: 'Systems Secured', value: '100+', icon: <Shield className="w-6 h-6" /> },
    { label: 'Threat Incidents', value: '500+', icon: <Activity className="w-6 h-6" /> },
  ];

  return (
    <AdvancedLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div ref={heroRef} className={`text-center max-w-6xl mx-auto z-10 ${heroInView ? 'animate-zoom-in' : 'opacity-0'}`}>
          {/* Holographic Avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-cyan-400/30">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                  <Terminal className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-['Orbitron']">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="holographic text-6xl sm:text-8xl animate-pulse-glow">
              JABER FAROOQI
            </span>
          </h1>
          
          <div className="text-xl sm:text-3xl text-cyan-400 mb-8 h-12 font-['Rajdhani'] font-medium">
            <span className="typewriter">
              {typewriterText}
              <span className={`border-r-2 border-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-['Rajdhani']">
            Elite cybersecurity specialist with extensive experience in penetration testing, network defense, 
            and AI-powered security solutions. Protecting digital infrastructure from advanced persistent threats 
            across government and financial sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <CyberButton href="/projects" variant="primary" className="text-lg">
              <Zap className="mr-2 w-5 h-5" />
              Explore Arsenal
              <ArrowRight className="ml-2 w-5 h-5" />
            </CyberButton>
            <CyberButton href="/resume.pdf" variant="secondary" className="text-lg">
              <Download className="mr-2 w-5 h-5" />
              Download Intel
            </CyberButton>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 neon-border hover:scale-105 transition-all duration-300 ${
                  heroInView ? 'animate-slide-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-cyan-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1 font-['Orbitron']">{stat.value}</div>
                <div className="text-sm text-gray-400 font-['Rajdhani']">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-70" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-green-400 rounded-full animate-float opacity-70" style={{animationDelay: '1s'}}></div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div ref={skillsRef} className={`text-center mb-16 ${skillsInView ? 'animate-zoom-in' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 font-['Orbitron'] holographic">
              CYBER ARSENAL
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-['Rajdhani']">
              Advanced cybersecurity technologies and frameworks for enterprise-level threat detection and mitigation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 hover:scale-105 transition-all duration-500 card-3d neon-border scan-line ${
                  skillsInView ? 'animate-slide-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:text-white transition-colors duration-300 animate-float">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white font-['Orbitron'] group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <ul className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <li
                        key={tech}
                        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-['Rajdhani']"
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                      >
                        <span className="text-cyan-400 mr-2">▸</span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div ref={projectsRef} className={`text-center mb-16 ${projectsInView ? 'animate-zoom-in' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6 font-['Orbitron'] holographic">
              MISSION LOGS
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-['Rajdhani']">
              Critical security operations and advanced threat detection systems deployed in enterprise environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "AI-Powered IDS",
                tech: "Machine Learning",
                description: "Advanced intrusion detection using neural networks",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Blockchain Security Suite",
                tech: "Smart Contract Analysis",
                description: "Comprehensive blockchain vulnerability assessment",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Network Traffic Analyzer",  
                tech: "Real-time Monitoring",
                description: "Enterprise-grade packet analysis and threat detection",
                color: "from-green-500 to-teal-500"
              }
            ].map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 card-3d neon-border ${
                  projectsInView ? 'animate-slide-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Terminal className="w-16 h-16 text-white animate-pulse-glow" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-xs text-cyan-400 font-['Rajdhani'] font-medium">{project.tech}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white font-['Orbitron'] group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 font-['Rajdhani']">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <span className="text-cyan-400 hover:text-white font-medium cursor-pointer transition-colors duration-300 font-['Rajdhani']">
                      Deploy →
                    </span>
                    <span className="text-gray-400 hover:text-gray-300 font-medium cursor-pointer transition-colors duration-300 font-['Rajdhani']">
                      Source Code
                    </span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <CyberButton href="/projects" variant="accent" className="text-lg">
              <Database className="mr-2 w-5 h-5" />
              Access Full Database
              <ArrowRight className="ml-2 w-5 h-5" />
            </CyberButton>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 neon-border font-mono">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-gray-400 text-sm font-['Rajdhani']">jaber@cybersec:~$</div>
            </div>
            <div className="text-green-400 space-y-2 font-['Rajdhani']">
              <div className="flex"><span className="text-cyan-400">$</span> <span className="ml-2">whoami</span></div>
              <div className="text-white ml-4">Cybersecurity Analyst | Penetration Tester | Threat Hunter</div>
              <div className="flex"><span className="text-cyan-400">$</span> <span className="ml-2">ls -la /skills</span></div>
              <div className="ml-4 space-y-1 text-sm">
                <div>drwxr-xr-x  penetration-testing/</div>
                <div>drwxr-xr-x  network-security/</div>
                <div>drwxr-xr-x  threat-intelligence/</div>
                <div>drwxr-xr-x  blockchain-security/</div>
                <div>drwxr-xr-x  ai-cybersecurity/</div>
              </div>
              <div className="flex"><span className="text-cyan-400">$</span> <span className="ml-2">cat /etc/motto</span></div>
              <div className="text-cyan-400 ml-4">"Securing the digital frontier, one vulnerability at a time."</div>
              <div className="flex items-center"><span className="text-cyan-400">$</span> <span className="ml-2 animate-pulse">_</span></div>
            </div>
          </div>
        </div>
      </section>
    </AdvancedLayout>
  );
}
