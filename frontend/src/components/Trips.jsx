import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import beach from "../assets/images/beach.webp";
import city from "../assets/images/city.webp";
import mountain from "../assets/images/mountain.webp";
import safari from "../assets/images/safari.webp";

const trips = [
  {
    id: 1,
    slug: "paradise-beach",
    name: "Paradise Beach Retreat",
    description: "Experience the perfect beach getaway with crystal clear waters and white sand beaches.",
    price: 999,
    duration: "7 days",
    rating: 4.9,
    reviews: 128,
    image: beach,
    category: "Beach Vacation"
  },
  {
    id: 2,
    slug: "mountain-adventure",
    name: "Mountain Adventure",
    description: "Explore majestic peaks and breathtaking views on this mountain expedition.",
    price: 1299,
    duration: "5 days",
    rating: 4.8,
    reviews: 96,
    image: mountain,
    category: "Adventure"
  },
  {
    id: 3,
    slug: "cultural-city",
    name: "Cultural City Tour",
    description: "Immerse yourself in local culture and history with guided city tours.",
    price: 899,
    duration: "4 days",
    rating: 4.7,
    reviews: 156,
    image: city,
    category: "Cultural"
  },
  {
    id: 4,
    slug: "safari-experience",
    name: "Safari Experience",
    description: "Witness wildlife in their natural habitat on this unforgettable safari adventure.",
    price: 1499,
    duration: "6 days",
    rating: 4.9,
    reviews: 142,
    image: safari,
    category: "Wildlife"
  },
];

const Trips = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="trips" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-1/2 -z-10 ml-16 w-[200%] origin-left skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:ml-28 lg:ml-0 xl:ml-16 xl:origin-center"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-orange-600 uppercase tracking-wide">
            Featured Destinations
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Curated Travel <span className="text-orange-600">Experiences</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl mx-auto">
            Discover handpicked destinations that promise unforgettable adventures and authentic experiences
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {trips.map((trip) => (
            <motion.article
              key={trip.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image container */}
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-800">
                    {trip.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-gray-500">{trip.duration}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-600">{trip.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({trip.reviews})</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{trip.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{trip.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-orange-600 font-bold">
                    ${trip.price}
                    <span className="text-gray-500 text-sm font-normal">/person</span>
                  </div>
                  <Link
                    to={`/book/${trip.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors duration-200"
                  >
                    Book Now
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

       
      </div>
    </section>
  );
};

export default Trips;