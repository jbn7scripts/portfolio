import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: "BSc Computer Science (Honours)",
      school: "University of Westminster",
      year: "2022 - 2025",
      gpa: "Expected First Class",
      coursework: ["Network Security", "Penetration Testing", "Machine Learning for Security", "Blockchain Security", "AI & Cybersecurity", "Threat Analysis"]
    },
    {
      degree: "Diploma of Higher Education",
      school: "Gems American Academy",
      year: "2018 - 2021",
      gpa: "Distinction",
      coursework: ["Computer Science Fundamentals", "Programming", "Mathematics", "Digital Systems"]
    }
  ];

  const experience = [
    {
      title: "IT Technician",
      company: "University of Westminster - London",
      period: "January 2025 - Present",
      description: "Providing hardware and software support, troubleshooting desktops, laptops, and network devices. Assisting in network setup and maintenance, configuring routers, switches, and firewalls.",
      achievements: ["Improved system efficiency and minimized downtime", "Resolved connectivity issues across campus network"]
    },
    {
      title: "Technology Consulting Intern",
      company: "PricewaterhouseCoopers (PwC) - Doha",
      period: "July 2024 - August 2024",
      description: "Coordinated with stakeholders (Google, Microsoft) to support national digital transformation initiative. Presented alignment of project deliverables with UN SDGs in RFP process.",
      achievements: ["Designed centralized onboarding toolkit", "Enhanced cross-functional efficiency through documentation"]
    },
    {
      title: "Cyber Security Intern",
      company: "Sidra Holding LLC - Doha",
      period: "May 2024 - June 2024",
      description: "Conducted penetration testing on blockchain infrastructure using Wireshark, Burp Suite, and Metasploit. Worked with development team to remediate security issues and strengthen smart contract security.",
      achievements: ["Identified critical vulnerabilities in blockchain systems", "Enhanced smart contract security protocols"]
    },
    {
      title: "IT Department Intern",
      company: "Qatar International Islamic Bank (QIIB) - Doha",
      period: "May 2023 - August 2023",
      description: "Monitored network traffic using IPS (Tipping Point) and DDoS protection (Arbor DDoS). Conducted packet analysis using Wireshark and gained experience with application firewalls (F5).",
      achievements: ["Detected and mitigated security threats", "Secured banking applications against cyber threats"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            I'm a passionate Computer Science graduate with a strong foundation in software development 
            and a keen interest in creating innovative solutions that make a difference.
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="mr-3 text-blue-400" size={24} />
              My Journey
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                My journey into cybersecurity began during my studies at the University of Westminster, 
                where I discovered my passion for protecting digital infrastructure and solving complex 
                security challenges. What started as curiosity about network vulnerabilities evolved 
                into specialized expertise in penetration testing and threat analysis.
              </p>
              <p>
                Through internships at prestigious organizations like PwC, Sidra Holding, and Qatar 
                International Islamic Bank, I've gained hands-on experience in enterprise security, 
                blockchain security, and financial sector cybersecurity. Each role has deepened my 
                understanding of how to protect critical systems and data.
              </p>
              <p>
                I'm particularly passionate about the intersection of AI and cybersecurity, leveraging 
                machine learning for threat detection and anomaly analysis. When I'm not analyzing 
                network traffic or conducting penetration tests, you can find me researching emerging 
                security threats and contributing to the cybersecurity community.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-400" size={32} />
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-slate-300 mb-2">{edu.school}</p>
                  <p className="text-slate-400 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    {edu.year}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">
                    <Award className="mr-1" size={14} />
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3 text-slate-200">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">{exp.title}</h3>
                    <p className="text-lg text-slate-300 mb-2">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 mb-4">{exp.description}</p>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-slate-200">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {[
                { category: "Security Tools", skills: ["Metasploit", "Burp Suite", "Wireshark", "Kali Linux", "Nmap"] },
                { category: "Network Security", skills: ["Tipping Point", "Snort", "Suricata", "F5 Firewalls", "Arbor DDoS"] },
                { category: "Programming", skills: ["Python", "JavaScript", "SQL", "Bash Scripting", "PowerShell"] },
                { category: "SIEM & Intelligence", skills: ["Splunk", "Chronicle Security", "YARA", "Threat Hunting"] }
              ].map((group) => (
                <div key={group.category}>
                  <h4 className="font-semibold text-slate-200 mb-2">{group.category}:</h4>
                  <p className="text-slate-400">{group.skills.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Interests & Hobbies</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                AI and machine learning applications in cybersecurity
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Blockchain security and smart contract analysis
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Threat hunting and advanced persistent threat (APT) research
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Cybersecurity conferences and capture-the-flag competitions
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">•</span>
                Open source security tools development and contribution
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}