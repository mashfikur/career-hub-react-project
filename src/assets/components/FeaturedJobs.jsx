import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
  return (
    <div>
      <SectionTitle title={"Featured Jobs"}>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </SectionTitle>

      <div>
        Total Jobs : {jobs.length}
      </div>
    </div>
  );
};

export default FeaturedJobs;
