'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Palette, 
  TrendingUp, 
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Plus
} from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const services = [
    {
      id: 1,
      icon: <Code2 className="w-8 h-8" />,
      title: "Software Development Services",
      description: "Custom software solutions tailored to your business needs. We build robust, scalable applications that drive growth and efficiency.",
      mainServices: [
        "Custom Software Development",
        "Mobile App Development",
        "Web Application Development"
      ],
      additionalCount: 2,
      color: "from-red-500 to-orange-500",
      lightColor: "from-red-400 to-orange-400",
      bgGradient: "from-red-500/10 to-orange-500/10",
      href: "/software"
    },
    {
      id: 2,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      mainServices: [
        "Android App Development",
        "iOS App Development",
        "Hybrid App Development (Flutter, React Native)"
      ],
      additionalCount: 4,
      color: "from-orange-500 to-red-500",
      lightColor: "from-orange-400 to-red-400",
      bgGradient: "from-orange-500/10 to-red-500/10",
      href: "/appDevelopment"
    },
    {
      id: 3,
      icon: <Globe className="w-8 h-8" />,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies for optimal performance.",
      mainServices: [
        "Dynamic Websites",
        "Full-stack Web Applications",
        "Single Page Applications (SPA)"
      ],
      additionalCount: 6,
      color: "from-red-600 to-orange-600",
      lightColor: "from-red-500 to-orange-500",
      bgGradient: "from-red-600/10 to-orange-600/10",
      href: "/webDev"
    },
    {
      id: 4,
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.",
      mainServices: [
        "User Interface Design",
        "User Experience Design",
        "App UI Mockups"
      ],
      additionalCount: 2,
      color: "from-orange-500 to-red-500",
      lightColor: "from-orange-400 to-red-400",
      bgGradient: "from-orange-500/10 to-red-500/10",
      href: "/uiuxdesign"
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "End-to-end digital marketing solutions to grow your brand and increase revenue.",
      mainServices: [
        "Search Engine Marketing (SEM)",
        "Social Media Marketing (SMM)",
        "Content Creation & Marketing"
      ],
      additionalCount: 3,
      color: "from-red-500 to-orange-500",
      lightColor: "from-red-400 to-orange-400",
      bgGradient: "from-red-500/10 to-orange-500/10",
      href: "/digital"
    },
    {
      id: 6,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce solutions that drive sales and provide seamless shopping experiences.",
      mainServices: [
        "Custom E-commerce Website",
        "Shopify Store Development",
        "WooCommerce Development"
      ],
      additionalCount: 8,
      color: "from-orange-600 to-red-600",
      lightColor: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/10 to-red-600/10",
      href: "/webDev"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 360,
      transition: { 
        duration: 0.5,
        type: "spring" as const,
        stiffness: 150,
        damping: 10
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%)`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-red-500/30 dark:bg-red-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 2, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" as const, stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20 border border-red-500/20 dark:border-red-500/30 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-red-500 dark:text-red-400" />
            </motion.div>
            <span className="text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.div>

          {/* Title - DARK MODE FIXED */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            {"Premium Digital Solutions".split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                }}
                className="inline-block mr-3 cursor-pointer text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 transition-all duration-300"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-gray-600 via-gray-800 to-gray-600 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              We offer a comprehensive suite of services to transform your digital presence and drive business growth.
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  background: [
                    `linear-gradient(0deg, rgba(239, 68, 68, 0.5), transparent)`,
                    `linear-gradient(90deg, rgba(239, 68, 68, 0.5), transparent)`,
                    `linear-gradient(180deg, rgba(239, 68, 68, 0.5), transparent)`,
                    `linear-gradient(270deg, rgba(239, 68, 68, 0.5), transparent)`,
                    `linear-gradient(360deg, rgba(239, 68, 68, 0.5), transparent)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100`}
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Sparkle Effects */}
              {hoveredCard === service.id && [...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 2, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              <div className="relative z-10 p-8">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} dark:${service.lightColor} text-white mb-6 shadow-lg group/icon`}
                >
                  {/* Remove the rotating background */}
                  <div className="absolute inset-0 rounded-2xl bg-white/20" />
                  <div className="relative z-10">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                >
                  {service.title.split(' ').map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  {service.description}
                </motion.p>

                {/* Services List */}
                <motion.div className="space-y-3 mb-6">
                  {service.mainServices.map((item, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={listItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-gray-700 dark:text-gray-200 text-sm group-hover/item:text-red-500 dark:group-hover/item:text-red-400 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}

                  {/* Additional Services Badge */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-sm text-red-500 dark:text-red-400 font-semibold pl-8"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{service.additionalCount} more services</span>
                  </motion.div>
                </motion.div>

                {/* Learn More Button */}
             <Link href={service.href}>   
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.color} dark:${service.lightColor} text-white font-semibold shadow-lg group/btn overflow-hidden relative`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Learn More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
              </div>

              {/* Corner Accents */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-500 dark:to-orange-500 text-white font-bold text-lg rounded-2xl shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-500 dark:to-red-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              View All Services
              <motion.div
                animate={{ rotate: 0 }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;