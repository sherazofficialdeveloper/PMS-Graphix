// components/PortfolioSection.jsx (Fixed Dark Mode - Class Based)
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ExternalLink,
  Smartphone,
  Globe,
  Cpu,
  Code,
  ShoppingCart,
  Banknote,
  LineChart,
  Dumbbell,
  Users,
  Utensils,
  Filter,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Palette,
  Database,
  Moon,
  Sun
} from 'lucide-react';

// Portfolio projects data
const projects = [
  {
    id: 1,
    title: 'Hamme.com.pk ',
    category: 'Web Application / Platform',
    description: 'E-commer ce platform for local products with shopping cart and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'JavaScript', 'Ajax'],
    icon: <ShoppingCart className="w-8 h-8" />,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-orange-500/10',
    features: ['E-commerce', 'Shopping', 'Responsive'],
    liveLink: 'https://www.hamme.com.pk/',
    img:"/hamme.png"
  },
  {
    id: 2,
    title: 'TaxReturnFilers.com',
    category: 'Web Development',
    description: 'Professional tax filing service website with clean UI and user-friendly forms.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Banknote className="w-8 h-8" />,
    color: 'from-red-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-600/10 to-pink-500/10',
    features: ['Corporate', 'Service', 'Responsive'],
    liveLink: 'https://taxreturnfilers.com/',
    img:"/textreturn.png"
  },
  {
    id: 3,
    title: 'WanFinancials.com',
    category: 'Web Development',
    description: 'Financial consulting firm website with professional layout and service showcases.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <LineChart className="w-8 h-8" />,
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-rose-500/10',
    features: ['Finance', 'Corporate', 'Modern'],
    liveLink: 'https://wanfinancials.com/',
    img:"/WanFinancials.png"
  },
  {
    id: 4,
    title: 'ENMA-BH.com',
    category: 'Web Development',
    description: 'Business consultancy website with multilingual support and corporate design.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Dumbbell className="w-8 h-8" />,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    features: ['Consultancy', 'Corporate', 'Multilingual'],
    liveLink: 'https://enma-bh.com/',
    img:"/ENMA.png"
  },
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
    img:"/haskir.png"
  },
  {
    id: 6,
    title: 'InstantHomeOffers.co.uk',
    category: 'Web Development',
    description: 'UK property investment website with property listings and investment calculators.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Real Estate', 'UK', 'Investment'],
    liveLink: 'https://instanthomeoffers.co.uk/',
    img:"/InstantHomeOffers.png"
  },
  {
    id: 7,
    title: 'GallifordTry.co.uk',
    category: 'Web Development',
    description: 'Construction company website with project portfolio and company information.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Construction', 'Corporate', 'Portfolio'],
    liveLink: 'https://www.gallifordtry.co.uk/',
    img:"/GallifordTry.png"
  },
   {
    id: 8,
    title: 'StarSecurityUAE.com',
    category: 'Web Development',
    description: 'Security services website for UAE market with service details and contact forms.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Security', 'UAE', 'Service'],
    liveLink: 'https://starsecurityuae.com/',
    img:"/StarSecurityUAE.png"
  },
   {
    id: 9,
    title: 'Sofodynamix.com',
    category: 'Software development',
    description: 'Software development company website showcasing services and technologies.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Software', 'Development', 'Services'],
    liveLink: 'https://sofodynamix.com/',
    img:"/Sofodynamix.png"
  },
   {
    id: 10,
    title: 'Traveleazecrm.co.uk',
    category: 'Software development',
    description: 'Travel CRM system for managing customer relationships in travel industry.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Travel', 'CRM', 'Management'],
    liveLink: 'https://traveleazecrm.co.uk/',
    img:"/Traveleazecrm.png"
  },
   {
    id: 11,
    title: 'Accountingsolutionsnc.com',
    category: 'Web Development',
    description: 'Accounting services website with service details and client portal.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Accounting', 'Services', 'Portal'],
    liveLink: 'https://accountingsolutionsnc.com/',
    img:"/Accountingsolutionsnc.png"
  },
   {
    id: 12,
    title: 'Earnwitheasy.com',
    category: 'Web Development',
    description: 'Earning platform website with multiple income streams and user dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Earning', 'Platform', 'Dashboard'],
    liveLink: 'https://www.earnwitheasy.com/',
    img:"/Earnwitheasy.png"
  },
  {
    id: 13,
    title: 'PMS Graphix Portfolio',
    category: 'Web Development',
    description: 'Our own portfolio website showcasing projects and capabilities.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Portfolio', 'Showcase', 'Responsive'],
    liveLink: 'https://pms-graphix-portfolio.vercel.app/',
    img:"/pms graphix.png"
  },
   {
    id: 14,
    title: 'Fun Guide Web',
    category: 'Web Development',
    description: 'Entertainment and fun guide website with activities and event listings.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Entertainment', 'Guide', 'Events'],
    liveLink: 'https://fun-guide-web.vercel.app/',
    img:"/fun guide.png"
  },
   {
    id: 15,
    title: 'Researchcollab.ai',
    category: 'Web Application / Platform',
    description: 'AI-powered research collaboration platform for academics and researchers.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Research', 'AI', 'Collaboration'],
    liveLink: 'https://researchcollab.ai/',
    img:"/Researchcollab.png"
  },
   {
    id: 16,
    title: 'GoRide Driver App',
    category: 'App Development',
    description: 'React Native mobile app for taxi drivers with ride management features.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'AI'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.kibrann.goride.nontaxidriverapp',
    img:"/GoRide.png"
  },
   {
    id: 17,
    title: 'GoRide Passenger App',
    category: 'App Development',
    description: 'React Native mobile app for passengers to book rides and track drivers.',
    tags: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'AI'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Mobile App', 'React Native', 'Ride-hailing'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.taxiapp.kibrann',
    img:"/GoRide Passenger.png"
  },
   {
    id: 18,
    title: 'Homee.com',
    category: 'Web Development',
    description: 'Home services platform connecting homeowners with service professionals.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    icon: <Utensils className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Home Services', 'Platform', 'Booking'],
    liveLink: 'Web Application / Platform',
    img:"https://www.homee.com/"
  },
];

const categories = [
  { id: 'all', label: 'All', icon: <Filter className="w-4 h-4" /> },
  { id: 'web', label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
  { id: 'mobile', label: 'Mobile App', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'ai', label: 'AI/ML', icon: <Cpu className="w-4 h-4" /> },
  { id: 'software', label: 'Software Development', icon: <Code className="w-4 h-4" /> }
];

const stats = [
  { value: '50+', label: 'Projects Completed', icon: <Zap className="w-5 h-5" /> },
  { value: '100%', label: 'Client Satisfaction', icon: <Sparkles className="w-5 h-5" /> },
  { value: '24/7', label: 'Support Available', icon: <Shield className="w-5 h-5" /> },
  { value: '2x', label: 'Faster Delivery', icon: <Clock className="w-5 h-5" /> }
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    const categoryMap: Record<string, string> = {
      'web': 'Web Development',
      'mobile': 'Mobile App',
      'ai': 'AI/ML',
      'software': 'Software Development'
    };
    return project.category === categoryMap[activeCategory];
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen py-16 px-4 md:px-8 transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-red-200 dark:border-red-800 bg-red-500/10 dark:bg-red-500/10 mb-6"
          >
            <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400 animate-pulse" />
            <span className="text-red-700 dark:text-red-300 font-semibold">
              PORTFOLIO
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
              Featured{' '}
            </span>
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Explore our handpicked selection of projects that showcase our expertise and creativity.
          </motion.p>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mt-8"
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-red-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-orange-500 -z-10"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-center"
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* Project badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30">
                    {project.category}
                  </div>
                </div>

                {/* Project content */}
                <div className="p-8">
                  {/* Project image with zoom effect */}
                  <motion.div
                    className={`w-full h-48 ${project.bgColor} rounded-2xl overflow-hidden mb-6 relative`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  {/* Project title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Website
                    </motion.a>
                    
                  </motion.div>
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all"
          >
            <span>View Full Portfolio</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>

          {/* Decorative elements */}
          <div className="flex justify-center gap-6 mt-12">
            {[Palette, Database, Code, TrendingUp].map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              >
                <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}