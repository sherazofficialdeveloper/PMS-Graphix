"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define goals, and create a strategic roadmap for your project success.",
      icon: "📋",
      details: [
        "Requirement gathering and analysis",
        "Project scope definition",
        "Technical feasibility study",
        "Timeline and resource planning"
      ],
      duration: "1-2 Weeks"
    },
    {
      id: 2,
      number: "02",
      title: "UI/UX Design",
      description: "Crafting intuitive, user-centered interfaces with wireframes, prototypes, and pixel-perfect designs.",
      icon: "🎨",
      details: [
        "User research and persona creation",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing and feedback"
      ],
      duration: "2-3 Weeks"
    },
    {
      id: 3,
      number: "03",
      title: "Development",
      description: "Agile development with clean code, modern frameworks, and scalable architecture implementation.",
      icon: "💻",
      details: [
        "Frontend and backend development",
        "Database design and implementation",
        "API development and integration",
        "Code review and optimization"
      ],
      duration: "4-8 Weeks"
    },
    {
      id: 4,
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing including unit, integration, and user acceptance to ensure quality.",
      icon: "🧪",
      details: [
        "Unit and integration testing",
        "Performance and load testing",
        "Security vulnerability testing",
        "Cross-browser and device testing"
      ],
      duration: "1-2 Weeks"
    },
    {
      id: 5,
      number: "05",
      title: "Deployment",
      description: "Seamless deployment with CI/CD pipelines, configuration, and production environment setup.",
      icon: "🚀",
      details: [
        "Production environment setup",
        "CI/CD pipeline configuration",
        "Database migration and backup",
        "Domain and SSL configuration"
      ],
      duration: "1 Week"
    },
    {
      id: 6,
      number: "06",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, monitoring, and optimization for long-term success.",
      icon: "🛠️",
      details: [
        "24/7 technical support",
        "Regular updates and patches",
        "Performance monitoring",
        "Security updates and maintenance"
      ],
      duration: "Ongoing"
    }
  ];

  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold mb-3 md:mb-4 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300">
            OUR DEVELOPMENT PROCESS
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white px-2">
            Our <span className="text-red-500">6-Step</span> Development Process
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 px-4">
            Follow our proven methodology to transform your ideas into reality
          </p>
        </motion.div>

        {/* Main Content - Process and Details in ONE LINE */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 items-start mb-8 md:mb-16">
          
          {/* LEFT SIDE - Process Steps (50%) */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-3 md:space-y-4">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setActiveStep(step.id)}
                  className={`cursor-pointer transition-all duration-300 rounded-lg md:rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 ${
                    activeStep === step.id 
                      ? 'ring-1 md:ring-2 ring-red-500 bg-gradient-to-r from-red-50 to-transparent dark:from-red-900/10 dark:to-transparent' 
                      : 'bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    {/* Number Circle */}
                    <div className={`flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
                      activeStep === step.id 
                        ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      <span className="text-base md:text-xl font-bold">{step.number}</span>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                        <span className="text-xl md:text-2xl">{step.icon}</span>
                        <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 dark:text-white truncate">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-2">
                        {step.description}
                      </p>
                    </div>

                    {/* Duration - Hidden on small screens, visible on medium+ */}
                    <div className={`hidden sm:inline-flex text-xs md:text-sm font-medium px-2 md:px-3 py-1 rounded-full ${
                      activeStep === step.id
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Details Panel (50%) */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full rounded-xl md:rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg md:shadow-xl overflow-hidden"
            >
              
              {/* Panel Header */}
              <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-900/30 flex-shrink-0">
                      <span className="text-2xl md:text-3xl">{activeStepData?.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400">
                        Step {activeStep} of {steps.length}
                      </span>
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white truncate">
                        {activeStepData?.title}
                      </h2>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 dark:text-red-400">
                    {activeStepData?.number}
                  </div>
                </div>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                  {activeStepData?.description}
                </p>
              </div>

              {/* Panel Content */}
              <div className="p-4 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
                  📋 Key Activities
                </h3>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {activeStepData?.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mt-0.5 md:mt-1 bg-red-100 dark:bg-red-900/30">
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Section */}
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                      Overall Progress
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-red-600 dark:text-red-400">
                      {Math.round((activeStep / steps.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-2 md:h-3 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-red-600"
                      initial={{ width: 0 }}
                      animate={{ width: `${(activeStep / steps.length) * 100}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>

                {/* Timeline */}
                <div className="p-4 md:p-6 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-700/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        Estimated Duration
                      </span>
                      <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                        {activeStepData?.duration}
                      </span>
                    </div>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-900/20 flex-shrink-0">
                      <svg className="w-5 h-5 md:w-7 md:h-7 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="p-4 md:p-6 lg:p-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Previous Button - Full width on mobile */}
                  <motion.button
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                    disabled={activeStep === 1}
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base w-full sm:w-auto ${
                      activeStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    } bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600`}
                  >
                    <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </motion.button>

                  {/* Dots Indicator - Center on mobile */}
                  <div className="flex gap-1.5 md:gap-2 order-first sm:order-none">
                    {steps.map((step) => (
                      <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                          activeStep === step.id 
                            ? 'bg-red-600 dark:bg-red-500 w-4 md:w-8' 
                            : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next Button - Full width on mobile */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
                    disabled={activeStep === steps.length}
                    className={`flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-medium text-sm md:text-base w-full sm:w-auto ${
                      activeStep === steps.length ? 'opacity-50 cursor-not-allowed' : ''
                    } bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700`}
                  >
                    Next
                    <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section - BELOW the Process and Details */} 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto py-6 md:py-8 lg:py-12 p-4 md:p-6 lg:p-10 rounded-lg md:rounded-xl lg:rounded-2xl bg-white dark:bg-gray-800 shadow-lg md:shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
              Ready to Begin Your Project Journey?
            </h3>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-gray-600 dark:text-gray-300">
              Start with Step 1 and let's build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white"
              >
                Start Discovery Phase
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Book Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessSection;