import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/images/generative-ai.webp";
import image2 from "../assets/images/certifications.webp";
import image3 from "../assets/images/data-science.webp";

const Links = [
  {
    image: image1,
    buttonText: "Generative AI",
  },
  {
    image: image2,
    buttonText: "IT Certifications",
  },
  {
    image: image3,
    buttonText: "Data Science",
  },
];

const Slidebar = () => {
  return (
    <section className="w-[85%] mx-auto my-10">
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="flex flex-col justify-center gap-1 md:w-[33%]">
          <h2 className="text-4xl font-semibold">
            Learn <em>essential</em> career and <b>life</b> skills
          </h2>
          <p className="text-black/85 font-light mt-2">
            Udemy helps you build in-demand skills fast and advance your career
            in a changing job market
          </p>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {Links.map((link,index) => (
          <div key={index} className="relative cursor-pointer">
            <img src={link.image} alt="image" className=" rounded-lg h-96" />
            <div className="absolute bottom-4 left-5 flex items-center gap-20 p-4 cursor-pointer bg-white shadow rounded-2xl hover:shadow-xl">
              <button className="bg-white mb-8 text-lg">{link.buttonText}</button>
              <button className=" bg-white mt-8 font-light">
                <ArrowRight size={18}/>
              </button>
            </div>
          </div>
          ))}
          </div>

          <div className="flex gap-7 justify-center items-center">
            <button className="p-2 rounded-full shadow-lg cursor-pointer border border-gray-100">
              <ChevronLeft size={20} />
            </button>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <p className="p-2 bg-gray-300 rounded-2xl inline-block"></p>
            <button className="p-2 rounded-full shadow-lg cursor-pointer border border-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slidebar;
