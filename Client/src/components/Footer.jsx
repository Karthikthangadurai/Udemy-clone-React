import React from "react";
import footer1 from "../assets/images/footer1.svg";
import footer2 from "../assets/images/footer2.svg";
import footer3 from "../assets/images/footer3.svg";
import footer4 from "../assets/images/footer4.svg";
import logo from "../assets/images/logo-udemy-inverted.svg";
import { MdOutlineLanguage } from "react-icons/md";

const Images = [footer1, footer2, footer3, footer4];

const Skills = [
  {
    title: "In-demand Careers",
    links: [
      { name: "Data Scientist", href: "#" },
      { name: "Full Stack Web Development", href: "#" },
      { name: "Cloud Engineer", href: "#" },
      { name: "Project Manager", href: "#" },
      { name: "Game Developer", href: "#" },
      { name: "All Career Accelerators", href: "#" },
    ],
  },
  {
    title: "Web Development",
    links: [
      { name: "Web Development", href: "#" },
      { name: "JavaScript", href: "#" },
      { name: "React JS", href: "#" },
      { name: "Angular", href: "#" },
      { name: "Java", href: "#" },
    ],
  },
  {
    title: "IT Certifications",
    links: [
      { name: "Amazon AWS", href: "#" },
      { name: "AWS Certified Cloud Practitioner", href: "#" },
      { name: "AZ-900: Microsoft Azure Fundamentals ", href: "#" },
      { name: "AWS Certified Solutions Architect - Associate", href: "#" },
      { name: "Kubernetes", href: "#" },
    ],
  },
  {
    title: "Leadership",
    links: [
      { name: "Leadership", href: "#" },
      { name: "Management Skills", href: "#" },
      { name: "Project Management", href: "#" },
      { name: "Personal Productivity", href: "#" },
      { name: "Emotional Intelligence", href: "#" },
    ],
  },
  {
    title: "Certifications by Skill",
    links: [
      { name: "Cybersecurity Certification", href: "#" },
      { name: "Project Management Certification", href: "#" },
      { name: "Cloud Certification", href: "#" },
      { name: "Data Analytics Certification", href: "#" },
      { name: "HR Management Certification", href: "#" },
      { name: "See all Certifications", href: "#" },
    ],
  },
  {
    title: "Data Science",
    links: [
      { name: "Data Science", href: "#" },
      { name: "Python", href: "#" },
      { name: "Machine Learning", href: "#" },
      { name: "ChatGPT", href: "#" },
      { name: "Deep Learning", href: "#" },
    ],
  },
  {
    title: "Communication",
    links: [
      { name: "Communication Skills", href: "#" },
      { name: "Presentation Skills", href: "#" },
      { name: "Public Speaking", href: "#" },
      { name: "Writing", href: "#" },
      { name: "PowerPoint", href: "#" },
    ],
  },
  {
    title: "Business Analytics & Intelligence",
    links: [
      { name: "Microsoft Excel", href: "#" },
      { name: "SQL", href: "#" },
      { name: "Microsoft Power BI", href: "#" },
      { name: "Data Analysis", href: "#" },
      { name: "Business Analysis", href: "#" },
    ],
  },
];

const footerSection = [
  {
    title: "About",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Investors", href: "#" },
      { name: "Find more on Coursera", href: "#" },
    ],
  },
  {
    title: "Discover Udemy",
    links: [
      { name: "Get the app", href: "#" },
      { name: "Teach on Udemy", href: "#" },
      { name: "Plans and Pricing", href: "#" },
      { name: "Affiliate", href: "#" },
      { name: "Help and Support", href: "#" },
    ],
  },
  {
    title: "Udemy for Business",
    links: [{ name: "Udemy Business", href: "#" }],
  },
  {
    title: "Legel & Accessibility",
    links: [
      { name: "Accessibility statement", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Sitemap", href: "#" },
      { name: "Terms", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <section className="mt-10">
        <div className="bg-[#2A2B3F] text-white p-6 md:px-16 md:py-6 space-y-6 md:space-y-0 md:flex justify-between items-center gap-5 border-b border-b-white">
          <h2 className="text-lg font-semibold">
            Top companies choose{" "}
            <a
              href="#"
              target="blank"
              className="text-indigo-300 hover:underline"
            >
              Udemy Business
            </a>{" "}
            to build in-demand career skills.
          </h2>
          <ul className="flex items-center flex-wrap md:flex-nowrap gap-5">
            {Images.map((image, index) => (
              <li key={index}>
                <img src={image} alt="image" />
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#2A2B3F] text-white p-6 md:px-16 md:py-6">
          <h2 className="text-lg font-semibold">
            Explore top skills and certifications
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {Skills.map((skill, index) => (
              <div key={index} className="my-6">
                <h3 className="font-semibold py-4">{skill.title}</h3>
                <ul>
                  {skill.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="pb-0.5 font-light hover:underline cursor-pointer"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#202230] text-white p-6 md:px-16 md:py-8 grid grid-cols-4 gap-2 border-b border-b-white">
          {footerSection.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold py-4">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="pb-0.5 font-light hover:underline cursor-pointer"
                  >
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-[#202230] text-white p-6 md:px-16 md:py-6">
          <ul className="flex justify-between items-center gap-5 font-light">
            <li className="flex items-center gap-3">
              <a href="#">
                <img src={logo} alt="Udemylogo" className="w-20 lg:w-24" />
              </a>
              <span>&copy; 2026 Udemy, Inc.</span>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie settings
              </a>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              <span>
                <MdOutlineLanguage size={20} className="text-gray-300" />
              </span>
              <span>English</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
