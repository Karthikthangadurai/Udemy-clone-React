import React from "react";
import { MdOutlineShoppingCart, MdLanguage, MdMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/udemy-logo.png";

const Navbar = () => {
  return (
    <header className="p-2 md:p-3 bg-white shadow sticky top-0 z-10">
      <nav className="text-black/70 flex justify-between md:justify-evenly items-center gap-1">
        {/* Mobile view */}
        <div className="md:hidden p-2 rounded-lg text-black/75 cursor-pointer hover:bg-gray-100">
          <a href="#">
            <MdMenu size={20} />
          </a>
        </div>

        <div className="text-black text-linear-to-l from-purple-400 to-violet-600 cursor-pointer">
          <a href="#">
            <img src={logo} alt="Udemy" className="w-20 lg:w-24" />
          </a>
        </div>

        <div className="flex justify-between items-center md:hidden">
          <a
            href="#"
            className="p-2 rounded-lg text-black/75 cursor-pointer hover:bg-gray-100"
          >
            <IoIosSearch size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-lg text-black/75 cursor-pointer hover:bg-gray-100"
          >
            <MdOutlineShoppingCart size={20} />
          </a>
        </div>

        {/* Laptop,Desktop view */}
        <div className="hidden md:inline-block text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700">
          <a href="#">Explore</a>
        </div>
        <div className="hidden lg:inline-block text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700">
          <a href="#">Subscribe</a>
        </div>
        <div className="hidden px-2 py-3 md:flex items-center md:gap-2 lg:gap-3 border border-gray-300 rounded-full md:w-[25%] lg:w-[35%] xl:w-[38%] 2xl:w-[45%] hover:bg-gray-100 focus-within:border-purple-700">
          <span className="">
            <IoIosSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Search for anything..."
            className="outline-none w-[92%]"
          />
        </div>
        <div className=" hidden md:inline-block text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700">
          <a href="#">Udemy Business</a>
        </div>
        <div className="hidden xl:inline-block text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700">
          <a href="#">Teach on Udemy</a>
        </div>
        <div className="hidden md:inline-block p-3 rounded-lg text-black/75 cursor-pointer hover:bg-gray-100 hover:text-violet-600">
          <a href="#">
            <MdOutlineShoppingCart size={20} />
          </a>
        </div>
        <div className="hidden md:inline-block text-sm">
          <button className="px-3 lg:px-4 py-2 font-bold text-violet-600 border border-violet-700 rounded-lg cursor-pointer hover:bg-gray-100 ">
            Log in
          </button>
        </div>
        <div className="hidden md:inline-block text-sm">
          <button className="px-3 py-2 bg-violet-700 text-white border font-bold rounded-lg cursor-pointer hover:bg-purple-700">
            Sign up
          </button>
        </div>
        <div className="hidden md:inline-block text-black/80 p-2 border border-purple-700 rounded-md hover:bg-gray-100 ">
          <a href="#">
            <MdLanguage size={20} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
