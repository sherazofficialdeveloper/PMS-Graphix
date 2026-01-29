// components/SoftwarePortfolioSection.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Code,
  Server,
  Terminal,
  Workflow,
  Brain,
  Users,
  Cpu,
  Sparkles,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  ChevronRight,
  Database,
  Cloud,
  GitBranch
} from 'lucide-react';

// Software Development Projects from original code
const softwareProjects = [
  {
    id: 5,
    title: 'Haskir.com',
    category: 'Web Application / Platform',
    description: 'Service-based platform connecting customers with local service providers.',
    tags: ['.NET', 'SQL Server', 'Angular', 'Azure', 'next.js'],
    icon: <Users className="w-8 h-8" />,
    color: 'from-red-700 to-red-500',
    bgColor: 'bg-gradient-to-br from-red-700/10 to-red-500/10',
    features: ['Service', 'Platform', 'Modern'],
    liveLink: 'https://haskir.com',
    img: "/haskir.png"
  },
  {
    id: 9,
    title: 'Sofodynamix.com',
    category: 'Software development',
    description: 'Software development company website showcasing services and technologies.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Terminal className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Software', 'Development', 'Services'],
    liveLink: 'https://sofodynamix.com/',
    img: "/Sofodynamix.png"
  },
  {
    id: 10,
    title: 'Traveleazecrm.co.uk',
    category: 'Software development',
    description: 'Travel CRM system for managing customer relationships in travel industry.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Workflow className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Travel', 'CRM', 'Management'],
    liveLink: 'https://traveleazecrm.co.uk/',
    img: "/Traveleazecrm.png"
  },
  {
    id: 15,
    title: 'Researchcollab.ai',
    category: 'Web Application / Platform',
    description: 'AI-powered research collaboration platform for academics and researchers.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Brain className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Research', 'AI', 'Collaboration'],
    liveLink: 'https://researchcollab.ai/',
    img: "/Researchcollab.png"
  },
  {
    id: 16,
    title: 'GoRide Driver App',
    category: 'App Development',
    description: 'React Native mobile app for taxi drivers with ride management features.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Cpu className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'AI'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.kibrann.goride.nontaxidriverapp',
    img: "/GoRide.png"
  },
  {
    id: 17,
    title: 'GoRide Passenger App',
    category: 'App Development',
    description: 'React Native mobile app for passengers to book rides and track drivers.',
    tags: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'AI'],
    icon: <Cpu className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Mobile App', 'React Native', 'Ride-hailing'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.taxiapp.kibrann',
    img: "/GoRide Passenger.png"
  }
];

const categories = [
  { id: 'all', label: 'All Software', icon: <Code className="w-4 h-4" /> },
  { id: 'platform', label: 'Platforms', icon: <Server className="w-4 h-4" /> },
  { id: 'mobile', label: 'Mobile Apps', icon: <Cpu className="w-4 h-4" /> },
  { id: 'ai', label: 'AI Projects', icon: <Brain className="w-4 h-4" /> }
];

const stats = [
  { value: '6', label: 'Software Projects', icon: <Code className="w-5 h-5" /> },
  { value: '100%', label: 'Client Satisfaction', icon: <Shield className="w-5 h-5" /> },
  { value: '24/7', label: 'Support Available', icon: <Zap className="w-5 h-5" /> },
  { value: 'Fast', label: 'Delivery', icon: <TrendingUp className="w-5 h-5" /> }
];

export default function SoftwarePortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter projects based on active category
  const filteredProjects = softwareProjects.filter(project => {
    if (activeCategory === 'all') return true;
    
    const categoryMap: Record<string, string[]> = {
      'platform': ['Web Application / Platform', 'Software development'],
      'mobile': ['App Development'],
      'ai': ['Web Application / Platform']
    };
    
    return categoryMap[activeCategory]?.includes(project.category) || false;
  });

  return (
    <section className="min-h-screen py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-red-200 dark:border-red-800 bg-red-500/10 dark:bg-red-500/10 mb-6"
          >
            <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400 animate-pulse" />
            <span className="text-red-700 dark:text-red-300 font-semibold">
              SOFTWARE DEVELOPMENT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">
              Software{' '}
            </span>
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8"
          >
            Professional software development services with cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto"
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-700 text-center group hover:border-red-300 dark:hover:border-red-500/50 transition-all"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20">
                  <div className="text-red-600 dark:text-red-400">{stat.icon}</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30">
                    {project.category}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8 pt-16">
                  {/* Project image */}
                  <div className={`w-full h-48 ${project.bgColor} rounded-2xl overflow-hidden mb-6 relative`}>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Project icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} opacity-90 group-hover:opacity-100 transition-all`}>
                      <div className="text-white">
                        {project.icon}
                      </div>
                    </div>
                  </div>

                  {/* Project title */}
                  <h3 className="text-2xl font-bold mb-3 text-center text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="mb-6 text-gray-600 dark:text-gray-300 text-center">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action button */}
                  <div className="flex justify-center">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-shadow"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                  </div>
                </div>

                {/* Animated border on hover */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <div className="text-center py-12 px-8 rounded-3xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-200 dark:border-red-800 mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Need Custom Software?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us build your next software solution
          </p>
          <button className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all">
            <span>Start Your Project</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}