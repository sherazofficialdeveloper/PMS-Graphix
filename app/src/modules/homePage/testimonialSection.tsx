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
        className={`w-5 h-5 ${index < rating ? 'fill-red-500 text-red-500' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 transition-colors duration-500 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/10 dark:bg-red-900/10"
            initial={{ 
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: 0
            }}
            animate={{ 
              x: [null, `calc(${Math.random() * 100}vw + ${Math.random() * 100 - 50}px)`],
              y: [null, `calc(${Math.random() * 100}vh + ${Math.random() * 100 - 50}px)`],
              scale: [0, Math.random() * 0.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 2
            }}
            style={{
              width: Math.random() * 200 + 50 + 'px',
              height: Math.random() * 200 + 50 + 'px',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-red-500/10 mb-4"
          >
            <Quote className="w-8 h-8 text-red-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Testimonials
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            What Our Clients Say
          </p>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Don&apos;t just take our word for it. Hear from businesses we&apos;ve helped transform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials Carousel */}
          <motion.div
            ref={testimonialRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Testimonial Cards */}
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 100, rotateY: -30 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, x: -100, rotateY: 30 }}
                  transition={{ 
                    duration: 0.7,
                    type: "spring",
                    damping: 15
                  }}
                  className="absolute inset-0 p-8 rounded-3xl shadow-2xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-red-500/20" />
                  
                  {/* Rating Stars */}
                  <div className="flex mb-6">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  
                  {/* Testimonial Content */}
                  <p className="text-2xl font-medium mb-8 leading-relaxed text-gray-800 dark:text-gray-200">
                    &ldquo;{testimonials[activeTestimonial].content}&rdquo;
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full ${testimonials[activeTestimonial].avatarColor} flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}
                    >
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-red-500 text-white shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              {/* Indicators */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => {
                      setActiveTestimonial(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 10000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial 
                        ? 'bg-red-500 w-8' 
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-red-500 text-white shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Auto-play indicator */}
            <div className="text-center mt-6">
              <div className="inline-flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {isAutoPlaying ? 'Auto-rotating' : 'Paused'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { type: "spring", damping: 15 }
                }}
                className="p-6 rounded-2xl shadow-xl bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
              >
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mb-4"
                >
                  <stat.icon className="w-7 h-7 text-red-500" />
                </motion.div>
                <motion.h3 
                  className="text-4xl font-bold text-red-500 mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="col-span-2 mt-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 px-6 rounded-xl font-bold text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg"
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
          className="text-center mt-16 pt-8 border-t border-gray-300/30 dark:border-gray-700/30"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Trusted by over 500 companies worldwide. Join them today!
          </p>
          
          {/* Animated floating elements */}
          <div className="flex justify-center mt-6 space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2 + i,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-red-300'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}