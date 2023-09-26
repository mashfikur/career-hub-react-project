import { useLoaderData } from "react-router-dom";
import { getJobs } from "../../localStorage";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const storedJobs = getJobs();
    if (storedJobs.length > 0) {
      const newArray = [];
      for (let storedId of storedJobs) {
        const job = jobs.find((job) => job.id === storedId);

        if (job) {
          newArray.push(job);
        }
      }

      setAppliedJobs(newArray);
      setDisplay(newArray);
    }
  }, [jobs]);

  const handleFilter = (filterText) => {
    if (filterText === "all") {
      setDisplay(appliedJobs);
    } else if (filterText === "Remote") {
      const job = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );

      setDisplay(job);
    } else if (filterText === "Onsite") {
      const job = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplay(job);
    }
  };

  return (
    <div className="max-w-[80rem] mx-auto mb-20">
      <Helmet>
        <title>Career Hub | Applied Jobs </title>
      </Helmet>
      <div>
        <details className="dropdown my-4 ">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Remote")}>Remote</a>
            </li>
            <li>
              <a onClick={() => handleFilter("Onsite")}>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <ul className="text-center">
        {display.map((job, idx) => (
          <li key={idx}>
            {job.job_title} | {job.company_name} | {job.remote_or_onsite}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
