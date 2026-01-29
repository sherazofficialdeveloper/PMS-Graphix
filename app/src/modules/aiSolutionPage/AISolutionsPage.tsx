// app/src/modules/aisolutionPage/AISolutionsPage.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Database, 
  ArrowRight,
  Bot,
  Terminal,
  Zap,
  CheckCircle2,
  Eye,
  TrendingUp,
  Lock
} from 'lucide-react';

interface CapabilityItem {
  icon: React.ElementType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

interface ProcessStep {
  label: string;
  step: string;
  desc: string;
}

const AISolutionsPage: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    { 
      icon: Bot, 
      title: "Custom LLMs", 
      desc: "Fine-tuned language models trained on your private business data for intelligent decision-making.",
    },
    { 
      icon: Eye, 
      title: "Computer Vision", 
      desc: "Real-time object detection, facial recognition, and automated visual quality inspection.",
    },
    { 
      icon: TrendingUp, 
      title: "Predictive Analytics", 
      desc: "Advanced forecasting models for market trends, customer behavior, and risk assessment.",
    },
    { 
      icon: Terminal, 
      title: "RAG Systems", 
      desc: "Retrieval-Augmented Generation for accurate, context-aware enterprise chatbots.",
    },
    { 
      icon: Zap, 
      title: "Model Optimization", 
      desc: "Efficient AI deployment with quantization, pruning, and edge computing optimization.",
    },
    { 
      icon: Lock, 
      title: "AI Security", 
      desc: "Enterprise-grade security with encryption, access control, and threat detection.",
    }
  ];

  const processSteps: ProcessStep[] = [
    { label: "Discovery & Audit", step: "01", desc: "Comprehensive analysis of your data infrastructure" },
    { label: "Model Design", step: "02", desc: "Custom AI architecture tailored to your needs" },
    { label: "Training & Testing", step: "03", desc: "Rigorous validation with your datasets" },
    { label: "Deployment", step: "04", desc: "Seamless integration into production" },
    { label: "Monitoring", step: "05", desc: "Continuous optimization and scaling" },
    { label: "Evolution", step: "06", desc: "Regular updates with latest AI advancements" }
  ];

  const features: string[] = [
    "Real-time Analytics",
    "Auto-scaling", 
    "API Access", 
    "24/7 Support"
  ];

  const guarantees: string[] = [
    "Real-time Monitoring Dashboard",
    "99.9% System Uptime", 
    "Enterprise Security Compliance", 
    "24/7 AI Support"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section - Fixed padding top */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24"> {/* Increased pt from 16 to 28 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
              >
                <Cpu size={18} className="mr-2 md:mr-3 text-red-600 dark:text-red-400" />
                <span className="text-xs md:text-sm text-red-600 dark:text-red-400 font-bold tracking-wider md:tracking-widest">
                  INTELLIGENT AUTOMATION
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
                AI Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                   That Work.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                We build adaptive AI systems that learn from your data, automate complex processes, 
                and drive exponential growth with bleeding-edge intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 md:px-12 md:py-5 bg-red-600 dark:bg-red-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span>Start Automation</span>
                  <ArrowRight className="ml-2 md:ml-3" size={18} />
                </motion.button>
                
                <button
                  className="px-8 py-4 md:px-12 md:py-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:border-red-300 dark:hover:border-red-600 transition-colors"
                >
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-square bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl md:rounded-[40px] p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="relative h-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <div className="relative">
                      <Brain size={120} className="md:w-40 md:h-40 lg:w-48 lg:h-48 text-red-500 dark:text-red-400" />
                    </div>
                  </motion.div>
                </div>

                {/* Simple decorative elements */}
                <div className="absolute top-4 left-4 md:top-8 md:left-8 w-10 h-10 md:w-16 md:h-16 bg-red-50 dark:bg-red-900/20 rounded-lg md:rounded-2xl border border-red-100 dark:border-red-800 flex items-center justify-center">
                  <Brain size={20} className="md:w-8 md:h-8 text-red-500 dark:text-red-400" />
                </div>
                
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-16 md:h-16 bg-red-50 dark:bg-red-900/20 rounded-lg md:rounded-2xl border border-red-100 dark:border-red-800 flex items-center justify-center">
                  <Database size={20} className="md:w-8 md:h-8 text-red-500 dark:text-red-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-12 md:py-20 relative bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Capabilities</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Enterprise-grade AI solutions designed to transform your business operations and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-red-50 dark:bg-red-900/20 mb-4 md:mb-6">
                  <item.icon size={24} className="md:w-8 md:h-8 text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                <motion.div
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center text-red-500 dark:text-red-400 mt-4 md:mt-6 font-medium cursor-pointer text-sm md:text-base"
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 order-2 lg:order-1"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Process
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A structured approach to AI integration that ensures reliability, scalability, and measurable results.
              </p>
              <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
                {guarantees.map((point, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <CheckCircle2 className="text-red-500 dark:text-red-400 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-medium text-sm md:text-lg">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Steps Grid - Now mobile shows 1 per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 order-1 lg:order-2">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all group shadow-sm"
                >
                  {/* Number visible on all devices */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-200 dark:text-gray-700 group-hover:text-red-100 dark:group-hover:text-red-900/30 transition-colors">
                    {step.step}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mt-3 md:mt-4 mb-1 md:mb-2">{step.label}</h4>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl md:rounded-2xl lg:rounded-3xl p-6 md:p-12 lg:p-20 border border-red-200 dark:border-red-800 overflow-hidden">
              
              <div className="relative z-10 text-center space-y-6 md:space-y-10">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                      Automate
                    </span>?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-2">
                    Join enterprises already transforming their operations with our intelligent AI solutions.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 md:px-12 md:py-5 lg:px-14 lg:py-6 bg-red-600 dark:bg-red-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  >
                    Start Free Trial
                  </motion.button>
                  
                  <button
                    className="px-8 py-4 md:px-12 md:py-5 lg:px-14 lg:py-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl md:rounded-2xl font-bold text-base md:text-lg lg:text-xl hover:border-red-400 dark:hover:border-red-600 transition-colors w-full sm:w-auto"
                  >
                    Schedule Demo
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full" />
                      <span className="text-sm md:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
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

export default AISolutionsPage;