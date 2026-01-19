import React, { useEffect } from 'react'
import Input from './ui/Input'
import Button from './ui/Button'
import { Link } from 'react-router-dom'
import { fetchCompanies } from '../sevices/companiesapplication'
const Companies = () => {
    const [companies,setCompanies]=React.useState([]);
     const [search, setSearch] = React.useState("");
    useEffect(()=>{
        const loadComoanies=async()=>{
            const res=await fetchCompanies();
            if(res){
                setCompanies(res);
            }
        }
        loadComoanies();
    },[]);

    
    const filteredCompanies=companies.filter((company)=>company.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className='min-h-screen bg-black px-2 md:px-[100px] py-12 space-y-6'>
        <div className='flex justify-between items-center text-white'>
            <Input placeholder='filter by name' name="search" value={search}
  onChange={(e) => setSearch(e.target.value)}></Input>
          <Link to='/createCompany'><Button>New Company</Button></Link>
        </div>
        <table className='w-full'>
            <thead className='flex justify-between items-center text-white border-b-2 border-gray-600'>
                <tr>
                    <th className='text-left p-4'>Logo</th>
                </tr>
                <tr>
                    <th className='text-left p-4'>Company Name</th>
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
                    filteredCompanies.map((company)=>(
                        <tr key={company._id} className='flex justify-between items-center text-white border-b border-gray-600'>
                            <td className='p-4'><img src={company.logo} alt={company.name} className='w-12 h-12 rounded-full'/></td>
                            <td className='p-4'>{company.name}</td>
                            <td className='p-4'>{company.createdAt}</td>
                            <td className='p-4'>
                                <Link to={`/companyUpdate/${company._id}`} className='text-blue-500 hover:underline'>Edit</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default Companies