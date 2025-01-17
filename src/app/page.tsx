"use client"

import { motion  } from 'framer-motion';
import { 
  Clock, 
  Shield, 
  Wrench,
  Star,
  MessageSquare,
  BellRing,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import React from 'react';
import { Card } from './components/ui/Card';

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                {[
                  "/images/testimonials/3.png",
                  "/images/testimonials/5.png",
                  "/images/testimonials/9.png",
                  "/images/testimonials/10.png"
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white relative"
                  >
                    <img 
                      src={src}
                      alt={`User ${i + 1}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How ServisLah Works
          </h2>
          <p className="text-xl text-gray-600">
            Four simple steps to hassle-free car maintenance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.4 }}
                  className="hidden md:block absolute top-8 left-1/2 w-full border-t-2 border-dashed border-[#484eff]/30"
                  style={{ transformOrigin: 'left' }}
                />
              )}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.4 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="w-16 h-16 bg-[#484eff] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4"
                >
                  {index + 1}
                </motion.div>
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

const testimonials = [
  {
    name: "David Tan",
    role: "Car Owner",
    image: "/images/testimonials/5.png",
    content: "ServisLah has made car maintenance so much easier. The real-time updates and transparent pricing are game-changers.",
    rating: 5
  },
  {
    name: "Sarah Lee",
    role: "Business Fleet Manager",
    image: "/images/testimonials/3.png",
    content: "Managing our company's fleet maintenance has never been more efficient. The scheduling system is fantastic!",
    rating: 5
  },
  {
    name: "Ahmad Razak",
    role: "Private Driver",
    image: "/images/testimonials/9.png",
    content: "I love how I can track my car's service progress in real-time. No more waiting around wondering what's happening.",
    rating: 5
  },
  // ... add more testimonials as needed
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  const getPrevIndex = (current: number) => (current - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = (current: number) => (current + 1) % testimonials.length;

  return (
    <div className="py-20 bg-gradient-to-b from-white to-[#484eff]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-[#484eff]">Thousands</span> of Drivers
          </h2>
          <p className="text-xl text-gray-600">
            See what our users have to say about their ServisLah experience
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            <motion.button
              onClick={() => setCurrentIndex(getPrevIndex(currentIndex))}
              className="absolute left-4 z-10 p-2 rounded-full bg-[#484eff]/10 hover:bg-[#484eff]/20 text-[#484eff]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-8 items-center">
              {/* Previous Card */}
              <motion.div 
                className="opacity-50 scale-90"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                <Card className="w-96 p-8 bg-white shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#484eff]/20 rounded-full blur-sm"></div>
                      <img
                        src={testimonials[getPrevIndex(currentIndex)].image}
                        alt={testimonials[getPrevIndex(currentIndex)].name}
                        className="w-12 h-12 rounded-full ring-2 ring-[#484eff]/20 relative z-10"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[getPrevIndex(currentIndex)].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[getPrevIndex(currentIndex)].role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {testimonials[getPrevIndex(currentIndex)].content}
                  </p>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonials[getPrevIndex(currentIndex)].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#484eff] fill-current" />
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Current Card */}
              <motion.div 
                className="scale-110 z-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                <Card className="w-96 p-8 bg-white shadow-xl border border-[#484eff]/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#484eff]/20 rounded-full blur-sm"></div>
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full ring-2 ring-[#484eff]/20 relative z-10"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {testimonials[currentIndex].content}
                  </p>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#484eff] fill-current" />
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Next Card */}
              <motion.div 
                className="opacity-50 scale-90"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.5 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
              >
                <Card className="w-96 p-8 bg-white shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#484eff]/20 rounded-full blur-sm"></div>
                      <img
                        src={testimonials[getNextIndex(currentIndex)].image}
                        alt={testimonials[getNextIndex(currentIndex)].name}
                        className="w-12 h-12 rounded-full ring-2 ring-[#484eff]/20 relative z-10"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[getNextIndex(currentIndex)].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[getNextIndex(currentIndex)].role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {testimonials[getNextIndex(currentIndex)].content}
                  </p>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonials[getNextIndex(currentIndex)].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#484eff] fill-current" />
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.button
              onClick={() => setCurrentIndex(getNextIndex(currentIndex))}
              className="absolute right-4 z-10 p-2 rounded-full bg-[#484eff]/10 hover:bg-[#484eff]/20 text-[#484eff]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
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
      <TestimonialsSection />
      {/* Add more sections as needed */}
    </div>
  );
};

export default LandingPage;