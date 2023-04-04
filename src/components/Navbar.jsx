import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiFillStar, AiOutlineMail, AiFillHeart, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div>
    <AiOutlineMenu
      onClick={handleNav}
      className="absolute top-4 right-4 z-[99] md:hidden "
    />
    {nav ? (
    <div className='fixed w-full h-screen bg-white/40 flex flex-col justify-center items-center z-20'>

      <a onClick={handleNav} href='/' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <AiOutlineHome size={20} />
        <span className='pl-4'>Home</span>
      </a>
      <a onClick={handleNav} href='/background' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
      <BsPerson size={20} /> 
        <span className='pl-4'>Background</span>
      </a>
      <a onClick={handleNav} href='/corp' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <AiOutlineProject size={20} />
        <span className='pl-4'>Corporate Inquiries</span>
      </a>
      <a onClick={handleNav} href='/testimonials'  rel="noopener noreferrer" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <AiFillStar size={20} />
        <span className='pl-4'>Testimonials</span>
      </a>
      <a onClick={handleNav} href='/Thanks'  rel="noopener noreferrer" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <AiFillHeart size={20} />
        <span className='pl-4'>Thanks To</span>
      </a>
      <a onClick={handleNav} href='/contact' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
        <AiOutlineMail size={20} />
        <span className='pl-4'>Contact</span>
      </a>
    </div>
     )
     : (
     ''
     )}
     <div className='md:block hidden fixed top-[25%] z-10 '>
      <div className='flex flex-col'>
        <a href='/' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  text-center hover:scale-110 ease-in duration-300'>
        Home</a>
        <a href='/background' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer text-center hover:scale-110 ease-in duration-300'>
        Background
        </a>
        <a href='/corp' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-center'>
        Corporate
        Inquiries
        </a>
        <a href='/testimonials'  rel="noopener noreferrer" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 text-center m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
       Testimonials
        </a>
        <a href='/Thanks'  rel="noopener noreferrer" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 text-center cursor-pointer hover:scale-110 ease-in duration-300'>
        Thanks To
        </a>
        <a href='/contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer text-center hover:scale-110 ease-in duration-300'>
        Contact Me
        </a>
      </div>
    </div>


  </div>
  );
}

export default Navbar;
