import React from 'react';
import travelImage from "../assets/images/color-plastic-travel-bag-with-different-travel-elements-illustration_.webp";
import travelImage2 from "../assets/images/travel-tour-social-media-post-instagram-post-web-banner-template_5019.webp";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-50 opacity-50 pattern-grid-lg"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex items-center gap-x-3 mb-8">
            <div className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-semibold leading-6 text-orange-600 ring-1 ring-inset ring-orange-500/20">
              New Destinations
            </div>
            <div className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-500/20">
              Special Offers
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Your Journey <span className="text-orange-600">Begins</span> with TripAlly
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-lg leading-8 text-gray-600 max-w-xl"
          >
            Embark on extraordinary adventures and create timeless memories. From hidden gems to iconic landmarks, 
            let us guide you through a world of unforgettable experiences.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#trips"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-orange-500 transition-all duration-200 hover:scale-105"
            >
              Explore Trips
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition-all duration-200 hover:scale-105"
            >
              Learn more
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <div className="mt-4 flex  gap-x-4">
            <div className="text-sm leading-6 text-gray-600">
                <span className="font-semibold text-gray-900">1000+</span> happy travelers this month
            </div>
        </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative"
        >
          <div className="relative">
            <img
              className="mx-auto w-[28rem] max-w-full rounded-2xl object-cover shadow-2xl ring-1 ring-gray-900/10"
              src={travelImage}
              alt="Travel destination"
            />
            {/* Floating elements */}
            <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-lg shadow-lg transform -rotate-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Best Price Guarantee</span>
              </div>
            </div>
            <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-lg shadow-lg transform rotate-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;