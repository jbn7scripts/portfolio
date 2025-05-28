import { useState, useEffect } from 'react';
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
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div ref={heroRef} className={`text-center max-w-2xl sm:max-w-4xl mx-auto z-10 ${heroInView ? 'motion-safe:animate-zoom-in' : 'opacity-0'}`}>
        {/* Holographic Avatar */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 motion-safe:animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-cyan-400/30">
              <div className="p-3 sm:p-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                <Terminal className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 font-['Orbitron']">
          <span className="block text-white mb-2">Hi, I'm</span>
          <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)] font-extrabold">
            JABER FAROOQI
          </span>
        </h1>
        
        <div className="text-lg sm:text-2xl md:text-3xl text-cyan-400 mb-6 sm:mb-8 h-10 sm:h-12 font-['Rajdhani'] font-medium">
          <span className="typewriter">
            {typewriterText}
            <span className={`border-r-2 border-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </span>
        </div>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl mx-auto leading-relaxed font-['Rajdhani']">
          Elite cybersecurity specialist with extensive experience in penetration testing, network defense, 
          and AI-powered security solutions. Protecting digital infrastructure from advanced persistent threats 
          across government and financial sectors.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-16 w-full">
          <CyberButton href="/projects" variant="primary" className="text-base sm:text-lg w-full sm:w-auto py-4 sm:py-3">
            <Zap className="mr-2 w-5 h-5" />
            Explore Arsenal
            <ArrowRight className="ml-2 w-5 h-5" />
          </CyberButton>
          <CyberButton href="/resume.pdf" variant="secondary" className="text-base sm:text-lg w-full sm:w-auto py-4 sm:py-3">
            <Download className="mr-2 w-5 h-5" />
            Download Intel
          </CyberButton>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-xs sm:max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-black/40 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 sm:p-6 neon-border hover:scale-105 transition-all duration-300 ${heroInView ? 'motion-safe:animate-slide-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-cyan-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white mb-1 font-['Orbitron']">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-400 font-['Rajdhani']">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-4 w-2 h-2 bg-cyan-400 rounded-full motion-safe:animate-float opacity-70"></div>
      <div className="absolute top-40 right-8 w-3 h-3 bg-pink-400 rounded-full motion-safe:animate-float opacity-70" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-8 w-2 h-2 bg-yellow-400 rounded-full motion-safe:animate-float opacity-70" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-40 right-4 w-3 h-3 bg-green-400 rounded-full motion-safe:animate-float opacity-70" style={{animationDelay: '1s'}}></div>
    </section>
  );
}
