import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className='flex flex-col gap-8 p-10 bg-neutral-800 text-white'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
        {/* About Section */}
        <div className='flex-1'>
          <h3 className='text-xl font-semibold mb-2'>Intern-Go</h3>
          <p className='text-sm mb-4'>
            Intern-Go is an AI-powered platform helping students from Tier 2 and Tier 3 colleges find and apply to internships and jobs worldwide — faster, smarter, and stress-free.
          </p>
           <a 
              href="mailto:intern.go.auto.apply@gmail.com" 
              className='text-gray-400 hover:text-blue-400 underline '
            >
             <MdEmail className='inline-block mr-1 size-8' />
            </a>
            <a 
              href="https://www.youtube.com/@Intern-Go" 
              className='text-gray-400 hover:text-blue-400 underline'
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube className='inline-block mr-1 size-8' />
            </a>
            <a 
              href="https://www.instagram.com/intern_go_ai/" 
              className='text-gray-400 hover:text-blue-400 underline'
              target="_blank"
              rel="noopener noreferrer"
              >
                <IoLogoInstagram className='inline-block mr-1 size-8' />
              </a>
              <a 
                href="https://www.linkedin.com/company/intern-go/"
                className='text-gray-400 hover:text-blue-400 underline'
                target="_blank"     
                rel="noopener noreferrer"
                >
                <FaLinkedinIn className='inline-block mr-1 size-8' />
                </a>
        </div>

        {/* Contact Section */}
        <div className='flex-1'>
          <h3 className='text-xl font-semibold mb-2'>Contact Us</h3>
          <p className='mb-4 text-base'>
            Have questions, feedback, or just want to say hi? We’d love to hear from you!
          </p>
           
          <p className='text-sm'> Phone: <span className='text-gray-300'>74289 25864</span></p>
          <p className='text-sm'>Email: 
            <a 
              href="mailto:intern.go.auto.apply@gmail.com" 
                className='text-gray-300 hover:text-blue-600 underline'         

                >intern.go.auto.apply@gmail.com</a>
                </p>
        </div>

        

        {/* Join Us Section */}
        <div className='flex-1'>
          <h3 className='text-xl font-semibold mb-2'>Join Us</h3>
          <p className='text-sm mb-2'>
            Want to be part of the mission? Fill out our form to collaborate or stay in the loop:
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdPyZ1Ux_rAieSrsJqhdSxYy9SRsYQWRrTp08vRUDV5DNV8Cw/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className='text-blue-400 hover:text-blue-600 underline'
          >
            Join Now
          </a>
        </div>
      </div>
     <hr/>
      {/* Copyright */}
      <div className='text-center text-gray-400 text-sm mt-2'>
        © {new Date().getFullYear()} Intern-Go. All rights reserved.
      </div>
    </footer>
  );
};
