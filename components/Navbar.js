"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
 
  return (
      
      <>

    <div className='flex-col md:relative flex h-32 justify-between px-10  text-white shadow-lg bg-gray-900 shadow-purple-400'>
       <span className='font-bold text-3xl relative top-5 text-center'>PORTFOLIO</span>
    
       <ul className=' flex gap-1  rounded-full items-center justify-center relative bottom-3 '>
        <li><Link href="/"><button type="button" class="text-white  bg-gradient-to-br rounded-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-[8px] sm:text-[12px] xl:text-sm px-2.5 sm:px-5 py-2.5 text-center me-2 mb-2 ">Home</button> </Link>  </li>
        <li><Link href="/skillsprojects"><button type="button" class="text-white bg-gradient-to-br rounded-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-[7px] sm:text-[12px] xl:text-sm px-2.5 sm:px-5 py-2.5 text-center me-2 mb-2"><li className='flex flex-col'>Skills & Projects</li></button></Link></li>
        <li><Link href="/resume"><button type="button" class="text-white bg-gradient-to-br rounded-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-[8px] sm:text-[12px] xl:text-sm px-2.5 sm:px-5 py-2.5 text-center me-2 mb-2">Resume</button></Link></li>
        
      
       </ul>
      
             
          
    </div>
    </>
  )
}

export default Navbar
