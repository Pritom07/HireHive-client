import { useLoaderData } from "react-router-dom";
import PopularHomeJobs from "./PopularHomeJobs/PopularHomeJobs";
import Topbanner from "./Topbanner/Topbanner";

const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Topbanner />
      <PopularHomeJobs jobs={jobs} />
    </div>
  );
};

export default Home;
