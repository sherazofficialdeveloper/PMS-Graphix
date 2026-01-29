// app/web-development/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Code, Cpu, Zap, ShieldCheck, ArrowRight, 
  Database, Server, Monitor, Rocket, CheckCircle2,
  ExternalLink,
  Smartphone,
  Globe,
  Filter,
  ChevronRight,
  Sparkles,
  Clock,
  TrendingUp,
  Palette,
  ShoppingCart,
  Banknote,
  LineChart,
  Dumbbell,
  Users,
  Utensils
} from 'lucide-react';

// Portfolio projects data
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  bgColor: string;
  features: string[];
  liveLink: string;
  img: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Hamme.com.pk',
    category: 'Web Application / Platform',
    description: 'E-commerce platform for local products with shopping cart and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'JavaScript', 'Ajax'],
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-orange-500/10',
    features: ['E-commerce', 'Shopping', 'Responsive'],
    liveLink: 'https://www.hamme.com.pk/',
    img: "/hamme.png"
  },
  {
    id: 2,
    title: 'TaxReturnFilers.com',
    category: 'Web Development',
    description: 'Professional tax filing service website with clean UI and user-friendly forms.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-600 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-600/10 to-pink-500/10',
    features: ['Corporate', 'Service', 'Responsive'],
    liveLink: 'https://taxreturnfilers.com/',
    img: "/textreturn.png"
  },
  {
    id: 3,
    title: 'WanFinancials.com',
    category: 'Web Development',
    description: 'Financial consulting firm website with professional layout and service showcases.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-rose-500/10',
    features: ['Finance', 'Corporate', 'Modern'],
    liveLink: 'https://wanfinancials.com/',
    img: "/WanFinancials.png"
  },
  {
    id: 4,
    title: 'ENMA-BH.com',
    category: 'Web Development',
    description: 'Business consultancy website with multilingual support and corporate design.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-orange-500/10 to-red-500/10',
    features: ['Consultancy', 'Corporate', 'Multilingual'],
    liveLink: 'https://enma-bh.com/',
    img: "/ENMA.png"
  },
  {
    id: 5,
    title: 'Haskir.com',
    category: 'Web Application / Platform',
    description: 'Service-based platform connecting customers with local service providers.',
    tags: ['.NET', 'SQL Server', 'Angular', 'Azure', 'next.js'],
    color: 'from-red-700 to-red-500',
    bgColor: 'bg-gradient-to-br from-red-700/10 to-red-500/10',
    features: ['Service', 'Platform', 'Modern'],
    liveLink: 'https://haskir.com',
    img: "/haskir.png"
  },
  {
    id: 6,
    title: 'InstantHomeOffers.co.uk',
    category: 'Web Development',
    description: 'UK property investment website with property listings and investment calculators.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Real Estate', 'UK', 'Investment'],
    liveLink: 'https://instanthomeoffers.co.uk/',
    img: "/InstantHomeOffers.png"
  },
  {
    id: 7,
    title: 'GallifordTry.co.uk',
    category: 'Web Development',
    description: 'Construction company website with project portfolio and company information.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Construction', 'Corporate', 'Portfolio'],
    liveLink: 'https://www.gallifordtry.co.uk/',
    img: "/GallifordTry.png"
  },
  {
    id: 8,
    title: 'StarSecurityUAE.com',
    category: 'Web Development',
    description: 'Security services website for UAE market with service details and contact forms.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Security', 'UAE', 'Service'],
    liveLink: 'https://starsecurityuae.com/',
    img: "/StarSecurityUAE.png"
  },
  {
    id: 9,
    title: 'Sofodynamix.com',
    category: 'Software development',
    description: 'Software development company website showcasing services and technologies.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Software', 'Development', 'Services'],
    liveLink: 'https://sofodynamix.com/',
    img: "/Sofodynamix.png"
  },
  {
    id: 10,
    title: 'Traveleazecrm.co.uk',
    category: 'Software development',
    description: 'Travel CRM system for managing customer relationships in travel industry.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Travel', 'CRM', 'Management'],
    liveLink: 'https://traveleazecrm.co.uk/',
    img: "/Traveleazecrm.png"
  },
  {
    id: 11,
    title: 'Accountingsolutionsnc.com',
    category: 'Web Development',
    description: 'Accounting services website with service details and client portal.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Accounting', 'Services', 'Portal'],
    liveLink: 'https://accountingsolutionsnc.com/',
    img: "/Accountingsolutionsnc.png"
  },
  {
    id: 12,
    title: 'Earnwitheasy.com',
    category: 'Web Development',
    description: 'Earning platform website with multiple income streams and user dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Earning', 'Platform', 'Dashboard'],
    liveLink: 'https://www.earnwitheasy.com/',
    img: "/Earnwitheasy.png"
  },
  {
    id: 13,
    title: 'PMS Graphix Portfolio',
    category: 'Web Development',
    description: 'Our own portfolio website showcasing projects and capabilities.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Portfolio', 'Showcase', 'Responsive'],
    liveLink: 'https://pms-graphix-portfolio.vercel.app/',
    img: "/pms-graphix.png"
  },
  {
    id: 14,
    title: 'Fun Guide Web',
    category: 'Web Development',
    description: 'Entertainment and fun guide website with activities and event listings.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Entertainment', 'Guide', 'Events'],
    liveLink: 'https://fun-guide-web.vercel.app/',
    img: "/fun-guide.png"
  },
  {
    id: 15,
    title: 'Researchcollab.ai',
    category: 'Web Application / Platform',
    description: 'AI-powered research collaboration platform for academics and researchers.',
    tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Socket.io', 'Mapbox'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Research', 'AI', 'Collaboration'],
    liveLink: 'https://researchcollab.ai/',
    img: "/Researchcollab.png"
  },
  {
    id: 16,
    title: 'GoRide Driver App',
    category: 'App Development',
    description: 'React Native mobile app for taxi drivers with ride management features.',
    tags: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'AI'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Mobile App', 'Ride-hailing', 'Driver'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.kibrann.goride.nontaxidriverapp',
    img: "/GoRide.png"
  },
  {
    id: 17,
    title: 'GoRide Passenger App',
    category: 'App Development',
    description: 'React Native mobile app for passengers to book rides and track drivers.',
    tags: ['React Native', 'Firebase', 'Maps', 'Payment'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Mobile App', 'React Native', 'Ride-hailing'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.taxiapp.kibrann',
    img: "/GoRide-Passenger.png"
  },
  {
    id: 18,
    title: 'Homee.com',
    category: 'Web Development',
    description: 'Home services platform connecting homeowners with service professionals.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Stripe'],
    color: 'from-red-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-500/10 to-amber-500/10',
    features: ['Home Services', 'Platform', 'Booking'],
    liveLink: 'https://www.homee.com/',
    img: "/homee.png"
  },
];

interface Category {
  id: string;
  label: string;
  icon: React.ReactElement;
}

const categories: Category[] = [
  { id: 'all', label: 'All', icon: <Filter className="w-4 h-4" /> },
  { id: 'web', label: 'Web Development', icon: <Globe className="w-4 h-4" /> },
  { id: 'mobile', label: 'Mobile App', icon: <Smartphone className="w-4 h-4" /> },
  { id: 'ai', label: 'AI/ML', icon: <Cpu className="w-4 h-4" /> },
  { id: 'software', label: 'Software Development', icon: <Code className="w-4 h-4" /> }
];

const stats = [
  { value: '50+', label: 'Projects Completed', icon: <Zap className="w-5 h-5" /> },
  { value: '100%', label: 'Client Satisfaction', icon: <Sparkles className="w-5 h-5" /> },
  { value: '24/7', label: 'Support Available', icon: <ShieldCheck className="w-5 h-5" /> },
  { value: '2x', label: 'Faster Delivery', icon: <Clock className="w-5 h-5" /> }
];

const faqs = [
  { 
    q: "What tech stack do you use?", 
    a: "We use modern frameworks including React.js, Next.js, Vue.js, Node.js, Tailwind CSS, MongoDB, and PostgreSQL." 
  },
  { 
    q: "How do you ensure security?", 
    a: "SSL/TLS encryption, CSRF protection, regular security audits, and following best security practices." 
  },
  { 
    q: "Will my website be mobile-friendly?", 
    a: "Yes! We use mobile-first responsive design with thorough testing across all devices." 
  },
  { 
    q: "What is your development timeline?", 
    a: "Typically 4-8 weeks depending on complexity, with regular updates throughout the process." 
  },
  { 
    q: "Do you provide maintenance?", 
    a: "Yes, we offer ongoing maintenance, updates, security patches, and technical support." 
  },
  { 
    q: "What is your pricing model?", 
    a: "We offer fixed pricing for defined projects or flexible hourly rates for ongoing work." 
  }
];

interface Feature {
  icon: React.ReactElement;
  title: string;
  desc: string;
  color: string;
}

const features: Feature[] = [
  { 
    icon: <Server className="w-7 h-7" />, 
    title: 'Scalable Backend', 
    desc: 'Node.js, Express, and microservices architecture for high performance applications.',
    color: 'bg-red-500/10 text-red-500'
  },
  { 
    icon: <Monitor className="w-7 h-7" />, 
    title: 'Modern Frontend', 
    desc: 'React, Next.js, and TypeScript for creating interactive and fast user interfaces.',
    color: 'bg-red-500/10 text-red-500'
  },
  { 
    icon: <Database className="w-7 h-7" />, 
    title: 'Database Management', 
    desc: 'MongoDB and PostgreSQL for efficient data storage and real-time capabilities.',
    color: 'bg-red-500/10 text-red-500'
  },
  { 
    icon: <ShieldCheck className="w-7 h-7" />, 
    title: 'Security & Performance', 
    desc: 'Enterprise-grade security measures with performance optimization techniques.',
    color: 'bg-red-500/10 text-red-500'
  }
];

interface Phase {
  title: string;
  items: string[];
  index: number;
}

const phases: Phase[] = [
  { 
    title: "Discovery & Strategy", 
    items: ["Requirement Analysis", "Technology Stack", "Architecture Design", "Project Timeline"],
    index: 1
  },
  { 
    title: "Design & Development", 
    items: ["UI/UX Design", "Frontend Development", "Backend Development", "API Integration"],
    index: 2
  },
  { 
    title: "Testing & Launch", 
    items: ["Quality Assurance", "Performance Testing", "Security Audit", "Deployment & Launch"],
    index: 3
  }
];

interface Service {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const services: Service[] = [
  {
    title: "Custom Web Applications",
    description: "Tailor-made web solutions built with cutting-edge technology for your business needs.",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "E-commerce Platforms",
    description: "Secure online stores with payment gateways, inventory management, and analytics.",
    icon: <ShoppingCart className="w-6 h-6" />
  },
  {
    title: "Progressive Web Apps",
    description: "Native-like web applications that work offline and can be installed on devices.",
    icon: <Cpu className="w-6 h-6" />
  }
];

export default function WebDevPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter projects based on active category
  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'all') return true;
    const categoryMap: Record<string, string> = {
      'web': 'Web Development',
      'mobile': 'Mobile App',
      'ai': 'AI/ML',
      'software': 'Software Development'
    };
    return project.category === categoryMap[activeCategory];
  });

  // Animation variants
  const containerVariants: Variants = {
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
        ease: "easeOut"
      },
    },
  };

  const faqVariantsLeft: Variants = {
    hidden: { 
      x: -50, 
      opacity: 0,
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const faqVariantsRight: Variants = {
    hidden: { 
      x: 50, 
      opacity: 0,
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Fixed image error handler function
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, projectTitle: string) => {
    const img = e.currentTarget;
    img.onerror = null;
    img.src = `https://placehold.co/600x400/ff0000/ffffff?text=${encodeURIComponent(projectTitle)}`;
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      className="bg-white dark:bg-gray-950 min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold border border-red-500/20">
                <Rocket className="mr-2" size={16} />
                Professional Web Development
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build <span className="text-red-500">Powerful</span><br />
                Web Experiences
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We create high-performance, scalable web applications that drive business growth and deliver exceptional user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <button 
                  className="px-7 py-3.5 bg-red-500 text-white rounded-xl font-bold text-base flex items-center hover:bg-red-600 transition-all hover:scale-105 group shadow-md"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                
                <motion.div 
                  animate={{
                    y: [0, -5, 0],
                    transition: {
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      ease: "easeInOut"
                    }
                  }}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Performance</p>
                    <p className="text-lg font-bold">99.9% Uptime</p>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-500">200+</p>
                  <p className="text-sm text-gray-500 mt-1">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-500">50+</p>
                  <p className="text-sm text-gray-500 mt-1">Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-500">24/7</p>
                  <p className="text-sm text-gray-500 mt-1">Support</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="relative w-full max-w-[520px] mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl p-2 border-2 border-red-500/20 shadow-xl overflow-hidden">
                <div className="w-full bg-[#0a0a0a] p-5 font-mono text-sm leading-relaxed rounded-xl">
                  <div className="flex space-x-2 mb-4 border-b border-gray-800 pb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-3 text-gray-500 text-xs">app/page.tsx</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-purple-400">// Next.js 14 + TypeScript</p>
                    <p className="text-blue-400">export default function <span className="text-yellow-400">HomePage</span>() {'{'}</p>
                    <p className="pl-4 text-gray-400">return (</p>
                    <p className="pl-8 text-green-400">{'<'}<span className="text-cyan-400">WebApplication</span></p>
                    <p className="pl-12 text-gray-400">speed="⚡ 95+ Score"</p>
                    <p className="pl-12 text-gray-400">security="🔒 Enterprise"</p>
                    <p className="pl-8 text-green-400">/&gt;</p>
                    <p className="pl-4 text-gray-400">);</p>
                    <p className="text-blue-400">{'}'}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 w-14 h-14 bg-red-500/5 rounded-lg border border-red-500/10 flex items-center justify-center backdrop-blur-sm">
                <Code className="text-red-500" size={22} />
              </div>
              
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-red-500/5 rounded-lg border border-red-500/10 flex items-center justify-center backdrop-blur-sm">
                <Cpu className="text-red-500" size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our <span className="text-red-500">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Professional web development solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border border-red-200 dark:border-red-800 bg-red-500/10 dark:bg-red-500/10 mb-6"
            >
              <Sparkles className="w-5 h-5 text-red-600 dark:text-red-400 animate-pulse" />
              <span className="text-red-700 dark:text-red-300 font-semibold">
                OUR PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-gray-900 dark:text-white">
                Our Web <br />Development{' '}
              </span>
              <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Explore our handpicked selection of projects that showcase our expertise and creativity.
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mt-8"
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20">
                    <div className="text-red-600 dark:text-red-400">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {filteredProjects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-red-300 dark:hover:border-red-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/30">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8">
                    <motion.div
                      className={`w-full h-48 ${project.bgColor} rounded-2xl overflow-hidden mb-6 relative`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Image with fallback */}
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, project.title)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex gap-3"
                    >
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-shadow"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Website
                      </motion.a>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-red-500/40 transition-all"
            >
              <span>View Full Portfolio</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
              
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>

            <div className="flex justify-center gap-6 mt-12">
              {[Palette, Database, Code, TrendingUp].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      repeatType: "loop" as const,
                      ease: "easeInOut"
                    }
                  }}
                  className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                >
                  <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Our <span className="text-red-500">Expertise</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative p-6 space-y-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 h-full hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Our <span className="text-red-500">Process</span>
          </motion.h2>
          
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phases.map((phase, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold z-10">
                    {phase.index}
                  </div>
                  <div className="p-6 space-y-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm h-full">
                    <h3 className="text-3xl font-bold text-red-500">{phase.title}</h3>
                    <div className="space-y-3">
                      {phase.items.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="text-red-500" size={16} />
                          </div>
                          <span className="text-xl text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-8xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Frequently Asked <span className="text-red-500">Questions</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={i % 2 === 0 ? faqVariantsLeft : faqVariantsRight}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-500/30 transition-all shadow-sm hover:shadow-md h-full">
                  <h4 className="text-3xl mb-3 flex items-center">
                    <span className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center mr-3 text-2xl">
                      Q
                    </span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 pl-11 text-xl">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="container mx-auto px-4 md:px-6 pb-16 pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-600"
        >
          <div className="relative p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold">
                Ready to <span className="text-black">Launch</span> Your Project?
              </h2>
              <p className="text-lg opacity-90">
                Let's build something extraordinary together. Contact us today for a free consultation.
              </p>
            </div>
            
            <button
              className="px-8 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 min-w=[180px] shadow-lg"
            >
              Get Started
            </button>
          </div>
        </motion.div>

      
      </div>
    </motion.div>
  );
}