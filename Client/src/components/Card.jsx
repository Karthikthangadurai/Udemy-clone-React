import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { ArrowRight,ChevronRight } from "lucide-react";
import Card1 from "../assets/images/card1.webp";
import Card2 from "../assets/images/card2.webp";
import Card3 from "../assets/images/card3.webp";
import Card4 from "../assets/images/card4.webp";
import Certificate1  from "../assets/images/certi1.webp";
import Certificate2  from "../assets/images/certi2.webp";
import Certificate3  from "../assets/images/certi3.webp";

const CardLists = [
    {
        desc: "The course did a great job explaining AI - from development through application. I appreciated the varying perspectives presented, which were helpful in understanding how to use AI responsibly as a tool in my profession, rather than a novelty.",
        author:{image: Card1, name:"Cris M.", work:"Google AI Essentials graduate"},
        course:"View Ai courses",
    },
    {
        desc: "Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.",
        author:{image: Card2, name:"Alvin Lim", work:"Technical Co-Founder, CTO at Dimensional"},
        course:"View this iOS & Swift course ",
    },
    {
        desc: "Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.",
        author:{image: Card3, name:"William A. Wachlin", work:"Partner Account Manager at Amazon Web Services"},
        course:"View this AWS course",
    },
    {
        desc: "I loved the course about AI Studio. I was not aware of this Google tool, but immediately after taking the course, I put it to use. Within 24 hours, I had a functional, highly useful app for my law firm.",
        author:{image: Card4, name:"Ben C.", work:"Google AI Professional Certificate graduate"},
        course:"View Google AI Certificates",
    },
];

const Certificate = [
    {
        image: Certificate1,
        title: "CompTIA",
        desc: "Cloud, Networking, Cybersecurity"
    },
    {
        image: Certificate2,
        title: "AWS",
        desc: "Cloud, AI, Coding, Networking"
    },
    {
        image: Certificate3,
        title: "PMI",
        desc: "Project & Program Management"
    },
];

const Card = () => {
  return (
    <>
    <section className='w-[86%] mx-auto my-10'>
        <h2 className='text-2xl font-semibold py-7'>Join others transforming their lives through learning</h2>
        <div className='mb-5 grid grid-cols-4 gap-4'>
            {CardLists.map((list,index) => (
            <div key={index} className='p-7 border border-gray-300 rounded-lg flex flex-col justify-between gap-1 '>
                <div>
               <span> <RiDoubleQuotesL  size={26}/></span>
               <p className='my-2 font-light text-sm'>{list.desc}</p>
               </div>
               <div>
                    <div className='my-5 flex items-center gap-2'>
                        <div><img src={list.author.image} alt={list.author.name} width={52} className='rounded-full'/></div>
                        <div className='text-xs text-gray-400'>
                        <p className='py-1'>{list.author.name}</p>
                        <p>{list.author.work}</p>
                        </div>
                    </div>
                    <a href="#" className='flex items-center gap-1 font-light text-violet-700'><span>{list.course}</span> <span><ChevronRight size={14} /></span></a>
                </div>
            </div>
            ))}
        </div>
        <a href="#" className='px-1 py-2 w-fit flex items-center gap-1 text-violet-700 rounded-lg hover:bg-gray-100'><span className='font-semibold'>View all stories</span> <span><ArrowRight size={14}/></span></a>
    
     {/* Certification Card */}
        <div className='bg-[#202230] my-10 p-28 rounded-2xl text-white grid grid-cols-[1fr_2fr] items-center gap-5 '>
            <div> 
                <h2 className='text-3xl font-semibold'>Get certified and get ahead in your career</h2>
                <p className='py-3 mb-5 font-semibold'>Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.</p>
                <a href="#" className='font-bold flex items-center gap-2 w-fit px-1 py-3 rounded-lg hover:bg-gray-700/25'>Explore certifications and vouchers <span><ArrowRight size={18} /></span></a>
            </div>
            <div className='flex items-center gap-4'>
            {Certificate.map((data,index) => (
            <div key={index} className='p-5 bg-gray-700 rounded-2xl cursor-pointer hover:bg-gray-600'>
                <img src={data.image} alt={data.title} className='rounded-xl'/>
                <h3 className='py-2 text-lg font-semibold'>{data.title}</h3>
                <p className='text-xs text-gray-400'>{data.desc}</p>
            </div>
            ))}
            </div>
        </div>
    
    </section>
    </>
  )
}

export default Card