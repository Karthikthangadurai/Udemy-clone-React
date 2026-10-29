import React from 'react'
import {ArrowRight, ChevronLeft, ChevronRight} from "lucide-react"
import logo from "../assets/images/generative ai.png"

const Slidebar = () => {
  return (
   <section className='w-[88%] mx-auto my-10'>
    <div className='flex gap-5 h-52'>
    <div className='basis-1/4 border content-center'>
        <h2 className='text-3xl font-semibold'>Learn <em>essential</em> career and <b>life</b> skills</h2>
        <p className='text-black/85 font-light mt-2'>Udemy helps you build in-demand skills fast and advance your career in a changing job market</p>
    </div>
    <div className='flex items-center gap-5 relative'>
        <img src={logo} alt="image" className='h-100 w-72'/>
        <img src={logo} alt="image" className='h-100 w-72'/>
        <div className='absolute flex gap-28 items-center border p-4 bg-white shadow rounded-2xl'>
        <button className='bg-white mb-7 p-2'>Generative AI</button>
        <button className=' bg-white mt-7'><ArrowRight/></button>
        </div>
    </div>
    </div>
    <div className='flex gap-7 justify-center items-center'>
        <button className='p-2 rounded-full shadow-lg cursor-pointer'><ChevronLeft size={20}/></button>
        <p className='p-2 bg-gray-300 rounded-2xl inline-block'></p>
        <button className='p-2 rounded-full shadow-lg cursor-pointer'><ChevronRight size={20}/></button>
    </div>
   </section>
  )
}

export default Slidebar