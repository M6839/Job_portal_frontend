import React from 'react'
import Input from './ui/Input'
import Button from './ui/Button'
import { useEffect } from 'react'
import axios from 'axios'
import { fetchAdminJobs } from '../sevices/jobapplication'
import { Link } from 'react-router-dom'
const Jobs = () => {
    const [jobs,setJobs]=React.useState([]);
    const [search, setSearch] = React.useState("");
    
        useEffect(()=>{
           const loadJobs = async () => {
               const res = await fetchAdminJobs();
               if (res) {
                 setJobs(res);
               }
             };
           
             loadJobs();

        },[]);

    const filteredJobs = jobs.filter((job) =>
  job.company.name.toLowerCase().includes(search.toLowerCase()) ||
  job.title.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className='min-h-screen bg-black px-2 md:px-[100px] py-12 space-y-6'>
        <div className='flex justify-between items-center text-white'>
            <Input placeholder='filter by company&role' name="search" value={search}
  onChange={(e) => setSearch(e.target.value)}></Input>
           <Link to="/createJob"><Button>New Job</Button></Link>
        </div>
        <table className='w-full'>
            <thead className='flex justify-between items-center text-white border-b-2 border-gray-600'>
                <tr>
                     <th className='text-left p-4'>Company</th>
                </tr>
                <tr>
                     <th className='text-left p-4'>Role</th>
                </tr>
                <tr>
                    <th className='text-left p-4'>Date</th>
                </tr>
                <tr>
                    <th className='text-left p-4'>Action</th>
                </tr>
            </thead>
             <tbody className='flex flex-col gap-4 mt-4'>
                {
                    filteredJobs.map((job)=>(
                        <tr key={job._id} className='flex justify-between items-center text-white border-b border-gray-600'>
                            <td className='flex gap-2 items-center p-4'><img src={job.company.logo} alt={job.company.name} className='w-12 h-12 rounded-full'/>{job.company.name} </td>
                            <td className='p-4'>{job.title}</td>
                            <td className='p-4'>{job.createdAt}</td>
                            <td className='p-4'>
                                {/* <Link to={`/companyUpdate/${job.company._id}`} className='text-blue-500 hover:underline'>Edit</Link> */}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default Jobs