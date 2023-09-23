import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
  return (
    <div className="max-w-[80rem] mx-auto">
      <SectionTitle title={"Featured Jobs"}>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </SectionTitle>

      <div className="grid grid-cols-2">
        {
            jobs.map(job=><Job key={job.id} job={job} ></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
