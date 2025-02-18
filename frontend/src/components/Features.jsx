import React from 'react';
import { FaPlane, FaMoneyBillAlt, FaPercentage, FaUserClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <FaPlane size={40} className="text-blue-500 group-hover:text-blue-600 transition-colors" />,
      title: 'Easy Booking',
      description: 'We offer easy and convenient flight bookings with attractive offers.',
      stats: '10K+ Flights Booked',
      gradient: 'from-blue-50 to-white'
    },
    {
      icon: <FaMoneyBillAlt size={40} className="text-green-500 group-hover:text-green-600 transition-colors" />,
      title: 'Lowest Price',
      description: 'We ensure low rates on hotel reservation, holiday packages and on flight tickets.',
      stats: 'Up to 40% Savings',
      gradient: 'from-green-50 to-white'
    },
    {
      icon: <FaPercentage size={40} className="text-yellow-500 group-hover:text-yellow-600 transition-colors" />,
      title: 'Exciting Deals',
      description: 'Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.',
      stats: '500+ Daily Deals',
      gradient: 'from-yellow-50 to-white'
    },
    {
      icon: <FaUserClock size={40} className="text-red-500 group-hover:text-red-600 transition-colors" />,
      title: '24/7 Support',
      description: 'Get assistance 24/7 on any kind of travel related query. We are happy to assist you.',
      stats: '15min Avg Response',
      gradient: 'from-red-50 to-white'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-right skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Why Choose TripAlly
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Everything you need for the <span className="text-orange-600">perfect trip</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've thought of everything to make your travel experience seamless and memorable
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative bg-gradient-to-b ${feature.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
            >
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-orange-50 opacity-20"></div>
              
              <div className="relative">
                <div className="mb-6 inline-block rounded-2xl bg-white/80 p-3 shadow-sm">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-500">
                    {feature.stats}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-orange-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-200"
          >
            Start Planning Your Trip
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;