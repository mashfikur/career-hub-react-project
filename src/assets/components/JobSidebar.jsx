import PropTypes from "prop-types";
import "./common/common.css";

import {
  AiOutlineDollarCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { saveJob } from "../../localStorage";

const JobSidebar = ({
  contact_information,
  job_title,
  salary,
  company_name,
  id,
}) => {

  const handleApply=(id)=>{
    saveJob(id)
  }

  return (
    <div>
      <div className="space-y-3 card-bg p-4 mb-4 ">
        <h3 className="text-xl font-extrabold">Job Details</h3>
        <hr className="border-[.2 px] border-black" />

        <span className="flex items-center gap-2">
          <AiOutlineDollarCircle></AiOutlineDollarCircle>
          <h3 className="font-extrabold">Salray : {salary} (per month) </h3>
        </span>
        <span className="flex items-center gap-2">
          <HiOutlineCalendarDays></HiOutlineCalendarDays>
          <h3 className="font-extrabold">Job Title : {job_title} </h3>
        </span>
        <span className="flex items-center gap-2">
          <HiOutlineCalendarDays className=""></HiOutlineCalendarDays>
          <h3 className="font-extrabold">Company Name: {company_name} </h3>
        </span>

        <h3 className="text-xl font-extrabold">Contact Information</h3>
        <hr className="border-[.2 px] border-black" />
        <span className="flex items-center gap-2">
          <AiOutlinePhone></AiOutlinePhone>
          <h3 className="font-extrabold">
            Phone : {contact_information.phone}{" "}
          </h3>
        </span>
        <span className="flex items-center gap-2">
          <AiOutlineMail></AiOutlineMail>
          <h3 className="font-extrabold">
            Email : {contact_information.email}{" "}
          </h3>
        </span>
        <span className="flex  gap-2">
          <CiLocationOn className="text-2xl"></CiLocationOn>
          <h3 className="font-extrabold">
            Address : {contact_information.address}{" "}
          </h3>
        </span>
      </div>
      <div className="flex flex-col">
        <button 
        onClick={()=>handleApply(id)}
        className="btn btn-own">Apply Now</button>
      </div>
    </div>
  );
};

JobSidebar.propTypes = {
  contact_information: PropTypes.object,
  salary: PropTypes.string,
  job_title: PropTypes.string,
  company_name: PropTypes.string,
  id: PropTypes.number,
};

export default JobSidebar;
