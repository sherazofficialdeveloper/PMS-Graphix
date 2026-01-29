"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  ThumbsUp,
  BarChart3,
  Clock,
  Users
} from 'lucide-react';

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      id: 1,
      name: "David Wilson",
      role: "Product Manager, SaaSPro",
      content: "The AI-powered analytics dashboard they built provided insights we never thought possible. Truly innovative work.",
      rating: 5,
      avatarColor: "bg-red-500",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "CTO, TechNova",
      content: "Their team delivered beyond expectations. The project was completed ahead of schedule with exceptional quality.",
      rating: 5,
      avatarColor: "bg-red-600",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CEO, DataFlow Inc.",
      content: "The scalability of the solution they provided helped us handle 10x traffic without issues. Game-changing!",
      rating: 4,
      avatarColor: "bg-red-700",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Marketing Director, BrandBoost",
      content: "Our conversion rates increased by 45% after implementing their recommendations. Outstanding results!",
      rating: 5,
      avatarColor: "bg-red-800",
    }
  ];

  const stats = [
    { icon: BarChart3, value: "98%", label: "Client Satisfaction" },
    { icon: Users, value: "200+", label: "Projects Completed" },
    { icon: ThumbsUp, value: "50+", label: "Happy Clients" },
    { icon: Clock, value: "24/7", label: "Support Available" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Handle next/previous testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${index < rating ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 transition-colors duration-500 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/10 dark:bg-red-900/10"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0
            }}
            animate={{ 
              x: [null, `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)`],
              y: [null, `calc(${Math.random() * 100}vh + ${Math.random() * 50 - 25}px)`],
              scale: [0, Math.random() * 0.3 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 3
            }}
            style={{
              width: Math.random() * 100 + 30 + 'px',
              height: Math.random() * 100 + 30 + 'px',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center p-2 sm:p-3 rounded-full bg-red-500/10 mb-3 sm:mb-4"
          >
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Testimonials
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 text-gray-700 dark:text-gray-300">
            What Our Clients Say
          </p>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400 px-4">
            Don&apos;t just take our word for it. Hear from businesses we&apos;ve helped transform.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Testimonials Carousel */}
          <motion.div
            ref={testimonialRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full order-2 lg:order-1"
          >
            {/* Testimonial Cards */}
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50, rotateY: -20 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -50, rotateY: 20 }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    damping: 20
                  }}
                  className="absolute inset-0 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-red-500/20" />
                  
                  {/* Rating Stars */}
                  <div className="flex mb-4 sm:mb-6">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 md:mb-8 leading-relaxed text-gray-800 dark:text-gray-200">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${testimonials[activeTestimonial].avatarColor} flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg shadow-lg`}
                    >
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </motion.div>
                    <div className="ml-3 sm:ml-4">
                      <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8 space-x-4 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-2 sm:p-3 rounded-full bg-red-500 text-white shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
              
              {/* Indicators */}
              <div className="flex space-x-2 sm:space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                      setActiveTestimonial(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                    className={`h-2 sm:h-3 rounded-full transition-all ${
                      index === activeTestimonial 
                        ? 'bg-red-500 w-6 sm:w-8' 
                        : 'bg-gray-300 dark:bg-gray-700 w-2 sm:w-3'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-2 sm:p-3 rounded-full bg-red-500 text-white shadow-lg"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-4 sm:mt-6">
              <div className="inline-flex items-center space-x-2">
                <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {isAutoPlaying ? 'Auto-rotating' : 'Paused'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full order-1 lg:order-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { type: "spring", damping: 15 }
                }}
                className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
              >
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-2 sm:mb-3 md:mb-4"
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-7 text-red-500" />
                </motion.div>
                <motion.h3 
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="col-span-2 mt-4 sm:mt-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg"
              >
                Read More Success Stories
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-300/30 dark:border-gray-700/30"
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">
            Trusted by over 500 companies worldwide. Join them today!
          </p>
          
          {/* Animated floating elements */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2 + i,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-red-300'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}