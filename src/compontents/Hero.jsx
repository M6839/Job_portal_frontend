import React from 'react'

const Hero = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center min-h-screen'>
         <h1 className='text-white text-center font-bold text-[40px] md:text-[70px] md:mt-24'>Find Your Dream Job Today</h1>
      <h4 className='text-white text-[28px] md:text-[32px] text-center m-8'>
        Connecting Talent with Opportunities Across the Nation for Every Skill
        Level
      </h4>
      <p className="text-white  md:text-[23px] text-center px-2 md:px-24 py-8 md:max-w-4xl bg-[#8C52FF] hover:bg-white hover:text-[#8C52FF] rounded-full">
        Explore a vast array of job listings in diverse industries. Whether
        you're a seasoned professional or just starting out, find the perfect
        role to advance your career. Our platform makes job searching easy and
        efficient, bringing you closer to your next big opportunity.
      </p>
    </div>
  )
}

export default Hero