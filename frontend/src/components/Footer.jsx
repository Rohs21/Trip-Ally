import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  Github,
  Clock,
  Headphones,
  Languages
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">TripAlly</h3>
            <p className="text-sm leading-relaxed">
              Creating extraordinary journeys and unforgettable memories for travelers worldwide.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Discover Trips', 'About Us', 'Contact Us', 'My Bookings'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-sm">123 Travel Street, Adventure City, AC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-sm">contact@tripally.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Available Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-sm">
                  <p className="mb-1">Monday - Friday</p>
                  <p className="text-blue-400">9:00 AM - 8:00 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-sm">
                  <p className="mb-1">Saturday - Sunday</p>
                  <p className="text-blue-400">10:00 AM - 6:00 PM EST</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 pt-2">
                <Headphones className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-sm">
                  <p className="mb-1">24/7 Emergency Support</p>
                  <p className="text-blue-400">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Languages className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-sm">
                  <p>Multi-language Support</p>
                  <p className="text-blue-400">EN | ES | FR | DE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm">
              © {currentYear} TripAlly. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center justify-center md:justify-end space-x-4 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Creator Attribution */}
          <div className="text-center mt-6 text-sm text-gray-500">
            Crafted with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> by{' '}
            <a 
              href="https://github.com/yourusername" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
            >
              Rohan Singh
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;