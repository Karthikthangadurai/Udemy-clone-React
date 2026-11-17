import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Slidebar from "../components/Slidebar";
import Courses from "../components/Courses";
import SubscriptionCard from "../components/SubscriptionCard";
import Footer from "../components/Footer";
import Career from "../components/Career";
import PopularSkills from "../components/PopularSkills";
import Card from "../components/Card";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Slidebar />
      <Courses />
      <SubscriptionCard />
      <Skills />
      <Card />
      <Career />
      <PopularSkills />
      <Footer />
    </>
  );
};

export default Home;
