import React from 'react'
import { MdOutlineShoppingCart,MdLanguage } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <header className='px-2 py-3 bg-white shadow sticky top-0 z-10'>
        <nav className='text-black/70 flex justify-evenly items-center'>
            <div className='text-black cursor-pointer'>
            <a href="#" className='text-3xl font-bold'>Udemy</a>
            </div>
            <div className='text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700'>
                <a href="#">Explore</a>
            </div>
            <div className='text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700'>
                <a href="#">Subscribe</a>
            </div>
            <div className='px-2 py-3 flex items-center gap-4 border-2 border-gray-200 rounded-full w-[45%] hover:bg-gray-100 focus-within:border-purple-700'>
                <span className=' text-xl'><IoIosSearch /></span>
                <input type="text" placeholder='Search for anything...' className='outline-none w-[92%]'/>
            </div>
            <div className='text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700'>
                <a href="#">Udemy Business</a>
            </div>
            <div className='text-sm cursor-pointer p-3 rounded-lg hover:bg-gray-100 hover:text-violet-700'>
                <a href="#">Teach on Udemy</a>
            </div>
            <div className='p-3 rounded-lg text-xl text-black/75 cursor-pointer hover:bg-gray-100 hover:text-violet-600'>
                <a href="#"><MdOutlineShoppingCart /></a>
            </div>
            <div>
                <button className='px-4 py-2 font-bold text-violet-600 border border-violet-700 rounded-lg cursor-pointer hover:bg-gray-100 '>Log in</button>
            </div>
            <div>
                <button className='px-4 py-2 bg-violet-600 text-white border font-bold rounded-lg cursor-pointer hover:bg-violet-700'>Sign up</button>
            </div>
            <div className='text-black/80 text-xl p-2 border border-purple-700 rounded-md hover:bg-gray-100 '>
                <a href="#"><MdLanguage/></a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar