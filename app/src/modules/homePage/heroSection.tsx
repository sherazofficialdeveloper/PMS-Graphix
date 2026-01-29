'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Award, 
  Headphones,
  ChevronLeft,
  ChevronRight,
  PlayCircle
} from 'lucide-react';

// Counter Animation Component
interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const isPlus = value.includes('+');
    const increment = numericValue / (duration * 60);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [value, duration, isInView]);
  
  const displayValue = value.includes('/') ? value : 
                       value.includes('+') ? `${count}+` : count;
  
  return <span ref={ref}>{displayValue}</span>;
};

const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    // Auto-play functionality
    const startAutoPlay = () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = setInterval(() => {
        if (isAutoPlaying) {
          setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }
      }, 6000);
    };
    
    startAutoPlay();
    
    return () => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    };
  }, [isAutoPlaying]);

  const heroSlides = [
    {
      id: 1,
      title: "Transform Your Digital Presence",
      description: "We craft exceptional digital experiences through premium software development, cutting-edge design, and data-driven marketing solutions.",
      button1Text: "Explore Our Services",
      button2Text: "Get Free Consultation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayColor: " dark:from-gray-900/40 dark:via-gray-900/20"
    },
    {
      id: 2,
      title: "Innovate With Cutting-Edge Technology",
      description: "Leverage the power of AI, blockchain, and cloud computing to build scalable solutions that drive business growth.",
      button1Text: "View Our Technologies",
      button2Text: "Schedule a Demo",
      image: "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXQlMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D",
      overlayColor: " dark:from-gray-900/40 dark:via-gray-900/20"
    },
    {
      id: 3,
      title: "Accelerate Your Digital Transformation",
      description: "End-to-end digital transformation services that help businesses adapt, evolve, and thrive in the digital age.",
      button1Text: "Start Transformation",
      button2Text: "Download Case Study",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayColor: "dark:from-gray-900/40 dark:via-gray-900/20"
    }
  ];

  const stats = [
    {
      id: 1,
      value: "200+",
      label: "Projects Delivered",
      icon: <Award className="w-5 h-5" />,
      delay: 0.1
    },
    {
      id: 2,
      value: "50+",
      label: "Happy Clients",
      icon: <Users className="w-5 h-5" />,
      delay: 0.2
    },
    {
      id: 3,
      value: "8+",
      label: "Years Experience",
      icon: <Calendar className="w-5 h-5" />,
      delay: 0.3
    },
    {
      id: 4,
      value: "24/7",
      label: "Support",
      icon: <Headphones className="w-5 h-5" />,
      delay: 0.4
    }
  ];

  const slideVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const statVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        type: "spring",
        stiffness: 80
      }
    })
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.7 + (i * 0.2),
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    resetAutoPlay();
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
    setIsAutoPlaying(true);
    setTimeout(() => {
      if (autoPlayInterval.current) clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = setInterval(() => {
        if (isAutoPlaying) {
          setActiveSlide((prev) => (prev + 1) % heroSlides.length);
        }
      }, 6000);
    }, 100);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleSlideClick = (index: number) => {
    setActiveSlide(index);
    resetAutoPlay();
  };

  return (
    <section className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 dark:text-gray-100' 
        : 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100'
    }`}>
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${heroSlides[activeSlide].image})`,
              }}
            >
              <div className={`absolute inset-0 ${heroSlides[activeSlide].overlayColor}`} />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideVariants}
              className="text-white"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)" }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/40 mb-6"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <PlayCircle className="w-4 h-4 mr-2 text-red-400" />
                    </motion.div>
                    <span className="text-sm font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Premium IT Solutions</span>
                  </motion.div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {heroSlides[activeSlide].title.split(' ').map((word, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ 
                          scale: 1.05,
                          color: "#ef4444",
                          textShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
                        }}
                        className="inline-block mr-4 cursor-pointer bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h1>

                  {/* Description */}
                  <motion.p
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl relative"
                  >
                    <motion.span
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="bg-gradient-to-r from-gray-200 via-white to-gray-200 bg-[length:200%_auto] bg-clip-text text-transparent"
                    >
                      {heroSlides[activeSlide].description}
                    </motion.span>
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12"
                  >
                    <motion.button 
                      custom={0}
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-red-600"
                        initial={{ x: '100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        {heroSlides[activeSlide].button1Text}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2" />
                        </motion.div>
                      </span>
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        animate={{ 
                          background: [
                            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.button>

                    <motion.button 
                      custom={1}
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(239, 68, 68, 0.2)",
                        borderColor: "rgba(239, 68, 68, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        {heroSlides[activeSlide].button2Text}
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        >
                          <ArrowRight className="ml-2" />
                        </motion.div>
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    custom={stat.delay}
                    variants={statVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 2, 0],
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                    }}
                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-red-500/50 rounded-2xl p-5 text-center group overflow-hidden cursor-pointer"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{
                        background: 'conic-gradient(from 0deg, transparent 0%, rgba(239, 68, 68, 0.5) 50%, transparent 100%)',
                        opacity: 0.5
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="flex items-center justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-red-400/30 to-orange-400/30 text-red-400 shadow-lg">
                          {stat.icon}
                        </div>
                      </motion.div>
                      <motion.div 
                        className="text-3xl md:text-4xl font-bold mb-2 text-red-400"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          textShadow: [
                            "0 0 10px rgba(239, 68, 68, 0.5)",
                            "0 0 20px rgba(239, 68, 68, 0.8)",
                            "0 0 10px rgba(239, 68, 68, 0.5)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <AnimatedCounter value={stat.value} duration={2.5} />
                      </motion.div>
                      <motion.div 
                        className="text-sm text-gray-200 font-medium"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: stat.delay + 0.3 }}
                      >
                        {stat.label.split(' ').map((word, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: stat.delay + 0.4 + (idx * 0.1) }}
                            className="inline-block mr-1"
                          >
                            {word}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-red-500/20"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Video/Image Preview */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -30 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 1, type: "spring" }}
              className="hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotateZ: [0, 1, 0, -1, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.02, rotateZ: 0 }}
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-red-500/40 rounded-3xl p-2 overflow-hidden shadow-2xl"
                >
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      background: [
                        "linear-gradient(0deg, rgba(239, 68, 68, 0.5), transparent)",
                        "linear-gradient(90deg, rgba(239, 68, 68, 0.5), transparent)",
                        "linear-gradient(180deg, rgba(239, 68, 68, 0.5), transparent)",
                        "linear-gradient(270deg, rgba(239, 68, 68, 0.5), transparent)",
                        "linear-gradient(360deg, rgba(239, 68, 68, 0.5), transparent)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
                      alt="IT Solutions Preview"
                      className="w-full h-full object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <motion.button
                      onClick={toggleAutoPlay}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.8 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(239, 68, 68, 0.5)",
                          "0 0 40px rgba(239, 68, 68, 0.8)",
                          "0 0 20px rgba(239, 68, 68, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-red-500/50 cursor-pointer"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {isAutoPlaying ? (
                          <div className="relative">
                            <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                            <motion.div
                              className="absolute inset-0 rounded-full"
                              animate={{ 
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0, 0.3]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              style={{ background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)" }}
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <div className="w-2 h-8 bg-white mx-1 rounded-full" />
                            <div className="w-2 h-8 bg-white mx-1 rounded-full" />
                          </div>
                        )}
                      </motion.div>
                    </motion.button>
                  </div>

                  <motion.div
                    initial={{ x: -30, opacity: 0, rotate: -10 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 10px 30px rgba(239, 68, 68, 0.5)"
                    }}
                    className="absolute -left-8 top-12 bg-gradient-to-r from-red-600 to-orange-500 p-5 rounded-2xl shadow-2xl cursor-pointer"
                  >
                    <motion.div 
                      className="text-white text-base font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      AI Powered
                    </motion.div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ x: 30, opacity: 0, rotate: 10 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: -5,
                      boxShadow: "0 10px 30px rgba(249, 115, 22, 0.5)"
                    }}
                    className="absolute -right-8 bottom-12 bg-gradient-to-r from-orange-500 to-red-600 p-5 rounded-2xl shadow-2xl cursor-pointer"
                  >
                    <motion.div 
                      className="text-white text-base font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      Cloud Solutions
                    </motion.div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    />
                  </motion.div>

                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-red-400 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-4">
          <motion.button 
            onClick={prevSlide}
            whileHover={{ 
              scale: 1.15, 
              backgroundColor: "rgba(239, 68, 68, 0.4)",
              rotate: -10
            }}
            whileTap={{ scale: 0.85, rotate: -15 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md border-2 border-red-500/40 flex items-center justify-center transition-colors shadow-lg relative overflow-hidden group cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              animate={{ x: [-3, -1, -3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(239, 68, 68, 0.3)",
                  "0 0 25px rgba(239, 68, 68, 0.6)",
                  "0 0 10px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleSlideClick(index)}
                whileHover={{ scale: 1.3, y: -2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  width: activeSlide === index ? 40 : 12,
                  backgroundColor: activeSlide === index 
                    ? "rgba(239, 68, 68, 1)" 
                    : "rgba(255, 255, 255, 0.3)"
                }}
                className="h-3 rounded-full transition-all duration-500 shadow-lg relative overflow-hidden cursor-pointer"
              >
                {activeSlide === index && (
                  <>
                    <motion.div
                      layoutId="activeSlide"
                      className="h-full w-full rounded-full bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-[length:200%_100%]"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        scale: { duration: 1.5, repeat: Infinity },
                        backgroundPosition: { duration: 2, repeat: Infinity }
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-white/30"
                      animate={{ scale: [0, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>

          <motion.button 
            onClick={nextSlide}
            whileHover={{ 
              scale: 1.15, 
              backgroundColor: "rgba(239, 68, 68, 0.4)",
              rotate: 10
            }}
            whileTap={{ scale: 0.85, rotate: 15 }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md border-2 border-red-500/40 flex items-center justify-center transition-colors shadow-lg relative overflow-hidden group cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30"
              initial={{ x: '100%' }}
              whileHover={{ x: '-100%' }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              animate={{ x: [1, 3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ChevronRight className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ 
                boxShadow: [
                  "0 0 10px rgba(239, 68, 68, 0.3)",
                  "0 0 25px rgba(239, 68, 68, 0.6)",
                  "0 0 10px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </div>

        {/* Auto-play Control */}
        <motion.button
          onClick={toggleAutoPlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-12 right-12 z-20 p-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/40 flex items-center justify-center transition-colors shadow-lg cursor-pointer"
        >
          {isAutoPlaying ? (
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-red-400"
              >
                <PlayCircle className="w-5 h-5" />
              </motion.div>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <div className="w-1 h-4 bg-red-400 rounded-full" />
              <div className="w-1 h-4 bg-red-400 rounded-full" />
            </div>
          )}
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="text-white/60 text-sm">Scroll to explore</div>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent mx-auto mt-2" />
        </motion.div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;