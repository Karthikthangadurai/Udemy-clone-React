import React, {useState,useEffect} from "react";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import herosm1 from "../assets/hero-sm1.png";
import herosm2 from "../assets/hero-sm2.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IoIosSearch } from "react-icons/io";

const Hero = () => {


  return (
    <section className="xl:w-[88%] mx-auto">
      <div className="relative">
        
        {/* Small Screen Image */}
        <div className="inline-block md:hidden">
        
          <img src={herosm1} alt="small images" className="relative w-full" />

          {/* Left Button */}
        <button className="absolute top-44 left-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <ChevronLeft />
        </button>

        {/* Right button */}
        <button className="absolute top-1 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <ChevronRight />
        </button>
        </div>

        {/* Big Screen Image */}
        <div className=" relative hidden md:inline-block">

          <img src={hero1} alt="big Images" className="w-full" />

              {/* Left Button */}
        <button className="absolute top-48 left-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <ChevronLeft />
        </button>

        {/* Right button */}
        <button className="absolute top-48 right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <ChevronRight />
        </button>
      
        </div>

    

        <div className="md:absolute md:top-16 md:left-18 md:w-[32%] bg-white rounded p-7 z-1 text-center md:text-start">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Meet your career sidekick.
          </h2>
          <p className="py-4 font-light">
            Focus on your career with Personal Plan. Now with more ways to
            assess skills, practice, and prepare for what's next.
          </p>
          <button className="w-full md:w-fit p-3 bg-violet-600 text-white font-semibold rounded-lg cursor-pointer hover:bg-purple-700">
            Get Personal Plan
          </button>

          <div className="flex justify-between items-center gap-2 p-3 my-8 md:hidden border border-gray-300 w-full rounded-lg ">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="outline-none w-[88%] sm:w-[93%]"
            />
            <span>
              <IoIosSearch size={22} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
