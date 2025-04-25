import PropTypes from "prop-types";

const PopularHomeJobs = ({ jobs }) => {
  return (
    <div className="max-w-7xl mx-auto font-inter">
      <h1 className="font-merriweather text-center font-bold text-4xl text-[#05264e] mt-5">
        Jobs of the day
      </h1>
      <h1 className="text-center text-xl text-slate-500 font-semibold">
        Search and connect with the right candidates faster.
      </h1>
      <div>
        {/* {
            jobs.map(job=>)
        } */}
      </div>
    </div>
  );
};

PopularHomeJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default PopularHomeJobs;
