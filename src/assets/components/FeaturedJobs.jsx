import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [slicedList, setSlicedList] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="max-w-[80rem] mx-auto mb-32 ">
      <SectionTitle title={"Featured Jobs"}>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </SectionTitle>

      <div className="grid grid-cols-2 gap-6 mb-10">
        {jobs.slice(0, slicedList).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={() => setSlicedList(jobs.length)}
          className={`btn btn-own ${
            slicedList=== jobs.length ? "hidden":""
          } `}
        >
          See All Jobs
        </button>


        <button
          onClick={() => setSlicedList(4)}
          className={`btn btn-own ${
            slicedList=== jobs.length ? "":"hidden"
          } `}
        >
          See Less 
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
