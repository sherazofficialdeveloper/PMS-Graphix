"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Moon, 
  Sun, 
  Menu,
  Code, 
  X, 
  ChevronDown,
  Home,
  Briefcase,
  Users,
  Phone,
  ArrowRight,
  Globe,
  Palette,
  Brush,
  Cpu,
  Smartphone,
  Search,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import Link from "next/link";
import Logo from './logo';

const Navbar = () => {
   const [dark, setDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode - FIXED VERSION
    useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Service data with icons and descriptions
  const services = [
    {
      name: 'Web Development',
      icon: <Globe size={20} />,
      description: 'Responsive websites with modern frameworks like Next.js, React, and Node.js',
      href: "/webDev"
    },
    {
      name: 'App Development',
      icon: <Smartphone size={20} />,
      description: 'Cross-platform mobile apps for iOS and Android with native performance',
      href: "/appDevelopment"
    },
    {
      name: 'Software Development',
      icon: <Code size={20} />, 
      description: 'Custom software solutions, enterprise applications, and scalable systems',
      href: "/software"
    },
    {
      name: 'UI/UX Design',
      icon: <Palette size={20} />,
      description: 'User-centric designs that enhance engagement and conversion rates',
      href: "/uiuxdesign"
    },
    {
      name: 'Graphic Design',
      icon: <Brush size={20} />,
      description: 'Visual branding, logos, and marketing materials that stand out',
      href: "/graphic"
    },
    {
      name: 'AI Solutions',
      icon: <Cpu size={20} />,
      description: 'AI-powered applications and automation for smarter business solutions',
      href: "/aiSolution"
    },
    {
      name: 'SEO Optimization',
      icon: <Search size={20} />,
      description: 'Improve search rankings and organic traffic with proven SEO strategies',
      href: "/seoService"
    },
    {
      name: 'Digital Marketing',
      icon: <TrendingUp size={20} />,
      description: 'Comprehensive digital campaigns for maximum reach and engagement',
      href: "/digital"
    }
  ];

  const navItems = [
    { 
      name: 'Home', 
      icon: <Home size={18} />, 
      href: '/',
      color: 'from-blue-500 to-cyan-400'
    },
    { 
      name: 'Services', 
      icon: <Briefcase size={18} />, 
      href: '/service',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'About', 
      icon: <Users size={18} />, 
      href: '/about',
      color: 'from-green-500 to-emerald-400'
    },
    { 
      name: 'Team', 
      icon: <Sparkles size={18} />, 
      href: '/team',
      color: 'from-orange-500 to-yellow-400'
    },
    { 
      name: 'Contact', 
      icon: <Phone size={18} />, 
      href: '/contact',
      color: 'from-red-500 to-pink-400'
    }
  ];

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    })
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const serviceItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    })
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex items-center space-x-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-red-600 to-red-800 hidden sm:flex items-center justify-center shadow-lg shadow-red-500/90"
              >
                <span className="text-white font-bold text-lg sm:text-xl">PMS</span>
              </motion.div>
              <motion.span        
                whileHover={{ scale: 1.05 }}
              >
                <Logo />
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <div key={item.name} className="relative">
                  {item.name === 'Services' ? (
                    <motion.div
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      onMouseEnter={() => {
                        setIsServicesOpen(true);
                        setHoveredItem(item.name);
                      }}
                      onMouseLeave={() => {
                        setIsServicesOpen(false);
                        setHoveredItem(null);
                      }}
                      className="relative"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 group ${
                          hoveredItem === item.name 
                            ? `bg-gradient-to-r ${item.color} text-white`
                            : 'bg-transparent hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-400/10 dark:hover:from-white/10 dark:hover:to-gray-300/10'
                        }`}
                      >
                        <motion.span 
                          className="mr-2"
                          animate={{ 
                            rotate: hoveredItem === item.name ? [0, 10, -10, 0] : 0 
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.span>
                        <span className={`font-medium ${
                          hoveredItem === item.name 
                            ? 'text-white' 
                            : 'text-gray-800 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400'
                        } transition-colors`}>
                          {item.name}
                        </span>
                        <motion.span
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="ml-1" />
                        </motion.span>
                      </motion.button>

                      {/* Services Dropdown - Two Columns */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                          >
                            <div className="grid grid-cols-2 gap-4">
                              {services.map((service, index) => (
                                <Link href={service.href} key={service.name}>
                                  <motion.div
                                    custom={index}
                                    variants={serviceItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ 
                                      scale: 1.02,
                                      backgroundColor: dark 
                                        ? 'rgba(255, 255, 255, 0.05)' 
                                        : 'rgba(239, 68, 68, 0.05)',
                                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                                    }}
                                    className="p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-500/5 hover:to-red-400/5 dark:hover:from-white/5 dark:hover:to-gray-300/5 transition-all duration-300 group border border-transparent hover:border-red-500/20 dark:hover:border-red-400/20 cursor-pointer"
                                  >
                                    <div className="flex items-start space-x-3">
                                      <motion.div 
                                        className={`p-2 rounded-lg bg-gradient-to-r from-red-500/10 to-red-400/10 group-hover:from-red-500/20 group-hover:to-red-400/20 transition-all duration-300 ${
                                          dark ? 'dark:from-white/10 dark:to-gray-300/10' : ''
                                        }`}
                                        whileHover={{ rotate: 15 }}
                                      >
                                        <div className="text-red-500 dark:text-red-400">
                                          {service.icon}
                                        </div>
                                      </motion.div>
                                      
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors mb-1">
                                          {service.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                          {service.description}
                                        </p>
                                      </div>
                                      
                                      <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileHover={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ArrowRight size={16} className="text-red-500 dark:text-red-400" />
                                      </motion.div>
                                    </div>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                            
                            {/* View All Services Button */}
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                            >
                              <Link 
                                href="/service" 
                                className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-red-400/10 hover:from-red-500/20 hover:to-red-400/20 dark:from-white/5 dark:to-gray-300/5 dark:hover:from-white/10 dark:hover:to-gray-300/10 transition-all duration-300 group"
                              >
                                <span className="font-medium text-red-500 dark:text-red-400 mr-2">
                                  View All Services
                                </span>
                                <ArrowRight size={18} className="text-red-500 dark:text-red-400 group-hover:translate-x-2 transition-transform" />
                              </Link>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <Link href={item.href} key={item.name}>
                      <motion.a
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                            hoveredItem === item.name 
                              ? `bg-gradient-to-r ${item.color} text-white`
                              : 'bg-transparent hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-400/10 dark:hover:from-white/10 dark:hover:to-gray-300/10'
                          }`}
                        >
                          <motion.span 
                            className="mr-2"
                            animate={{ 
                              rotate: hoveredItem === item.name ? [0, 10, -10, 0] : 0 
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className={`font-medium ${
                            hoveredItem === item.name 
                              ? 'text-white' 
                              : 'text-gray-800 dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400'
                          } transition-colors`}>
                            {item.name}
                          </span>
                        </motion.div>
                      </motion.a>
                    </Link>
                  )}
                </div>
              ))}

              {/* Dark Mode Toggle - Only show on large screens */}
              <motion.button
                onClick={() => setDark(!dark)}
                whileTap={{ scale: 0.9 }}
                className="hidden lg:block p-2 rounded-lg bg-gray-100 dark:bg-white/10 ml-2"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {dark ? (
                    <motion.div
                      key="sun-desktop"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 180, scale: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <Sun size={22} className="text-yellow-400" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon-desktop"
                      initial={{ rotate: 180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -180, scale: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <Moon size={22} className="text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Get a Quote Button - RESPONSIVE FIX */}
              <Link href={"/contact"}>
                <motion.button
                  variants={itemVariants}
                  custom={6}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 lg:ml-4 px-4 py-2 lg:px-6 lg:py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium text-sm lg:text-base shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="hidden sm:inline">Get a Quote</span>
                    <span className="sm:hidden">Quote</span>
                    <motion.span
                      initial={{ x: -5, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="ml-1 lg:ml-2 hidden sm:block"
                    >
                      <ArrowRight size={16} className="w-4 h-4 lg:w-5 lg:h-5" />
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button - RESPONSIVE FIX */}
            <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
              {/* Mobile Dark Mode Toggle */}
              <motion.button
                onClick={() => setDark(!dark)}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-white/10"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {dark ? (
                    <motion.div
                      key="sun-mobile"
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 180, scale: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <Sun size={20} className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon-mobile"
                      initial={{ rotate: 180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -180, scale: 0 }}
                      transition={{ type: "spring" }}
                    >
                      <Moon size={20} className="text-gray-700 dark:text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              
              {/* Get a Quote Button for Tablets (768px to 1024px) */}
              <Link href={"/contact"} className="hidden md:block lg:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-medium text-sm shadow-lg"
                >
                  Get Quote
                </motion.button>
              </Link>
              
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-red-500/10 text-red-500"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden overflow-hidden mt-4 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                      custom={index}
                    >
                      {item.name === 'Services' ? (
                        <div>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
                          >
                            <div className="flex items-center">
                              <span className="mr-3 text-red-500">{item.icon}</span>
                              <span className="font-medium text-gray-800 dark:text-white">{item.name}</span>
                            </div>
                            <motion.span
                              animate={{ rotate: isServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={18} />
                            </motion.span>
                          </button>
                          
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 space-y-2"
                              >
                                {/* Services Container with Fixed Height */}
                                <div className="max-h-[60vh] overflow-y-auto pr-2">
                                  {services.map((service, index) => (
                                    <Link href={service.href} key={service.name}>
                                      <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start p-3 mb-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        <span className="mr-3 mt-1 text-red-500">
                                          {service.icon}
                                        </span>
                                        <div className="flex-1">
                                          <span className="font-medium text-gray-700 dark:text-gray-200 block">
                                            {service.name}
                                          </span>
                                          <span className="text-xs text-gray-500 dark:text-gray-400 block mt-1">
                                            {service.description}
                                          </span>
                                        </div>
                                      </motion.div>
                                    </Link>
                                  ))}
                                </div>
                                
                                {/* View All Services Button */}
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                  className="pt-2"
                                >
                                  <Link 
                                    href="/service" 
                                    className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-red-400/10 hover:from-red-500/20 hover:to-red-400/20 dark:from-white/5 dark:to-gray-300/5 dark:hover:from-white/10 dark:hover:to-gray-300/10 transition-all duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <span className="font-medium text-red-500 dark:text-red-400 mr-2">
                                      View All Services
                                    </span>
                                    <ArrowRight size={18} className="text-red-500 dark:text-red-400" />
                                  </Link>
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="mr-3 text-red-500">{item.icon}</span>
                          <span className="font-medium text-gray-800 dark:text-white">{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  <motion.div 
                    variants={mobileItemVariants}
                    className="pt-4"
                  >
                    <Link href="/contact">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-bold shadow-lg border border-red-600/30"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get a Quote
                        <ArrowRight className="inline ml-2 w-4 h-4" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Floating Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/5 dark:bg-red-500/10 blur-3xl"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 1000,
              scale: 0.5
            }}
            animate={{
              x: [Math.random() * 1000, Math.random() * 1000],
              y: [Math.random() * 1000, Math.random() * 1000],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: 300 + Math.random() * 200,
              height: 300 + Math.random() * 200
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;