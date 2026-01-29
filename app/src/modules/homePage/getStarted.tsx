// components/GetStartedSection.jsx
"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence, Variants, TargetAndTransition } from 'framer-motion';
import { FaArrowRight, FaPhone, FaEnvelope, FaCommentDots, FaCalendarAlt, FaCheckCircle, FaChevronRight, FaMoon, FaSun, FaPaperPlane, FaShieldAlt, FaChartLine, FaRocket, FaUsers, FaGlobe } from 'react-icons/fa';
import { MdAccessTime, MdBusiness, MdPerson } from 'react-icons/md';


const GetStartedSection = () => {
  const [dark, setDark] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    company: 'Your Company',
    projectDetails: 'Tell us about your project...'
  });

  type ActiveField = 'firstName' | 'lastName' | 'email' | 'company' | 'projectDetails' | null;

  const [activeField, setActiveField] = useState<ActiveField>(null);
  const [liveChatActive, setLiveChatActive] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{id: number, sender: string, text: string, time: string}[]>([
    { id: 1, sender: 'bot', text: 'Hello! Welcome to PMsGraphix. How can I help you today?', time: '10:00 AM' }
  ]);

  // Initialize dark mode based on system preference
  useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDark(!dark);
  };

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show submission animation
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectDetails: ''
      });
    }, 3000);
  };

  // Handle live chat submission
  const handleChatSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message
    const newUserMessage = {
      id: chatMessages.length + 1,
      sender: 'user' as const,
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Add bot response after delay
    const botResponse = {
      id: chatMessages.length + 2,
      sender: 'bot' as const,
      text: "Thanks for your message! Our team will get back to you shortly. Is there anything specific you'd like to know about our services?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setChatMessage('');

    setTimeout(() => {
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Contact methods with animations
  const contactMethods = [
    {
      id: 1,
      title: "Email Us",
      info: "info@pmsgraphix.com",
      icon: <FaEnvelope className="text-3xl" />,
      color: "from-red-500 to-pink-500",
      action: () => window.location.href = "mailto:info@pmsgraphix.com"
    },
    {
      id: 2,
      title: "Call Us",
      info: "+92 300 1234567",
      icon: <FaPhone className="text-3xl" />,
      color: "from-red-500 to-orange-500",
      action: () => window.location.href = "tel:+923001234567"
    },
    {
      id: 3,
      title: "Live Chat",
      info: "Available 24/7",
      icon: <FaCommentDots className="text-3xl" />,
      color: "from-red-500 to-purple-500",
      action: () => setLiveChatActive(true)
    }
  ];

  // Trusted companies logos
  const trustedCompanies = [
    { id: 1, name: "TechCorp", color: "text-black" },
    { id: 2, name: "InnovateX", color: "text-black" },
    { id: 3, name: "GlobalSoft", color: "text-purple-500" },
    { id: 4, name: "FutureTech", color: "text-yellow-500" },
    { id: 5, name: "AlphaSys", color: "text-cyan-500" }
  ];

  // Benefits of consulting
  const benefits = [
    { icon: <FaChartLine />, text: "Custom Strategy Development" },
    { icon: <FaRocket />, text: "Quick Project Kickoff" },
    { icon: <FaUsers />, text: "Dedicated Expert Team" },
    { icon: <FaGlobe />, text: "Global Industry Insights" },
    { icon: <FaShieldAlt />, text: "Data Security Guarantee" },
    { icon: <MdAccessTime />, text: "24/7 Support Available" }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
     transition: {
  stiffness: 120,
  damping: 20
}

    }
  };

  const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      stiffness: 120,
      damping: 20,
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      stiffness: 300,
      damping: 15,
    },
  },
};



  const floatingAnimation: TargetAndTransition = {
    y: [-5, 5, -5],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  };

  const shimmerAnimation: TargetAndTransition = {
    backgroundPosition: ["0% 0%", "200% 0%"],
    transition: {
      backgroundPosition: {
        repeat: Infinity,
        duration: 2,
        ease: "linear",
      },
    },
  };

  return (
    <section className={`min-h-screen py-16 px-4 md:px-8 transition-colors duration-500 ${dark ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white' : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'}`}>
      {/* Theme Toggle */}
      <motion.div 
        className="flex justify-end max-w-7xl mx-auto mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            animate={floatingAnimation}
            className="inline-block mb-6"
          >
            <div className={`relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-500/20 dark:to-pink-500/20 shadow-lg`}>
              <FaRocket className="text-3xl text-red-500" />
              <div className="absolute -inset-1 rounded-full border-2 border-red-500/30 animate-ping" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="relative inline-block text-gray-800 dark:text-white">
              Ready to Transform
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </span>
            <br />
            <span className="text-red-500 dark:text-red-400 bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              Your Business?
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300"
          >
            Let's discuss your project and create a custom solution that drives results. 
            Start your journey with a <span className="text-red-500 dark:text-red-400 font-semibold">free consultation</span>.
          </motion.p>

          {/* Stats Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 dark:from-red-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-red-500/20 dark:border-red-500/30 mb-12"
          >
            <div className="flex items-center gap-2">
              <FaUsers className="text-red-500 dark:text-red-400" />
              <span className="font-semibold text-gray-800 dark:text-white">500+</span>
              <span className="text-gray-600 dark:text-gray-300">Clients Served</span>
            </div>
            <div className="h-6 w-px bg-red-500/30 dark:bg-red-500/40" />
            <div className="flex items-center gap-2">
              <FaChartLine className="text-red-500 dark:text-red-400" />
              <span className="font-semibold text-gray-800 dark:text-white">98%</span>
              <span className="text-gray-600 dark:text-gray-300">Success Rate</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Methods Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold mb-10 text-gray-800 dark:text-white"
            >
              Get in <span className="text-red-500 dark:text-red-400">Touch</span>
            </motion.h2>

            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.id}
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
  onClick={method.action}
                  className="relative group cursor-pointer p-6 rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300 overflow-hidden"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${method.color} transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <motion.div 
                      className={`p-4 rounded-xl bg-gradient-to-br ${method.color} text-white`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800 dark:text-white">
                        {method.title}
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="text-red-500 dark:text-red-400 text-sm"
                        >
                          <FaChevronRight />
                        </motion.span>
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                        {method.info}
                      </p>
                      {method.id === 3 && (
                        <motion.div 
                          className="flex items-center gap-2"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 2
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-sm text-green-500 dark:text-green-400 font-medium">Online Now</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-red-50/50 dark:bg-gray-800/30 border border-red-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                <FaCheckCircle className="text-red-500 dark:text-red-400" />
                Why Choose Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="text-red-500 dark:text-red-400">{benefit.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Consultation Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <div className="sticky top-8 p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl border border-gray-200 dark:border-gray-700">
              <motion.div 
                className="text-center mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-100 dark:bg-red-500/20 mb-4">
                  <FaCalendarAlt className="text-red-500 dark:text-red-400" />
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Schedule a <span className="text-red-500 dark:text-red-400">Free</span> Consultation
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Get expert advice tailored to your business needs
                </p>
              </motion.div>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mb-6 p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 border border-green-500/20 dark:border-green-500/30 text-center"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0]
                      }}
                      transition={{ duration: 1 }}
                      className="inline-block mb-3"
                    >
                      <FaCheckCircle className="text-4xl text-green-500 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2 text-green-500 dark:text-green-400">Consultation Scheduled!</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Thank you! We'll contact you within 24 hours to confirm your appointment.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onFocus={() => setActiveField('firstName')}
                    onBlur={() => setActiveField(null)}
                  >
                    <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                      <MdPerson className="inline mr-2 text-red-500 dark:text-red-400" />
                      First Name
                    </label>
                    <motion.input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${activeField === 'firstName' ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/30 text-gray-800 dark:text-white`}
                      required
                      animate={{
                        scale: activeField === 'firstName' ? 1.02 : 1
                      }}
                    />
                  </motion.div>

                  {/* Last Name */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onFocus={() => setActiveField('lastName')}
                    onBlur={() => setActiveField(null)}
                  >
                    <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                      <MdPerson className="inline mr-2 text-red-500 dark:text-red-400" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${activeField === 'lastName' ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/30 text-gray-800 dark:text-white`}
                      required
                    />
                  </motion.div>
                </div>

                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                >
                  <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    <FaEnvelope className="inline mr-2 text-red-500 dark:text-red-400" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${activeField === 'email' ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/30 text-gray-800 dark:text-white`}
                    required
                  />
                </motion.div>

                {/* Company */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onFocus={() => setActiveField('company')}
                  onBlur={() => setActiveField(null)}
                >
                  <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    <MdBusiness className="inline mr-2 text-red-500 dark:text-red-400" />
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${activeField === 'company' ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/30 text-gray-800 dark:text-white`}
                    required
                  />
                </motion.div>

                {/* Project Details */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onFocus={() => setActiveField('projectDetails')}
                  onBlur={() => setActiveField(null)}
                >
                  <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                    <FaCommentDots className="inline mr-2 text-red-500 dark:text-red-400" />
                    Project Details
                  </label>
                  <motion.textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${activeField === 'projectDetails' ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/30 text-gray-800 dark:text-white resize-none`}
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isSubmitted ? {} : shimmerAnimation}
                  className={`relative w-full py-4 px-6 rounded-xl font-bold text-lg overflow-hidden group ${
                    isSubmitted
                      ? 'bg-green-500 dark:bg-green-600'
                      : 'bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600'
                  } text-white transition-all duration-300 shadow-lg`}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  <motion.span 
                    className="flex items-center justify-center"
                    animate={isSubmitted ? { y: [0, -5, 0] } : {}}
                    transition={isSubmitted ? { repeat: Infinity, duration: 1 } : {}}
                  >
                    {isSubmitted ? 'Scheduled Successfully!' : 'Get Free Consultation'}
                    {!isSubmitted && (
                      <motion.span
                        className="ml-3"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <FaPaperPlane />
                      </motion.span>
                    )}
                  </motion.span>
                  
                  {/* Button shine effect */}
                  {!isSubmitted && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </motion.button>

                {/* Privacy Policy */}
                <motion.p 
                  className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  By submitting, you agree to our{' '}
                  <motion.a 
                    href="#" 
                    className="text-red-500 dark:text-red-400 hover:underline font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Privacy Policy
                  </motion.a>
                </motion.p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Trusted Companies Section */}
        <motion.div 
          className="py-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div 
            className="text-center mb-10"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Trusted by <span className="text-red-500 dark:text-red-400">Leading</span> Companies
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Join hundreds of successful businesses that trust our expertise
            </p>
          </motion.div>

          {/* Companies Logos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.1,
                  rotateY: 180,
                  transition: { duration: 0.5 }
                }}
                className="p-6 rounded-xl text-black bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="text-4xl font-bold"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "linear"
                  }}
                  style={{ 
                    background: `linear-gradient(45deg, ${company.color.replace('text-', '#').replace('-500', '')}, #ef4444)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: "200% 200%" 
                  }}
                >
                  {company.name.split('')[0]}
                  <span className="text-2xl">{company.name.slice(1)}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={floatingAnimation}
              className="inline-block mb-6"
            >
              <div className="p-4 rounded-full bg-red-100 dark:bg-red-500/20">
                <FaArrowRight className="text-2xl text-red-500 dark:text-red-400" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Ready to Start Your <span className="text-red-500 dark:text-red-400">Success Story</span>?
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-white font-bold text-lg shadow-lg transition-all duration-300"
            >
              <span>Transform Your Business Today</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:translate-x-2 transition-transform"
              >
                <FaArrowRight />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Live Chat Widget */}
      <AnimatePresence>
        {liveChatActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="fixed bottom-6 right-6 w-96 rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              {/* Chat Header */}
              <div className="p-4 bg-red-500 dark:bg-red-600 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FaCommentDots className="text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold">Live Chat Support</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span>Online Now</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setLiveChatActive(false)}
                  className="p-2 hover:bg-white/20 rounded-full"
                >
                  ×
                </motion.button>
              </div>

              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-2xl ${msg.sender === 'user' 
                        ? 'bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30'
                        : 'bg-gray-100 dark:bg-gray-700'} rounded-bl-none`}
                    >
                      <p className="text-gray-800 dark:text-white">{msg.text}</p>
                      <span className="text-xs mt-1 block text-gray-500 dark:text-gray-400">
                        {msg.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500/30 dark:focus:ring-red-400/30"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-white"
                  >
                    <FaPaperPlane />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live Chat Button */}
      {!liveChatActive && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLiveChatActive(true)}
          className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-white z-40"
        >
          <div className="relative">
            <FaCommentDots className="text-2xl" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.button>
      )}
    </section>
  );
};

export default GetStartedSection;