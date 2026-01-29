"use client";

import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  Building,
  Code,
  Palette,
  Globe,
  Smartphone,
  Shield,
  FileText,
  Cookie,
  ChevronRight,
  Heart,
  Home,
  Briefcase,
  Users,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: "PMS Graphix",
    tagline: "Premium Digital Solutions",
    description: "We create exceptional digital experiences that drive business growth.",
  };

  const navItems = [
    { 
      icon: Home, 
      name: "Home", 
      href: "/",
    },
    { 
      icon: Briefcase, 
      name: "Services", 
      href: "/service",
    },
    { 
      icon: Users, 
      name: "About", 
      href: "/about",
    },
    { 
      icon: Sparkles, 
      name: "Team", 
      href: "/team",
    }
  ];

  const services = [
    { icon: Code, label: "Custom Software", href: "/software" },
    { icon: Smartphone, label: "Mobile Apps", href: "/appDevelopment" },
    { icon: Palette, label: "UI/UX Design", href: "/uiusdesign" },
    { icon: Globe, label: "Web Development", href: "/webDev" },
    { icon: Building, label: "Enterprise Solutions", href: "/aiSolution" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@pmsgraphix.com", href: "mailto:contact@pmsgraphix.com" },
    { icon: Phone, text: "+923277496610", href: "tel:+923277496610" },
    { icon: MapPin, text: "Bangla Gogera, Okara, Pakistan", href: "#" },
  ];

  const legalLinks = [
    { icon: Shield, label: "Privacy", href: "#" },
    { icon: FileText, label: "Terms", href: "#" },
    { icon: Cookie, label: "Cookies", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-t border-gray-100 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Section - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          
          {/* Column 1 - Brand & Contact */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{companyInfo.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{companyInfo.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Contact Info</h4>
              <ul className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <motion.li
                    key={contact.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={contact.href}
                      className="flex items-center gap-2 group text-sm"
                    >
                      <div className="w-8 h-8 rounded-md bg-red-50 dark:bg-red-900/20 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                        <contact.icon className="w-4 h-4 text-red-500 dark:text-red-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {contact.text}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Navigation</h4>
            </div>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 group p-2 rounded-md hover:bg-red-50 dark:hover:bg-gray-800 transition-all duration-200 text-sm"
                  >
                    <div className="w-8 h-8 rounded-md bg-red-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-gray-700">
                      <item.icon className="w-4 h-4 text-red-500 dark:text-red-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 font-medium">
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Services</h4>
            </div>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className="flex items-center justify-between group p-2 rounded-md hover:bg-red-50 dark:hover:bg-gray-800 transition-all duration-200 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-sm bg-red-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-gray-700">
                        <service.icon className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400">
                        {service.label}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 group-hover:text-red-500 dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">Newsletter</h4>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subscribe for updates and insights.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-100 dark:focus:ring-red-900/30 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <button className="w-full px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors shadow-sm hover:shadow">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Follow Us</h5>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center hover:bg-red-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Single Combined Bottom Section */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            
            {/* Left Side - Copyright, Legal & Certifications */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Copyright */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                © {currentYear} <span className="font-semibold text-gray-900 dark:text-white">PMS Graphix</span>
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block text-gray-400">•</div>
              
              {/* Legal Links */}
              <div className="flex items-center gap-3 text-xs">
                {legalLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              
              {/* Divider */}
              <div className="hidden sm:block text-gray-400">•</div>
              
              {/* Certifications */}
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-1 bg-gray-50 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300">
                  ISO 9001:2015
                </span>
                <span className="px-2 py-1 bg-gray-50 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300">
                  Member P@SHA
                </span>
              </div>
            </div>

            {/* Right Side - Made with Love & Back to Top */}
            <div className="flex items-center gap-3">
              {/* Made with Love */}
              <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                Made with
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-0.5" />
                </motion.span>
                in Lahore, Pakistan
              </div>
              
              {/* Divider */}
              <div className="text-gray-400">•</div>
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-md shadow-sm hover:shadow transition-all whitespace-nowrap"
              >
                <ArrowUp className="w-3 h-3" />
                Back to Top
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}