"use client";

import { useState, useEffect } from 'react';
import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to address your unique business challenges and requirements.",
      icon: CodeBracketIcon,
      stats: "2-4 Weeks",
      statIcon: ClockIcon,
      feature: "Scalable Architecture"
    },
    {
      id: 2,
      title: "Enterprise Application Integration",
      description: "Seamlessly connect your existing systems with new applications for improved workflow and data consistency.",
      icon: CpuChipIcon,
      stats: "Expert Team",
      statIcon: UserGroupIcon,
      feature: "API Integration"
    },
    {
      id: 3,
      title: "Secure Software Solutions",
      description: "Built with security-first approach, ensuring your data and applications are protected against modern threats.",
      icon: ShieldCheckIcon,
      stats: "100% Secure",
      statIcon: ShieldCheckIcon,
      feature: "End-to-End Encryption"
    },
    {
      id: 4,
      title: "24/7 Support & Maintenance",
      description: "Round-the-clock monitoring, support, and updates to keep your software running smoothly at all times.",
      icon: ChatBubbleLeftRightIcon,
      stats: "24/7 Support",
      statIcon: ChatBubbleLeftRightIcon,
      feature: "Proactive Monitoring"
    }
  ];

  return (
    <div className="min-h-screen transition-all duration-500 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col justify-between items-start md:items-center mb-8 md:mb-12 pt-16 md:pt-20">
          <div className="mb-6 md:mb-0 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-500 text-gray-900 dark:text-white">
              Software Development Services
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl transition-all duration-500 text-gray-600 dark:text-gray-300">
              Custom software solutions tailored to your business needs. We build robust, scalable applications that drive growth and efficiency.
            </p>
          </div>
        </div>

        {/* Stats Overview - Mobile: 1 per row, Desktop: 4 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="p-4 sm:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg bg-white dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">2-4 Weeks</span>
            </div>
            <p className="text-xs sm:text-sm transition-all duration-500 text-gray-600 dark:text-gray-400">Average Delivery</p>
          </div>
          
          <div className="p-4 sm:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg bg-white dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <UserGroupIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Expert Team</span>
            </div>
            <p className="text-xs sm:text-sm transition-all duration-500 text-gray-600 dark:text-gray-400">Dedicated Support</p>
          </div>
          
          <div className="p-4 sm:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg bg-white dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">100% Secure</span>
            </div>
            <p className="text-xs sm:text-sm transition-all duration-500 text-gray-600 dark:text-gray-400">Guaranteed</p>
          </div>
          
          <div className="p-4 sm:p-6 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-lg bg-white dark:bg-gray-800">
            <div className="flex items-center mb-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mr-2" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">24/7</span>
            </div>
            <p className="text-xs sm:text-sm transition-all duration-500 text-gray-600 dark:text-gray-400">Support Available</p>
          </div>
        </div>

        {/* Services Grid - Mobile: 1 per row, Desktop: 2 per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-[1.02] shadow-lg md:shadow-xl bg-white dark:bg-gray-800"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 md:mb-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-500 bg-gray-100 dark:bg-gray-700">
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
                    </div>
                    <div className="ml-4 sm:hidden">
                      <div className="flex items-center mb-1">
                        <service.statIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                        <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{service.stats}</span>
                      </div>
                      <span className="text-xs transition-all duration-500 text-gray-600 dark:text-gray-400">
                        {service.id === 1 ? 'Average Delivery' : 
                         service.id === 2 ? 'Dedicated Support' : 
                         service.id === 3 ? 'Guaranteed' : 'Support Available'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center justify-end mb-1">
                      <service.statIcon className="w-4 h-4 md:w-5 md:h-5 text-red-500 mr-2" />
                      <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{service.stats}</span>
                    </div>
                    <span className="text-xs md:text-sm transition-all duration-500 text-gray-600 dark:text-gray-400">
                      {service.id === 1 ? 'Average Delivery' : 
                       service.id === 2 ? 'Dedicated Support' : 
                       service.id === 3 ? 'Guaranteed' : 'Support Available'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 transition-all duration-500 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="mb-6 md:mb-8 transition-all duration-500 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  {service.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 gap-3 sm:gap-0">
                  <span className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-500 bg-red-50 text-red-600 dark:bg-gray-700 dark:text-red-400">
                    {service.feature}
                  </span>
                  
                  <button className="group relative text-red-500 font-semibold flex items-center transition-all duration-300 hover:text-red-600 dark:hover:text-red-400 text-sm md:text-base">
                    <span className="mr-2">Learn More</span>
                    <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-xl md:rounded-2xl transition-all duration-500 shadow-lg md:shadow-xl bg-white dark:bg-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0 w-full lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 transition-all duration-500 text-gray-900 dark:text-white">
                Ready to transform your business with custom software?
              </h3>
              <p className="text-base md:text-lg max-w-2xl transition-all duration-500 text-gray-600 dark:text-gray-300">
                Our team of expert developers is ready to bring your vision to life. From concept to deployment, we ensure your software solution meets the highest standards of quality and performance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full lg:w-auto mt-4 lg:mt-0">
              <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-500 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
                <span className="relative z-10 flex items-center justify-center">
                  Start Your Project
                  <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative px-6 py-3 md:px-8 md:py-4 border border-red-500 text-red-500 dark:text-red-400 font-semibold rounded-lg overflow-hidden transition-all duration-500 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm md:text-base">
                <span className="relative z-10 flex items-center justify-center">Schedule a Consultation</span>
                <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}