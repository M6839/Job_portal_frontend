import React, { useState } from 'react'

const FAQ = () => {
    const [openIndex,setOpenIndex]=useState(null);
    const faq=[
        {
            que:'Can I upload a CV?',
            ans:'Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc '
        },
        {
            que:'How long will the recruitment process take?',
            ans:'Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc '
        },
        {
            que:'Do you recruit for Graduates, Apprentices and Students?',
            ans:'Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc '
        },
        {
            que:'What does the recruitment and selection process involve?',
            ans:'Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc '
        },
        {
            que:'Can I receive notifications for any future jobs that may interest me?',
            ans:'Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc '
        }
    ]
  return (
    
    <div className='px-4 md:px-24'>
        <h1 className='text-center fontr-bold text-[45px]'>
            Frequently Asked Questions
        </h1>
        <p className='text-center'>most recently asked questions</p>
        <section className='space-y-4 py-8'>
            {
                faq.map((item,idx)=>(
                    <div key={idx} onClick={()=>setOpenIndex(idx)} className='bg-[#111111] p-4 rounded-[10px] cursor-pointer'>
                        <div className='flex justify-between mb-2'>
                        <h1 className='flex gap-4 text-[24px]'><span>{idx+1}</span>{item.que}</h1>
                        <span>{openIndex === idx ? "-":"+"}</span>
                        </div>
                       {openIndex === idx && <p>{item.ans}</p>}
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default FAQ