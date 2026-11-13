import React from 'react'
import { ChevronRight } from "lucide-react";

const Skills = [
    {
        title: "Development",
        learning:[{skill:"Python", learners: "50,783,250 learners", href: "#"},
                    {skill:"Data Science", learners: "8,488,816 learners", href: "#"},
                    {skill:"Web Development", learners: "14,616,842 learners", href: "#"},
                    ], 
    },
    {
        title: "Design",
        learning:[{skill:"Blender", learners: "3,181,354 learners", href: "#"},
                {skill:"AutoCAD", learners: "2,194,530 learners", href: "#"},
                {skill:"Graphic Design", learners: "4,740,233 learners", href: "#"},
        ], 
    },
    {
        title: "Business",
        learning:[{skill:"PMI Project Management Professional (PMP)", learners: "3,065,844 learners", href: "#"},
                {skill:"PMI Certified Associate in Project Management (CAPM)", learners: "534,756 learners", href: "#"},
                {skill:"Microsoft Power BI", learners: "5,324,273 learners", href: "#"},
        ], 
    },
];

const PopularSkills = () => {
  return (
    <>
    <section className='bg-gray-100 my-10 py-7'>
        <div className='w-[86%] mx-auto'>
        <h2 className='text-4xl py-4 border-b border-b-gray-300 font-semibold'>Popular Skills</h2>
        <div className='my-8 flex justify-between gap-5'>
            <div className='basis-[25%]'>
                <h2 className='mb-4 text-4xl font-semibold'>ChatGPT is a top skill</h2>
                <a href="#" className='flex items-center gap-1 text-lg font-bold text-violet-700'>See ChatGPT courses <ChevronRight size={16}/></a>
                <p className='text-gray-400 text-sm py-1'>5,628,327 learners</p>
                <button className='my-7 px-16 py-2 border border-violet-500 rounded-lg text-violet-700 font-semibold cursor-pointer hover:bg-gray-200'>Show all trending skills ↝</button>
            </div>
            {Skills.map((skill,index) => (
            <div key={index}>
                <h3 className='text-2xl font-bold'>{skill.title}</h3>
                {skill.learning.map((learn,i) => (
                <div key={i} className='my-3'>
                    <a href={learn.href} className='flex items-center gap-1 text-lg font-bold text-violet-700'>{learn.skill} <ChevronRight size={16}/></a>
                    <p className='text-gray-400 py-2 text-sm'>{learn.learners}</p>
                </div>
                ))}
            </div>
            ))}
        </div>
        </div>
    </section>
    </>
  )
}

export default PopularSkills