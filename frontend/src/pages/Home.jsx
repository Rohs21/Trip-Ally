import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Trips from '../components/Trips'

function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <div id="trip">
        <Trips/>
      </div>
      <Trips/>
    </div>
  )
}

export default Home
