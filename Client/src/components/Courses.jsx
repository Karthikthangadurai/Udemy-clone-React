import React from 'react';
import { ChevronRight } from "lucide-react"; 
import image1 from "../assets/images/agentic track.webp";
import image2 from "../assets/images/core track.webp";
import image3 from "../assets/images/claude.webp"
import image4 from "../assets/images/python.webp"
import image5 from "../assets/images/Ai.webp"
import image6 from "../assets/images/excel.webp"
import image7 from "../assets/images/aws.webp"
import image8 from "../assets/images/full stack.webp"


const Course = [
    {
        image: image1,
        title:"AI Engineer Agentic Track: The Complete Agent & MCP Course",
        tutor:"Ed Donner,Ligency",
        star:"4.7",
        ratings:"50,851 ratings",
        fees:"459.00"
    },
    {
        image: image2,
        title:"AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
        tutor:"Ligency, Ed Donner",
        star:"4.7",
        ratings:"44,898 ratings",
        fees:"3,289.00",
    },
    {
        image: image3,
        title:"The Complete Claude Code & Claude Cowork Materclass [2026]",
        tutor:"Prof. Ryan Ahmed, PhD, MBA, Stemplicity Inc.",
        star:"4.5",
        ratings:"11,999 ratings",
        fees:"799.00",
    },
    {
        image: image4,
        title:"100 Days of Code TM: The Complete Python Pro Bootcamp",
        tutor:"Dr. Angela Yu, Developer and Lead Instructor",
        star:"4.7",
        ratings:"439,734 ratings",
        fees:"3,199.00",
    },
    // {
    //     image: image5,
    //     title:"The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    //     tutor:"365 Careers",
    //     star:"4.5",
    //     ratings:"26,813 ratings",
    //     fees:"3,089.00",
    // },
    //    {
    //     image: image6,
    //     title:"Microsoft Excel - Excel from Beginner to Advanced 2026",
    //     tutor:"Kyle Pew 2,000,000+ Students, Office Newb",
    //     star:"4.7",
    //     ratings:"547,667 ratings",
    //     fees:"3,289.00",
    // },
    //    {
    //     image: image7,
    //     title:"Ultimate AWS Certified Solutions Architect Associate 2026",
    //     tutor:"Stephane Maarek | AWS Certified Cloud...",
    //     star:"4.7",
    //     ratings:"300,784 ratings",
    //     fees:"3,469.00",
    // },
    //    {
    //     image: image8,
    //     title:"The Complete Full-Stack Web Development Bootcamp",
    //     tutor:"Dr. Angela Yu, Developer and Lead Instructor",
    //     star:"4.7",
    //     ratings:"475,989 ratings",
    //     fees:"3,199.00",
    // },
]; 

const Courses = () => {
  return (
    <section className="relative w-[88%] mx-auto my-20">
        <h1 className='text-3xl font-semibold'>Trending Courses </h1>

        <div className='my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {Course.map((course,index) =>(
            <a href="#" key={index}>
            <div className='border border-gray-200 shadow rounded-2xl p-5 hover:bg-gray-100'>
                <img src={course.image} alt="image" className='w-72 rounded-lg'/>
                <h2 className='text-lg font-semibold mt-2'>{course.title}</h2>
                <p className='text-xs text-black/50 mb-2'>{course.tutor}</p>
                <div className='flex items-center gap-2 my-4'>
                    <p className='bg-[#C2E9EB] text-sm font-semibold py-1 px-2 rounded'>Bestseller</p>
                    <p className='border border-gray-300 text-black/60 text-xs font-semibold py-1 px-2 rounded'><span className='text-sm font-bold text-orange-700'> ★</span> <span>{course.star}</span></p>
                    <p className='border border-gray-300 text-black/60 text-xs font-semibold py-1.5 px-2 rounded'>{course.ratings}</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold'>&#8377;{course.fees}</p>
                        <del className='text-gray-500 font-light'>&#8377;799.00</del>
                    </div>
                    <div>
                        <button className='text-purple-800 text-sm font-bold border py-1.5 px-3 border-purple-700 rounded-lg cursor-pointer hover:bg-gray-200'>Add to cart</button>
                    </div>
                </div>
            </div>
            </a> 
            ))}
        </div>

        <div className='absolute top-4/7 -right-7'>
            <button className="p-3 rounded-full shadow-lg cursor-pointer border border-gray-300 bg-white hover:bg-gray-100">
              <ChevronRight size={26} />
            </button>
        </div>
            
    </section>
  )
}

export default Courses