import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    // console.log('current',jobs,id, job);
    const {job_title, company_name} = job;
    const handleApplyJOb = () => {
      saveJobApplication(idInt);
      toast('You have applied successfully')
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                  <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details Comming here</h2>
                    <h2>Job details of: {job_title}</h2>
                    <p>{company_name}</p>
                  </div>
                  <div className="border md:col-span-1">
                    <h2 className="text-2xl"> side thing</h2>
                    <button onClick={handleApplyJOb} className="btn btn-primary w-full">Apply Now</button>
                  </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;