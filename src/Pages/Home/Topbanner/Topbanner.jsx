import { Link } from "react-router-dom";
import bannerimg1 from "../../../assets/bannerimg1.jpg";
import bannerimg2 from "../../../assets/bannerimg2.jpg";
// eslint-disable-next-line no-unused-vars
import { easeInOut, motion } from "motion/react";
import "./Topbanner.css";

const Topbanner = () => {
  return (
    <div
      className="hero bg-blue-100 min-h-screen max-w-7xl mx-auto rounded-[4px] scroll-smooth"
      style={{ willChange: "transform" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-9 px-10 justify-center items-center">
        <div className="w-[35%]">
          <motion.img
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 10, ease: easeInOut, repeat: Infinity }}
            src={bannerimg1}
            className="max-w-sm shadow-2xl w-96 rounded-t-4xl rounded-r-4xl border-b-8 border-l-8 border-blue-600"
            style={{ willChange: "transform" }}
          ></motion.img>
          <motion.img
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 7, ease: easeInOut, repeat: Infinity }}
            src={bannerimg2}
            className="max-w-sm rounded-t-4xl rounded-r-4xl shadow-2xl w-80 border-b-8 border-l-8 border-blue-600 ml-8 mt-13"
            style={{ willChange: "transform" }}
          ></motion.img>
        </div>
        <div className="w-[65%]">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="py-6 text-7xl font-bold font-merriweather text-[#05264e]"
            style={{ willChange: "transform" }}
          >
            The <span className="text-blue-600 shadowText">Easiest Way </span>
            to Get Your New Job
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-slate-600 text-2xl -mt-4"
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
              className="btn bg-blue-600 mt-3 text-white px-10 hover:-translate-y-1 duration-300"
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
