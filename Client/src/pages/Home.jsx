import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Slidebar from '../components/Slidebar'
import Courses from '../components/Courses'
import SubscriptionCard from '../components/SubscriptionCard'
import Footer from '../components/Footer'
import Career from '../components/Career'
import PopularSkills from '../components/PopularSkills'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Slidebar/>
    <Courses/>
    <SubscriptionCard/>
    <Card/>
    <Career/>
    <PopularSkills/>
    <Footer/>
    </>
  )
}

export default Home