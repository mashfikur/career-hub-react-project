import { useLoaderData, useParams } from "react-router-dom";
import "./common/common.css";
import Desctiption from "./Desctiption";
import JobSidebar from "./JobSidebar";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobID } = useParams();
  const intId = parseInt(jobID);

  const selctedJob = jobs.find((job) => job.id === intId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    job_title,
    salary,
    company_name,
    id,
  } = selctedJob;

  return (
    <div>
      <Helmet>
        <title>Career Hub | Job Details - {jobID} </title>
      </Helmet>
      <div className="blue-bg">
        <div className="max-w-[80rem] mx-auto">
          <h3 className="text-3xl py-28 font-extrabold text-center">
            Job Details
          </h3>
        </div>
      </div>
      <div className="max-w-[80rem] my-24 mx-auto">
        <div className="flex gap-5">
          <div className="w-3/4  space-y-6">
            <Desctiption
              title={"Job Description"}
              desc={job_description}
            ></Desctiption>
            <Desctiption
              title={"Job Responsibility"}
              desc={job_responsibility}
            ></Desctiption>
            <Desctiption
              title={"Educational Requirements:"}
              desc={educational_requirements}
            ></Desctiption>
            <Desctiption title={"Experiences"} desc={experiences}></Desctiption>
          </div>
          <div className="w-1/4">
            <JobSidebar
              salary={salary}
              job_title={job_title}
              contact_information={contact_information}
              company_name={company_name}
              id={id}
            ></JobSidebar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
