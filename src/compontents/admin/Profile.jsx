import UpdateProfile from "./UpdateProfile";
import { Contact, Mail, Pen } from 'lucide-react'
import React, { use, useContext, useEffect, useState } from "react";
import Button from "../ui/Button";
import { JobContextData } from "../../context/JobContext";
import axios from "axios";
import { appliedJobs } from "../../sevices/appliedJobs";
const Profile = () => {
    const {user} =useContext(JobContextData);
    const [applied, setApplied] = useState([]);
    const [open, setOpen] = useState(false);
    
    useEffect(() => {
        const loadAppliedJobs=async()=>{
            const res=await appliedJobs();
            if(res){
                setApplied(res);
            }
        }
        loadAppliedJobs();
    }, []);
   
    return (
        <div className="relative z-30 bg-black min-h-screen p-2 md:p-6 text-white">
            <div className='max-w-4xl mx-auto  border border-gray-200 rounded-2xl my-5 p-2 md:p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <img src={user?.profile?.profilePhoto} alt='profile' className='w-20 h-20 rounded-full object-cover'/>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <p key={index} className="text-white bg-[#8C52FF] px-2 py-1 rounded-md">{item}</p>) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <p className="text-md font-bold">Resume</p>
                    <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a>
                </div>
            </div>
            <div className='max-w-4xl mx-auto rounded-2xl'>
                <h1 className='font-bold text-lg '>Applied Jobs</h1>
                <table>
                    <thead className=' border-b-2 border-gray-600'>
                        <tr className="flex justify-between items-center text-center">
                            <th className='text-left p-4'>Job Title</th>
                            <th className='text-left p-4'>Company</th>
                            <th className='text-left p-4'>Date Applied</th>
                            <th className='text-left p-4'>Status</th>
                        </tr>
                    </thead>
                    <tbody className="py-4">
               {
                applied.length === 0 ? <tr><td colSpan="4" className="text-center p-4">No applied jobs found.</td></tr> : applied.map((application) => (
                    <tr key={application._id} className='text-center flex justify-between items-center py-4'>
                        <td className='md:px-4'>{application.job?.title}</td>
                        <td className='md:px-4'>{application.job?.company?.name}</td>
                        <td className='md:px-4'>{application.createdAt}</td>
                        <td className={`rounded-full px-2 md:px-6  py-1 ${application.status === "pending" ? " bg-[#f6ff00b0]" : application.status === "accepted" ? "bg-green-500" : "bg-red-500"} bg-blur`}>{application.status}</td>
                    </tr>
                ))}
                    </tbody>
                </table>
            </div>
           {open && <UpdateProfile  setOpen={setOpen}/>}
        </div>
    )
}

export default Profile