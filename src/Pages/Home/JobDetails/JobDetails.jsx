import { Link, useLoaderData } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { TbPointFilled } from "react-icons/tb";
import { FaArrowLeftLong } from "react-icons/fa6";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    title,
  } = job;

  return (
    <section className="px-3 min-h-screen mt-3 xl:mt-1">
      <div className="card flex flex-col lg:flex-row bg-base-100 shadow-sm max-w-7xl mx-auto border-2 border-blue-600 font-inter">
        <figure className="w-full lg:w-auto">
          <img
            src={company_logo}
            className="w-full max-w-xs mx-auto lg:min-w-[395px] lg:ml-5"
            alt={`${company} logo`}
          />
        </figure>

        <div className="card-body mt-1 w-full">
          <h2 className="text-[#05264e] font-merriweather text-3xl md:text-4xl font-bold">
            {company}
          </h2>
          <h1 className="text-lg md:text-xl font-medium text-slate-500">
            <MdLocationPin className="inline" /> {location}
          </h1>

          <div className="flex flex-col md:flex-row gap-6 mt-3">
            <div className="space-y-2">
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                Job Id: <span className="text-slate-600">{_id}</span>
              </h1>
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                Job Title: <span className="text-slate-600">{title}</span>
              </h1>
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                Job Type: <span className="text-slate-600">{jobType}</span>
              </h1>
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                Category: <span className="text-slate-600">{category}</span>
              </h1>
            </div>

            <div className="space-y-2">
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                HR Name: <span className="text-slate-600">{hr_name}</span>
              </h1>
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                HR Email: <span className="text-slate-600">{hr_email}</span>
              </h1>
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                Deadline:{" "}
                <span className="text-slate-600">{applicationDeadline}</span>
              </h1>
              <h1 className="text-[#05264e] text-[17px] font-semibold">
                <VscDebugBreakpointLog className="inline mr-1" />
                Salary:{" "}
                <span className="text-slate-600">
                  {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
                </span>
              </h1>
            </div>
          </div>

          <div className="mt-3">
            <h1 className="text-[#05264e] text-[17px] font-semibold">
              <TbPointFilled className="inline mr-1" />
              Description: <span className="text-slate-600">{description}</span>
            </h1>
          </div>

          <div className="mt-3">
            <h1 className="text-[#05264e] text-[17px] font-semibold mb-2">
              <TbPointFilled className="inline mr-1" />
              Requirements:
            </h1>
            <div className="flex flex-wrap gap-3">
              {requirements.map((req, idx) => (
                <button
                  key={idx}
                  className="bg-slate-200 rounded-[5px] px-4 py-2 border-2 border-[#05264e] text-[#05264e] hover:border-blue-600 hover:text-blue-600 cursor-pointer"
                >
                  {req}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <h1 className="text-[#05264e] text-[17px] font-semibold mb-1">
              <TbPointFilled className="inline mr-1" />
              Responsibilities:
            </h1>
            <ul className="space-y-1">
              {responsibilities.map((res, idx) => (
                <li key={idx} className="text-slate-600 ml-6">
                  {idx + 1}.{" "}
                  <span className="text-[16px] font-medium">{res}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-actions flex flex-col sm:flex-row gap-3 justify-end mt-4 w-full">
            <Link to="/all-jobs" className="w-full sm:w-auto">
              <button className="btn bg-red-500 text-white hover:bg-red-600 w-full">
                <FaArrowLeftLong className="inline mr-1" />
                Go Back
              </button>
            </Link>
            <button className="btn bg-blue-600 text-white hover:bg-[#05264e] w-full sm:w-auto">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
