"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Cpu, 
  Gamepad2,
  ChevronRight,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';

const SoftwareServices = () => {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and workflows.",
      icon: <Code />,
      features: ["Enterprise Solutions", "CRM & ERP Systems", "Process Automation"],
      animation: "rotate-3d"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      icon: <Smartphone />,
      features: ["iOS & Android", "React Native", "Flutter", "UI/UX Focused"],
      animation: "float"
    },
    {
      id: 3,
      title: "Web Application Development",
      description: "High-performance, scalable web applications with modern frameworks and responsive design.",
      icon: <Globe />,
      features: ["React/Next.js", "Full-Stack Solutions", "Progressive Web Apps"],
      animation: "pulse-glow"
    },
    {
      id: 4,
      title: "AI, ML, and Data Services",
      description: "Intelligent solutions leveraging artificial intelligence, machine learning, and data analytics.",
      icon: <Cpu />,
      features: ["Predictive Analytics", "Computer Vision", "Natural Language Processing"],
      animation: "neon-pulse"
    },
    {
      id: 5,
      title: "Game Development",
      description: "Immersive 2D and 3D gaming experiences across multiple platforms and devices.",
      icon: <Gamepad2 />,
      features: ["Unity & Unreal Engine", "AR/VR Games", "Multiplayer Systems"],
      animation: "tilt-shake"
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, deployment automation, and continuous integration pipelines.",
      icon: <Layers />,
      features: ["AWS/Azure/GCP", "Containerization", "CI/CD Pipelines"],
      animation: "wave"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles className="text-red-500" size={24} />
            <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
              Our Expertise
            </span>
            <Sparkles className="text-red-500" size={24} />
          </motion.div>
          
          <motion.h2 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl font-bold mb-6 dark:text-white"
          >
            Software Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We deliver cutting-edge software solutions with modern technologies, 
            creating digital experiences that drive business growth and innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Animated border effect on hover */}
              <motion.div 
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-30 blur transition duration-500"
                animate={{ 
                  rotate: hoveredCard === service.id ? [0, 5, -5, 0] : 0,
                  scale: hoveredCard === service.id ? [1, 1.02, 1] : 1
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Card - Background color removed */}
              <div className="relative rounded-2xl p-6 h-full overflow-hidden border border-gray-200 dark:border-gray-800">
                {/* Icon with animation */}
                <motion.div 
                  variants={iconVariants}
                  animate={hoveredCard === service.id ? "hover" : "visible"}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/10 border border-red-100 dark:border-red-800/30"
                >
                  <div className="text-red-500">
                    {service.icon}
                  </div>
                </motion.div>
                
                {/* Service title */}
                <motion.h3 
                  className="text-xl font-bold mb-3 text-gray-900 dark:text-white"
                  animate={{ color: hoveredCard === service.id ? "#ef4444" : undefined }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Zap className="w-3 h-3 text-red-500 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                {/* Animated button */}
                <motion.div
                  className="flex items-center text-red-500 font-medium"
                  animate={{ x: hoveredCard === service.id ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <span>Learn more</span>
                  <motion.div
                    animate={{ x: hoveredCard === service.id ? 5 : 0 }}
                    transition={{ 
                      x: { 
                        repeat: hoveredCard === service.id ? Infinity : 0,
                        repeatType: "reverse",
                        duration: 0.6 
                      }
                    }}
                  >
                    <ChevronRight className="ml-1 w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Ready to transform your ideas into reality?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Let&apos;s build something amazing together.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Start a Project
            </motion.button>
          </div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                250+
              </motion.div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                50+
              </motion.div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Expert Developers</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, type: "spring" }}
              >
                99%
              </motion.div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareServices;