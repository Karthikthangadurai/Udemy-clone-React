import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import photo1 from "../assets/images/b1.svg";
import photo2 from "../assets/images/b2.svg";
import photo3 from "../assets/images/b3.svg";
import photo4 from "../assets/images/b4.svg";
import photo5 from "../assets/images/b5.svg";
import photo6 from "../assets/images/b6.svg";
import photo7 from "../assets/images/b7.svg";
import photo8 from "../assets/images/b8.svg";
import ai1 from "../assets/images/ain1.webp";
import ai2 from "../assets/images/ain2.webp";
import ai3 from "../assets/images/ain3.webp";
import ai4 from "../assets/images/ain4.webp";

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

const Course = [
  {
    image: ai1,
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    tutor: "365 Careers",
    sale: "Bestseller",
    ratings: ["⭐ 4.6", "27,179 ratings"],
    fees: "3,089.00",
  },
  {
    image: ai2,
    title: "The Ultimate AI/LLM/ML Penetration Testing Training Course",
    tutor: "Martin Voelk",
    sale: "Bestseller",
    ratings: ["⭐ 4.6", "2,226 ratings"],
    fees: "2,849.00",
  },
  {
    image: ai3,
    title: "AI Key Concepts & Terms - The Missing Guide",
    tutor: "Academind by Maximilian Schwarzmuller,...",
    sale: "Bestseller",
    ratings: ["⭐ 4.4", "391 ratings"],
    fees: "1,719.00",
  },
  {
    image: ai4,
    title: "2027 AI for Beginners: ChatGPT, Claude, LLMs and AI Agents",
    tutor: "Laxmi Kant | KGP Talkie",
    sale: "Highest Rated",
    ratings: ["⭐ 5.0", "21 ratings"],
    fees: "1,919.00",
  },
];

const Skills = () => {
  return (
    <>
      <section className="w-[86%] mx-auto my-10">
        <h2 className="text-2xl xl:text-4xl font-semibold">
          Skills to transform your career and life{" "}
        </h2>
        <p className="my-2 xl:text-lg text-gray-500">
          From critical workplace skills to technical topics, Udemy supports
          your professional development.
        </p>
        <div>
          <ul className="font-semibold md:flex items-center gap-7 text-gray-600 border-b border-b-gray-300">
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

          <div className="my-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {Course.map((course, index) => (
              <a href="#" key={index}>
                <div className="flex flex-col border border-gray-200 shadow rounded-2xl p-5 hover:bg-gray-100">
                  <img
                    src={course.image}
                    alt="image"
                    className="w-72 rounded-lg"
                  />
                  <h2 className="text-lg font-semibold mt-2">{course.title}</h2>
                  <p className="text-xs text-black/50 mb-5">{course.tutor}</p>
                  <ul className="flex items-center gap-1 my-4">
                    <li className="border border-gray-300 rounded px-2 py-0.5 text-[13px] font-bold bg-[#C2E9EB] text-[#0D5261]">
                      {course.sale}
                    </li>
                    {course.ratings.map((score, i) => (
                      <li
                        key={i}
                        className="border border-gray-300 rounded px-1 py-0.5 text-[13px] text-gray-600"
                      >
                        {score}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center gap-2">
                    <p className="font-semibold">&#8377;{course.fees}</p>
                    <button className="text-purple-800 text-sm font-bold border py-1.5 px-3 border-purple-700 rounded-lg cursor-pointer hover:bg-gray-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="py-5">
            <a
              href="#"
              className="px-1 py-2 w-fit flex items-center gap-1 text-violet-700 rounded-lg hover:bg-gray-100"
            >
              <span className="font-semibold">
                Show all Artificial Intelligence (AI) courses
              </span>{" "}
              <span>
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-gray-100 p-4 xl:px-20 xl:py-16 my-10">
        <div className="w-[86%] mx-auto">
          <ul className="xl:text-lg text-gray-600 text-center lg:flex justify-center items-center gap-2 pb-5">
            <li className="font-semibold">
              Udemy is trusted by over 17,000 companies and millions of learners
              around the world
            </li>
            <li className="text-violet-700 font-bold">
              <a href="#" className="flex justify-center items-center gap-1">
                Try Udemy Business{" "}
                <span>
                  <ChevronRight size={16} />
                </span>
              </a>
            </li>
          </ul>
          <div className="grid grid-cols-4 lg:grid-cols-8 items-center gap-5 mt-2">
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
