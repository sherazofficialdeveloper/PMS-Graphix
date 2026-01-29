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
  icon: React.ElementType<{ size?: number; className?: string }>; // icon component type
  title: string;
  desc: string;
}



interface ProcessStep {
  label: string;
  step: string;
  desc: string;
}
const floatAnimation = {
  y: [0, -5, 0],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};
const AISolutionsPage: React.FC = () => {
  const capabilities: CapabilityItem[] = [
    { 
      icon: Bot, 
      title: "Custom LLMs", 
      desc: "Fine-tuned language models trained on your private business data for intelligent decision-making.",
    },
    { 
      icon: Eye , 
      title: "Computer Vision", 
      desc: "Real-time object detection, facial recognition, and automated visual quality inspection.",
    },
    { 
      icon: TrendingUp, 
      title: "Predictive Analytics", 
      desc: "Advanced forecasting models for market trends, customer behavior, and risk assessment.",
    },
    { 
      icon: Terminal , 
      title: "RAG Systems", 
      desc: "Retrieval-Augmented Generation for accurate, context-aware enterprise chatbots.",
    },
    { 
      icon: Zap , 
      title: "Model Optimization", 
      desc: "Efficient AI deployment with quantization, pruning, and edge computing optimization.",
    },
    { 
      icon: Lock , 
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
      {/* Hero Section */}
      <section className="relative pt-24 pb-24">
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
                className="inline-flex items-center px-6 py-3 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
              >
                <Cpu size={20} className="mr-3 text-red-600 dark:text-red-400" />
                <span className="text-red-600 dark:text-red-400 font-bold tracking-widest text-sm">
                  INTELLIGENT AUTOMATION
                </span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                AI Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                   That Work.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                We build adaptive AI systems that learn from your data, automate complex processes, 
                and drive exponential growth with bleeding-edge intelligence.
              </p>

              <div className="flex flex-wrap gap-6 pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-red-600 dark:bg-red-700 text-white rounded-2xl font-bold text-lg flex items-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span>Start Automation</span>
                  <ArrowRight className="ml-3" />
                </motion.button>
                
                <button
                  className="px-12 py-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl font-bold text-lg hover:border-red-300 dark:hover:border-red-600 transition-colors"
                >
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[40px] p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="relative h-full flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <div className="relative">
                      <Brain size={180} className="text-red-500 dark:text-red-400" />
                    </div>
                  </motion.div>
                </div>

                {/* Simple decorative elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-100 dark:border-red-800 flex items-center justify-center">
                  <Brain size={32} className="text-red-500 dark:text-red-400" />
                </div>
                
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-100 dark:border-red-800 flex items-center justify-center">
                  <Database size={32} className="text-red-500 dark:text-red-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 relative bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Capabilities</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
              Enterprise-grade AI solutions designed to transform your business operations and decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="inline-flex p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 mb-6">
               <item.icon size={32} className="text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
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

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-black">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A structured approach to AI integration that ensures reliability, scalability, and measurable results.
              </p>
              <div className="space-y-6 pt-4">
                {guarantees.map((point, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <CheckCircle2 className="text-red-500 dark:text-red-400 flex-shrink-0" />
                    <span className="font-medium text-lg">{point}</span>
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
                  className="relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-600 transition-all group shadow-sm"
                >
                  <div className="text-5xl font-black text-gray-200 dark:text-gray-700 group-hover:text-red-100 dark:group-hover:text-red-900/30 transition-colors">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold mt-4 mb-2">{step.label}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-3xl p-12 md:p-20 border border-red-200 dark:border-red-800 overflow-hidden">
              
              <div className="relative z-10 text-center space-y-10">
                <div>
                  <h2 className="text-5xl md:text-7xl font-black mb-6">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                      Automate
                    </span>?
                  </h2>
                  <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Join enterprises already transforming their operations with our intelligent AI solutions.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-14 py-6 bg-red-600 dark:bg-red-700 text-white rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Free Trial
                  </motion.button>
                  
                  <button
                    className="px-14 py-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl font-bold text-xl hover:border-red-400 dark:hover:border-red-600 transition-colors"
                  >
                    Schedule Demo
                  </button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 pt-8">
                  {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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