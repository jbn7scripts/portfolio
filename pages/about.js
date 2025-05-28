import Layout from '../components/Layout';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  Target, 
  Award, 
  BookOpen, 
  Coffee, 
  Mountain, 
  Camera, 
  Code2, 
  Brain, 
  Heart,
  Users,
  Lightbulb,
  Globe,
  CheckCircle,
  ArrowRight,
  Quote,
  Gamepad2,
  Music,
  Dumbbell,
  Plane
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1 });

  const tabs = [
    { id: 'story', label: 'My Journey', icon: <BookOpen size={18} /> },
    { id: 'values', label: 'Professional Values', icon: <Heart size={18} /> },
    { id: 'interests', label: 'Personal Interests', icon: <Coffee size={18} /> },
    { id: 'goals', label: 'Future Vision', icon: <Target size={18} /> },
  ];

  const coreValues = [
    {
      title: "Continuous Learning",
      description: "In cybersecurity, staying current isn't optional—it's essential. I dedicate time daily to learning new attack vectors, defense strategies, and emerging technologies.",
      icon: <Brain className="w-8 h-8" />,
      examples: ["Daily threat intelligence research", "Advanced certification pursuits", "Zero-day vulnerability analysis"]
    },
    {
      title: "Ethical Responsibility", 
      description: "With great power comes great responsibility. I believe in using security knowledge to protect and defend, never to harm or exploit.",
      icon: <Shield className="w-8 h-8" />,
      examples: ["Responsible disclosure practices", "Mentoring junior professionals", "Community security education"]
    },
    {
      title: "Innovation & Excellence",
      description: "The best security solutions come from creative thinking and meticulous execution. I approach every challenge with fresh perspectives.",
      icon: <Lightbulb className="w-8 h-8" />,
      examples: ["AI-powered detection systems", "Novel testing methodologies", "Automated security frameworks"]
    },
    {
      title: "Collaborative Leadership",
      description: "Security is a team effort. The strongest defenses are built through collaboration, knowledge sharing, and collective expertise.",
      icon: <Users className="w-8 h-8" />,
      examples: ["Cross-functional integration", "Open-source contributions", "Industry knowledge sharing"]
    }
  ];

  const personalInterests = [
    {
      title: "Gaming & Esports",
      description: "Strategic thinking and quick decision-making translate well to cybersecurity",
      icon: <Gamepad2 className="w-6 h-6" />,
      details: ["Competitive gaming strategy", "Team coordination", "Real-time problem solving"]
    },
    {
      title: "Photography",
      description: "Capturing moments and perspectives, documenting the digital world",
      icon: <Camera className="w-6 h-6" />,
      details: ["Technology documentation", "Security conference coverage", "London street photography"]
    },
    {
      title: "Travel & Culture",
      description: "Exploring diverse perspectives and global security practices",
      icon: <Plane className="w-6 h-6" />,
      details: ["Cultural cybersecurity approaches", "International threat landscapes", "Global security conferences"]
    },
    {
      title: "Music Production",
      description: "Creative expression and technical precision in audio engineering",
      icon: <Music className="w-6 h-6" />,
      details: ["Digital audio workstations", "Sound design techniques", "Creative problem solving"]
    },
    {
      title: "Fitness & Wellness",
      description: "Mental and physical balance for peak performance",
      icon: <Dumbbell className="w-6 h-6" />,
      details: ["Stress management", "Physical conditioning", "Mental clarity focus"]
    }
  ];

  const lifeGoals = [
    {
      title: "Professional Excellence",
      description: "Become a recognized leader in cybersecurity innovation",
      timeline: "Next 5 years",
      milestones: ["Lead security architect role", "Speaking at major conferences", "Published security research"]
    },
    {
      title: "Global Impact",
      description: "Contribute to making the digital world safer for everyone",
      timeline: "Long-term",
      milestones: ["Open-source security tools", "Mentorship programs", "Industry standard contributions"]
    },
    {
      title: "Personal Growth",
      description: "Continuous learning and balanced lifestyle",
      timeline: "Ongoing",
      milestones: ["Advanced certifications", "Cultural experiences", "Creative pursuits"]
    }
  ];

  const funFacts = [
    "🏛️ Born in Doha, Qatar - now exploring London's tech scene",
    "🌍 Fluent in Arabic and English, learning about global security practices",
    "🎮 Competitive gamer - strategic thinking translates to threat analysis",
    "📸 Amateur photographer documenting the intersection of tech and culture",
    "🎵 Enjoy producing electronic music in my spare time",
    "☕ Coffee enthusiast - best ideas come with perfect espresso",
    "🏃‍♂️ Fitness enthusiast - physical and mental balance for cybersecurity",
    "🌙 Night owl - many vulnerabilities are discovered in the quiet hours"
  ];

  return (
    <Layout 
      title="About - Jaber Farooqi | Cybersecurity Professional"
      description="Learn about Jaber Farooqi's journey from Qatar to London, his passion for cybersecurity, and the values that drive his professional excellence."
    >
        {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige via-white to-qatar-beige/50">
        <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className={`text-center mb-16 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold heading-primary mb-6">
              About Jaber Farooqi
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl text-elegant max-w-4xl mx-auto leading-relaxed">
              From the innovative tech landscape of Doha to the vibrant cybersecurity community of London, 
              my journey has been shaped by curiosity, determination, and an unwavering commitment to 
              protecting our digital future.
          </p>
        </div>

          {/* Professional Summary Card */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="card-elegant p-8 md:p-12 text-center">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-qatar-navy to-qatar-maroon rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    JF
            </div>
          </div>
                <div className="flex-1 text-left">
                  <h2 className="text-2xl font-serif font-bold heading-primary mb-4">
                    Cybersecurity Professional & Technology Enthusiast
          </h2>
                  <p className="text-elegant leading-relaxed mb-6">
                    Passionate about securing digital infrastructure through innovative solutions, 
                    continuous learning, and collaborative excellence. Currently pursuing BSc Computer Science 
                    at University of Westminster while gaining hands-on experience in enterprise security.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold heading-primary">4+</div>
                      <div className="text-sm text-elegant">Years Experience</div>
                </div>
                    <div>
                      <div className="text-2xl font-bold heading-primary">50+</div>
                      <div className="text-sm text-elegant">Projects Secured</div>
                </div>
                    <div>
                      <div className="text-2xl font-bold heading-primary">15+</div>
                      <div className="text-sm text-elegant">Certifications</div>
              </div>
              <div>
                      <div className="text-2xl font-bold heading-primary">99%</div>
                      <div className="text-sm text-elegant">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-qatar-navy text-white shadow-elegant'
                    : 'text-qatar-navy hover:bg-qatar-beige'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-qatar-beige/30">
        <div className="max-w-7xl mx-auto">
          <div ref={contentRef} className={`${contentInView ? 'animate-fade-in' : 'opacity-0'}`}>
            
            {/* My Journey Tab */}
            {activeTab === 'story' && (
              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="space-y-8">
                    <div className="card-elegant p-8">
                      <h3 className="text-2xl font-serif font-bold heading-secondary mb-6">
                        The Beginning - Doha, Qatar
                      </h3>
                      <p className="text-elegant leading-relaxed mb-4">
                        Born and raised in Doha, Qatar, I was immersed in a culture that values both 
                        tradition and innovation. Growing up in one of the world's most technologically 
                        advanced nations sparked my fascination with digital systems and cybersecurity.
                      </p>
                      <p className="text-elegant leading-relaxed">
                        Qatar's rapid digital transformation and focus on cybersecurity as a national 
                        priority inspired me to pursue this field. I witnessed firsthand how proper 
                        security measures protect not just data, but entire societies and economies.
                      </p>
                    </div>
                    
                    <div className="card-elegant p-8">
                      <h3 className="text-2xl font-serif font-bold heading-secondary mb-6">
                        Academic Excellence - London Journey
                      </h3>
                      <p className="text-elegant leading-relaxed mb-4">
                        Moving to London for my Computer Science degree at University of Westminster 
                        marked a pivotal moment. The diverse tech ecosystem and world-class cybersecurity 
                        community provided unparalleled learning opportunities.
                      </p>
                      <p className="text-elegant leading-relaxed">
                        Balancing rigorous academic studies with practical experience through internships 
                        at prestigious organizations like PwC and Qatar International Islamic Bank has 
                        shaped my holistic understanding of cybersecurity.
                      </p>
                    </div>
        </div>

          <div className="space-y-8">
                    <div className="card-elegant p-8">
                      <h3 className="text-2xl font-serif font-bold heading-secondary mb-6">
                        Professional Growth
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-qatar-navy rounded-full flex items-center justify-center text-white font-bold mr-4">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold text-qatar-navy">Discovery Phase</h4>
                            <p className="text-elegant text-sm">Initial fascination with cybersecurity during early computing experiences</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-qatar-maroon rounded-full flex items-center justify-center text-white font-bold mr-4">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold text-qatar-navy">Education & Training</h4>
                            <p className="text-elegant text-sm">Formal education combined with practical certifications and hands-on learning</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-qatar-gold rounded-full flex items-center justify-center text-white font-bold mr-4">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold text-qatar-navy">Professional Experience</h4>
                            <p className="text-elegant text-sm">Real-world application through internships and current role at University of Westminster</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-qatar-light-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                            4
                          </div>
                  <div>
                            <h4 className="font-semibold text-qatar-navy">Continuous Innovation</h4>
                            <p className="text-elegant text-sm">Ongoing research, development, and contribution to the cybersecurity community</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-elegant p-8 bg-gradient-to-br from-qatar-navy to-qatar-maroon text-white">
                      <Quote className="w-8 h-8 mb-4 opacity-50" />
                      <blockquote className="text-lg italic mb-4">
                        "The most rewarding aspect of cybersecurity isn't just protecting systems—it's 
                        enabling innovation by creating secure foundations for digital transformation."
                      </blockquote>
                      <cite className="text-sm opacity-75">- Jaber Farooqi</cite>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Values Tab */}
            {activeTab === 'values' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold heading-primary mb-4">
                    Core Professional Values
                  </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    These principles guide every decision I make and every solution I develop in the cybersecurity field.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {coreValues.map((value, index) => (
                    <div key={value.title} className="card-elegant p-8 hover:shadow-elegant-lg transition-all duration-300">
                      <div className="flex items-start mb-6">
                        <div className="text-qatar-maroon mr-4 flex-shrink-0">
                          {value.icon}
                        </div>
                <div>
                          <h3 className="text-xl font-serif font-bold heading-secondary mb-3">
                            {value.title}
                          </h3>
                          <p className="text-elegant leading-relaxed mb-4">
                            {value.description}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-qatar-navy text-sm">Key Applications:</h4>
                        <ul className="text-sm text-elegant space-y-1">
                          {value.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                              {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
              </div>
            )}

            {/* Personal Interests Tab */}
            {activeTab === 'interests' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold heading-primary mb-4">
                    Beyond Cybersecurity
                  </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    Personal interests that fuel creativity, maintain balance, and provide fresh perspectives on professional challenges.
                  </p>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {personalInterests.map((interest, index) => (
                    <div key={interest.title} className="card-elegant p-6 text-center hover:shadow-elegant-lg transition-all duration-300">
                      <div className="text-qatar-maroon mb-4 flex justify-center">
                        {interest.icon}
                      </div>
                      <h3 className="text-lg font-serif font-bold heading-secondary mb-3">
                        {interest.title}
                      </h3>
                      <p className="text-elegant text-sm mb-4 leading-relaxed">
                        {interest.description}
                      </p>
                      <div className="space-y-1">
                        {interest.details.map((detail, idx) => (
                          <div key={idx} className="text-xs text-qatar-gray">
                            • {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Fun Facts Section */}
                <div className="card-elegant p-8">
                  <h3 className="text-2xl font-serif font-bold heading-secondary mb-6 text-center">
                    Fun Facts About Me
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {funFacts.map((fact, index) => (
                      <div key={index} className="flex items-center p-3 bg-qatar-beige rounded-lg">
                        <span className="text-lg mr-3">{fact.split(' ')[0]}</span>
                        <span className="text-elegant text-sm">{fact.substring(fact.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
          </div>
              </div>
            )}

            {/* Future Vision Tab */}
            {activeTab === 'goals' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-bold heading-primary mb-4">
                    Future Vision & Goals
                  </h2>
                  <p className="text-lg text-elegant max-w-3xl mx-auto">
                    My roadmap for contributing to the cybersecurity field and making a lasting impact on digital security.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {lifeGoals.map((goal, index) => (
                    <div key={goal.title} className="card-elegant p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-2/3">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-qatar-navy rounded-full flex items-center justify-center text-white font-bold mr-4">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="text-xl font-serif font-bold heading-secondary">
                                {goal.title}
                              </h3>
                              <p className="text-sm text-qatar-maroon font-medium">{goal.timeline}</p>
                            </div>
                          </div>
                          <p className="text-elegant leading-relaxed mb-4">
                            {goal.description}
                          </p>
                        </div>
                        <div className="md:w-1/3">
                          <h4 className="font-semibold text-qatar-navy mb-3">Key Milestones:</h4>
                          <ul className="space-y-2">
                            {goal.milestones.map((milestone, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                <span className="text-elegant">{milestone}</span>
              </li>
                            ))}
            </ul>
          </div>
        </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-16">
                  <div className="card-elegant p-8 bg-gradient-to-r from-qatar-navy to-qatar-maroon text-white">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                      Ready to Collaborate?
                    </h3>
                    <p className="text-lg mb-6 opacity-90">
                      I'm always excited to discuss new opportunities, share knowledge, and work on challenging cybersecurity projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/contact"
                        className="bg-white text-qatar-navy px-6 py-3 rounded-lg font-semibold hover:bg-qatar-beige transition-all duration-300 inline-flex items-center justify-center"
                      >
                        Get In Touch
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                      <a
                        href="/projects"
                        className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-qatar-navy transition-all duration-300 inline-flex items-center justify-center"
                      >
                        View My Work
                      </a>
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