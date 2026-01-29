"use client";

import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
  animation: string;
  gradient: string;
}

export default function TechnologiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Technologies data with icons
  const technologies: TechItem[] = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
    { name: ".NET", icon: "🔷", color: "from-purple-500 to-pink-500" },
    { name: "Java", icon: "☕", color: "from-red-500 to-orange-500" },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-500 to-yellow-500" },
    { name: "Azure", icon: "🔵", color: "from-blue-600 to-cyan-400" }
  ];

  // Benefits data with icons
  const benefits: BenefitItem[] = [
    { 
      title: "Increased", 
      description: "Increased operational efficiency",
      icon: "📈",
      animation: "animate-float-delayed",
      gradient: "from-red-500 to-orange-500"
    },
    { 
      title: "Scalable", 
      description: "Scalable architecture for growth",
      icon: "🚀",
      animation: "animate-rocket",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      title: "Competitive", 
      description: "Competitive advantage",
      icon: "🏆",
      animation: "animate-trophy-spin",
      gradient: "from-yellow-500 to-amber-500"
    },
    { 
      title: "Automated", 
      description: "Automated processes",
      icon: "⚙️",
      animation: "animate-gear-spin",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      title: "Real-time", 
      description: "Real-time data insights",
      icon: "⏱️",
      animation: "animate-pulse-glow",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen transition-all duration-300 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white"
    >
      {/* System mode indicator - Hidden for production */}
     

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl bg-red-500/10 dark:bg-red-500/10 animate-blob-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-blue-500/10 dark:bg-blue-500/10 animate-blob-reverse-slow"></div>
      </div>

      {/* Main content with proper spacing */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header with enhanced animation */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-600 dark:from-red-500 dark:via-orange-500 dark:to-red-600">
              <span className="block">Technologies We Use</span>
              <span className="block text-4xl md:text-5xl mt-4">& Benefits We Deliver</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Empowering innovation with cutting-edge technologies and delivering measurable results for your business growth.
          </p>
        </div>

        {/* Technologies grid */}
        <div className={`mb-28 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-500 dark:to-orange-500">
            Our Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="rounded-2xl p-6 text-center shadow-lg transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl border relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 group h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`text-6xl mb-4 relative z-10 ${index % 2 === 0 ? 'animate-float-delayed' : 'animate-float-reverse'}`}>
                  {tech.icon}
                </div>
                
                {/* Name with gradient text */}
                <h3 className="text-2xl font-bold mb-2 relative z-10">
                  <span className={`bg-clip-text text-transparent bg-gradient-to-r ${tech.color}`}>
                    {tech.name}
                  </span>
                </h3>
                
                {/* Animated underline */}
                <div className={`h-1 w-16 mx-auto mb-4 bg-gradient-to-r ${tech.color} rounded-full relative z-10`}></div>
                
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  Enterprise-grade solutions
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-500 dark:to-orange-500">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-600 group h-full border-l-4 border-red-500"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  minHeight: '280px'
                }}
              >
                {/* Animated background gradient */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`text-5xl mr-5 ${benefit.animation}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-red-500 dark:text-red-400">{benefit.title}</h3>
                </div>
                
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 relative z-10">
                  {benefit.description}
                </p>
                
                {/* Progress bar */}
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative z-10">
                  <div 
                    className={`h-full bg-gradient-to-r ${benefit.gradient}`}
                    style={{ width: `${70 + index * 6}%` }}
                  ></div>
                </div>
              </div>
            ))}
            
            {/* Additional card */}
            <div
              className="rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 border-red-500 md:col-span-2 lg:col-span-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:border-gray-300 dark:hover:border-gray-600 group h-full"
              style={{ 
                animationDelay: '1200ms',
                minHeight: '280px'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-5">👨‍💻</div>
                <h3 className="text-2xl font-bold text-red-500 dark:text-red-400">Developer First</h3>
              </div>
              
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Comprehensive APIs, extensive documentation, and robust support for developers.
              </p>
              
              <div className="flex gap-3 flex-wrap mt-auto">
                <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 dark:from-red-600 dark:to-orange-600 dark:hover:from-red-700 dark:hover:to-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Docs
                </button>
                <button className="border-2 border-red-500 text-red-500 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View API
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className={`mt-32 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block max-w-4xl mx-auto mt-12">
            {/* Background gradient for CTA */}
            <div className="bg-gradient-to-r from-red-500/10 via-orange-500/5 to-red-500/10 dark:from-red-600/20 dark:via-orange-600/10 dark:to-red-600/20 backdrop-blur-sm rounded-3xl p-1">
              <div className="rounded-2xl p-8 md:p-12 bg-white/90 dark:bg-gray-900/90">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-500 dark:to-orange-500">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                  Leverage our expertise in cutting-edge technologies to build scalable, efficient, and competitive solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
                  <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 dark:from-red-600 dark:to-orange-600 dark:hover:from-red-700 dark:hover:to-orange-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Get Started Now
                  </button>
                  <button className="border-2 border-red-500 text-red-500 dark:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    Schedule a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          33% { transform: translateY(-15px); }
          66% { transform: translateY(-8px); }
        }
        
        @keyframes tech-card-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes benefit-card {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes blob-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -80px) scale(1.2); }
          66% { transform: translate(-40px, 60px) scale(0.8); }
        }
        
        @keyframes blob-reverse-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-60px, 40px) scale(0.9); }
          66% { transform: translate(30px, -70px) scale(1.1); }
        }
        
        @keyframes rocket {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-5px) rotate(5deg); }
        }
        
        @keyframes trophy-spin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes gear-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 1;
          }
          50% { 
            opacity: 0.9;
          }
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 4s ease-in-out infinite;
        }
        
        .animate-tech-card-in {
          animation: tech-card-in 0.8s ease-out forwards;
        }
        
        .animate-benefit-card {
          animation: benefit-card 0.8s ease-out forwards;
        }
        
        .animate-blob-slow {
          animation: blob-slow 20s ease-in-out infinite;
        }
        
        .animate-blob-reverse-slow {
          animation: blob-reverse-slow 25s ease-in-out infinite;
        }
        
        .animate-rocket {
          animation: rocket 2s ease-in-out infinite;
        }
        
        .animate-trophy-spin {
          animation: trophy-spin 3s linear infinite;
        }
        
        .animate-gear-spin {
          animation: gear-spin 5s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .grid-cols-2 {
            gap: 1rem;
          }
          
          .grid-cols-1 {
            gap: 1.5rem;
          }
          
          .p-6 {
            padding: 1.5rem;
          }
          
          .p-8 {
            padding: 1.5rem;
          }
          
          .text-5xl {
            font-size: 3rem;
          }
          
          .text-4xl {
            font-size: 2.5rem;
          }
          
          .mb-20 {
            margin-bottom: 3rem;
          }
          
          .mb-28 {
            margin-bottom: 3rem;
          }
        }

        @media (max-width: 640px) {
          .grid-cols-2 {
            gap: 0.75rem;
          }
          
          .p-6 {
            padding: 1rem;
          }
          
          .p-8 {
            padding: 1rem;
          }
          
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .text-5xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}