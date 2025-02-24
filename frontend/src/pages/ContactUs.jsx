// ContactUs.jsx
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Professional header with subtle design */}
      <div className="bg-white border-b border-gray-200 shadow-sm py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            <span className="text-blue-600">Contact</span> <span className="text-orange-500">TripAlly</span>
          </h1>
          <div className="flex items-center mt-2">
            <div className="h-1 w-12 bg-orange-500 mr-2"></div>
            <p className="text-gray-600 text-sm font-medium">We're here to assist with your travel needs</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact information */}
          <div className="lg:w-1/3 bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-blue-600 text-xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <MapPin className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Our Location</h3>
                  <p className="text-gray-600 mt-1">123 Travel Street, Adventure City, AC 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Phone className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone Number</h3>
                  <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Mail className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email Address</h3>
                  <p className="text-gray-600 mt-1">contact@tripally.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <Clock className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Working Hours</h3>
                  <p className="text-gray-600 mt-1">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Weekends: 10AM - 6PM</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-10">
              <h3 className="text-blue-600 text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/" className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-600 transition">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com/" className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-500 transition">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com/" className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full text-white hover:from-orange-600 hover:to-pink-600 transition">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com/company/" className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-800 transition">
                  <Linkedin size={20} />
                </a>
                <a href="https://youtube.com/tripally" className="bg-red-600 p-3 rounded-full text-white hover:bg-red-700 transition">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact form and Map */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-blue-600 text-xl font-semibold mb-6">Send Us a Message</h2>
              
              {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you for your message! Our team will get back to you shortly.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center"
                >
                  Send Message
                  <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
            
            {/* Wider Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-blue-600 text-xl font-semibold">Our Ohio Headquarters</h2>
                <p className="text-gray-600 text-sm mt-1">Visit us at our central location in Columbus, OH</p>
              </div>
              <div className="h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.64169563106!2d-83.16796822162344!3d39.96572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH!5e0!3m2!1sen!2sus!4v1656268063921!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TripAlly Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default ContactUs;