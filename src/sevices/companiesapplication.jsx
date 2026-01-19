import axios from 'axios';
import { API_URI } from '../data';
export const fetchCompanies=async()=>{
              try{
                  const res=await axios.get(`${API_URI}/api/v1/company/get`,{withCredentials:true});
                  console.log("Companies fetched",res.data.companies);
                  return res.data.companies;
              }
              catch(err){
                  console.log("Error fetching companies",err);
                    return [];
              }
          }
       export const fetchCompany = async (id) => {
             try {
               const res = await axios.get(`${API_URI}/api/v1/company/get/${id}`, { withCredentials: true });
               console.log("Company details fetched", res.data.company);
               return res.data.company;
             }
             catch (err) {
               console.log("Error fetching company details", err);
               return {}
             }
           }
         