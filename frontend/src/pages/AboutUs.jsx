import { useState } from "react"
import { Globe, Users, Heart, Award, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import Banner1 from "../assets/images/aboutus_banner (1).webp"

const CustomAlert = ({ children }) => (
  <div className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">{children}</div>
)

const AboutUs = () => {
  const [activeFeature, setActiveFeature] = useState(null)

  const features = [
    {
      name: "Our Mission",
      description:
        "To inspire and empower travelers to explore the world, fostering cultural understanding and creating lasting memories.",
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
      description:
        "We are committed to sustainable tourism, supporting local communities, and minimizing our environmental impact in every destination we visit.",
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
      description:
        "With over 15 years of experience and a team of certified travel experts, we ensure each journey is meticulously planned and perfectly executed.",
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
      description:
        "Our network of local partners and guides provides authentic experiences and insider access to hidden gems worldwide.",
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
  ]

  const stats = [
    { label: "Happy Travelers", value: "50K+" },
    { label: "Destinations", value: "100+" },
    { label: "Years Experience", value: "15+" },
    { label: "Local Partners", value: "200+" },
  ]

  const handleFeatureClick = (index) => {
    setActiveFeature(activeFeature === index ? null : index)
  }

  const FeatureCard = ({ feature, index, isActive }) => (
    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
      <div
        className={`border rounded-lg overflow-hidden transition-all duration-300 ${isActive ? "shadow-lg" : "shadow"}`}
      >
        <div
          className={`cursor-pointer transition-all duration-300 ${feature.lightAccent}`}
          onClick={() => handleFeatureClick(index)}
        >
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
                <div
                  key={idx}
                  className={`p-2 rounded-lg ${feature.lightAccent} transition-all duration-300 hover:scale-105`}
                >
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
  )

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold sm:text-5xl text-gray-900 mb-4">
            Discover <span className="text-blue-600">TripAlly</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating extraordinary travel experiences since 2025
          </p>
        </div>

        {/* Main Content Section */}
        <div className="mb-24">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative">
                <img
                  src={Banner1 || "/placeholder.svg"}
                  alt="TripAlly Team"
                  className="rounded-lg shadow-2xl transition duration-300 group-hover:scale-105 w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At TripAlly, we're passionate about creating unforgettable travel experiences. Our team of seasoned
                travelers and local experts curate each trip with care, ensuring you get the most authentic and
                enriching adventures.
              </p>

              <CustomAlert>
                <Clock className="h-4 w-4 text-blue-600" />
                <p className="ml-2 text-sm text-blue-700">
                  Limited time offer: Get 15% off on your first adventure booking!
                </p>
              </CustomAlert>

              <div className="grid grid-cols-2 gap-8 my-12">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
                  >
                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <div className="flex flex-wrap -mx-2">
            {features.map((feature, index) => (
              <FeatureCard key={feature.name} feature={feature} index={index} isActive={activeFeature === index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-sm"
          >
            <Users className="mr-2 h-5 w-5" />
            Meet Our Team
          </button>
          <button
            onClick={() => document.getElementById("booking").scrollIntoView({ behavior: "smooth" })}
            className="inline-flex justify-center items-center px-8 py-4 border border-blue-600 text-lg font-medium rounded-md text-blue-600 hover:bg-blue-50 transition duration-300"
          >
            Start Planning
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

