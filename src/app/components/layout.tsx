"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Car,
  Wrench,
  Clock,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      label: 'Services',
      items: [
        { label: 'Car Service', icon: Car },
        { label: 'Maintenance', icon: Wrench },
        { label: 'Quick Service', icon: Clock },
        { label: 'Fleet Service', icon: Users },
      ]
    },
    {
      label: 'For Business',
      items: [
        { label: 'Service Centers', icon: Wrench },
        { label: 'Fleet Management', icon: Car },
        { label: 'Enterprise', icon: Users },
        { label: 'Testimonials', icon: Users },
        { label: 'FAQ', icon: Users },
      ]
    },
    { label: 'Pricing' },
    { label: 'About' },
    { label: 'Blog' },
    { label: 'Career' },
    { label: 'Contact Us' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#484eff] text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+60 11-1302 5474</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@servislah.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hover:text-[#a6a9fe] transition-colors">Download App</button>
              <button className="hover:text-[#a6a9fe] transition-colors">Partner Login</button>
            </div>
          </div>
        </div>
      </div>

      {/* Add margin to the main content to prevent overlap */}
      
        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <Link href="/" passHref>
                  <Image src="/images/logo.png" alt="ServisLah Logo" width={180} height={180} />
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    className="flex items-center space-x-1 py-8 text-gray-700 hover:text-[#484eff] transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.items ? item.label : null)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.label}</span>
                    {item.items && <ChevronDown className="w-4 h-4" />}
                  </button>

                  {item.items && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg py-4"
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.items.map((subItem, subIndex) => (
                            <button
                              key={subIndex}
                              className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-[#484eff]/5 text-gray-700 hover:text-[#484eff] transition-colors"
                            >
                              <subItem.icon className="w-5 h-5" />
                              <span>{subItem.label}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-4 py-2 text-[#484eff] hover:text-[#484eff]/80 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-[#484eff] text-white rounded-full hover:bg-[#484eff]/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="py-2">
                  <button
                    className="flex items-center justify-between w-full py-2 text-gray-700"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    {item.items && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </button>

                  {item.items && activeDropdown === item.label && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-[#484eff]/5 text-gray-700"
                        >
                          <subItem.icon className="w-5 h-5" />
                          <span>{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 space-y-2">
                <button className="w-full px-4 py-2 text-[#484eff] border border-[#484eff] rounded-lg">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-[#484eff] text-white rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Footer Component
const Footer = () => {
  const footerLinks = {
    company: [
      'About Us',
      'Careers',
      'Press',
      'Blog',
      'Contact',
    ],
    services: [
      'Car Service',
      'Maintenance',
      'Quick Service',
      'Fleet Management',
      'Enterprise Solutions',
    ],
    support: [
      'Help Center',
      'Safety',
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
    ],
    partner: [
      'Become a Partner',
      'Service Centers',
      'Affiliates',
      'Mechanics',
      'Developers',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="bg-[#484eff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative overflow-hidden rounded-2xl bg-[#0d1a4c] p-8 md:p-12">
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay updated with ServisLah
              </h3>
              <p className="text-[#a6a9fe] mb-8">
                Get the latest news, updates and special offers delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-[#484eff]/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-[#484eff]"
                />
                <button className="px-8 py-4 bg-[#484eff] text-white rounded-xl hover:bg-[#484eff]/90 transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#484eff]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#484eff]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              
              <Image src="/images/logo.png" alt="ServisLah Logo" width={250} height={250} />
            </div>
            <p className="text-gray-600 mb-8 max-w-md">
              ServisLah is Malaysia&apos;s leading car service platform, connecting vehicle owners 
              with trusted service centers for a seamless maintenance experience.
            </p>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#484eff]/10 flex items-center justify-center text-[#484eff] hover:bg-[#484eff] hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="text-gray-900 font-semibold mb-6 uppercase text-sm">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-[#484eff] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#484eff] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#484eff] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#484eff] transition-colors">Cookies</a>
            </div>
            <div className="text-sm text-gray-600 md:text-right">
              © {new Date().getFullYear()} ServisLah. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      
      {/* App Download Section */}
      <div className="bg-[#484eff]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Get the ServisLah App
              </h4>
              <p className="text-gray-600">
                Download now for iOS and Android
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* Replace with actual app store buttons */}
              <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Image src="/images/App-Store-Symbol.png" alt="App Store" width={120} height={120} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.servislah.app" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Image src="/images/google-play-badge.png" alt="Play Store" width={120} height={120} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Header, Footer };