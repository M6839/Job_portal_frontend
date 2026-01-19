 import axios from 'axios';
 import { API_URI } from '../data';
 
 export  const fetchJobs=async()=>{
    try{
      const res=await axios.get(`${API_URI}/api/v1/job/get`,{withCredentials:true});

      console.log("Jobs fetched",res.data.jobs);
      return res.data.jobs
    }
    catch(err){
      console.log("Error fetching jobs",err);
      return []
    }

  }

  export const fetchAdminJobs=async()=>{
                  try{
                      const res=await axios.get(`${API_URI}/api/v1/job/getadminjobs`,{withCredentials:true});
                      console.log("Jobs fetched",res.data.jobs);
                      return res.data.jobs;
                  }
                  catch(err){
                      console.log("Error fetching jobs",err);
                      return [];
                  }
              }


              export const fetchJob = async (id) => {
                    try {
                      const res = await axios.get(`${API_URI}/api/v1/job/get/${id}`, { withCredentials: true });
                      console.log("Job details fetched", res.data.job);
                      return res.data.job;
                    }
                    catch (err) {
                      console.log("Error fetching job details", err);
                      return {}
                    }
                  }
                 