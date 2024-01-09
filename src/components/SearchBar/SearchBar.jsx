import React ,{useState}from 'react'

function SearchBar(props) {
   // 55:00 se dekhna ye function kya kar rha hai...par ye kafi achche se samjhai hai....
   const [jobcriteria,setJobCriteria]=useState({
      title:'',
      location:'',
      experience:'',
      type:''
   })

   const handleChange=(e)=>
   {
      setJobCriteria((prevState)=>({
         ...prevState,
         [e.target.name]:e.target.value,
      }))
   }

   const search= async()=>{
      await props.fetchJobsCustom(jobcriteria);
   }

  return (


    <div className='flex gap-4 my-10 justify-center px-10'>
       <select onChange={handleChange} name="title" value={jobcriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
          <option value="" disabled hidden selected>Job Role</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Intern">Intern</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Developer Advocate">Developer Advocate</option> 
       </select>

       <select onChange={handleChange} name="type" value={jobcriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
          <option value="" disabled hidden selected>Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Freelancing">Freelancing</option>
       </select>

       <select onChange={handleChange} name="location" value={jobcriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
          <option value="" disabled hidden selected>Location</option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
       </select>

       <select onChange={handleChange} name="experience" value={jobcriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
          <option value="" disabled hidden selected>Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
       </select>
       <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
       
    </div>
  )
}

export default SearchBar
