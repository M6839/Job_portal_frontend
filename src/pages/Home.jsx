import React from 'react'
import Hero from '../compontents/Hero'
import TopOprotunities from '../compontents/TopOprotunities'
import Working from '../compontents/Working'
import Marquee from 'react-fast-marquee';
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaMicrosoft } from "react-icons/fa";
import { SiTcs } from "react-icons/si";
import { SiHcl } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
import { SiNetflix } from "react-icons/si";
import { SiWipro } from "react-icons/si";
import { SiAccenture } from "react-icons/si";
const Home = () => {
  const companies=[{
    name:"Google",
    logo:<FaGoogle className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'Micro Soft',
    logo:<FaMicrosoft className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'TCS',
    logo:<SiTcs className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'HCL',
    logo:<SiHcl className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'Infosys',
    logo:<SiInfosys className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'facebook',
    logo:<CiFacebook className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'Netflix',
    logo:<SiNetflix className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'wipro',
    logo:<SiWipro className='text-[#8C52FF] text-[32px]'/>
  },
  {
    name:'Accenture',
    logo:<SiAccenture className='text-[#8C52FF] text-[32px]'/>
  },]
  return (
     <div className='bg-black  text-white'>
      <Hero/>
      <Marquee gradient={false} speed={50}>
       <div className='flex justify-between gap-8 md:gap-16'>
        {
          companies.map((item,idx)=>(
              <div className='flex items-center gap-2'>{item.logo}<p className='text-[20px]'>{item.name}</p></div>
          ))
        }
     </div>
    </Marquee>
      <TopOprotunities/>
      <Working/>

    </div>
  )
}

export default Home