import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import BookingPage from './pages/BookingPage'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'
import MyBookings from './pages/MyBookings'

// Layout component that includes Navbar
const LayoutWithNavbar = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes without Navbar */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        

        {/* Routes with Navbar */}
        <Route path="/home" element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
        <Route path="/" element={<LayoutWithNavbar><Home /></LayoutWithNavbar>} />
        {/* When you uncomment these routes, they'll automatically have the Navbar */}
        <Route path="/aboutus" element={<LayoutWithNavbar><AboutUs /></LayoutWithNavbar>} />
        <Route path="/book/:tripId" element={<LayoutWithNavbar><BookingPage /></LayoutWithNavbar>} /> 
        <Route path="/my-bookings" element={<LayoutWithNavbar><MyBookings /></LayoutWithNavbar>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App