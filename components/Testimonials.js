import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = ({ limit = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Information Security Officer",
      company: "Global Financial Services",
      image: "/testimonials/sarah-chen.jpg",
      quote: "Jaber's expertise in penetration testing and threat detection has been invaluable to our organization. His AI-powered security solutions have significantly enhanced our defense capabilities.",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Mohammed Al-Thani",
      role: "Technology Director",
      company: "Qatar Digital Authority",
      image: "/testimonials/mohammed-al-thani.jpg",
      quote: "Working with Jaber on our blockchain security framework was a game-changer. His innovative approach to smart contract auditing prevented potential vulnerabilities worth millions.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Dr. James Wilson",
      role: "Head of IT Security",
      company: "University of Westminster",
      image: "/testimonials/james-wilson.jpg",
      quote: "Jaber's implementation of zero-trust architecture has revolutionized our campus security. His ability to balance robust protection with user accessibility is exceptional.",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "Aisha Rahman",
      role: "Cybersecurity Lead",
      company: "Tech Innovations Ltd",
      image: "/testimonials/aisha-rahman.jpg",
      quote: "The neural network intrusion detection system developed by Jaber has reduced our false positives by 75%. His expertise in AI security is truly cutting-edge.",
      rating: 5,
      date: "December 2023"
    },
    {
      name: "Robert Martinez",
      role: "Security Operations Manager",
      company: "Enterprise Solutions Inc",
      image: "/testimonials/robert-martinez.jpg",
      quote: "Jaber's incident response framework has streamlined our security operations. His systematic approach to threat hunting and containment is highly effective.",
      rating: 5,
      date: "November 2023"
    }
  ];

  const displayedTestimonials = testimonials.slice(0, limit);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayedTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [displayedTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-qatar-beige/20">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold heading-primary mb-4">
            Client Testimonials
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-elegant max-w-3xl mx-auto">
            Trusted by leading organizations for advanced cybersecurity solutions and 
            innovative security implementations.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`card-elegant p-8 hover:shadow-elegant-lg transition-all duration-300 ${
                  inView ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="text-qatar-maroon mb-6">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Testimonial Content */}
                <p className="text-elegant mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-qatar-gold fill-qatar-gold"
                    />
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-qatar-navy to-qatar-maroon flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-qatar-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-elegant">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-qatar-gray">
                      {testimonial.company} • {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-qatar-navy hover:bg-qatar-beige transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white border border-gray-200 text-qatar-navy hover:bg-qatar-beige transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {displayedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-qatar-maroon w-4'
                    : 'bg-gray-300 hover:bg-qatar-beige'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 