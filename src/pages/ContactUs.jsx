import React from 'react'

const ContactUs = () => {
  return (
    <div className='min-h-screen bg-black text-white pb-12'>
         <div className='bg-[#8C52FF] flex   justify-center items-center h-[300px] mb-16'>
        <h1 className='text-center font-bold text-[45px]'>Contact Us</h1>
      </div>
      <section className='md:flex items-center gap-8 px-4 md:px-24'>
        <div className='space-y-4'>
            <h1 className='text-[32px] font-bold'>You Will Grow, You Will Succeed. We Promise That</h1>
<p>Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultrices. Diam convallis morbi pellentesque adipiscing </p>
<div className='grid grid-cols-2 gap-4 mt-4'>
    <p>Call for Enquiry</p>
    <p>send us email</p>
    <p>Opening Hours</p>
    <p>Office</p>
</div>
        </div>
          <div className='bg-black space-y-4 rounded-[10px] border border-gray-700 p-2 mt-8 md:mt-0 md:p-8'>
            <div><h1 className='text-center text-[#8C52FF] font-bold text-[32px]'>Contact Info</h1>
            <p className='text-center'>Nibh dis faucibus proin lacus tristique</p></div>
          <div className='flex gap-4'>
            <label className='flex flex-col gap-2' >
              First Name
              <input type='text' placeholder='first name' className='p-2 w-full md:w-[300px] h-[60px] bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
            <label className='flex flex-col gap-2' >
              Last Name
              <input type='text' placeholder='last name' className='p-2 w-full md:w-[300px]  h-[60px]  bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
          </div>
          <div className='flex gap-4'>
            <label className='flex flex-col gap-2' >
              Email
              <input type='text' placeholder='Email' className='p-2 w-full md:w-[300px]  h-[60px]  bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
            <label className='flex flex-col gap-2' >
              Phone number
              <input type='text' placeholder='phone number' className='p-2 w-full md:w-[300px] h-[60px]  bg-[#1E1E1E] rounded-[10px]'></input>
            </label>
          </div>
          <label className='flex flex-col gap-2'>
            Meassage
            <textarea placeholder='Message' className='w-full h-[163px] p-2 bg-[#1E1E1E] rounded-[10px]'></textarea>
          </label>
             <button className='bg-[#8C52FF] py-[10px] px-[10px] w-full md:w-[140px] rounded-[8px]'>Start a Free Trial</button>
          </div>
      </section>
    </div>
  )
}

export default ContactUs