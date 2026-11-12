import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Slidebar from '../components/Slidebar'
import Courses from '../components/Courses'
import SubscriptionCard from '../components/SubscriptionCard'
import Footer from '../components/Footer'
import Career from '../components/Career'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slidebar/>
    <Courses/>
    <SubscriptionCard/>
    <Career/>
    <Footer/>
    </>
  )
}

export default Home