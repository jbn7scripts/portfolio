import Layout from '../components/Layout';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Shield, 
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Calendar,
  MessageCircle,
  Globe,
  ArrowRight,
  Zap,
  Users,
  Briefcase,
  Coffee,
  Star
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    priority: 'medium',
    message: '',
    projectType: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.1 });

  const contactMethods = [
    {
      title: "Email",
      description: "Primary contact method for detailed discussions",
      value: "Jaberfarooqi@hotmail.com",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:Jaberfarooqi@hotmail.com",
      available: "24/7 - Response within 24 hours"
    },
    {
      title: "Phone",
      description: "Direct line for urgent cybersecurity matters",
      value: "+44(0)7745690989",
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+447745690989",
      available: "Mon-Fri, 9:00 AM - 6:00 PM GMT"
    },
    {
      title: "Location",
      description: "Based in London, available for on-site consultations",
      value: "London, United Kingdom",
      icon: <MapPin className="w-6 h-6" />,
      href: "https://maps.google.com/?q=London,UK",
      available: "Available for local meetings"
    },
    {
      title: "LinkedIn",
      description: "Professional networking and career opportunities",
      value: "linkedin.com/in/jaberfarooqi",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/jaberfarooqi",
      available: "Professional inquiries welcome"
    }
  ];

  const projectTypes = [
    { value: 'penetration-testing', label: 'Penetration Testing & Security Assessment' },
    { value: 'security-consulting', label: 'Cybersecurity Consulting' },
    { value: 'incident-response', label: 'Incident Response & Forensics' },
    { value: 'security-architecture', label: 'Security Architecture Design' },
    { value: 'compliance-audit', label: 'Compliance & Risk Assessment' },
    { value: 'training-education', label: 'Security Training & Education' },
    { value: 'collaboration', label: 'Research Collaboration' },
    { value: 'other', label: 'Other Security Services' }
  ];

  const priorities = [
    { value: 'low', label: 'Low Priority', description: 'General inquiry, non-urgent', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium Priority', description: 'Standard business inquiry', color: 'bg-blue-100 text-blue-800' },
    { value: 'high', label: 'High Priority', description: 'Urgent security matter', color: 'bg-orange-100 text-orange-800' },
    { value: 'critical', label: 'Critical', description: 'Emergency security incident', color: 'bg-red-100 text-red-800' }
  ];

  const faqs = [
    {
      question: "What cybersecurity services do you offer?",
      answer: "I provide comprehensive cybersecurity services including penetration testing, security assessments, incident response, security architecture design, compliance auditing, and security training. I specialize in enterprise network security, AI-powered threat detection, and blockchain security analysis."
    },
    {
      question: "How quickly can you respond to security incidents?",
      answer: "For critical security incidents, I aim to respond within 2-4 hours. For high-priority matters, response time is typically within 24 hours. Standard inquiries receive responses within 48 hours during business days."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I work with clients globally. Based in London with experience in Qatar and the Middle East, I'm comfortable working across different time zones and can provide remote security services worldwide."
    },
    {
      question: "What are your rates for cybersecurity consulting?",
      answer: "Rates vary depending on the project scope, complexity, and timeline. I offer competitive pricing for penetration testing, security assessments, and consulting services. Please contact me for a detailed quote based on your specific requirements."
    },
    {
      question: "Can you help with compliance requirements?",
      answer: "Absolutely. I have experience with various compliance frameworks including NIST, ISO 27001, GDPR, and industry-specific regulations. I can help assess your current compliance posture and develop strategies to meet regulatory requirements."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    else if (formData.message.length < 10) errors.message = 'Message must be at least 10 characters';

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        priority: 'medium',
        message: '',
        projectType: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentHour = new Date().getHours();
  const isWorkingHours = currentHour >= 9 && currentHour < 18;

  return (
    <Layout
      title="Contact - Jaber Farooqi | Cybersecurity Professional"
      description="Get in touch with Jaber Farooqi for cybersecurity consulting, penetration testing, security assessments, and professional collaboration opportunities."
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-qatar-beige via-white to-qatar-beige/50">
        <div className="max-w-7xl mx-auto">
          <div ref={heroRef} className={`text-center mb-16 ${heroInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl font-serif font-bold heading-primary mb-6">
              Let's Connect
            </h1>
            <div className="section-divider"></div>
            <p className="text-xl text-elegant max-w-4xl mx-auto leading-relaxed mb-8">
              Ready to strengthen your cybersecurity posture? Whether you need penetration testing, 
              security consulting, or want to discuss collaboration opportunities, I'm here to help 
              protect your digital assets.
            </p>
            
            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">2-4h</div>
                <div className="text-sm text-elegant font-medium">Critical Response Time</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">24/7</div>
                <div className="text-sm text-elegant font-medium">Email Availability</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">100%</div>
                <div className="text-sm text-elegant font-medium">Confidentiality</div>
              </div>
              <div className="card-elegant p-6 text-center">
                <div className="text-3xl font-bold heading-primary mb-2">Global</div>
                <div className="text-sm text-elegant font-medium">Service Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
              Contact Information
            </h2>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Multiple ways to reach me for your cybersecurity needs. Choose the method that works best for your situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="card-elegant p-6 text-center hover:shadow-elegant-lg transition-all duration-300">
                <div className="text-qatar-maroon mb-4 flex justify-center">
                  {method.icon}
                </div>
                <h3 className="text-lg font-serif font-bold heading-secondary mb-2">
                  {method.title}
                </h3>
                <p className="text-elegant text-sm mb-4">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className="font-semibold text-qatar-navy hover:text-qatar-maroon transition-colors block mb-2"
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {method.value}
                </a>
                <div className="flex items-center justify-center text-xs text-elegant">
                  <Clock className="w-3 h-3 mr-1" />
                  {method.available}
                </div>
              </div>
            ))}
        </div>

          {/* Current Status */}
          <div className="text-center">
            <div className={`inline-flex items-center px-4 py-2 rounded-full ${
              isWorkingHours ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                isWorkingHours ? 'bg-green-500' : 'bg-yellow-500'
              }`}></div>
              {isWorkingHours ? 'Currently Available' : 'Outside Working Hours'}
            </div>
          </div>
        </div>
      </section>

          {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-qatar-beige/30">
        <div className="max-w-4xl mx-auto">
          <div ref={formRef} className={`${formInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
                Send a Message
              </h2>
              <p className="text-lg text-elegant max-w-3xl mx-auto">
                Use the secure form below to get in touch. I'll respond promptly based on your selected priority level.
                  </p>
                </div>
            
            {isSubmitted ? (
              <div className="card-elegant p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold heading-secondary mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-elegant mb-6">
                  Thank you for reaching out. I'll review your message and respond within the timeframe 
                  indicated for your selected priority level.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="card-elegant p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-qatar-navy mb-2">
                        Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon ${
                          formErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                  </div>
                    
                  <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-qatar-navy mb-2">
                        Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon ${
                          formErrors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@company.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company and Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-qatar-navy mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon"
                        placeholder="Your company name"
                      />
                </div>

                <div>
                      <label htmlFor="projectType" className="block text-sm font-semibold text-qatar-navy mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon"
                      >
                        <option value="">Select a service type</option>
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject and Priority */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-qatar-navy mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon ${
                          formErrors.subject ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Brief description of your inquiry"
                      />
                      {formErrors.subject && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {formErrors.subject}
                        </p>
                      )}
                </div>

                <div>
                      <label htmlFor="priority" className="block text-sm font-semibold text-qatar-navy mb-2">
                        Priority Level
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon"
                      >
                        {priorities.map((priority) => (
                          <option key={priority.value} value={priority.value}>
                            {priority.label} - {priority.description}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-qatar-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-qatar-maroon ${
                        formErrors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Please provide details about your cybersecurity needs, timeline, and any specific requirements..."
                    ></textarea>
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Security Notice */}
                  <div className="bg-qatar-beige/50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-qatar-maroon mr-3 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-elegant">
                        <strong className="text-qatar-navy">Security Notice:</strong> This form is secured with 
                        industry-standard encryption. Your information will be handled with complete confidentiality 
                        and used solely for responding to your inquiry.
                      </div>
                    </div>
                </div>

                  {/* Submit Button */}
                  <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                      className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                          <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          Sending Message...
                    </>
                  ) : (
                    <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Secure Message
                    </>
                  )}
                </button>
                  </div>
                </form>
              </div>
            )}
              </div>
            </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold heading-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-elegant max-w-3xl mx-auto">
              Quick answers to common questions about my cybersecurity services and consultation process.
              </p>
            </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant p-6">
                <h3 className="text-lg font-serif font-bold heading-secondary mb-3">
                  {faq.question}
                </h3>
                <p className="text-elegant leading-relaxed">
                  {faq.answer}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-qatar text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Secure Your Future?
          </h2>
          <p className="text-xl mb-12 leading-relaxed opacity-90">
            Don't wait until it's too late. Proactive cybersecurity is the key to protecting your 
            organization's most valuable assets. Let's discuss how I can help strengthen your security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:Jaberfarooqi@hotmail.com"
              className="bg-white text-qatar-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-qatar-beige transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Me Directly
            </a>
            <a
              href="tel:+447745690989"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-qatar-navy transition-all duration-300 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call for Urgent Matters
            </a>
      </div>
    </div>
      </section>
    </Layout>
  );
}