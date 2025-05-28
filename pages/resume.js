import { Download, GraduationCap, Award, Calendar, Briefcase } from 'lucide-react';

export default function Resume() {
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
      period: "Jan 2025 - Present",
      description: "Providing hardware and software support, troubleshooting desktops, laptops, and network devices. Assisting in network setup and maintenance, configuring routers, switches, and firewalls."
    },
    {
      title: "Technology Consulting Intern",
      company: "PricewaterhouseCoopers (PwC) - Doha",
      period: "Jul 2024 - Aug 2024",
      description: "Coordinated with stakeholders (Google, Microsoft) to support national digital transformation initiative. Presented alignment of project deliverables with UN SDGs in RFP process."
    },
    {
      title: "Cyber Security Intern",
      company: "Sidra Holding LLC - Doha",
      period: "May 2024 - Jun 2024",
      description: "Conducted penetration testing on blockchain infrastructure using Wireshark, Burp Suite, and Metasploit. Worked with development team to remediate security issues and strengthen smart contract security."
    },
    {
      title: "IT Department Intern",
      company: "Qatar International Islamic Bank (QIIB) - Doha",
      period: "May 2023 - Aug 2023",
      description: "Monitored network traffic using IPS (Tipping Point) and DDoS protection (Arbor DDoS). Conducted packet analysis using Wireshark and gained experience with application firewalls (F5)."
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 holographic">Resume</h1>
          <p className="text-xl text-cyan-400 mb-6">Professional Experience & Education</p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg neon-border hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2" /> Download CV
          </a>
        </div>

        {/* Experience */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-cyan-400" size={32} />
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 neon-border">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-1">{exp.title}</h3>
                    <p className="text-lg text-white mb-2">{exp.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-cyan-200 mb-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-cyan-400" size={32} />
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 neon-border mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-1">{edu.degree}</h3>
                  <p className="text-lg text-white mb-2">{edu.school}</p>
                  <p className="text-cyan-200 flex items-center">
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
                <h4 className="text-lg font-medium mb-3 text-cyan-200">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-cyan-700 text-white rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal Section */}
        <div className="bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 neon-border font-mono animate-fade-in">
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-cyan-400 text-sm font-['Rajdhani']">jaber@resume:~$</div>
          </div>
          <div className="text-green-400 space-y-2 font-['Rajdhani']">
            <div className="flex"><span className="text-cyan-400">$</span> <span className="ml-2">cat /resume/summary</span></div>
            <div className="text-white ml-4">Cybersecurity Analyst | Penetration Tester | Threat Hunter</div>
            <div className="flex"><span className="text-cyan-400">$</span> <span className="ml-2">ls -la /experience</span></div>
            <div className="ml-4 space-y-1 text-sm">
              <div>-rw-r--r--  it-technician.txt</div>
              <div>-rw-r--r--  consulting-intern.txt</div>
              <div>-rw-r--r--  cyber-intern.txt</div>
              <div>-rw-r--r--  bank-intern.txt</div>
            </div>
            <div className="flex"><span className="text-cyan-400">$</span> <span className="ml-2">cat /etc/motto</span></div>
            <div className="text-cyan-400 ml-4">"Securing the digital frontier, one vulnerability at a time."</div>
            <div className="flex items-center"><span className="text-cyan-400">$</span> <span className="ml-2 animate-pulse">_</span></div>
          </div>
        </div>
      </div>
    </section>
  );
} 