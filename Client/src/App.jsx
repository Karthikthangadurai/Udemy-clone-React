import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slidebar from "./components/Slidebar";
import Courses from "./components/Courses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Slidebar />
      <Courses/>
    </>
  );
}

export default App;
