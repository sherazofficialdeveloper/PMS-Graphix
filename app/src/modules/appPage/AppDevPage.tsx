"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Cloud, 
  ArrowRight,
  Monitor,
  RefreshCw,
  Layout,
  Layers,
  Sparkles,
  Rocket,
  Moon,
  Sun,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Target,
  Palette,
  Code,
  Bug,
  Upload,
  ExternalLink,
  Filter,
  ChevronRight,
  Car,
  Heart
} from 'lucide-react';

// Sirf aap ke original app projects
const appProjects = [
  {
    id: 16,
    title: 'GoRide Driver App',
    category: 'App Development',
    description: 'React Native mobile app for taxi drivers with ride management features.',
    tags: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'AI'],
    icon: <Car className="w-8 h-8" />,
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
    icon: <Car className="w-8 h-8" />,
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Mobile App', 'React Native', 'Ride-hailing'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.taxiapp.kibrann',
    img: "/GoRide Passenger.png"
  }
];

const stats = [
  { value: "99%", label: "Client Satisfaction", icon: <CheckCircle className="w-8 h-8" /> },
  { value: "250+", label: "Projects Delivered", icon: <Rocket className="w-8 h-8" /> },
  { value: "50+", label: "Team Members", icon: <Users className="w-8 h-8" /> },
  { value: "24/7", label: "Support", icon: <Clock className="w-8 h-8" /> },
];

const features = [
  {
    number: "1",
    title: "Native Speed",
    description: "Optimized Swift, Kotlin, and C++ for milliseconds-perfect responsiveness.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    number: "2",
    title: "Serverless Sync",
    description: "Real-time data synchronization across devices using modern cloud architectures.",
    icon: <Cloud className="w-6 h-6" />
  },
  {
    number: "3",
    title: "Biometric Auth",
    description: "Seamless FaceID, Fingerprint, and OAuth 2.0 security integrations.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    number: "4",
    title: "Live Updates",
    description: "Over-the-air (OTA) updates to fix bugs instantly without app store delays.",
    icon: <RefreshCw className="w-6 h-6" />
  },
  {
    number: "5",
    title: "Cross-Platform",
    description: "Write once, run anywhere with high-fidelity React Native & Flutter code.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    number: "6",
    title: "Modular SDKs",
    description: "Custom software kits to scale your app's functionality effortlessly.",
    icon: <Layers className="w-6 h-6" />
  }
];

const processSteps = [
  {
    number: "1",
    title: "Rapid Prototyping",
    description: "Analyzing user personas and competitor apps to find your unique value proposition.",
    icon: <Target className="w-6 h-6" />
  },
  {
    number: "2",
    title: "Real Storyboarding",
    description: "Mapping every tap, swipe, and transition to ensure a frictionless journey.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    number: "3",
    title: "Parallel Development",
    description: "Front-end and back-end engineers working in sync using agile sprints.",
    icon: <Code className="w-6 h-6" />
  },
  {
    number: "4",
    title: "Automated QA",
    description: "Stress-testing on over 50 different device types and OS versions.",
    icon: <Bug className="w-6 h-6" />
  },
  {
    number: "5",
    title: "Launch Strategy",
    description: "App Store Optimization (ASO) and deployment management for a viral debut.",
    icon: <Upload className="w-6 h-6" />
  }
];

// Image Component with fallback
const ProjectImage = ({ project }: { project: any }) => {
  const [imgError, setImgError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full h-48 relative overflow-hidden mb-6 rounded-2xl">
      {imgError ? (
        // Fallback UI if image fails to load
        <div className={`w-full h-full ${project.bgColor} flex items-center justify-center`}>
          <div className={`w-20 h-20 rounded-2xl ${project.color.replace('from-', 'bg-gradient-to-r from-')} flex items-center justify-center`}>
            {project.icon}
          </div>
        </div>
      ) : (
        <>
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className={`w-full h-full ${project.bgColor} animate-pulse`}></div>
          )}
          
          {/* Actual image */}
          <img
            src={project.img}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              console.log(`Image failed to load: ${project.img}`);
              setImgError(true);
            }}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

// App Portfolio Component
function AppPortfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Portfolio Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              OUR APP PORTFOLIO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Mobile Apps Development
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Explore our mobile applications that showcase our expertise in app development.
          </motion.p>
        </motion.div>

        {/* App Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {appProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Project badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30">
                  {project.category}
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                {/* App Image with hover effect */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectImage project={project} />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </motion.div>

                {/* App title */}
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* App description */}
                <p className="mb-6 text-gray-600 dark:text-gray-300 text-center">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 justify-center">
                      <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-shadow"
                >
                  <ExternalLink className="w-4 h-4" />
                  View App on Play Store
                </motion.a>
              </div>

              {/* Animated border on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all"
          >
            <span>View All Apps</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

const AppDevPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className={`${darkMode ? 'dark' : ''} min-h-screen overflow-hidden relative bg-gray-50 dark:bg-gray-950`}
    >
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center border border-gray-200 dark:border-gray-800"
      >
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <Sun className="w-6 h-6 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Moon className="w-6 h-6 text-gray-700" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-48 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-600 dark:text-red-400 text-sm font-bold border border-red-500/30 uppercase tracking-widest backdrop-blur-sm"
              >
                <Sparkles className="mr-2 w-4 h-4" />
                Expert Mobile App Development
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]"
              >
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500">
                  App Development
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed"
              >
                We create high-performance mobile applications using cutting-edge technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-bold text-lg flex items-center gap-3 shadow-lg shadow-red-500/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your App Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white dark:bg-gray-900 border-2 border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 rounded-xl font-bold text-lg hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                >
                  View Our Apps
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative w-72 h-[560px]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-rose-500/20 rounded-[3rem] backdrop-blur-sm border-[12px] border-gray-900 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.2rem] overflow-hidden relative">
                    <div className="p-6 space-y-6">
                      <div className="w-full h-32 rounded-2xl bg-gradient-to-r from-red-500/20 to-rose-500/20 flex items-center justify-center">
                        <Smartphone className="w-12 h-12 text-red-400" />
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="h-3 bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-full"
                            style={{ width: `${[75, 100, 50][i-1]}%` }}
                          />
                        ))}
                      </div>
                      
                      <div className="flex justify-center gap-4 pt-8">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center"
                          >
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                Our <span className="text-red-600">Process</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                From concept to launch—a seamless journey of innovation and excellence.
              </p>
            </motion.div>

            {/* Rapid Prototyping Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-3xl p-8 md:p-10 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold italic">Rapid Prototyping</h3>
                </div>
                <p className="text-lg opacity-90 leading-relaxed">
                  We deliver a functional MVP prototype in just 14 days so you can test your ideas with real users immediately.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
                    <div className="text-red-500 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-20" />

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h3 className="text-3xl md:text-4xl font-black mb-10 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
                  Our Expertise
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl">
                        {feature.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-red-500">
                          {feature.icon}
                        </div>
                        <h4 className="text-xl font-bold">{feature.title}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h3 className="text-3xl md:text-4xl font-black mb-10 text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
                  Development Process
                </span>
              </h3>
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-red-500">
                          {step.icon}
                        </div>
                        <h4 className="text-xl font-bold">{step.title}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Full Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg">
                    <div className="text-red-500 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* APP PORTFOLIO SECTION - Sirf aap ke original app projects */}
      <AppPortfolio />

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gray-900 p-8 md:p-12 lg:p-16 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gray-900" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-rose-900/20" />
            <div className="absolute inset-0 rounded-3xl border border-gray-800" />

            <div className="relative z-10 text-center space-y-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white"
              >
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
                  Build
                </span>{" "}
                Your App?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Let's create amazing mobile experiences together.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-bold text-lg md:text-xl shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your App Project</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 md:px-10 md:py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg md:text-xl hover:bg-white/20 transition-colors"
                >
                  Book a Demo
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AppDevPage;