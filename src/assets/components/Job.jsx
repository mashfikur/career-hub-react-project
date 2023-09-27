import PropTypes from "prop-types";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border-2  rounded p-14">
      <img src={logo} alt="" />

      <h3 className="text-xl mt-8 font-extrabold">{job_title}</h3>
      <h4 className="font-semibold mb-4 text-[#757575]">{company_name}</h4>

      <div>
        <div className="flex gap-4 ">
          <h3 className="px-4 py-2 border-2 rounded border-[#9873FF] text-[#9873FF]">
            {remote_or_onsite}
          </h3>
          <h3 className="px-4 py-2 border-2 rounded border-[#9873FF] text-[#9873FF]">
            {job_type}
          </h3>
        </div>

        <div className="flex items-center gap-4 mt-4 mb-4">
          <h3 className="flex items-center font-semibold text-[#757575]">
            {" "}
            <CiLocationOn></CiLocationOn> {location}
          </h3>
          <h3 className="flex items-center font-semibold text-[#757575]">
            {" "}
            <CiDollar></CiDollar> {salary}
          </h3>
        </div>
        <div>
          <Link to={`/details/${id}`}>
            <button className="btn btn-own">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
