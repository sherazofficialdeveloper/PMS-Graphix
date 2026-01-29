// components/TeamSection.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaArrowRight } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TeamSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Shafiq",
      position: "CEO & Graphic Designer",
      expertise: "Graphic Designer",
      description: "I lead our agency with over 15 years of experience in enterprise software solutions, while also contributing as a creative Graphic Designer to deliver innovative and impactful digital solutions for businesses worldwide.",
      image: "/Muhammad Shafiq.webp",
      social: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      id: 2,
      name: "Manzoor Ahmad",
      position: "Senior Developer",
      expertise: "FullStack Developer",
      description: "I bring extensive experience in web development, creating responsive, robust, and scalable applications. I focus on building innovative digital solutions that enhance user experience and drive business growth worldwide.",
      image: "/Manzoor Ahmad.jpg",
      social: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
      id: 3,
      name: "Muhammad Muzamel",
      position: "Senior WordPress Developer",
      expertise: "WordPress Developer",
      description: "I have strong experience in WordPress development, creating responsive and scalable websites. I focus on delivering innovative solutions that enhance user experience.",
      image: "/Muhammad Muzamel1.jpg",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      id: 4,
      name: "Haris Aziz",
      position: "Digital Marketing Specialist",
      expertise: "Digital Marketing",
      description: "I bring solid experience in digital marketing, creating strategies that enhance online visibility, engagement, and business growth. I focus on delivering effective campaigns across social media, SEO, and advertising platforms.",
      image: "/Haris Aziz.jpg",
      social: { linkedin: "#", twitter: "#", email: "#" }
    }
  ];

  // Additional team members to show when "Meet Full Team" is clicked
  const additionalMembers = [
    {
      id: 5,
      name: "James Lee",
      position: "Senior Developer",
      expertise: "Backend Systems",
      description: "Expert in microservices architecture and cloud infrastructure. Built scalable APIs serving millions of users.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { linkedin: "#", github: "#" }
    },
    {
      id: 6,
      name: "Priya Sharma",
      position: "Product Manager",
      expertise: "Product Strategy",
      description: "Drives product vision and roadmap. Successfully launched 10+ products with market fit and high user adoption.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 7,
      name: "David Kim",
      position: "DevOps Engineer",
      expertise: "Cloud Infrastructure",
      description: "Specializes in CI/CD pipelines and cloud optimization. Reduced deployment time by 80% across multiple projects.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      id: 8,
      name: "Olivia Martinez",
      position: "Content Strategist",
      expertise: "Brand Communication",
      description: "Creates compelling brand narratives and content strategies. Increased engagement by 200% across digital platforms.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      social: { linkedin: "#", instagram: "#" }
    }
  ];

  const [showFullTeam, setShowFullTeam] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const toggleFullTeam = () => {
    setShowFullTeam(!showFullTeam);
    setAnimationKey(prev => prev + 1);
  };

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

  const cardVariants:Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
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

  return (
    <section className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30">
              <span className="text-2xl font-bold text-red-500">T</span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-red-500">Our</span> Team
          </motion.h2>
          
          <motion.p 
            variants={titleVariants}
            className="text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300"
          >
            Meet our passionate team of innovators, designers, and developers committed to excellence.
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"
          />
        </motion.div>

        {/* Meet Our Experts Subtitle */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            <span className="px-4 py-2 rounded-lg bg-red-50 dark:bg-gray-800 border border-red-200 dark:border-gray-700">
              Meet Our <span className="text-red-500">Experts</span>
            </span>
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate team of innovators, designers, and developers committed to pushing boundaries and delivering exceptional solutions.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div 
          key={animationKey}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300"
              style={{
                transform: hoveredCard === member.id ? 'perspective(1000px) rotateY(5deg)' : 'perspective(1000px) rotateY(0deg)',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.5s ease'
              }}
            >
              {/* Card Image with Animation */}
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === member.id ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredCard === member.id ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Expertise Badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 z-20"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300 dark:border dark:border-red-500/30">
                    {member.expertise}
                  </span>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-2xl font-bold mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {member.position}
                </motion.p>
                <motion.p 
                  className="mb-6 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {member.description}
                </motion.p>

                {/* Social Links */}
                <motion.div 
                  className="flex space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ y: -3, scale: 1.2 }}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-500/30 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <FaLinkedin className="text-red-500" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ y: -3, scale: 1.2 }}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-500/30 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <FaTwitter className="text-red-500" />
                    </motion.a>
                  )}
                  {member.social.instagram && (
                    <motion.a
                      href={member.social.instagram}
                      whileHover={{ y: -3, scale: 1.2 }}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-500/30 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <FaInstagram className="text-red-500" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      href={member.social.github}
                      whileHover={{ y: -3, scale: 1.2 }}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-500/30 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <FaGithub className="text-red-500" />
                    </motion.a>
                  )}
                  {member.social.email && (
                    <motion.a
                      href={member.social.email}
                      whileHover={{ y: -3, scale: 1.2 }}
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-500/30 text-gray-700 dark:text-gray-300 transition-colors"
                    >
                      <MdEmail className="text-red-500" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Team Members (Shown when toggled) */}
        {showFullTeam && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {additionalMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300 dark:border dark:border-red-500/30">
                      {member.expertise}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-lg font-semibold mb-3 text-red-600 dark:text-red-400">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Meet Full Team Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={toggleFullTeam}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full font-bold text-lg overflow-hidden bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <motion.span 
              className="flex items-center justify-center"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              {showFullTeam ? "Show Less" : "Meet Full Team"}
              <FaArrowRight className={`ml-3 transition-transform duration-300 ${showFullTeam ? 'rotate-180' : 'group-hover:translate-x-2'}`} />
            </motion.span>
            
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          {/* Stats Section */}
          <motion.div 
            className="mt-16 p-8 rounded-2xl bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Our Collective Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects Delivered", value: "500+" },
                { label: "Years Combined Experience", value: "85+" },
                { label: "Client Satisfaction", value: "99%" },
                { label: "Awards Won", value: "42" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-red-600 dark:text-red-400">
                    {stat.value}
                  </div>
                  <div className="font-medium text-gray-700 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Final CTA */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Interested in joining our talented team? We're always looking for passionate individuals.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300"
            >
              View Career Opportunities
              <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;