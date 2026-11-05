import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Slidebar from '../components/Slidebar'
import Courses from '../components/Courses'
import SubscriptionCard from '../components/SubscriptionCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slidebar/>
    <Courses/>
    <SubscriptionCard/>
    <Footer/>
    </>
  )
}

export default Home