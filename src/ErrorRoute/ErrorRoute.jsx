import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ErrorRoute = () => {
  const image = "https://i.ibb.co.com/nMQV4Lnn/6325254.jpg";
  return (
    <div className="max-w-7xl mx-auto">
      <Link to="/">
        <button className="bg-blue-600 rounded-[5px] px-4 py-2.5 text-white font-semibold mt-5 cursor-pointer">
          <FaArrowLeft className="inline mr-1" />
          Go Back
        </button>
      </Link>
      <div className="flex justify-center items-center min-h-screen">
        <img src={image} className="w-xl" />
      </div>
    </div>
  );
};

export default ErrorRoute;
