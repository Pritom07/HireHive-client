import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="rgba(5, 38, 78, 1)" size={20} />
    </div>
  );
};

export default Loader;
