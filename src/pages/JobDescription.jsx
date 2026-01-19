import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJob } from '../sevices/jobapplication';
import { fetchCompany } from '../sevices/companiesapplication';
import { toast } from 'react-toastify';
import { appliedJobs } from '../sevices/appliedJobs';
import Button from '../compontents/ui/Button';
import axios from 'axios';
import { API_URI } from '../data';
const JobDescription = () => {
  const { id } = useParams();
  const [appliedJobsList, setAppliedJobsList] = React.useState([]);
  const [company, setCompany] = React.useState({
    name: "",
    logo: "",
    website: "",
    description: ""
  });
  const [jobDetails, setJobDetails] = React.useState({
    id: "",
    title: "",
    description: "",
    requirements: [],
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: ""
  });
  useEffect(() => {
    const loadAppliedJobs = async () => {
      const res = await appliedJobs();
      if (res) {
        setAppliedJobsList(res);
      }
    }
    loadAppliedJobs();
  }, []);
  useEffect(() => {
    const loadJob = async () => {
      const res = await fetchJob(id);
      if (res) {
        setJobDetails(
          {
            id: res._id,
            title: res.title,
            description: res.description,
            requirements: res.requirements,
            salary: res.salary,
            location: res.location,
            jobType: res.jobType,
            experience: res.experienceLevel,
            position: res.position,
            companyId: res.company
          }
        );
      }
    }
    loadJob();
  }, [id])

  useEffect(() => {
    const loadCompany = async () => {
      if (!jobDetails.companyId) return;
        const res = await fetchCompany(jobDetails.companyId);
        setCompany({
          name: res.name,
          logo: res.logo,
          website: res.website,
          description: res.description
        });
    }
    loadCompany();
  }, [jobDetails.companyId])
  const handleApplyJob = async (id) => {
    try {
      const res = await axios.get(`${API_URI}/api/v1/application/apply/${id}`, {}, { withCredentials: true });
      console.log("Job applied successfully", res.data);
      toast.success("Job applied successfully");
    }
    catch (err) {
      console.log("Error applying job", err);
      toast.error("Error applying job");
    }
  }
  const isJobApplied = appliedJobsList.some((job) => job.job._id === jobDetails.id);
  return (
    <div className='min-h-screen bg-black pb-16'>
      <div className='bg-[#8C52FF] flex justify-center items-center h-[300px]'>
        <h1 className='text-center font-bold text-[45px] text-white'>Job Details</h1>
      </div>
      <div className='bg-[#111111] rounded-2xl mx-2 md:mx-16 px-4 md:px-8 py-2 md:py-6 mt-12'>
        <h1 className='text-white font-bold text-[28px]'>{jobDetails.title}</h1>
      </div>
      <div className='bg-[#111111] space-y-2 rounded-2xl mx-2 md:mx-16 px-4 md:px-8 py-2 md:py-6 mt-2'>
        <h1 className='text-white font-bold text-[20px]'>About Job: <span className='text-[16px] text-gray-500 font-normal'>{jobDetails.description}</span></h1>
        <h1 className='flex flex-col gap-2 text-white font-bold text-[20px]'>Required skills: {
          jobDetails.requirements?.map((skill, idx) => (<span key={idx} className='text-[16px]  text-gray-500  font-normal'>{idx + 1} .  {skill}</span>))
        }</h1>
        <div className='flex  gap-12 items-center'>
          <h1 className='text-white font-bold text-[20px]'>Employment Type: <span className='text-[16px]  text-gray-500  font-normal'>{jobDetails.jobType}</span></h1>
          <h1 className='text-white font-bold text-[20px]'>Salary: <span className='text-[16px]  text-gray-500  font-normal'>{jobDetails.salary}</span></h1>
          <h1 className='text-white font-bold text-[20px]'>Experience: <span className='text-[16px]  text-gray-500  font-normal'>{jobDetails.experience} years</span></h1>
        </div>
        <h1 className='text-white font-bold text-[20px]'>Company Name:<span className='text-[16px]  text-gray-500  font-normal'> {company.name}</span></h1>
        <h1 className='text-white font-bold text-[20px]'>Company website:<span className='text-[16px]  text-gray-500  font-normal'> {company.website}</span></h1>
        <h1 className='text-white font-bold text-[20px]'>Location<span className='text-[16px]  text-gray-500  font-normal'> {jobDetails.location}</span></h1>
        <h1 className='text-white font-bold text-[20px]'>About Company:<span className='text-[16px]  text-gray-500  font-normal'> {company.description}</span></h1>
        <div>
          <h1 className='text-[28px] font-bold text-white'>Job Description</h1>
          <p className='text-gray-500'>{jobDetails.description}</p>
          <div>
          </div>
        </div>

        <div className='flex gap-6 mt-4'>
          <Button variant='outline'>save job</Button>
          {isJobApplied ? (
            <Button className='bg-gray-600' disabled>Already Applied</Button>
          ) : (
            <Button onClick={() => handleApplyJob(jobDetails.id)}>Apply job</Button>
          )}
        </div>

      </div>
    </div>
  )
}

export default JobDescription