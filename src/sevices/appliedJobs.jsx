import React from "react";
import { API_URI } from "../data";
import axios from "axios";
export const appliedJobs=async()=>{
    try{
        const res=await axios.get(`${API_URI}/api/v1/application/get`,{withCredentials:true});
        console.log("Applied jobs fetched",res.data.application);
        return res.data.application;
    }
    catch(err){
        console.log("Error fetching applied jobs",err);
        return [];
    }

}

export const adminapplicatsions=async(id)=>{
    try{
        const res=await axios.get(`${API_URI}/api/v1/application/${id}/applicants`,{withCredentials:true}); 
        console.log("Admin applications fetched",res.data.job);
        return res.data.job;
    }
    catch(err){
        console.log("Error fetching admin applications",err);
        return [];
    }

}