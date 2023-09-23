import { useLoaderData, useParams } from "react-router-dom";
import "./common/common.css";
import Desctiption from "./Desctiption";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobID } = useParams();
  const intId = parseInt(jobID);

  const selctedJob = jobs.find((job) => job.id === intId);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = selctedJob;

  return (
    <div>
      <div className="blue-bg">
        <div className="max-w-[80rem] mx-auto">
          <h3 className="text-3xl py-28 font-extrabold text-center">
            Job Details
          </h3>
        </div>
      </div>
      <div className="max-w-[80rem] mt-28 mx-auto">
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
          <div className="w-1/4 border-2">sidebar</div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
