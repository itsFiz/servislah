"use client"

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Clock, 
  Shield, 
  Zap, 
  Car,
  Wrench,
  Phone,
  Star,
  ArrowRight,
  MessageSquare,
  BellRing,
  CheckCircle,
  MapPin
} from 'lucide-react';

const BRAND = {
  primary: '#484eff',
  secondary: '#a6a9fe',
  dark: '#0d1a4c',
  light: '#f5f5ff'
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#484eff]/10 to-white/50" />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${BRAND.primary}20 0%, transparent 50%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#484eff]">Goodbye</span> to car service headaches,
              <span className="block mt-2"> ServisLah</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience hassle-free car maintenance with real-time tracking,
              trusted workshops, and seamless scheduling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#484eff] text-white rounded-xl font-semibold hover:bg-[#484eff]/90 transition-all">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-[#484eff] text-[#484eff] rounded-xl font-semibold hover:bg-[#484eff]/10 transition-all">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">Trusted by 100K+ users</div>
                <div className="text-gray-600">4.9★ rating on App Store</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - 3D App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for app preview - replace with actual app screenshot */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#484eff] to-[#a6a9fe]" />
              <img 
                src="/images/servislahfigma.png" 
                alt="ServisLah App Preview" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating Feature Cards */}
            {[
              { icon: BellRing, text: "Real-time Updates" },
              { icon: Shield, text: "Secure Booking" },
              { icon: MessageSquare, text: "Direct Chat" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="absolute bg-white p-4 rounded-xl shadow-lg flex items-center gap-3"
                style={{
                  [index === 0 ? 'top' : index === 1 ? 'right' : 'bottom']: '10%',
                  [index === 0 ? 'left' : index === 1 ? 'top' : 'right']: '10%',
                }}
              >
                <feature.icon className="w-6 h-6 text-[#484eff]" />
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Book your preferred service slot in seconds with AI-powered recommendations"
    },
    {
      icon: Wrench,
      title: "Expert Service",
      description: "Connect with certified mechanics and authorized service centers"
    },
    {
      icon: MapPin,
      title: "Live Tracking",
      description: "Monitor your vehicle's service progress in real-time through the app"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Chat directly with service advisors and receive instant updates"
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Transparent pricing and service quality guarantee"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Safe and hassle-free payment processing with multiple options"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need for a
            <span className="text-[#484eff]"> seamless service experience</span>
          </h2>
          <p className="text-xl text-gray-600">
            Designed to make car maintenance simple, transparent, and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#484eff]/30 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#484eff]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#484eff]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Book Service",
      description: "Choose your preferred service center and time slot"
    },
    {
      title: "Drop Off",
      description: "Drop your car or use our pickup service"
    },
    {
      title: "Track Progress",
      description: "Monitor service status in real-time"
    },
    {
      title: "Ready to Go",
      description: "Pick up your serviced vehicle"
    }
  ];

  return (
    <div className="bg-[#484eff]/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How ServisLah Works
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to hassle-free car maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-[#484eff]/30" />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-[#484eff] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      {/* Add more sections as needed */}
    </div>
  );
};

export default LandingPage;