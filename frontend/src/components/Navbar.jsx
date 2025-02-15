import { useState } from "react"
import TripAlly from "../assets/images/download.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {" "}
          {/* Increased height */}
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center border border-gray-700 rounded-lg p-2">
          <img className="h-10 w-auto" src={TripAlly} alt="Logo" /> {/* Slightly larger logo */}
          <span className="ml-2 text-2xl font-bold text-gray-800">TripAlly</span> {/* Larger text */}
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <a href="/home" className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#trips" className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-base font-medium">
              Our Trips
            </a>
            <a href="/aboutus" className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-base font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-md text-base font-medium">
              My Bookings
            </a>
          </div>
          {/* Sign Up Button */}
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium">
              Sign Up
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Our Trips
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              My Bookings
            </a>
            <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

