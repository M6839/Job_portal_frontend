import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { fetchJobs } from '../sevices/jobapplication'
const Jobs = () => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState('');
  useEffect(() => {
    const loadJobs = async () => {
      const res = await fetchJobs();
      if (res) {
        setJobs(res);
      }
    };

    loadJobs();
  }, [])

  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };
  const handleJobTypeChange = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };
  const filteredJobs = jobs.filter((job) => {
    const locationMatch =
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

 const jobTypeMatch =
    selectedJobTypes.length === 0 ||
    selectedJobTypes.some(
      (type) => type.toLowerCase() === job.jobType.toLowerCase()
    );

    return locationMatch && jobTypeMatch;
  });

const salaryFilteredJobs = filteredJobs.filter((job) => {
  if (!selectedSalaryRange) return true;

  if (selectedSalaryRange === '5+') {
    return job.salary >= 5;
  }

  const [min, max] = selectedSalaryRange.split('-').map(Number);
  return job.salary >= min && job.salary <= max;
});


  return (
    <div className='min-h-screen flex flex-col  bg-black  text-white'>
      <div className='bg-[#8C52FF] flex justify-center items-center h-[300px] mb-16'>
        <h1 className='text-center font-bold text-[45px]'>Jobs</h1>
      </div>
      {/* <input type='text' placeholder='search jobs' className='px-4 border-2 mx-auto border-[#8C52FF] rounded-[10px] w-full md:w-[900px] h-[45px] bg-black mb-8'></input> */}
      <p className='md:hidden mb-2 px-4' onClick={() => setOpen(!open)}>Filter</p>
      <div className='flex justify-between gap-8 px-4 md:px-16 mb-12'>
        <section className={`hidden md:block bg-[#8C52FF]  rounded-[12px] border-r-2 border-[#8C52FF] p-4 min-w-[250px]`}>
          <p className='hidden md:block mb-4 px-4 text-lg font-bold' >Filter Jobs</p>
          <h1 className='text-[18px] mb-4'>Location</h1>
          <div className='space-y-2'>
            {['Hyderabad', 'Bangalore', 'Mumbai', 'Kolkata', 'chennai'].map((item) => (
              <label key={item} className='flex gap-4 items-center'>
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(item)}
                  onChange={() => handleLocationChange(item)}
                  className='w-4 h-4'
                />
                {item}
              </label>
            ))}

          </div>
          <h1 className='text-[18px] mt-8 mb-4'>Job Type</h1>
          <div className='space-y-2'>
            {['Software', 'Frontend developer', 'Backend developer', 'Java developer'].map((item) => (
              <label key={item} className='flex gap-4 items-center'>
                <input
                  type="checkbox"
                  checked={selectedJobTypes.includes(item)}
                  onChange={() => handleJobTypeChange(item)}
                  className='w-4 h-4'
                />
                {item}
              </label>
            ))}

          </div>
           <h1 className='text-[18px] mt-8 mb-4'>Salary Range</h1>
           <div className='space-y-2'>
            {['0-3', '3-4', '4-5', '5+'].map((item) => (
              <label key={item} className='flex gap-4 items-center'>
                <input
                  type="radio"
                  name='salaryrange'
                  onChange={() => setSelectedSalaryRange(item)}
                  className='w-4 h-4'
                />
                {item}
              </label>
            ))}

          </div>
        </section>
        {
          open && (<section className={`absolute bg-black py-4 md:hidden block border-r-2 border-[#8C52FF] px-2`}>
            <h1 className='text-[23px] mb-4'>Location</h1>
            <div className='space-y-2'>
              {
                ['Hyderabad', 'Banglore', 'Mumbai', 'Kolkata', 'chennai'].map((item, idx) => (
                  <label key={idx} className='flex gap-4 text-white items-center'>
                    <input type='checkbox' className='w-[28px] h-[28px]' />
                    {item}
                  </label>
                ))
              }

            </div>
            <h1 className='text-[23px] mt-8 mb-4'>Job Type</h1>
            <div className='space-y-2'>
              {
                ['Software', 'Full stack developer', 'Frontend developer', 'Backend developer', 'UI/UX design', 'Devops developer', 'Java developer', 'python developer'].map((item, idx) => (
                  <label key={idx} className='flex gap-4 text-white items-center'>
                    <input type='checkbox' className='w-[28px] h-[28px]' />
                    {item}
                  </label>
                ))
              }

            </div>
          </section>)
        }
        {
          filteredJobs.length == 0 && <p className='text-white'>No jobs posted yet</p>
        }
        <section className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {
             salaryFilteredJobs.map((item) => (
              <Link to={`/jobDes/${item._id}`} key={item._id}><div className='space-y-2 border hover:bg-[#8C52FF] bg-black border-[#8C52FF] md:max-h-[250px] rounded-2xl p-2 md:p-4'>
                <h1 className='text-[23px] md:text-[28px] font-bold'>{item.title}</h1>
                <p className='text-[18px] md:text-[20px]'>{item.description}</p>
                <p className='flex gap-2 text-[18px]'>{item.type}<span className='flex items-center gap-1'><CiLocationOn className='text-white font-bold' />{item.location}</span></p>
              </div></Link>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default Jobs