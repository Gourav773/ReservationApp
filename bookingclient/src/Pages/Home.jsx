// import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import './Home.css'
import PropertyList from '../components/PropertyList'
import FeaturedProperties from '../components/FeaturedProperties'
import EmailList from '../components/EmailList'
import HotelSliderPage from '../components/HotelSLider'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
      
        <PropertyList />
         
          <HotelSliderPage/>
        
        <FeaturedProperties />
        <EmailList />
        <Footer/>
      </div>
    </div>
  )
}

export default Home