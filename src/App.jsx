import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import SearchBar from "./components/SearchBar/SearchBar"
import JobCard from "./components/JobCard/JobCard"
import {useEffect, useState} from 'react'
import { collection, query, where, getDocs,orderBy } from "firebase/firestore";
import { db } from "./firebase.config";
function App() {
  const [jobs,setJobs]=useState([]);
  const [customsearch,setCustomSearch]=useState(false);

  // 43:00 se dekhna ye function kya kar rha hai
  const fetchJobs=async()=>
  {
    setCustomSearch(false);
    const tempjobs=[];
    const jobsref = query(collection(db, "jobs"));
    const q = query(jobsref, orderBy("postedon", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => 
    {
      // console.log(doc.id, " => ", doc.data());
      tempjobs.push(
        {
          ...job.data(),
          id:job.id,
          postedon:job.data().postedon.toDate()
        });
    });
    setJobs(tempjobs);
  }

  const fetchJobsCustom =async(jobcriteria)=>
  {
    setCustomSearch(true);
    const tempjobs=[];
    const jobsref = query(collection(db, "jobs"));
    const q = query(jobsref, where("type", "==", jobcriteria.type), where("experience", "==", jobcriteria.experience), where("location", "==", jobcriteria.location) ,orderBy("postedon", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => 
    {
      // console.log(doc.id, " => ", doc.data());
      tempjobs.push(
        {
          ...job.data(),
          id:job.id,
          postedon:job.data().postedon.toDate()
        });
    });
    setJobs(tempjobs);
  }


  useEffect(() => {
    fetchJobs();
  }, [])



  return (
    <>
    {/* see the video on 35:00 to 38:00 it gives new idea */}
    {/* https://www.youtube.com/watch?v=ppn7kBqGMUU&t=2126s */}

      <div>
        <Navbar />
        <Header />
        <SearchBar fetchJobsCustom={fetchJobsCustom} />

        {
          customsearch &&
          <button onClick={fetchJobs} className="flex pl-[1250px] mb-2" >
            <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filter</p>
          </button>
        }

        {jobs.map((job)=>(
          <JobCard key={job.id}  {...job}/>
          // spread operator? {...job} is equivalent to id={job.id} title={job.title} etc
        ))}
        
      </div>
    </>
  )
}
export default App
