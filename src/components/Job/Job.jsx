import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {id,logo,job_title, company_name,remote_or_onsite,location, job_type, salary} = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#AA8FFF]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#AA8FFF]">{job_type}</button>
          </div>
          <div className="flex gap-10 text-2xl items-center">
          <h3 className="flex gap-2 items-center"><CiLocationOn /> {location}</h3> 
          <h3 className="flex gap-2 items-center"><AiOutlineDollarCircle /> salary: {salary}</h3>
          </div>
          <div className="card-actions ">
            <Link to={`job/${id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Job;