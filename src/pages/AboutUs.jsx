import React from 'react'
import FAQ from '../compontents/FAQ'

const AboutUs = () => {
  return (
    <div className='bg-black min-h-screen text-white'>
        <div className='bg-[#8C52FF] flex items-center justify-center h-[300px] mb-16'>
        <h1 className='text-center font-bold text-[45px]'>About US</h1>
      </div>
      <FAQ/>
      <section className='flex flex-col md:flex-row items-center gap-8 px-4 md:px-24 py-8'>
        <div className='flex gap-2 w-full md:w-[630px]'>
            <div className='bg-[#111111] w-full md:w-[300px] h-[500px] rounded-[12px]'></div>
            <div className=' space-y-2'>
                <div className='bg-[#111111] w-full md:w-[330px] h-[338px] rounded-[12px]'></div>
                <div className='bg-[#111111] w-full md:w-[330px] h-[162px] rounded-[12px]'>

                </div>
            </div>

        </div>
        <div>
            <h1 className='text-[32px] font-bold'>We’re Only Working 
With The Best</h1>
<p>Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. </p>
<div className='grid grid-cols-2 gap-4 mt-4'>
    <p>Quality job</p>
    <p>Resume Builder</p>
    <p>Top Companies</p>
    <p>Top Talents</p>
</div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs