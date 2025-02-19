import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Clock, ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('User not authenticated. Please log in.');

        const response = await axios.get('http://localhost:3000/api/bookings', {
          headers: { Authorization: `Bearer ${token}` }
        });


        setBookings(response.data.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Failed to load your bookings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="mt-2 text-gray-600">View and manage all your travel adventures</p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin text-blue-500" size={36} />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-4">No bookings found</h3>
            <p className="text-gray-500 mb-6">You haven't made any travel bookings yet.</p>
            <Link 
              to="/trips" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Trips
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking._id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-[300px,1fr] gap-0">
                  {/* Trip Image */}
                  <div className="h-48 md:h-full relative">
                    <div className={`absolute top-2 left-2 z-10 px-3 py-1 rounded-full text-xs font-medium 
                      ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                        booking.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'}`}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </div>
                    <img 
                      src={booking.tripImage} 
                      alt={booking.tripName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{booking.tripName}</h2>
                        <div className="flex items-center mt-1 text-gray-500">
                          <MapPin size={16} className="mr-1" />
                          <span>{booking.tripLocation}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">${booking.totalCost}</div>
                        <div className="text-sm text-gray-500">Total amount</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center">
                        <Calendar size={18} className="text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Travel Date</div>
                          <div className="font-medium">{formatDate(booking.travelDate)}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users size={18} className="text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Travelers</div>
                          <div className="font-medium">{booking.persons} {booking.persons === 1 ? 'person' : 'people'}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock size={18} className="text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-gray-500">Booking Date</div>
                          <div className="font-medium">{formatDate(booking.bookingDate)}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                      <Link 
                        to={`/bookings/${booking._id}`}
                        className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        View Details
                      </Link>
                      {booking.status !== 'cancelled' && (
                        <button
                          className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                          onClick={async () => {
                            if (window.confirm('Are you sure you want to cancel this booking?')) {
                              try {
                                const token = localStorage.getItem('token');
                                await axios.patch(
                                  `/api/bookings/${booking._id}`,
                                  { action: 'delete' }, 
                                  { headers: { Authorization: `Bearer ${token}` } }
                                );

                                // Remove booking from UI
                                setBookings(bookings.filter(b => b._id !== booking._id));
                              } catch (err) {
                                alert('Failed to cancel booking. Please try again.');
                              }
                            }
                          }}
                        >
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
