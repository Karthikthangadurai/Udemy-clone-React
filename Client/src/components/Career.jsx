import React from "react";
import { ArrowRight } from "lucide-react";
import image1 from "../assets/images/career-card-cloud-engineer.webp";
import image2 from "../assets/images/career-card-data-scientist.webp";
import image3 from "../assets/images/career-card-digitalmarketer.webp";

const Links = [
  {
    image: image1,
    title: "Cloud Engineer",
    ratings: ["⭐ 4.7", "338K ratings", "28.8 total hours"],
  },
  {
    image: image2,
    title: "Data Scientist",
    ratings: ["⭐ 4.6", "229K ratings", "47.5 total hours"],
  },
  {
    image: image3,
    title: "Digital Marketer",
    ratings: ["⭐ 4.6", "4.2K ratings", "28.4 total hours"],
  },
];

const Career = () => {
  return (
    <section className="w-[88%] mx-auto">
      <h2 className="text-3xl font-semibold">
        Ready to reimagine your career?
      </h2>
      <p className="my-2 text-lg text-gray-600 font-light">
        Get the skills and real-world experience employers want with Career
        Accelerators.
      </p>
      <div className="my-7 flex justify-between items-center gap-5">
        {Links.map((link, index) => (
          <a key={index} href="#">
            <div className="p-5 border border-gray-200 rounded-2xl hover:bg-gray-100">
              <img src={link.image} alt={link.title} className="rounded-lg" />
              <h3 className="text-lg font-semibold my-3">{link.title}</h3>
              <ul className="flex items-center gap-1">
                {link.ratings.map((score, i) => (
                  <li
                    key={i}
                    className="px-2 py-0.5 text-gray-500 text-xs border border-gray-300 rounded"
                  >
                    {score}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
      <a
        href="#"
        className="text-violet-700 font-semibold flex items-center gap-2 p-2 hover:bg-gray-100 w-fit rounded-lg "
      >
        <span>All Career Accelerators</span>{" "}
        <span>
          <ArrowRight size={15} />
        </span>
      </a>
    </section>
  );
};

export default Career;
