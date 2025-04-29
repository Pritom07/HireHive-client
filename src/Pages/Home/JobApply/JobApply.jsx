import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../Context/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { User } = useAuth();
  const { jobID } = useParams();
  const navigate = useNavigate();

  const handleApply = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const applicantInfo = Object.fromEntries(formData.entries());

    fetch("http://localhost:5000/jobApplications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: `You are successfully applied for the JobID : "${jobID}"`,
            icon: "success",
            confirmButtonColor: "blue",
            confirmButtonText: "Thanks for the Application",
            draggable: true,
          });
        }
        navigate("/application/me");
      });
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen font-inter px-2.5">
      <h1 className="text-center text-2xl md:text-3xl font-merriweather font-semibold mt-1.5">
        Apply Your Dream Job Here
      </h1>
      <form
        onSubmit={handleApply}
        className="bg-slate-50 px-6 py-8 rounded-[5px] border border-blue-600 w-[100%] max-w-xl mx-auto mt-5"
      >
        <div className="w-full">
          <label className="label">Job ID :</label>
          <br />
          <input
            type="text"
            defaultValue={jobID}
            className="input w-full"
            name="jobId"
            required
          />
        </div>
        <div className="w-full mt-1.5">
          <label className="label">Applicant Name :</label>
          <br />
          <input
            type="text"
            defaultValue={User?.displayName}
            className="input w-full"
            placeholder="Use the Similar Name that you used for LogIn"
            name="applicant_name"
            required
          />
        </div>
        <div className="w-full mt-1.5">
          <label className="label">Applicant Email :</label>
          <br />
          <input
            type="email"
            defaultValue={User?.email}
            className="input w-full"
            placeholder="Use the Similar Email that you used for LogIn"
            name="applicant_email"
            required
          />
        </div>
        <div className="w-full mt-1.5">
          <label className="label">Github URL :</label>
          <br />
          <input
            type="url"
            className="input w-full focus:outline-none focus:border-[#05264e]"
            placeholder="Github URL"
            name="githubURL"
            required
          />
        </div>
        <div className="w-full mt-1.5">
          <label className="label">LinkedIn URL :</label>
          <br />
          <input
            type="url"
            className="input w-full focus:outline-none focus:border-[#05264e]"
            placeholder="LinkedIn URL"
            name="linkedinURL"
            required
          />
        </div>
        <div className="w-full mt-1.5">
          <label className="label">Resume URL :</label>
          <br />
          <input
            type="url"
            className="input w-full focus:outline-none focus:border-[#05264e]"
            placeholder="Resume URL"
            name="resumeURL"
            required
          />
        </div>
        <button className="w-full text-white bg-blue-600 mt-3.5 p-1.5 rounded-[5px] cursor-pointer hover:bg-[#05264e] font-semibold">
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default JobApply;
