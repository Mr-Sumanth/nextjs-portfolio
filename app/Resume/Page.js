import React from 'react'
import Link from 'next/link'
const Page = () => {
  return (
    <>
    <div className="About text-white flex justify-center items-center flex-col ">
        <h2 className="text-[50px] relative top-10">Resume</h2>
        <p className="  text-2xl shadow-2xl shadow-purple-500 w-[50vw]  gap-5 p-24 h-[45vh] flex justify-center my-14 items-center">
        <img className='relative' src="desktop.gif"/>
       

        </p>
      </div>
       <a  download="desktop.gif" href="desktop.gif" className='flex justify-center items-center'><button type="button" class="text-white bg-gradient-to-br rounded-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-2xl px-5 py-2.5 text-center me-2 mb-2">Download</button></a>
    </>
  )
}

export default Page
export const metadata = {
  title: "Resume",
  description: "Resume",
  };