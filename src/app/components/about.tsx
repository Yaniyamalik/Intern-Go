import React from 'react'

export const About = () => {
  return (
    <section id="about" className='max-w-full mx-auto px-6 py-25 text-center bg-[#141620]  text-white flex flex-col items-center justify-center gap-10 '>

        
        <div>
            <h3 className='text-6xl font-bold pb-5'>About us</h3>
          <p className='text-gray-400'>At Intern-Go, we’re on a mission to simplify and supercharge the internship and job application journey for students across India — especially those from Tier 2 and Tier 3 coleges.<br/>

           We understand the challenges students face: endlessly browsing portals, struggling to tailor resumes, writing countless cover letters, and still missing out on the right opportunities. That’s where Intern-Go steps in.<br/>

           Our AI-powered platform acts as a smart assistant — analyzing your resume, matching you with relevant roles, writing personalized applications, and even applying on your behalf. We cut down the time and stress, so students can focus on what really matters: learning, growing, and building their future.<br/>

           Whether you're a college student or a recent graduate, Intern-Go helps you break through the noise and get noticed — making career opportunities more accessible, efficient, and empowering.

          </p>
      </div>
      <div >
       <video
        src="./tutorial-intern-go.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
      />
      </div>
       
   </section>
 
  )
}
