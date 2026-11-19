import React from "react";
import { ChevronRight } from "lucide-react";
import photo1 from "../assets/images/b1.svg";
import photo2 from "../assets/images/b2.svg";
import photo3 from "../assets/images/b3.svg";
import photo4 from "../assets/images/b4.svg";
import photo5 from "../assets/images/b5.svg";
import photo6 from "../assets/images/b6.svg";
import photo7 from "../assets/images/b7.svg";
import photo8 from "../assets/images/b8.svg";

const BannerImages = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
];

const Skills = () => {
  return (
    <>
      <section className="w-[86%] mx-auto">
        <h2 className="text-4xl font-semibold">
          Skills to transform your career and life{" "}
        </h2>
        <p className="my-2 text-lg text-gray-500">
          From critical workplace skills to technical topics, Udemy supports
          your professional development.
        </p>
        <div>
          <ul className="font-semibold flex items-center gap-7 text-gray-600 border-b border-b-gray-300">
            <li className="hover:text-black hover:border-b-2 hover:border-b-violet-600 py-2 cursor-pointer">
              Artificial Intelligence (AI)
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-b-violet-600 py-2 cursor-pointer">
              Python
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-b-violet-600 py-2 cursor-pointer">
              Microsoft Excel
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-b-violet-600 py-2 cursor-pointer">
              AI Agents & Agentic AI
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-b-violet-600 py-2 cursor-pointer">
              Digital Marketing
            </li>
            <li className="hover:text-black hover:border-b-2 hover:border-b-violet-600 py-2 cursor-pointer">
              Amazon AWS
            </li>
          </ul>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-gray-100 px-20 py-16 my-10">
        <div className="w-[86%] mx-auto">
          <ul className="text-lg text-gray-600 flex justify-center items-center gap-2 pb-5">
            <li>
              Udemy is trusted by over 17,000 companies and millions of learners
              around the world
            </li>
            <li className="text-violet-700 font-bold">
              <a href="#" className="flex items-center gap-1">
                Try Udemy Business{" "}
                <span>
                  <ChevronRight size={16} />
                </span>
              </a>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-5 mt-2">
            {BannerImages.map((image, index) => (
              <img key={index} src={image} alt="Images" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
