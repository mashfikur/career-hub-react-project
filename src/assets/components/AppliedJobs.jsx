import { useLoaderData } from "react-router-dom";
import { getJobs } from "../../localStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const [displayJobs, setDisplayJobs] = useState([]);
  const allJobs = useLoaderData();
  const applied_jobs = getJobs();
  const newArray = [];
  console.log(applied_jobs, allJobs);

  for (let job of allJobs) {
    for (let id of applied_jobs) {
      if (job.id === id) {
        newArray.push(job);
      }
    }
  }

  return (
    <div>
      All Jobs : {allJobs.length} <br />
      Applied Jobs : {applied_jobs.length}
      <div>
        {displayJobs.map((job, idx) => (
          <li key={idx}>Hello {job} </li>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
