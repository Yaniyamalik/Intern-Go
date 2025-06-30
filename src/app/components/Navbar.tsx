"use client"
import React from 'react'

export const Navbar = () => {
  return (
    <div className=' nav  p-2 flex items-center justify-between text-white fixed top-0 left-0 right-0 z-50  bg-white/20 backdrop-blur-md shadow-lg mb-25'>
        <img src="./logo.jpg" alt="Logo" className="w-20 h-20 rounded-full pr-2" />
        <div className="flex-1 flex justify-center gap-2">
            <a href="#how-it-works">The Workflow</a>
            <a href="#features">Features</a>
            <a href="#about" className='ml-4'>About us</a>
            <a href="#joinus" className='ml-4'>Join us</a>
        </div>
    </div>
  )
}
