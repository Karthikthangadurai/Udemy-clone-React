import React from 'react'
import footer1 from "../assets/images/footer1.svg"
import footer2 from "../assets/images/footer2.svg"
import footer3 from "../assets/images/footer3.svg"
import footer4 from "../assets/images/footer4.svg"

const images = [footer1,footer2,footer3,footer4];

const Skills = [
        {
            name: "",
            href: ""
        },
];


const Footer = () => {
  return (
    <>
    <section className='mt-10'>
        <div className='bg-[#2A2B3F] text-white p-6 md:px-16 md:py-6 space-y-6 md:space-y-0 md:flex justify-between items-center gap-5 border-b border-b-white'>
            <h2 className='text-lg font-semibold'>Top companies choose <a href='#' target='blank' className='text-indigo-300 hover:underline'>Udemy Business</a> to build in-demand career skills.</h2>
            <ul className='flex items-center flex-wrap md:flex-nowrap gap-5'>
            {images.map((image,index) => (
                <li key={index}><img src={image} alt="image" /></li>
            ))}
            </ul>
        </div>
        <div className='bg-[#2A2B3F] text-white p-6 md:px-16 md:py-6'>
            <h2 className='text-lg font-semibold'>Explore top skills and certifications</h2>
            <div className='my-6'>
                <h3 className='font-semibold py-4'>In-demand Careers</h3>
                <ul>
                    <li className='py-0.5 hover:underline cursor-pointer'><a href="#">Data Scientist</a></li>
                    <li><a href="#">Full Stack Web Development</a></li>
                    <li><a href="#">Cloud Engineer</a></li>
                    <li><a href="#">Project Manager</a></li>
                    <li><a href="#">Game Developer</a></li>
                    <li><a href="#">All Career Accelerators</a></li>
                </ul>
            </div>
        </div>
        <div></div>
        <div></div>
    </section>
    </>
  )
}

export default Footer