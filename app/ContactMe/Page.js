"use client"
import React from 'react'
import { useState } from "react";
import { FormControl,FormErrorMessage,FormLabel,Input, Textarea,isLoading } from "@chakra-ui/react";
import { Container } from "postcss";
const  initValues={
  name:"",
  email:"",
  subject:"",
  message:"",
} 
const initState ={values:initValues}

const Page = () => {
    const  [state, setstate] = useState(initState)
  const {values, isLoading} =state;
  const handlechange=({target})=>setstate((prev)=>({
    ...prev,
    values:{
      ...prev.values,
      [target.name]:target.value,
    }
  }))
  const onSubmit = async()=>{
    setstate((prev)=>({
      ...prev,
      isLoading:true
  }))
  }
  return (
    <>
    <h2 className="text-[30px] xl:text-[50px] relative top-24 flex justify-center text-white">Contact me!</h2>
      <div className="bg-purple-500  bg-opacity-20 mx-4 sm:mx-28  relative top-14 bottom-6 shadow-xl shadow-purple-400 my-20">
        <div className=" justify-center sm:w-[100%] items-center h-[90vh] xl:h-[60vh]  flex flex-col gap-5">
 
    <div className="text-white overflow-auto ">
    

    <FormControl className="my-5" isRequired isInvalid={!values.name}>
      <FormLabel className="relative bottom-3">Name</FormLabel>
    <Input text='text'name="name" errorBorderColor="red.300" onChange={handlechange} value={values.name} className='p-2 w-[40vw]   rounded-lg bg-slate-800'  placeholder='Name'/>
    
    </FormControl>
    
    <FormControl className="my-5" isRequired>
      <FormLabel className="relative bottom-3" >Email</FormLabel>
    <Input text='email'name="email" onChange={handlechange} value={values.email} className='p-2 w-[40vw]   rounded-lg bg-slate-800'  placeholder='Name'/>
    </FormControl>
    <FormControl className="my-5" isRequired>
      <FormLabel className="relative bottom-3" >Subject</FormLabel>
    <Input text='text'name="subject" onChange={handlechange} value={values.subject} className='p-2 w-[40vw]   rounded-lg bg-slate-800'  placeholder='Name'/>
    </FormControl>
    <FormControl className="my-5" isRequired>
      <FormLabel className="relative bottom-3" >Message</FormLabel>
    <Textarea text='text' rows={4} name="message" onChange={handlechange} value={values.message} className='p-2 w-[40vw]   rounded-lg bg-slate-800'  placeholder='Name'/>
    </FormControl>
   <div className="flex justify-center items-center">

    <button type="button" isLoading={isLoading} onClick={onSubmit} disabled={!values.name || !values.email || !values.subject || !values.message} class="text-white w-[20vh]  bg-gradient-to-br rounded-full from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 ">Send</button>
   </div>
    
       
    </div>
        

      </div>

     </div>
    </>
  )
}

export default Page
