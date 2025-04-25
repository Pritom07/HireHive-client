import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import { useState } from "react";

const Alljobs = () => {
  const jobsArray = useLoaderData();
  const [jobs, setJobs] = useState(jobsArray);

  const handleDhakaJobs = () => {
    const dhakaJobs = jobsArray.filter((job) => {
      const dhaka = job.location.split(",");
      return dhaka[1]?.trim() === "Dhaka";
    });
    setJobs(dhakaJobs);
  };

  const handleCtgJobs = () => {
    const ctgJobs = jobsArray.filter((job) => {
      const ctg = job.location.split(",");
      return ctg[1]?.trim() === "Chittagong";
    });
    setJobs(ctgJobs);
  };

  const handleAllJobs = () => {
    setJobs(jobsArray);
  };

  return (
    <div className="max-w-7xl mx-auto font-inter mt-3 px-3 lg:px-0.5">
      <div className="flex flex-col md:flex-row justify-between items-center p-1">
        <div className="max-w-xl w-full mx-auto">
          <h1 className="font-merriweather text-[22px] sm:text-3xl md:text-4xl font-bold text-[#05264e] text-center">
            Find Your Best Job Here
          </h1>
        </div>

        <div className="dropdown dropdown-end mt-3 md:mt-0">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-nowrap border-2 border-[#05264e] text-[#05264e]"
          >
            Search By Area ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border-2 border-blue-600 mt-1"
          >
            <li onClick={handleDhakaJobs}>
              <a>Dhaka</a>
            </li>
            <li onClick={handleCtgJobs}>
              <a>Chittagong</a>
            </li>
            <li onClick={handleAllJobs}>
              <a>All jobs</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {jobs.map((job) => (
          <HomeCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Alljobs;
