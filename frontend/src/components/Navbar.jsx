import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, User } from "lucide-react";
import TripAlly from "../assets/images/download.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const isLoggedIn = localStorage.getItem('token') !== null;
  const userName = localStorage.getItem('userName') || 'User'; // Fallback to 'User' if name not found

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      window.location.href = '/login';
    } else {
      window.location.href = '/signup';
    }
  };

  const navLinks = [
    { title: "Home", href: "/home" },
    { title: "Discover Trips", href: "/home#trips" },
    { title: "About Us", href: "/aboutus" },
    { title: "Contact Us", href: "/contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50">
              <img 
                src={TripAlly} 
                alt="TripAlly Logo" 
                className="h-12 w-auto object-contain rounded-lg"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                TripAlly
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 focus:outline-none bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium">{userName}</span>
                  <ChevronDown size={16} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                    {/* <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a> */}
                    <a href="/my-bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Bookings</a>
                    <hr className="my-2" />
                    <button
                      onClick={handleAuthAction}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <a href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
                  Sign In
                </a>
                <button
                  onClick={handleAuthAction}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 transform hover:scale-105"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {isLoggedIn && (
            <div className="flex items-center space-x-2 px-3 py-2 border-b border-gray-200 mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {userName.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-medium text-gray-700">{userName}</span>
            </div>
          )}
          
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              {link.title}
            </a>
          ))}
          
          {isLoggedIn ? (
            <>
              
              <a href="/my-bookings" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                My Bookings
              </a>
              <button
                onClick={handleAuthAction}
                className="mt-2 w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-50 rounded-md"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="mt-4 space-y-2">
              <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Sign In
              </a>
              <button
                onClick={handleAuthAction}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-base font-medium"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;