import PropTypes from "prop-types";
import HomeCard from "../HomeCard/HomeCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PopularHomeJobs = ({ jobs }) => {
  const navigate = useNavigate();

  const handleJobsShowing = () => {
    navigate("/all-jobs");
  };
  return (
    <div className="max-w-7xl mx-auto font-inter px-3 lg:px-0.5">
      <h1 className="font-merriweather text-center font-bold text-4xl text-[#05264e] mt-6">
        Jobs of the day
      </h1>
      <h1 className="text-center text-xl text-slate-500 font-semibold">
        Search and connect with the right candidates faster.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {jobs.slice(0, 6).map((job) => (
          <HomeCard key={job._id} job={job} />
        ))}
      </div>
      <div className="flex justify-end mt-3.5">
        <button
          onClick={handleJobsShowing}
          className="cursor-pointer text-[#05264e] hover:text-blue-600 font-semibold"
        >
          See More <FaArrowRightLong className="inline" />
        </button>
      </div>
    </div>
  );
};

PopularHomeJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default PopularHomeJobs;
