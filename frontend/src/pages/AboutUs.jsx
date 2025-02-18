import React, { useState, useEffect } from "react";
import { 
  Globe, 
  Users, 
  Heart, 
  Award, 
  Clock, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Star,
  Navigation
} from "lucide-react";
import Banner1 from "../assets/images/aboutus_banner (1).webp"

const CustomAlert = ({ children }) => (
  <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
    {children}
  </div>
);

const AboutUs = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      name: "Our Mission",
      description: "To inspire and empower travelers to explore the world, fostering cultural understanding and creating lasting memories.",
      icon: Globe,
      accent: "from-blue-500 to-blue-600",
      lightAccent: "bg-blue-50",
      iconColor: "text-blue-600",
      details: [
        "Curated experiences for all types of travelers",
        "Cultural immersion programs",
        "Sustainable travel initiatives",
        "Educational travel opportunities",
      ],
    },
    {
      name: "Our Commitment",
      description: "We are committed to sustainable tourism, supporting local communities, and minimizing our environmental impact in every destination we visit.",
      icon: Heart,
      accent: "from-green-500 to-green-600",
      lightAccent: "bg-green-50",
      iconColor: "text-green-600",
      details: [
        "Carbon offset programs",
        "Local community partnerships",
        "Eco-friendly accommodations",
        "Waste reduction initiatives",
      ],
    },
    {
      name: "Our Expertise",
      description: "With over 15 years of experience and a team of certified travel experts, we ensure each journey is meticulously planned and perfectly executed.",
      icon: Award,
      accent: "from-purple-500 to-purple-600",
      lightAccent: "bg-purple-50",
      iconColor: "text-purple-600",
      details: [
        "Certified travel consultants",
        "Destination specialists",
        "24/7 support team",
        "Custom itinerary design",
      ],
    },
    {
      name: "Local Connections",
      description: "Our network of local partners and guides provides authentic experiences and insider access to hidden gems worldwide.",
      icon: MapPin,
      accent: "from-indigo-500 to-indigo-600",
      lightAccent: "bg-indigo-50",
      iconColor: "text-indigo-600",
      details: [
        "Native local guides",
        "Exclusive access to attractions",
        "Authentic local experiences",
        "Hidden gem locations",
      ],
    },
  ];

  const stats = [
    { label: "Happy Travelers", value: "50K+", icon: Users },
    { label: "Destinations", value: "100+", icon: Navigation },
    { label: "Years Experience", value: "15+", icon: Clock },
    { label: "Local Partners", value: "200+", icon: Heart },
  ];

  const handleFeatureClick = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const FeatureCard = ({ feature, index, isActive }) => (
    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
      <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${isActive ? "shadow-lg" : "shadow"}`}>
        <div className={`cursor-pointer transition-all duration-300 ${feature.lightAccent}`}
          onClick={() => handleFeatureClick(index)}>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <feature.icon className={`h-6 w-6 ${feature.iconColor} mr-2`} />
              <h3 className="text-sm font-semibold">{feature.name}</h3>
            </div>
            {isActive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>
        {isActive && (
          <div className="bg-white p-4">
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <div className="grid grid-cols-1 gap-2">
              {feature.details.map((detail, idx) => (
                <div key={idx} className={`p-2 rounded-lg ${feature.lightAccent} transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.accent}`} />
                    <p className="text-xs text-gray-700">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full transform rotate-12 bg-gradient-to-b from-blue-600/20 to-transparent" />
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full transform -rotate-12 bg-gradient-to-t from-blue-600/20 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    <Star className="w-4 h-4 mr-2" />
                    Trusted by 50,000+ travelers
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Discover Your Next
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                    Adventure
                  </span>
                </h1>
                <p className="text-xl text-blue-100 max-w-xl">
                  Creating extraordinary journeys since 2025. Let our expert team craft your perfect travel experience with personalized itineraries and unique destinations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white/30 hover:border-white/60 backdrop-blur-sm transition-all duration-300">
                  Watch Video
                </button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className={`transform transition-all duration-700 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                      <div className="flex items-center space-x-2">
                        <stat.icon className="h-5 w-5 text-blue-300" />
                        <span className="font-bold text-2xl">{stat.value}</span>
                      </div>
                      <p className="text-sm text-blue-200">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Image */}
            <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-xl opacity-50" />
                <img
                  src={Banner1}
                  alt="Travel Experience"
                  className="relative rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                />
                {/* Floating achievement card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Top Rated Agency</p>
                      <p className="text-xs text-gray-500">2024 Excellence Award</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Features Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Why Choose Us</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 leading-tight">
              Our Core Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our travel experiences truly exceptional
            </p>
          </div>

          <div className="space-y-20">
            {features.map((feature, index) => (
              <div 
                key={feature.name}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10`}
              >
                {/* Feature Content Container */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative rounded-xl ${feature.lightAccent} p-6 h-full hover:shadow-md transition-all duration-300`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent rounded-xl" />
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${feature.accent} text-white mb-6`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                      <p className="text-gray-700 mb-6">{feature.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {feature.details.map((detail, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-3 rounded-lg hover:shadow-sm transition-all duration-300"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.accent}`} />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Statistics */}
                <div className="w-full lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <CustomAlert>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${feature.lightAccent} ${feature.iconColor}`}>
                        <Star className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <div className="text-lg font-bold text-gray-900">98%</div>
                        <div className="text-xs text-gray-600">Satisfaction Rate</div>
                      </div>
                    </CustomAlert>
                    <CustomAlert>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${feature.lightAccent} ${feature.iconColor}`}>
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <div className="text-lg font-bold text-gray-900">50K+</div>
                        <div className="text-xs text-gray-600">Happy Travelers</div>
                      </div>
                    </CustomAlert>
                    <CustomAlert>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${feature.lightAccent} ${feature.iconColor}`}>
                        <Navigation className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <div className="text-lg font-bold text-gray-900">100+</div>
                        <div className="text-xs text-gray-600">Destinations</div>
                      </div>
                    </CustomAlert>
                    <CustomAlert>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${feature.lightAccent} ${feature.iconColor}`}>
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="ml-3">
                        <div className="text-lg font-bold text-gray-900">15+</div>
                        <div className="text-xs text-gray-600">Years Experience</div>
                      </div>
                    </CustomAlert>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Story Section */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Journey</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">The TripAlly Story</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              From passionate travelers to industry leaders, our journey has been driven by the desire to create extraordinary experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Legacy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded with a vision to transform how people experience travel, TripAlly has grown from a small team of passionate travelers to a leading force in the travel industry. Our journey is marked by continuous innovation and an unwavering commitment to excellence.
                </p>
              </div>
              <div className="px-8 pb-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>50K+ Travelers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where travel breaks down cultural barriers, promotes understanding, and creates lasting connections. Every journey we plan is a step toward this vision, crafted with care and attention to detail that ensures memorable experiences.
                </p>
              </div>
              <div className="px-8 pb-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>100+ Destinations</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    <span>15+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">Recent Achievements</h3>
              <p className="mt-2 text-gray-600">Recognition for our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl">
                <Award className="w-12 h-12 text-blue-600" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Best Travel Agency 2024</h4>
                  <p className="text-gray-600 mt-1">Excellence in Customer Service</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                    <Star className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl">
                <Heart className="w-12 h-12 text-green-600" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Sustainability Champion</h4>
                  <p className="text-gray-600 mt-1">Environmental Impact Award</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Eco-Friendly</span>
                    <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Sustainable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <p>© 2024 TripAlly. All rights reserved.</p>
            <p className="mt-2">Crafted with ❤️ by Rohan Singh</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;