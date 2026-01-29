"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, Send, 
  CheckCircle, Users, Zap, Shield, Calendar,
  Building, ChevronRight, ExternalLink, Sparkles,
  ArrowRight, MessageCircle, Globe, Briefcase,
  FileText, Target, Award, Video, Star, Coffee,
  Mic, Headphones, Rocket, Palette, Code
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState<'form' | 'chat' | 'call'>('form');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '', email: '', phone: '', company: '', subject: '', message: ''
    });
  };

  const stats = [
    { value: '24h', label: 'Avg Response Time', icon: <Zap className="w-5 h-5" /> },
    { value: '98%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5" /> },
    { value: '50+', label: 'Projects Completed', icon: <Rocket className="w-5 h-5" /> },
    { value: '15+', label: 'Expert Team', icon: <Users className="w-5 h-5" /> }
  ];

  const services = [
    { icon: <Palette className="w-6 h-6" />, label: 'UI/UX Design' },
    { icon: <Code className="w-6 h-6" />, label: 'Development' },
    { icon: <Globe className="w-6 h-6" />, label: 'Web Solutions' },
    { icon: <Briefcase className="w-6 h-6" />, label: 'Branding' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-950/50 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm font-bold tracking-wider text-red-600 dark:text-red-400">
              CONNECT WITH EXPERTS
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Let's Create
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700">
                Something Amazing
              </span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-8"
              >
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Your vision, our expertise. Let's collaborate to build digital experiences that 
            captivate audiences and drive real business results.
          </motion.p>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 mb-3">
                  <div className="text-red-600 dark:text-red-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          
          {/* Contact Information Column */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-red-500" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: 'Email Us',
                    detail: 'info@pmsgraphix.com',
                    subtext: 'Response within 24 hours',
                    action: () => window.location.href = 'mailto:info@pmsgraphix.com'
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: 'Call Us',
                    detail: '+92 300 1234567',
                    subtext: 'Mon-Fri, 9am-6pm',
                    action: () => window.location.href = 'tel:+923001234567'
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: 'Visit Office',
                    detail: 'Lahore, Pakistan',
                    subtext: 'Schedule a visit',
                    action: () => window.open('https://maps.google.com', '_blank')
                  },
                  {
                    icon: <Video className="w-5 h-5" />,
                    title: 'Video Call',
                    detail: 'Book Meeting',
                    subtext: 'Google Meet/Zoom',
                    action: () => setActiveTab('call')
                  }
                ].map((item, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={item.action}
                    className="w-full group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/10 to-red-600/10">
                      <div className="text-red-600 dark:text-red-400">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-gray-900 dark:text-white">{item.title}</div>
                      <div className="text-gray-600 dark:text-gray-300">{item.detail}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.subtext}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-red-400" />
                <h3 className="text-2xl font-bold">Why Choose Us</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: <Zap />, title: 'Fast Response', desc: '24-hour response guarantee' },
                  { icon: <Shield />, title: 'Expert Team', desc: 'Certified professionals' },
                  { icon: <Coffee />, title: 'Free Consultation', desc: 'No-obligation discussion' },
                  { icon: <Mic />, title: 'Clear Communication', desc: 'Regular updates & reports' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/10">
                      {React.cloneElement(item.icon, { className: "w-5 h-5 text-red-400" })}
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Contact Form Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-2xl"
            >
              {/* Form Header */}
              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-8 py-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Start Your Project</h3>
                  <div className="flex items-center gap-2">
                    {['form', 'chat', 'call'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab as any)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          activeTab === tab
                            ? 'bg-red-500 text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {tab === 'form' && 'Contact Form'}
                        {tab === 'chat' && 'Live Chat'}
                        {tab === 'call' && 'Schedule Call'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {activeTab === 'form' && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                              placeholder="John Doe"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                              placeholder="+92 300 1234567"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Company
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Type *
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all appearance-none"
                            required
                          >
                            <option value="">Select project type</option>
                            <option value="Web Design">Web Design & Development</option>
                            <option value="Mobile App">Mobile App Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Branding">Brand Identity</option>
                            <option value="E-commerce">E-commerce Solutions</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Project Details *
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Tell us about your project goals, timeline, and budget..."
                            required
                          />
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full mt-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-500/20"
                        >
                          {isSubmitted ? (
                            <>
                              <CheckCircle className="w-5 h-5" />
                              Message Sent Successfully!
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  )}

                  {activeTab === 'chat' && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center">
                        <MessageSquare className="w-10 h-10 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Live Chat Support</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        Chat with our experts in real-time for instant assistance with your project.
                      </p>
                      <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all">
                        Start Live Chat
                      </button>
                    </motion.div>
                  )}

                  {activeTab === 'call' && (
                    <motion.div
                      key="call"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 flex items-center justify-center">
                        <Video className="w-10 h-10 text-red-500" />
                      </div>
                      <h4 className="text-2xl font-bold mb-4">Schedule a Call</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                        Book a 30-minute consultation call with our experts to discuss your project.
                      </p>
                      <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all">
                        Schedule Now
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Services & Working Hours */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <h4 className="text-xl font-bold mb-6">Our Services</h4>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                      <div className="text-red-500">
                        {service.icon}
                      </div>
                      <span className="font-medium text-sm">{service.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-red-500" />
                  <h4 className="text-xl font-bold">Working Hours</h4>
                </div>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', time: 'Closed' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">{item.day}</span>
                      <span className={`font-semibold ${idx === 2 ? 'text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-500/10" />
          <div className="relative bg-gradient-to-r from-white/80 to-white/50 dark:from-gray-900/80 dark:to-gray-900/50 backdrop-blur-sm border border-red-200 dark:border-red-800/30 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Begin Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  Digital Journey?
                </span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Let's collaborate to create exceptional digital experiences that drive results and exceed expectations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all"
                >
                  Start Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl font-bold border-2 border-gray-300 dark:border-gray-700 hover:border-red-500 transition-all"
                >
                  View Case Studies
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactSection;