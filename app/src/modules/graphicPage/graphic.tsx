"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Variants } from "framer-motion";
import { 
  Palette, PenTool, Layers, Image, Brush, 
  Grid3x3, Type, Shapes, Palette as ColorPalette,
  ArrowRight, ChevronRight, CheckCircle2, Sparkles,
  Target, Zap, Shield, Rocket, Award, Clock,
  Users, TrendingUp, Sun, Moon, Camera, Video,
  Smartphone, Monitor, Globe, FileText, Share2,
  MessageSquare, Heart, Star, ThumbsUp
} from 'lucide-react';

const GraphicDesignPage: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    }
  };

  const services = [
    {
      icon: <Palette />,
      title: 'Brand Identity',
      description: 'Complete visual branding for memorable recognition',
      features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines']
    },
    {
      icon: <PenTool />,
      title: 'Print Design',
      description: 'Stunning designs for physical marketing materials',
      features: ['Business Cards', 'Brochures', 'Flyers', 'Packaging']
    },
    {
      icon: <Image />,
      title: 'Digital Graphics',
      description: 'Eye-catching visuals for online presence',
      features: ['Social Media Graphics', 'Web Banners', 'Email Templates', 'Digital Ads']
    },
    {
      icon: <Video />,
      title: 'Motion Graphics',
      description: 'Animated visuals that captivate and engage',
      features: ['Animated Logos', 'Video Intros', 'Social Media Videos', 'Explainer Videos']
    }
  ];

  const designFeatures = [
    {
      icon: <Brush />,
      title: 'Creative Excellence',
      description: 'Unique designs that stand out from competition'
    },
    {
      icon: <Zap />,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality'
    },
    {
      icon: <Shield />,
      title: 'Multiple Revisions',
      description: 'We refine until you are completely satisfied'
    },
    {
      icon: <Rocket />,
      title: 'Strategic Design',
      description: 'Visuals that align with business objectives'
    }
  ];

  const designTypes = [
    {
      title: 'Logo Design',
      icon: <Shapes />,
      description: 'Memorable brand symbols'
    },
    {
      title: 'UI/UX Design',
      icon: <Grid3x3 />,
      description: 'User-centered interfaces'
    },
    {
      title: 'Typography',
      icon: <Type />,
      description: 'Strategic font selection'
    },
    {
      title: 'Color Theory',
      icon: <ColorPalette />,
      description: 'Psychology-based palettes'
    },
    {
      title: 'Print Media',
      icon: <FileText />,
      description: 'Physical marketing materials'
    },
    {
      title: 'Social Media',
      icon: <Share2 />,
      description: 'Platform-specific graphics'
    }
  ];

  const metrics = [
    { value: '500+', label: 'Designs Created', icon: <Brush /> },
    { value: '99%', label: 'Client Satisfaction', icon: <Heart /> },
    { value: '48h', label: 'Average Delivery', icon: <Clock /> },
    { value: '50+', label: 'Happy Clients', icon: <Users /> }
  ];

  return (
    <div 
      className="min-h-screen transition-colors duration-500 overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-900 dark:text-gray-100"
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
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-red-500/2 dark:bg-red-500/5"
          style={{ top: '60%', left: '70%' }}
        />
      </div>

      {/* Theme Toggle - Static (Navbar se control hoga) */}
     

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
              <Sparkles size={16} className="mr-2" />
              <span className="font-bold text-sm tracking-wider">AWARD-WINNING DESIGNS</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-gray-900 dark:text-white"
            >
              Visual Stories
              <br />
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-red-700 dark:from-red-400 dark:via-red-500 dark:to-red-600">
                  That Captivate
                </span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4"
                >
                  <Brush className="text-red-500 dark:text-red-400" />
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            >
              We transform ideas into stunning visual experiences that engage audiences, 
              communicate your message, and drive business growth through exceptional design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all"
              >
                Start Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-2xl font-bold text-lg border-2 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all"
              >
                View Portfolio
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
                  className="text-center p-6 rounded-3xl backdrop-blur-sm border bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800"
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

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                Our <span className="text-red-500">Design</span> Services
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Comprehensive design solutions for all your visual needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm border bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300"
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
                      View Examples
                      <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Types Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                Design <span className="text-red-500">Expertise</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Specialized skills across all design disciplines
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {designTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="aspect-square rounded-3xl p-6 flex flex-col items-center justify-center backdrop-blur-sm border bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="p-4 rounded-2xl mb-4 bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center text-gray-900 dark:text-white">
                    {type.title}
                  </h3>
                  <p className="text-xs text-center text-gray-600 dark:text-gray-400">
                    {type.description}
                  </p>
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
                Why Our <span className="text-red-500">Designs</span> Work
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Combining creativity with strategic thinking for maximum impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center p-8 rounded-3xl backdrop-blur-sm border bg-white/30 dark:bg-gray-900/30 border-gray-200 dark:border-gray-800 hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-300"
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

        {/* Portfolio Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">
                Featured <span className="text-red-500">Work</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                A glimpse of our recent design projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="aspect-square rounded-3xl overflow-hidden relative group bg-gray-200 dark:bg-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img src="https://images.unsplash.com/file-1635990755334-4bfd90f37242image?w=416&dpr=2&auto=format&fit=crop&q=60" alt="" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      Project {item}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Brand identity design for innovative tech startup
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="inline-flex items-center font-bold text-lg text-red-600 dark:text-red-400 group">
                View Full Portfolio
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[4rem] p-8 md:p-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 border border-gray-200 dark:border-gray-800"
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
                    <Palette size={48} />
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white">
                    Ready to
                    <br />
                    <span className="text-red-500">Transform</span> Your Brand?
                  </h2>

                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                    Let's create stunning visuals that make your brand unforgettable.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all"
                    >
                      Start Design Project
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 rounded-2xl font-bold text-lg border-2 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all"
                    >
                      Book Free Consultation
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

export default GraphicDesignPage;