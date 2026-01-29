"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp,
  Target,
  BarChart3,
  Search,
  Users,
  MessageSquare,
  Video,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Smartphone,
  Hash,
  Megaphone,
  PlayCircle,
  ChartBar,
  LineChart,
  Filter,
  Eye,
  Share2,
  Download,
  Activity
} from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType<{ size?: number; className?: string }>; // Component type
  title: string;
  desc: string;
}


interface ProcessStep {
  label: string;
  step: string;
  desc: string;
}

const DigitalMarketingPage: React.FC = () => {
  const services: ServiceItem[] = [
    { 
      icon: Search , 
      title: "SEO Optimization", 
      desc: "Improve your search engine rankings and drive organic traffic with our proven SEO strategies.",
    },
    { 
      icon: Target , 
      title: "PPC Advertising", 
      desc: "Maximize ROI with targeted pay-per-click campaigns across Google, Facebook, and other platforms.",
    },
    { 
      icon: MessageSquare , 
      title: "Social Media Marketing", 
      desc: "Engage your audience and build brand loyalty through strategic social media campaigns.",
    },
    { 
      icon: Video , 
      title: "Content Marketing", 
      desc: "Create compelling content that attracts, engages, and converts your target audience.",
    },
    { 
      icon: Smartphone , 
      title: "Mobile Marketing", 
      desc: "Reach customers on their mobile devices with SMS, app-based, and responsive campaigns.",
    },
    { 
      icon: Globe , 
      title: "Email Marketing", 
      desc: "Nurture leads and drive conversions with personalized, automated email campaigns.",
    }
  ];

  const processSteps: ProcessStep[] = [
    { label: "Strategy & Planning", step: "01", desc: "Develop comprehensive marketing strategy" },
    { label: "Audience Research", step: "02", desc: "Identify and analyze target demographics" },
    { label: "Campaign Creation", step: "03", desc: "Design and develop marketing assets" },
    { label: "Implementation", step: "04", desc: "Launch campaigns across platforms" },
    { label: "Monitoring", step: "05", desc: "Track performance and KPIs in real-time" },
    { label: "Optimization", step: "06", desc: "Refine strategies based on analytics" }
  ];

  const features: string[] = [
    "Real-time Analytics",
    "Multi-channel Strategy", 
    "Conversion Tracking", 
    "ROI Measurement"
  ];

  const results: string[] = [
    "Increased Website Traffic",
    "Higher Conversion Rates", 
    "Improved Brand Awareness", 
    "Better Customer Engagement"
  ];

  const platforms = [
    { name: "Google Ads", color: "bg-red-500" },
    { name: "Facebook", color: "bg-blue-500" },
    { name: "Instagram", color: "bg-pink-500" },
    { name: "LinkedIn", color: "bg-blue-600" },
    { name: "Twitter", color: "bg-sky-500" },
    { name: "YouTube", color: "bg-red-600" }
  ];

  const metrics = [
    { value: "99%", label: "Campaign Success", desc: "Average success rate across all campaigns" },
    { value: "24/7", label: "Monitoring", desc: "Real-time performance tracking" },
    { value: "300%", label: "Average ROI", desc: "Return on investment for clients" },
    { value: "50K+", label: "Leads Generated", desc: "Quality leads for businesses" }
  ];

  const insights = [
    { value: "1.2M", label: "Monthly Impressions", change: "+42%", icon: <Eye /> },
    { value: "85K", label: "Monthly Clicks", change: "+28%", icon: <Share2 /> },
    { value: "4.8K", label: "Conversions", change: "+65%", icon: <Download /> },
    { value: "300%", label: "Average ROI", change: "+15%", icon: <Activity /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20 border border-red-500/20 dark:border-red-500/30"
              >
                <TrendingUp size={20} className="mr-3 text-red-600 dark:text-red-400" />
                <span className="text-red-600 dark:text-red-400 font-bold tracking-widest text-sm">
                  DIGITAL GROWTH
                </span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-tight text-gray-900 dark:text-white">
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                  Marketing
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Transform your online presence with data-driven marketing strategies that deliver measurable results and accelerate business growth.
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white rounded-2xl font-bold text-lg flex items-center shadow-lg shadow-red-500/20 dark:shadow-red-500/30 hover:shadow-xl transition-all"
                >
                  <span>Start Marketing</span>
                  <ArrowRight className="ml-3" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl font-bold text-lg hover:border-red-300 dark:hover:border-red-500 transition-colors text-gray-800 dark:text-gray-200"
                >
                  View Results
                </motion.button>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {insights.map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {insight.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {insight.label}
                    </div>
                    <div className="text-xs text-green-500 font-semibold mt-1">
                      {insight.change}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Animated Analytics Dashboard */}
              <div className="relative aspect-square bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[40px] p-8 border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden group">
                
                {/* Dashboard Grid Background */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
                
                {/* Main Chart Visualization */}
                <div className="relative h-full flex flex-col">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      <span className="font-bold text-gray-800 dark:text-white">Live Campaign Performance</span>
                    </div>
                    <div className="text-red-500 font-bold flex items-center gap-2">
                      +42% ↑
                      <Activity className="w-4 h-4 animate-bounce" />
                    </div>
                  </div>
                  
                  {/* Chart Body */}
                  <div className="flex-grow relative">
                    {/* Chart Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-t border-gray-200 dark:border-gray-700" />
                      ))}
                    </div>
                    
                    {/* Animated Chart Bars */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-3/4 px-4">
                      {[60, 85, 45, 70, 90, 75, 55].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="relative w-8"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 rounded-t-lg transition-all duration-300 group-hover:opacity-80" />
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-500 dark:text-red-400 bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-sm"
                          >
                            {height}%
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Chart Labels */}
                    <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 px-4">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <span key={i}>{day}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats Footer */}
                  <div className="mt-12 grid grid-cols-3 gap-4">
                    {insights.map((insight, i) => (
                      <div key={i} className="text-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                        <div className="text-xl font-bold text-gray-900 dark:text-white">{insight.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{insight.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-8 left-8 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center"
                >
                  <ChartBar size={32} className="text-red-500 dark:text-red-400" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-8 right-8 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center"
                >
                  <LineChart size={32} className="text-red-500 dark:text-red-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                Services
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to drive growth and maximize your online potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/10 dark:from-red-500/20 dark:to-red-600/20 mb-6">
                   <service.icon size={32} className="text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-red-500 dark:text-red-400 mt-6 font-medium cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight size={20} className="ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 relative bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
              Multi-<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                Platform
              </span> Reach
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              We optimize your presence across all major digital platforms for maximum visibility and engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all shadow-sm hover:shadow-lg"
              >
                <div className={`absolute inset-0 ${platform.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                <div className="relative text-center">
                  <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {platform.name}
                  </div>
                  <div className={`text-xs font-medium px-3 py-1 rounded-full ${platform.color} bg-opacity-10 text-${platform.color.replace('bg-', '')} inline-block`}>
                    Optimized
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-black text-gray-900 dark:text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A data-driven approach to digital marketing that ensures consistent growth and measurable ROI.
              </p>
              <div className="space-y-6 pt-4">
                {results.map((result, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors border border-transparent hover:border-red-200 dark:hover:border-red-500/20"
                  >
                    <CheckCircle2 className="text-red-500 dark:text-red-400 flex-shrink-0" />
                    <span className="font-medium text-lg text-gray-800 dark:text-white">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-500 transition-all group shadow-sm"
                >
                  <div className="text-5xl font-black text-gray-200 dark:text-gray-700 group-hover:text-red-100 dark:group-hover:text-red-900 transition-colors">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">{step.label}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 relative bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
              Real-time <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                Analytics
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Track performance, measure ROI, and make data-driven decisions with our comprehensive analytics dashboard.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-900 border border-red-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl font-black text-red-500 dark:text-red-400 mb-4">{metric.value}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{metric.label}</h3>
                <p className="text-gray-600 dark:text-gray-300">{metric.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 md:p-20 border border-red-200 dark:border-gray-700 overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
              
              <div className="relative z-10 text-center space-y-10">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
                      Grow
                    </span>?
                  </h2>
                  <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Let's create a digital marketing strategy that delivers real results and drives business growth.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-14 py-6 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-500 dark:to-red-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-red-500/20 hover:shadow-xl transition-all"
                  >
                    Get Free Audit
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-14 py-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl font-bold text-xl hover:border-red-400 dark:hover:border-red-500 transition-colors text-gray-800 dark:text-white"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 pt-8">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-3 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;