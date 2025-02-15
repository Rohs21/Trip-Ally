import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Login from './pages/login'

// import Home from './assets/Home'
// import AboutUs from './components/AboutUs'
// import Navbar from './components/Navbar'
// import BookingPage from './components/BookingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    {/* Navbar placed here to persist across all routes */}
    {/* <Navbar /> */}
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/book/:tripId" element={<BookingPage />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
