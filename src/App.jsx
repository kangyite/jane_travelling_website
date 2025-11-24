import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ExtendedFeatures from './components/ExtendedFeatures'
import UserJourney from './components/UserJourney'
import Footer from './components/Footer'
import CrowdRadar from './components/CrowdRadar'
import ChinaMap from './components/ChinaMap'
import Community from './components/Community'
import Personalized from './components/Personalized'
import RoutesPage from './components/Routes'
import CityMap from './components/CityMap'
import TravelDiary from './components/TravelDiary'

function App() {
  return (
    <Router basename="/chi_chu">
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <ExtendedFeatures />
              <UserJourney />
              <Footer />
            </>
          } />
          <Route path="/crowd-radar" element={<CrowdRadar />} />
          <Route path="/china-map" element={<ChinaMap />} />
          <Route path="/community" element={<Community />} />
          <Route path="/personalized" element={<Personalized />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/city-map" element={<CityMap />} />
          <Route path="/travel-diary" element={<TravelDiary />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
