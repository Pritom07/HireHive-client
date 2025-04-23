import { Link } from "react-router-dom";
import bannerimg1 from "../../../assets/bannerimg1.jpg";
import bannerimg2 from "../../../assets/bannerimg2.jpg";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";
import "./Topbanner.css";

const Topbanner = () => {
  return (
    <div
      className="hero bg-blue-100 min-h-screen max-w-7xl mx-auto rounded-[4px] scroll-smooth pb-3 lg:pb-0"
      style={{ willChange: "transform" }}
    >
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-9 lg:px-10 justify-center items-center">
        {/* Image Container */}
        <div className="w-full sm:w-1/2 lg:w-[35%]">
          <motion.img
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 10, ease: easeInOut, repeat: Infinity }}
            src={bannerimg1}
            className="max-w-full shadow-2xl w-[90%] md:w-[120%] mx-auto rounded-t-4xl rounded-r-4xl border-b-8 border-l-8 border-blue-600"
            style={{ willChange: "transform" }}
          />
          <motion.img
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 7, ease: easeInOut, repeat: Infinity }}
            src={bannerimg2}
            className="max-w-full rounded-t-4xl rounded-r-4xl shadow-2xl w-[80%] md:w-[90%] mx-auto lg:mx-0 ml-8 mt-10 sm:mt-8 lg:mt-13 border-b-8 border-l-8 border-blue-600"
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Text and Button Container */}
        <div className="w-full sm:w-1/2 lg:w-[65%] text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="py-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-merriweather text-[#05264e] lg:pl-4 sm:-mt-10 md:-mt-0 lg:-mt-16"
            style={{ willChange: "transform" }}
          >
            The <span className="text-blue-600 shadowText">Easiest Way </span>
            to Get Your New Job
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-slate-600 text-2xl md:text-[35px] lg:text-[25px] text-justify lg:text-left lg:pl-4 lg:-mt-4"
            style={{ willChange: "transform" }}
          >
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </motion.p>
          <Link to="/signin">
            <motion.button
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2 }}
              className="btn bg-blue-600 mt-4 text-white px-10 py-3 hover:-translate-y-1 duration-300 lg:ml-4 hover:bg-[#05264e]"
              style={{ willChange: "transform" }}
            >
              Sign In
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbanner;
