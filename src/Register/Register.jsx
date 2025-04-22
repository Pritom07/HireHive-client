import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";
import verification from "../assets/verify.json";
import { useLottie } from "lottie-react";

const Register = () => {
  const options = {
    animationData: verification,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="font-inter mt-6 px-3 lg:px-8 flex flex-col lg:flex-row gap-2 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center lg:w-[60%]">
        <h1 className="font-merriweather text-2xl font-semibold text-blue-600">
          Register
        </h1>
        <h1 className="text-3xl lg:text-4xl font-merriweather font-semibold text-[#05264e] mt-3 text-center lg:text-left">
          Start your Experience here
        </h1>

        <button className="p-3 w-full sm:w-[80%] border-1 border-slate-200 rounded-[6px] mt-5 cursor-pointer hover:-translate-y-1 hover:text-blue-600 hover:shadow-sm duration-200 font-semibold text-nowrap flex justify-center items-center">
          <FcGoogle className="inline mr-2 text-2xl" />
          Sign Up with Google
        </button>

        <button className="p-3 w-full sm:w-[80%] border-1 border-slate-200 rounded-[6px] mt-4 cursor-pointer hover:-translate-y-1 hover:text-blue-600 hover:shadow-sm duration-200 font-semibold text-nowrap flex justify-center items-center">
          <FaGithub className="inline mr-2 text-2xl" />
          Sign Up with Github
        </button>

        <div className="divider mt-7">Or continue with</div>

        <form className=" w-full sm:w-[80%]">
          <div>
            <label className="text-[#05264e]">
              Full Name
              <MdOutlineStarPurple500 className="inline text-[10px] relative bottom-1 ml-0.5" />
            </label>
            <input
              type="text"
              className="input p-6 mt-1 w-full focus:outline-none focus:border-blue-600 text-lg"
              placeholder="Steven Job"
              required
            />
          </div>

          <div className="mt-4">
            <label className="text-[#05264e]">
              Email
              <MdOutlineStarPurple500 className="inline text-[10px] relative bottom-1 ml-0.5" />
            </label>
            <input
              type="email"
              className="input p-6 mt-1 w-full focus:outline-none focus:border-blue-600 text-lg"
              placeholder="stevenjob@gmail.com"
              required
            />
          </div>

          <div className="mt-4">
            <label className="text-[#05264e]">
              Username
              <MdOutlineStarPurple500 className="inline text-[10px] relative bottom-1 ml-0.5" />
            </label>
            <input
              type="text"
              className="input p-6 mt-1 w-full focus:outline-none focus:border-blue-600 text-lg"
              placeholder="stevenjob"
              required
            />
          </div>

          <div className="mt-4">
            <label className="text-[#05264e]">
              Password
              <MdOutlineStarPurple500 className="inline text-[10px] relative bottom-1 ml-0.5" />
            </label>
            <input
              type="password"
              className="input p-6 mt-1 w-full focus:outline-none focus:border-blue-600 text-lg"
              placeholder="******"
              required
            />
          </div>

          <div className="mt-4">
            <label className="text-[#05264e]">
              Re-Password
              <MdOutlineStarPurple500 className="inline text-[10px] relative bottom-1 ml-0.5" />
            </label>
            <input
              type="password"
              className="input p-6 mt-1 w-full focus:outline-none focus:border-blue-600 text-lg"
              placeholder="******"
              required
            />
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="checkBox"
                className="mr-3 cursor-pointer"
              />
              <span className="text-slate-500 text-[15px] font-semibold">
                Agree to our terms and policy
              </span>
            </div>
            <Link
              to=""
              className="mt-2 sm:mt-0 text-slate-400 cursor-pointer text-sm hover:text-blue-600 underline"
            >
              Learn More
            </Link>
          </div>

          <button className="bg-[#05264e] hover:bg-blue-600 rounded-[6px] p-3 text-white font-semibold cursor-pointer w-full mt-4 hover:-translate-y-1 duration-200">
            Submit & Register
          </button>
        </form>

        <h1 className="mt-5 text-center">
          <span className="text-slate-400">Already have an account?</span>
          <span className="text-[#05264e]">
            <Link to="/signin">Sign In</Link>
          </span>
        </h1>
      </div>
      <div className="w-full lg:w-[40%] mt-4 lg:mt-0 flex justify-center items-center">
        <div className="w-[130%]">{View}</div>
      </div>
    </div>
  );
};

export default Register;
