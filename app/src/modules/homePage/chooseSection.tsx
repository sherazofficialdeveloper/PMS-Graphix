'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { Variants } from "framer-motion";
import { 
  Trophy, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Star,
  Target,
  Award,
  Calendar,
  ArrowRight,
  Sparkles,
  Heart,
  ChevronRight,
  PlayCircle,
  PauseCircle,
  Volume2,
  VolumeX,
  Eye,
  ThumbsUp,
  Download,
  BarChart3,
  MousePointerClick,
  Rocket,
  ShieldCheck
} from 'lucide-react';

const ChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  
  const controls = useAnimation();
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Video controls
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress || 0);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoClick = () => {
    handlePlayPause();
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  const features = [
    {
      id: 1,
      title: "Excellence in Every Detail",
      description: "We don't just build solutions; we craft experiences that drive results and exceed expectations.",
      icon: <Star className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
      gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
      stats: { value: "99%", label: "Client Satisfaction" },
      delay: 0.1
    },
    {
      id: 2,
      title: "Award-Winning Quality",
      description: "Consistently delivering excellence recognized by industry leaders and satisfied clients.",
      icon: <Trophy className="w-5 h-5" />,
      color: "from-red-500 to-pink-500",
      gradient: "linear-gradient(135deg, #ef4444 0%, #ec4899 100%)",
      stats: { value: "50+", label: "Industry Awards" },
      delay: 0.2
    },
    {
      id: 3,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule, every time.",
      icon: <Clock className="w-5 h-5" />,
      color: "from-red-500 to-rose-500",
      gradient: "linear-gradient(135deg, #ef4444 0%, #fb7185 100%)",
      stats: { value: "100%", label: "On Time" },
      delay: 0.3
    },
    {
      id: 4,
      title: "Expert Team",
      description: "Highly skilled professionals with years of experience in cutting-edge technologies.",
      icon: <Users className="w-5 h-5" />,
      color: "from-red-500 to-red-600",
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      stats: { value: "200+", label: "Experts" },
      delay: 0.4
    },
    {
      id: 5,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures and 99.9% uptime guarantee.",
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "from-red-500 to-purple-500",
      gradient: "linear-gradient(135deg, #ef4444 0%, #8b5cf6 100%)",
      stats: { value: "99.9%", label: "Uptime" },
      delay: 0.5
    },
    {
      id: 6,
      title: "High Performance",
      description: "Optimized solutions that deliver lightning-fast performance and scalability.",
      icon: <Zap className="w-5 h-5" />,
      color: "from-red-500 to-yellow-500",
      gradient: "linear-gradient(135deg, #ef4444 0%, #eab308 100%)",
      stats: { value: "10x", label: "Faster" },
      delay: 0.6
    },
    {
      id: 7,
      title: "ROI Focused",
      description: "Solutions designed to maximize your return on investment and drive business growth.",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-red-500 to-green-500",
      gradient: "linear-gradient(135deg, #ef4444 0%, #22c55e 100%)",
      stats: { value: "3x", label: "Average ROI" },
      delay: 0.7
    }
  ];

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


 const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

  // Video Controls Component
  const VideoControls = () => (
    <AnimatePresence>
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-0 left-0 right-0 p-3"
        >
          <div className="h-1 bg-white/30 rounded-full mb-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 to-orange-500"
              style={{ width: `${videoProgress}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePlayPause}
                className="text-white hover:text-red-400 transition-colors"
              >
                {isPlaying ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
              </button>
              
              <button
                onClick={handleMute}
                className="text-white hover:text-red-400 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="text-white text-xs">
              {Math.floor(videoProgress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Stats Component - Right side space fill
  const StatsSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
        <BarChart3 className="w-5 h-5 text-red-500" />
        Our Achievements
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { value: "500+", label: "Projects", icon: <CheckCircle className="w-4 h-4" /> },
          { value: "150+", label: "Clients", icon: <Users className="w-4 h-4" /> },
          { value: "99.7%", label: "Satisfaction", icon: <Heart className="w-4 h-4" /> },
          { value: "24/7", label: "Support", icon: <Shield className="w-4 h-4" /> }
        ].map((stat, index) => (
          <div key={index} className="text-center p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
            <div className="text-2xl font-bold text-red-500">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">Video Views</span>
          <span className="text-sm font-medium text-gray-800 dark:text-white">1.2M+</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Client Reviews</span>
          <span className="text-sm font-medium text-gray-800 dark:text-white">4.9/5</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      className="relative py-12 md:py-20 px-4 md:px-8 bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headingVariants}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-4">
            <Sparkles className="w-3 h-3 text-red-500 mr-2" />
            <span className="text-red-500 font-medium text-xs">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-red-500">Why</span>{' '}
            <span className="text-gray-800 dark:text-white">Choose Our Solutions</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Discover what makes us the preferred choice for businesses worldwide
          </p>
          
          <div className="h-0.5 w-16 bg-gradient-to-r from-red-500 to-orange-500 mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Video */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Video Player */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
            >
              <div 
                className="relative cursor-pointer bg-black"
                onClick={handleVideoClick}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setTimeout(() => setShowControls(false), 1000)}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto"
                  poster="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                >
                  <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    type="video/mp4"
                  />
                </video>
                
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                )}
                
                <VideoControls />
              </div>
              
              {/* Video Info */}
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                  <Eye className="w-3 h-3" />
                  <span>1.2M Views</span>
                </div>
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                  <ThumbsUp className="w-3 h-3" />
                  <span>45K Likes</span>
                </div>
              </div>
            </motion.div>

            {/* Video Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-4 md:p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
                  See Our Excellence in Action
                </h3>
                <button className="text-red-500 hover:text-red-600">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                Watch how we transform ideas into exceptional digital solutions through our proven development process.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-xs">
                  HD Quality
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs">
                  3:45 mins
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs">
                  Trending
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-1">
            <StatsSection />
            
            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 p-4 md:p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-100 dark:border-red-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-red-500 rounded-lg">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-gray-800 dark:text-white">Quick Start</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get started with our services in just 3 simple steps
              </p>
              <ol className="space-y-2">
                {['Contact Us', 'Discuss Requirements', 'Start Development'].map((step, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {features.slice(0, 4).map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                hoveredCard === feature.id ? 'border-red-300 dark:border-red-700' : ''
              }`}>
                <div className={`inline-flex items-center justify-center p-2 md:p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-3 md:mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-lg md:text-xl font-bold text-red-500">
                    {feature.stats.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {feature.stats.label}
                  </div>
                </div>
                
                <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} transition-all duration-300 mt-2`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
        >
          {features.slice(4).map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className={`relative bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                hoveredCard === feature.id ? 'border-red-300 dark:border-red-700' : ''
              }`}>
                <div className={`inline-flex items-center justify-center p-2 md:p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-3 md:mb-4`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="text-lg md:text-xl font-bold text-red-500">
                    {feature.stats.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    {feature.stats.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6">
            {[
              { icon: <CheckCircle className="w-4 h-4" />, text: "100% Satisfaction" },
              { icon: <Target className="w-4 h-4" />, text: "Proven Results" },
              { icon: <Award className="w-4 h-4" />, text: "Industry Awards" },
              { icon: <Heart className="w-4 h-4" />, text: "Client Love" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="text-red-500">{badge.icon}</div>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mb-6">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              <span>Ready to transform your business?</span>
              <ChevronRight className="w-3 h-3 text-red-500" />
              <span>Get started in minutes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;