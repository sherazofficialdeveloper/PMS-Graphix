"use client"
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Code2, Smartphone, Globe, Brain,
  Palette, PenTool, TrendingUp, ShoppingCart, 
  ChevronRight, Sparkles, Zap, Layers, Target,
  CheckCircle2, ArrowRight, ExternalLink, Rocket
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  category: 'Development' | 'Design' | 'Marketing' | 'Software' | 'AI';
  icon: React.ReactElement;
  services: string[];
  features: string[];
  color: string;
  gradient: string;
}

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: 'Software Development Services',
      description: 'Custom software solutions tailored to your business needs. We build robust, scalable applications that drive growth and efficiency.',
      category: 'Software',
      icon: <Code2 className="w-8 h-8" />,
      services: ['Custom Software Development', 'Mobile App Development', 'Web Application Development', 'AI, ML, and Data Services'],
      features: ['Enterprise Solutions', 'API Integration', 'Cloud Migration', 'Maintenance & Support'],
      color: 'text-white',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.',
      category: 'Development',
      icon: <Smartphone className="w-8 h-8" />,
      services: ['Android App Development', 'iOS App Development', 'Hybrid App Development', 'Mobile App UI/UX Design'],
      features: ['Real-time Apps', 'Offline Capability', 'Push Notifications', 'App Store Optimization'],
      color: 'text-white',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'Development',
      icon: <Globe className="w-8 h-8" />,
      services: ['Dynamic Websites', 'Full-stack Web Applications', 'Single Page Applications', 'E-commerce Website Development'],
      features: ['Progressive Web Apps', 'Microservices Architecture', 'Real-time Features', 'Scalable Infrastructure'],
      color: 'text-white',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      title: 'AI, ML & Data Services',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to transform your data into actionable insights.',
      category: 'AI',
      icon: <Brain className="w-8 h-8" />,
      services: ['Artificial Intelligence Solutions', 'Machine Learning Model Development', 'Computer Vision Development', 'NLP-based Applications'],
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
      color: 'text-white',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences that engage users and drive conversions.',
      category: 'Design',
      icon: <Palette className="w-8 h-8" />,
      services: ['User Interface Design', 'User Experience Design', 'App UI Mockups', 'Wireframing & Prototyping'],
      features: ['User Research', 'Interactive Prototypes', 'Design Systems', 'Usability Testing'],
      color: 'text-white',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 6,
      title: 'Graphics & Branding',
      description: 'Complete branding solutions that establish your unique identity and make a lasting impression.',
      category: 'Design',
      icon: <PenTool className="w-8 h-8" />,
      services: ['Logo Design', 'Brand Identity & Branding Kits', 'Business Cards & Stationery', 'Product Packaging Design'],
      features: ['Brand Strategy', 'Visual Identity', 'Print Design', 'Digital Assets'],
      color: 'text-white',
      gradient: 'from-yellow-500 to-amber-500'
    },
    {
      id: 7,
      title: 'Search Engine Optimization (SEO)',
      description: 'Increase your online visibility and drive organic traffic with our comprehensive SEO strategies.',
      category: 'Marketing',
      icon: <TrendingUp className="w-8 h-8" />,
      services: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Local SEO'],
      features: ['Keyword Research', 'Content Optimization', 'Link Building', 'Performance Tracking'],
      color: 'text-white',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 8,
      title: 'Digital Marketing',
      description: 'End-to-end digital marketing solutions to grow your brand and increase revenue.',
      category: 'Marketing',
      icon: <Target className="w-8 h-8" />,
      services: ['Search Engine Marketing', 'Social Media Marketing', 'Content Creation & Marketing', 'Email Marketing'],
      features: ['Campaign Strategy', 'Analytics & Reporting', 'Conversion Optimization', 'Multi-channel Marketing'],
      color: 'text-white',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 9,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce solutions that drive sales and provide seamless shopping experiences.',
      category: 'Software',
      icon: <ShoppingCart className="w-8 h-8" />,
      services: ['Custom E-commerce Website', 'Shopify Store Development', 'WooCommerce Development', 'Magento Development'],
      features: ['Payment Gateway Integration', 'Inventory Management', 'Multi-vendor Systems', 'Mobile Commerce'],
      color: 'text-white',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const filters = ['All Services', 'Development', 'Design', 'Marketing', 'Software', 'AI'];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesFilter = activeFilter === 'All Services' || service.category === activeFilter;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="relative bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-950/50 dark:to-gray-900 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-sm font-bold tracking-wider text-red-600 dark:text-red-400">
              OUR EXPERTISE
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 ml-4">
              Services
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions tailored to transform your business and drive growth. 
            We deliver exceptional results through innovative technology and creative excellence.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <Filter className="w-4 h-4" />
              Filter by:
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/20'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-red-300 dark:hover:border-red-500/50">
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                        <div className={service.color}>
                          {service.icon}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: hoveredService === service.id ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={`p-2 rounded-lg ${service.color} bg-opacity-10`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Services List */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm">Services Include:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.services.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                        {service.services.length > 3 && (
                          <span className="px-3 py-1.5 bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium">
                            +{service.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-8 py-6 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50">
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold ${service.color}`}>
                        {service.category}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold text-sm group/btn"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
              <div className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
            </div>

            {/* Content */}
            <div className="relative p-12 md:p-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-bold text-red-400">CUSTOM SOLUTIONS</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Can't find what you're looking for?
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                    We create custom solutions for unique business challenges. 
                    Tell us about your specific needs and we'll craft a personalized solution just for you.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all"
                  >
                    <Rocket className="w-5 h-5" />
                    Request Custom Solution
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.button>
                </div>

                <div className="flex-1 max-w-md">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/20 mb-6">
                        <Zap className="w-8 h-8 text-red-400" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h4>
                      <p className="text-gray-300 mb-6">
                        Schedule a free 30-minute consultation with our experts to discuss your project requirements.
                      </p>
                      <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all">
                        Schedule Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;