"use client"
import { motion } from 'framer-motion';
import { 
  Search, 
  Smartphone, 
  Globe, 
  Palette, 
  Sparkles, 
  BarChart, 
  TrendingUp, 
  Cpu,
  CheckCircle,
  Users,
  Award,
  Clock,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Navbar from '../../layout/header/headerTop';
import HeroSection from './heroSection';
import ServicesSection from './serviceSection';
import ChooseUs from './chooseSection';
import PortfolioSection from './portfolioSection';
import TeamSection from './OurTeamSection';
import TestimonialsSection from './testimonialSection';
import GetStartedSection from './getStarted';
import ProcessSection from './ourProcess';


export default function Index() {
  const services = [
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      category: 'Development',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with latest technologies',
      category: 'Development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'User-centric designs that enhance engagement',
      category: 'Design',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Graphic Design',
      description: 'Visual branding and marketing materials',
      category: 'Design',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <BarChart size={24} />,
      title: 'SEO Optimization',
      description: 'Improve search rankings and organic traffic',
      category: 'Marketing',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital campaigns for maximum reach',
      category: 'Marketing',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI Solutions',
      description: 'AI-powered applications and automation',
      category: 'Development',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const categories = ['All Services', 'Development', 'Design', 'Marketing'];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Advanced Animations */}
      <HeroSection />
      {/* Services Section */}
      <ServicesSection />
       {/* Chose section */}
       <ProcessSection />
       <ChooseUs />
<PortfolioSection />

<TestimonialsSection />
<TeamSection />
<GetStartedSection />
      {/* Other sections... */}
    </div>
  );
}