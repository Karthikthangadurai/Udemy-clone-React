import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import logo from "../assets/images/generative-ai.webp";
import image from "../assets/images/certifications.webp";
import image1 from "../assets/images/data-science.webp";

const Slidebar = () => {
  return (
    <section className="w-[88%] mx-auto my-10">
      <div className="flex gap-5 ">
        <div className="flex flex-col justify-center p-2 w-225">
          <h2 className="text-3xl font-semibold">
            Learn <em>essential</em> career and <b>life</b> skills
          </h2>
          <p className="text-black/85 font-light mt-2">
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market
          </p>
        </div>
        <div className="space-y-6">
          <div className="relative flex items-center gap-5 w-[33%] cursor-pointer">
            <img src={logo} alt="image" className=" rounded-lg " />
            <img src={image} alt="image" className="rounded-lg" />
            <img src={image1} alt="image" className="rounded-lg" />
            <div className="absolute bottom-4 left-6 flex gap-28 items-center p-4 cursor-pointer bg-white shadow rounded-2xl hover:shadow-xl">
              <button className="bg-white mb-8 text-xl">Generative AI</button>
              <button className=" bg-white mt-8 font-light">
                <ArrowRight size={18}/>
              </button>
            </div>
          </div>

          <div className="flex gap-7 justify-center items-center">
            <button className="p-2 rounded-full shadow-lg cursor-pointer">
              <ChevronLeft size={20} />
            </button>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <button className="p-2 rounded-full shadow-lg cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slidebar;
