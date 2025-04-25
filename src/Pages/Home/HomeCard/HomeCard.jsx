import PropTypes from "prop-types";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const HomeCard = ({ job }) => {
  const [highlight, setHighlet] = useState(false);
  const navigate = useNavigate();

  const {
    _id,
    company_logo,
    company,
    location,
    title,
    jobType,
    description,
    requirements,
    salaryRange,
  } = job;

  const ViewJobDetails = (id) => {
    navigate(`/jobDetails/${id}`);
  };

  return (
    <div
      onMouseEnter={() => setHighlet(true)}
      onMouseLeave={() => setHighlet(false)}
      className="card bg-blue-50 shadow-sm cursor-pointer hover:-translate-y-2 hover:bg-base-100 border-2 border-slate-200 hover:border-slate-300"
    >
      <div className="flex items-center gap-3 px-3 py-4">
        <figure>
          <img src={company_logo} alt="Job card" className="w-16" />
        </figure>
        <div>
          <h1 className="text-[#05264e] text-xl font-semibold hover:text-blue-600">
            {company}
          </h1>
          <h1 className="text-slate-500">
            <IoLocationSharp className="inline mr-0.5" />
            {location}
          </h1>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-[#05264e] hover:text-blue-600 text-xl">
          {title}
          <div className="badge badge-primary">NEW</div>
        </h2>
        <div>
          <h1 className="text-slate-500 text-[17px]">
            <PiShoppingBagOpenBold className="inline mr-1 text-xl" />
            {jobType}
          </h1>
        </div>
        <p className="text-slate-700 text-[17px] font-medium">{description}</p>
        <div className="-ml-2 text-slate-500">
          {requirements.map((requirement, idx) => (
            <button
              key={idx}
              className={`p-3 bg-slate-200 m-2 rounded-[5px] ${
                highlight && "border-2 border-blue-600"
              }`}
            >
              {requirement}
            </button>
          ))}
        </div>
        <div className="card-actions flex justify-between items-center">
          <h1 className="text-[22px] text-blue-600 font-semibold">
            {salaryRange.currency} {salaryRange.min} TK.
            <span className="text-slate-500 text-[18px] ml-1">/ HOUR</span>
          </h1>
          <button
            onClick={() => ViewJobDetails(_id)}
            className={`p-2 rounded-[5px] cursor-pointer ${
              highlight
                ? "bg-blue-600 text-white"
                : "bg-slate-200 text-blue-600"
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default HomeCard;
