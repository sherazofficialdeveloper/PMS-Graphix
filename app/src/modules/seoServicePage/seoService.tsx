"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Search, TrendingUp, Globe, BarChart3, Target, Zap, 
  Shield, Rocket, ArrowRight, ChevronRight, CheckCircle2,
  Sparkles, LineChart, Filter, Cpu, Clock, Users,
  Award, Star, Sun, Moon, Lock, MonitorSmartphone,
  FileText, MessageSquare, Database, Share2
} from 'lucide-react';

const SEOServicesPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const seoServices = [
    {
      icon: <Search />,
      title: 'Technical SEO',
      description: 'Website architecture optimization for search engines',
      color: 'red',
      features: ['Site Speed', 'Mobile Optimization', 'Schema Markup', 'Crawlability']
    },
    {
      icon: <FileText />,
      title: 'Content Strategy',
      description: 'Keyword-optimized content that ranks and converts',
      color: 'red',
      features: ['Keyword Research', 'Content Planning', 'Blog Writing', 'SEO Copywriting']
    },
    {
      icon: <BarChart3 />,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and performance tracking',
      color: 'red',
      features: ['Google Analytics', 'Rank Tracking', 'Competitor Analysis', 'Custom Reports']
    },
    {
      icon: <Share2 />,
      title: 'Link Building',
      description: 'High-quality backlinks for authority growth',
      color: 'red',
      features: ['Outreach Strategy', 'Guest Posting', 'PR Campaigns', 'Partnerships']
    }
  ];

  const seoFeatures = [
    {
      icon: <Target />,
      title: 'Targeted Keywords',
      description: 'Strategic keyword targeting for maximum ROI'
    },
    {
      icon: <Zap />,
      title: 'Fast Results',
      description: 'Rapid improvement in search rankings'
    },
    {
      icon: <Shield />,
      title: 'White Hat Only',
      description: 'Ethical SEO practices that last'
    },
    {
      icon: <Rocket />,
      title: 'Sustainable Growth',
      description: 'Long-term organic traffic growth'
    }
  ];

  const metrics = [
    { value: '300%', label: 'Average Traffic Growth', icon: <TrendingUp /> },
    { value: '#1', label: 'Google Rankings', icon: <Award /> },
    { value: '24/7', label: 'Monitoring', icon: <Clock /> },
    { value: '95%', label: 'Client Retention', icon: <Users /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      description: 'Comprehensive website analysis and competitor research'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom SEO plan tailored to your business goals'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Technical optimization and content creation'
    },
    {
      step: '04',
      title: 'Monitoring & Growth',
      description: 'Continuous optimization and performance tracking'
    }
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-500 overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl bg-red-500/5 dark:bg-red-500/10"
          style={{ top: '20%', left: '5%' }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-red-500/5 dark:bg-red-500/10"
          style={{ bottom: '15%', right: '10%' }}
        />
      </div>

      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-2xl shadow-2xl backdrop-blur-sm border transition-all bg-white/50 dark:bg-black/50 border-gray-200 dark:border-gray-800 hover:bg-white/70 dark:hover:bg-black/70"
      >
        {darkMode ? <Sun className="text-yellow-400 dark:text-yellow-400" /> : <Moon className="text-gray-700 dark:text-gray-700" />}
      </motion.button>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 pt-28 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full mb-8 bg-red-500/10 dark:bg-red-500/10 border border-red-500/20 dark:border-red-500/20 text-red-600 dark:text-red-400"
            >
              <TrendingUp size={16} className="mr-2" />
              <span className="font-bold text-sm tracking-wider">TOP RANKING EXPERTS</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Dominate
              <br />
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
                  Search Results
                </span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4"
                >
                  <Sparkles className="text-red-500 dark:text-red-400" />
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            >
              We deliver measurable SEO results that drive qualified traffic, increase conversions, 
              and boost your revenue through proven search engine optimization strategies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all"
              >
                Get Free SEO Audit
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-bold text-lg border-2 backdrop-blur-sm transition-all bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-gray-800/50"
              >
                View Case Studies
              </motion.button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-3xl backdrop-blur-sm border transition-all bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800"
                >
                  <div className="inline-block p-3 rounded-xl mb-4 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400">
                    {metric.icon}
                  </div>
                  <div className="text-3xl font-black mb-2 text-red-600 dark:text-red-400">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* SEO Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                Comprehensive <span className="text-red-500 dark:text-red-500">SEO</span> Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                End-to-end SEO solutions tailored to your business objectives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300 bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 hover:border-red-500/50"
                >
                  {/* Hover Effect */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/2 dark:from-red-500/10 dark:to-red-600/5"
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-red-500/10 dark:bg-red-500/20">
                    <div className="text-red-600 dark:text-red-400">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle2 className="mr-3 text-red-500 dark:text-red-400" size={18} />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="flex items-center font-semibold text-red-600 dark:text-red-400 group">
                      Learn More
                      <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                Our <span className="text-red-500 dark:text-red-500">4-Step</span> Process
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                A proven methodology that delivers consistent results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300 bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 hover:border-red-500/50"
                >
                  <div className="text-6xl font-black mb-4 text-red-500/10 dark:text-red-400/20">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                  
                  {/* Connector lines for desktop */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-red-500/20 dark:bg-red-500/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                Why Our <span className="text-red-500 dark:text-red-500">SEO</span> Works
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Cutting-edge techniques combined with proven strategies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 hover:border-red-500/50"
                >
                  <div className="inline-block p-4 rounded-2xl mb-6 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[4rem] p-8 md:p-12 border bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 border-gray-200 dark:border-gray-800"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl bg-red-500/5 dark:bg-red-500/10" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl bg-red-500/5 dark:bg-red-500/10" />

              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="inline-block p-4 rounded-2xl bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400">
                    <Rocket size={48} />
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white">
                    Ready to
                    <br />
                    <span className="text-red-500 dark:text-red-500">Dominate</span> Google?
                  </h2>

                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                    Get your free SEO audit and discover how we can 10x your organic traffic.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all"
                    >
                      Get Free SEO Audit
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-2xl font-bold text-lg border-2 backdrop-blur-sm transition-all bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-gray-800/50"
                    >
                      Book Strategy Call
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Mouse Follow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      >
        <div className="w-full h-full rounded-full bg-red-500 dark:bg-red-400" />
      </motion.div>
    </div>
  );
};

export default SEOServicesPage;