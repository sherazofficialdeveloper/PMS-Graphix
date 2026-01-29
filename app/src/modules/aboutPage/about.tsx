'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Target, Trophy, Users, Heart, Star, Globe,
  Award, TrendingUp, Handshake, Lightbulb,
  Shield, Calendar, Rocket, ArrowRight, CheckCircle2
} from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface Value {
  icon: React.ElementType<{ size?: number; className?: string }>; // Component type
  title: string;
  description: string;
}


const AboutPage: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      y: 30, 
      opacity: 0,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { icon: <Calendar />, value: "5+", label: "Years Experience", color: "bg-red-500/10 text-red-500" },
    { icon: <Trophy />, value: "200+", label: "Projects Delivered", color: "bg-red-500/10 text-red-500" },
    { icon: <Users />, value: "50+", label: "Happy Clients", color: "bg-red-500/10 text-red-500" },
    { icon: <Star />, value: "98%", label: "Satisfaction Rate", color: "bg-red-500/10 text-red-500" }
  ];

  const missionPoints = [
    "Deliver exceptional quality",
    "Foster innovation",
    "Build lasting relationships",
    "Drive measurable results"
  ];

  const visionPoints = [
    "Global recognition",
    "Industry leadership",
    "Continuous innovation",
    "Sustainable growth"
  ];

  const milestones: Milestone[] = [
    { 
      year: "2019", 
      title: "Company Founded", 
      description: "Started with a vision to transform digital experiences" 
    },
    { 
      year: "2020", 
      title: "First Major Project", 
      description: "Delivered enterprise solution for Fortune 500 company" 
    },
    { 
      year: "2021", 
      title: "Team Expansion", 
      description: "Grew to 20+ experts across multiple domains" 
    },
    { 
      year: "2022", 
      title: "Award Recognition", 
      description: 'Received "Best Digital Agency" award' 
    },
    { 
      year: "2023", 
      title: "Global Expansion", 
      description: "Started serving clients across 10+ countries" 
    }
  ];

  const values: Value[] = [
    { 
      icon: Star , 
      title: "Excellence", 
      description: "We strive for perfection in every project we undertake." 
    },
    { 
      icon: Handshake , 
      title: "Collaboration", 
      description: "Working closely with clients to achieve shared goals." 
    },
    { 
      icon: Lightbulb , 
      title: "Innovation", 
      description: "Embracing new technologies and creative approaches." 
    },
    { 
      icon: Shield , 
      title: "Integrity", 
      description: "Honest communication and transparent processes." 
    }
  ];

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants} 
      className="bg-white dark:bg-gray-950 min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold border border-red-500/20 mb-6"
            >
              <Target size={16} className="mr-2" />
              Our Story
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Building <span className="text-red-500">Digital Excellence</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            >
              We are a passionate team of innovators, designers, and developers committed to transforming businesses through cutting-edge digital solutions.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-center"
                >
                  <div className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                    {React.cloneElement(stat.icon, { size: 24 })}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful impact.
              </p>
              
              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <Globe size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                To be the leading digital partner for businesses worldwide, recognized for our innovation, excellence, and transformative impact.
              </p>
              
              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 size={18} className="text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Milestones that shaped our growth and success
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500/20 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Year badge */}
                  <div className={`w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold z-10 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                    {milestone.year}
                  </div>
                  
                  {/* Content card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-red-500">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  <value.icon size={28} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-6 pb-20 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600"
        >
          <div className="relative p-10 md:p-12 text-white text-center">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Handshake size={32} className="text-white" />
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partner with <span className="text-black">Excellence</span>
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            
            <button
              className="px-10 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <span className="flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;