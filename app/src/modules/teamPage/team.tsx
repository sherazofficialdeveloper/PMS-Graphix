"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Users, 
  Globe, 
  Award, 
  Calendar,
  Code,
  Palette,
  TrendingUp,
  Server,
  Filter,
  Linkedin,
  Twitter,
  Mail,
  Sparkles,
  Rocket,
  Star,
  Target,
  Zap,
  Shield,
  Brain,
  Heart,
  Cpu,
  Brush,
  BarChart,
  Globe as WebIcon
} from 'lucide-react';

const TeamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const departments = ['All', 'Leadership', 'Development', 'WordPress', 'Design', 'Marketing'];
  
  // اصلاح شدہ team members ڈیٹا
  const teamMembers = [
    {
      id: 1,
      name: "Muhammad Shafiq",
      role: "Graphic Designer & Team Lead",
      department: "Leadership",
      expertise: "Graphic Design & Creative Direction",
      description: "15+ years experience in graphic design and creative solutions. Passionate about visual storytelling and brand identity.",
      imageUrl: "/Muhammad Shafiq.webp",
      icon: <Brush className="w-6 h-6" />,
      tags: ["Illustration", "Branding", "Creative Direction"]
    },
    {
      id: 2,
      name: "Manzoor Ahmad",
      role: "Senior Full-Stack Developer",
      department: "Development",
      expertise: "React & Node.js Development",
      description: "Expert in scalable systems and modern web technologies. Specialized in high-performance applications.",
      imageUrl: "/Manzoor Ahmad.jpg",
      icon: <Code className="w-6 h-6" />,
      tags: ["React", "Node.js", "API Development"]
    },
    {
      id: 3,
      name: "Muhammad Muzamel",
      role: "WordPress Expert",
      department: "WordPress",
      expertise: "WordPress Development & Customization",
      description: "Award-winning WordPress developer with focus on custom themes, plugins and e-commerce solutions.",
      imageUrl: "/Muhammad Muzamel1.jpg",
      icon: <WebIcon className="w-6 h-6" />,
      tags: ["WordPress", "WooCommerce", "Custom Themes"]
    },
    {
      id: 4,
      name: "Haris Aziz",
      role: "Digital Marketing Specialist",
      department: "Marketing",
      expertise: "Digital Marketing & SEO",
      description: "Driven 300% growth for multiple businesses. Expert in SEO, social media and growth marketing.",
      imageUrl: "/Haris Aziz.jpg",
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["SEO", "Social Media", "Analytics"]
    },
    
    // Developer Team
    {
      id: 5,
      name: "Alex Johnson",
      role: "Frontend Developer",
      department: "Development",
      expertise: "React & Vue.js",
      description: "Specialized in building responsive and accessible web applications with modern frameworks.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      icon: <Cpu className="w-6 h-6" />,
      tags: ["React", "Vue.js", "TypeScript"]
    },
    {
      id: 6,
      name: "Sarah Miller",
      role: "Backend Developer",
      department: "Development",
      expertise: "Python & Django",
      description: "Expert in server-side development, database design and API integration.",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      icon: <Server className="w-6 h-6" />,
      tags: ["Python", "Django", "PostgreSQL"]
    },
    {
      id: 7,
      name: "David Chen",
      role: "Mobile Developer",
      department: "Development",
      expertise: "React Native & Flutter",
      description: "Creates cross-platform mobile applications with focus on performance and user experience.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      icon: <Zap className="w-6 h-6" />,
      tags: ["React Native", "Flutter", "Mobile"]
    },
    
    // WordPress Team
    {
      id: 8,
      name: "Emma Wilson",
      role: "WordPress Developer",
      department: "WordPress",
      expertise: "Custom Plugin Development",
      description: "Specialized in creating custom WordPress plugins and extending functionality.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      icon: <WebIcon className="w-6 h-6" />,
      tags: ["PHP", "WordPress", "Plugin Dev"]
    },
    {
      id: 9,
      name: "James Patel",
      role: "WordPress Theme Developer",
      department: "WordPress",
      expertise: "Theme Development",
      description: "Creates responsive and customizable WordPress themes for various industries.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      icon: <Palette className="w-6 h-6" />,
      tags: ["Theme Dev", "CSS", "Responsive"]
    },
    {
      id: 10,
      name: "Lisa Wang",
      role: "WordPress Consultant",
      department: "WordPress",
      expertise: "WordPress Optimization",
      description: "Expert in WordPress performance optimization and security hardening.",
      imageUrl: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
      icon: <Target className="w-6 h-6" />,
      tags: ["Optimization", "Security", "Maintenance"]
    },
    
    // Design Team
    {
      id: 11,
      name: "Sophia Garcia",
      role: "UI/UX Designer",
      department: "Design",
      expertise: "User Interface Design",
      description: "Creates intuitive interfaces that blend aesthetics with functionality for better user experience.",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      icon: <Palette className="w-6 h-6" />,
      tags: ["UI Design", "Prototyping", "User Testing"]
    },
    {
      id: 12,
      name: "Michael Brown",
      role: "Graphic Designer",
      department: "Design",
      expertise: "Print & Digital Design",
      description: "Specialized in creating visually appealing designs for both print and digital media.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      icon: <Brush className="w-6 h-6" />,
      tags: ["Print Design", "Digital Art", "Branding"]
    },
    {
      id: 13,
      name: "Olivia Taylor",
      role: "Motion Graphic Designer",
      department: "Design",
      expertise: "Animation & Motion Design",
      description: "Brings static designs to life with engaging animations and motion graphics.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      icon: <Zap className="w-6 h-6" />,
      tags: ["Animation", "After Effects", "Motion"]
    },
    
    // Marketing Team
    {
      id: 14,
      name: "Robert Kim",
      role: "SEO Specialist",
      department: "Marketing",
      expertise: "Search Engine Optimization",
      description: "Drives organic growth through data-driven SEO strategies and content optimization.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      icon: <Brain className="w-6 h-6" />,
      tags: ["SEO", "Keyword Research", "Analytics"]
    },
    {
      id: 15,
      name: "Aisha Mohammed",
      role: "Social Media Manager",
      department: "Marketing",
      expertise: "Social Media Strategy",
      description: "Creates engaging social media campaigns that drive brand awareness and conversions.",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["Social Media", "Content", "Engagement"]
    },
    {
      id: 16,
      name: "Daniel White",
      role: "PPC Specialist",
      department: "Marketing",
      expertise: "Paid Advertising",
      description: "Manages successful PPC campaigns across multiple platforms with focus on ROI.",
      imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop&crop=face",
      icon: <BarChart className="w-6 h-6" />,
      tags: ["PPC", "Google Ads", "Facebook Ads"]
    }
  ];
  
  const stats = [
    { value: "16+", label: "Team Members", icon: <Users className="w-8 h-8" />, color: "from-red-500 to-rose-500" },
    { value: "10+", label: "Countries Served", icon: <Globe className="w-8 h-8" />, color: "from-orange-500 to-amber-500" },
    { value: "5+", label: "Years Experience Avg", icon: <Calendar className="w-8 h-8" />, color: "from-amber-500 to-yellow-500" },
    { value: "50+", label: "Projects Completed", icon: <Award className="w-8 h-8" />, color: "from-yellow-500 to-lime-500" }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesFilter = activeFilter === 'All' || member.department === activeFilter;
    const matchesSearch = searchQuery === '' || 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Department icons for filter buttons
  const departmentIcons = {
    'All': <Users className="w-4 h-4" />,
    'Leadership': <Rocket className="w-4 h-4" />,
    'Development': <Code className="w-4 h-4" />,
    'WordPress': <WebIcon className="w-4 h-4" />,
    'Design': <Palette className="w-4 h-4" />,
    'Marketing': <TrendingUp className="w-4 h-4" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-rose-500/5" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-rose-500/10 text-red-600 dark:text-red-400 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-widest">Expert Team</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-orange-500">Experts</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
              Your Digital Success Partners
            </h2>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A diverse team of developers, designers, and marketers working together to transform your digital vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search team members by name, role, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
                />
              </div>
            </motion.div>

            {/* Filter Buttons with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by Expertise:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveFilter(dept)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      activeFilter === dept
                        ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-500/30'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {departmentIcons[dept as keyof typeof departmentIcons]}
                    {dept}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid with Images */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-9xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group"
                >
                  <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    
                    {/* Department Badge */}
                    <div className="absolute top-56 left-4 z-20">
                      <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                        member.department === 'Leadership' 
                          ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-600 dark:text-red-400 border border-red-500/30'
                          : member.department === 'Development'
                          ? 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                          : member.department === 'WordPress'
                          ? 'bg-gradient-to-r from-purple-400/20 to-purple-600/20 text-purple-600 dark:text-purple-900 border border-purple-900/70'
                          : member.department === 'Design'
                          ? 'bg-gradient-to-r from-pink-500/20 to-pink-600/20 text-pink-600 dark:text-pink-400 border border-pink-500/30'
                          : 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-green-600 dark:text-green-400 border border-green-500/30'
                      }`}>
                        {member.department}
                      </div>
                    </div>

                    {/* Image Container with Hover Effects */}
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Profile Image */}
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ef4444&color=fff&size=400`;
                          }}
                        />
                        
                        {/* Name Overlay on Hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                        >
                          <div className="text-white">
                            <h3 className="text-xl font-black mb-1">{member.name}</h3>
                            <div className="text-red-300 font-medium">{member.role}</div>
                          </div>
                        </motion.div>
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>

                    {/* Content Below Image */}
                    <div className="p-6">
                      {/* Name & Role (Visible always) */}
                      <div className="mb-4">
                        <h3 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                          {member.name}
                        </h3>
                        <div className="text-red-500 font-medium mb-2">
                          {member.role}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                          {member.icon}
                          <span>{member.expertise}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="border-t border-gray-100 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex justify-center gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1, color: "#0077b5" }}
                          href="#"
                          className="text-gray-400 hover:text-[#0077b5] transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, color: "#1da1f2" }}
                          href="#"
                          className="text-gray-400 hover:text-[#1da1f2] transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, color: "#ef4444" }}
                          href="#"
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-rose-500/0 group-hover:from-red-500/5 group-hover:to-rose-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredMembers.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No team members found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Department Sections */}
      <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">Specialized</span> Teams
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each department works together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Development Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Development Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                3 expert developers specializing in modern web technologies
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                React, Node.js, Python, Mobile Apps
              </div>
            </motion.div>

            {/* WordPress Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                <WebIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">WordPress Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                3 WordPress experts creating custom solutions
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Custom Themes, Plugins, WooCommerce, Optimization
              </div>
            </motion.div>

            {/* Design Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Design Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                3 creative designers including graphic and UI/UX experts
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                UI/UX, Graphic Design, Motion Graphics, Branding
              </div>
            </motion.div>

            {/* Marketing Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">Marketing Team</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                3 marketing specialists driving growth and engagement
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                SEO, Social Media, PPC, Digital Strategy
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 md:p-16 shadow-2xl"
          >
            <div className="relative z-10 text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <Heart className="w-8 h-8 text-red-400" />
                <span className="text-red-400 font-bold text-lg">Join Our Growing Team</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white"
              >
                Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">Work Together</span>?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                We're always looking for passionate individuals to join our growing team of experts.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl font-bold text-lg shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">View Open Positions</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
                >
                  Contact Our Team
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;