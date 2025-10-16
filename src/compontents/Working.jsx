import React from 'react'
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const Working = () => {
  return (
    <section className="bg-[#8C52FF] min-h-screen py-8">
      <h3 className='text-white text-[40px] font-bold text-center mb-12'>How does it work?</h3>
      <div className="flex flex-col gap-8">
        <div className="bg-white hover:-translate-y-4 mx-4 md:mx-8 p-4 rounded-2xl">
          <div className="bg-[#111111] text-[#8C52FF] flex justify-center items-center rounded-full p-4  w-[64px] h-[64px]">
            <LuUserPlus className='text-white text-[23px]' />
          </div>
          <h4 className='text-[#8C52FF] font-bold text-[28px]'>Create an Account</h4>
          <p className='text-black text-[23px]'>
            Sign up for a free account as a job seeker or employer. Set up your
            profile in minutes to start posting jobs or applying for jobs.
            Customize your profile to highlight your skills or requirements.
          </p>
        </div>
        <div className="bg-white hover:-translate-y-4 mx-4 md:mx-8 p-4 rounded-2xl">
          <div className="bg-[#111111] text-[#8C52FF] flex justify-center items-center rounded-full p-4  w-[64px] h-[64px]" >
            <VscTasklist className='text-white text-[23px]' />
          </div>
          <h4 className='text-[#8C52FF] font-bold text-[28px]'>Post or Browse Jobs</h4>
          <p className='text-black text-[23px]'>
            Employers can post detailed job descriptions, and job seekers can
            browse a comprehensive list of available positions. Utilize filters
            to find jobs that match your skills and preferences.
          </p>
        </div>
        <div className="bg-white hover:-translate-y-4 mx-4 md:mx-8 p-4 rounded-2xl">
          <div className="bg-[#111111] text-[#8C52FF] flex justify-center items-center rounded-full p-4  w-[64px] h-[64px]">
            <BiSolidLike className='text-white text-[23px]'  />
          </div>
          <h4 className='text-[#8C52FF] font-bold text-[28px]'>Hire or Get Hired</h4>
          <p className='text-black text-[23px]'>
            Employers can shortlist candidates and extend job offers. Job
            seekers can review job offers and accept positions that align with
            their career goals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Working