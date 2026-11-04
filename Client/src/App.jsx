import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slidebar from "./components/Slidebar";
import Courses from "./components/Courses";
import SubscriptionCard from "./components/SubscriptionCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Slidebar />
      <Courses/>
      <SubscriptionCard/>
    </>
  );
}

export default App;
