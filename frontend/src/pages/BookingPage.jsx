import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Minus, Calendar, MapPin, Clock, Star, Users } from "lucide-react";
import axios from "axios";
import beach from "../assets/images/beach.webp";
import city from "../assets/images/city.webp";
import mountain from "../assets/images/mountain.webp";
import safari from "../assets/images/safari.webp";

const tripData = {
 
  "paradise-beach": {
    title: "Paradise Beach Retreat",
    subtitle: "Maldives",
    basePrice: 999,
    duration: "7 days",
    rating: 4.9,
    reviews: 128,
    description:
      "Experience the perfect beach getaway with crystal clear waters and white sand beaches. Enjoy peaceful surroundings and luxury accommodations.",
    highlights: [
      "Private beach access",
      "Luxury overwater villa",
      "Unlimited water sports",
      "Gourmet dining experience"
    ],
    features: ["5-star accommodation", "All meals included", "Beach activities", "Spa access"],
    image: beach
  },
 "mountain-adventure": {
    title: "Mountain Adventure",
    subtitle: "Swiss Alps",
    basePrice: 1299,
    duration: "5 days",
    rating: 4.8,
    reviews: 96,
    description:
      "Explore majestic peaks and breathtaking views on this mountain expedition. Perfect for adventure enthusiasts.",
    highlights: [
      "Professional guides",
      "Premium equipment",
      "Scenic helicopter tour",
      "Luxury mountain lodge"
    ],
    features: ["Guided hikes", "Equipment rental", "Mountain lodge stay", "Professional photography"],
    image: mountain
  },
  "cultural-city": {
    title: "Cultural City Tour",
    subtitle: "Kyoto, Japan",
    basePrice: 899,
    duration: "6 days",
    rating: 4.7,
    reviews: 156,
    description:
      "Immerse yourself in local culture and history with guided city tours. Experience the vibrant city life.",
    highlights: [
      "Traditional tea ceremony",
      "Temple and shrine visits",
      "Local artisan workshops",
      "Evening cultural shows"
    ],
    features: ["Local guide", "Museum passes", "Cultural shows", "Food tasting"],
    image: city
  },
  "safari-experience": {
    title: "Safari Experience",
    subtitle: "Serengeti, Tanzania",
    basePrice: 1499,
    duration: "8 days",
    rating: 4.9,
    reviews: 84,
    description: 
      "Witness wildlife in their natural habitat on this unforgettable safari experience.",
    highlights: [
      "Big Five game drives",
      "Sunrise hot air balloon",
      "Luxury tented camps",
      "Expert wildlife tracking"
    ],
    features: ["Game drives", "Luxury camping", "Wildlife guide", "Photography sessions"],
    image: safari
  }
};

export default function BookingPage() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [persons, setPersons] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const trip = tripData[tripId];
  const totalCost = trip.basePrice * persons;

  const handlePersonChange = (increment) => {
    const newValue = persons + increment;
    if (newValue >= 1 && newValue <= 10) {
      setPersons(newValue);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const token = localStorage.getItem('token');  // Retrieve token from local storage
        if (!token) {
            throw new Error('User not authenticated. Please log in.');
        }

        const bookingData = {
            tripId,
            tripName: trip.title,
            tripLocation: trip.subtitle,
            travelDate: date,
            persons,
            totalCost,
            tripImage: trip.image
        };

        const response = await axios.post(
            'http://localhost:3000/api/bookings',
            bookingData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json' // Ensure JSON data format
                }
            }
        );

        console.log('Booking Response:', response.data);

        alert(`Booking confirmed!\nTrip: ${trip.title}\nDate: ${date}\nPersons: ${persons}\nTotal Cost: $${totalCost}`);

        navigate('/my-bookings');
    } catch (error) {
        console.error('Booking error:', error);
        setError(error.response?.data?.message || 'Failed to create booking. Please Login.');
    } finally {
        setIsLoading(false);
    }
};

  // Rest of the component remains largely the same
  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ... existing UI code ... */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Image and Overview */}
            <div className="relative h-[600px] lg:h-auto">
              {/* ... existing code ... */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={trip.image}
                alt={trip.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                {/* ... existing code ... */}
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="p-8">
              <div className="space-y-8">
                {/* Trip Highlights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Trip Highlights</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {trip.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleBooking} className="space-y-6">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg pr-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                      <div className="flex items-center space-x-4 border border-gray-200 rounded-lg p-3">
                        <button
                          type="button"
                          onClick={() => handlePersonChange(-1)}
                          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={18} className="text-gray-600" />
                        </button>
                        <div className="flex items-center space-x-2">
                          <Users size={18} className="text-gray-400" />
                          <span className="text-lg font-medium min-w-[2rem] text-center">{persons}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handlePersonChange(1)}
                          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Base Price × {persons}</span>
                      <span className="font-medium">${trip.basePrice * persons}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-600">${totalCost}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">All taxes and fees included</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
                  >
                    {isLoading ? 'Processing...' : 'Book Your Adventure'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}