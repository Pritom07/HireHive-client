import PropTypes from "prop-types";
import HomeCard from "../HomeCard/HomeCard";

const PopularHomeJobs = ({ jobs }) => {
  return (
    <div className="max-w-7xl mx-auto font-inter">
      <h1 className="font-merriweather text-center font-bold text-4xl text-[#05264e] mt-6">
        Jobs of the day
      </h1>
      <h1 className="text-center text-xl text-slate-500 font-semibold">
        Search and connect with the right candidates faster.
      </h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {jobs.slice(0, 6).map((job) => (
          <HomeCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

PopularHomeJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default PopularHomeJobs;
