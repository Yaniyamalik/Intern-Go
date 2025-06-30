import React from 'react'
import {WorldMapDemo} from "./map"
export const Joinus = () => {
  return (
    <section id="joinus" className='flex flex-col items-center justify-center h-auto  text-white py-25 p-5 '>
        <h1 className='text-4xl font-bold pb-10'>Join the Intern-Go Movement</h1>
        <p className=' text-xl pb-10 text-gray-400'>  We're on a mission to make internships smarter and more accessible — and we’d love for you to be a part of it! Whether you want to collaborate, intern, or just say hi, 
        this is your chance to connect with us.
        </p>
        <p>
        Just fill out the form below and let’s make something amazing together!
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPyZ1Ux_rAieSrsJqhdSxYy9SRsYQWRrTp08vRUDV5DNV8Cw/viewform" target="_blank" rel="noopener noreferrer">
          <button className='bg-blue-400 hover:bg-blue-600 text-white  mb-10 font-bold py-2 px-4 rounded hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 mt-4'>
            Fill the form
          </button>
        </a>
        
        <WorldMapDemo/>
    </section>
  )
}
