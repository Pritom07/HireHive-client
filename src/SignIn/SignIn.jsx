import { FcGoogle } from "react-icons/fc";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import verification from "../assets/verify.json";
import { useLottie } from "lottie-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import useAuth from "../Context/useAuth";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const options = {
    animationData: verification,
    loop: true,
  };

  const { View } = useLottie(options);
  const { signInAccount, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();

  const handleGooglelogin = () => {
    googleLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        const name = user.displayName;
        const email = user.email;
        const lastSignInTime = user.metadata.lastSignInTime;
        const creationTime = user.metadata.creationTime;
        const signedInUser = {
          name,
          email,
          lastSignInTime,
          creationTime,
          signedInMedium: "Google",
        };

        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signedInUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.upsertedCount > 0 || data.modifiedCount > 0) {
              toast.success(`Welcome ${name}, Have a Good Day`, {
                style: {
                  backgroundColor: "#E2E8F0",
                  color: "#05264e",
                },
              });
            }
          });
        {
          location?.state ? navigate(location?.state) : navigate("/");
        }
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          style: {
            backgroundColor: "#E2E8F0",
            color: "#05264e",
          },
        });
      });
  };

  const handleSignInForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signinData = Object.fromEntries(formData.entries());
    const name = signinData.name;
    const email = signinData.email;
    const password = signinData.password;

    signInAccount(email, password)
      .then((res) => {
        const user = res.user;
        signinData.lastSignInTime = user.metadata.lastSignInTime;

        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signinData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount === 1) {
              toast.success(`Welcome ${name}, Have a good day.`, {
                style: {
                  backgroundColor: "#E2E8F0",
                  color: "#05264e",
                },
              });
            }
            {
              location?.state ? navigate(location?.state) : navigate("/");
            }
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="font-inter mt-6 px-3 lg:px-8 flex flex-col lg:flex-row gap-2 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center lg:w-[60%]"
      >
        <h1 className="font-merriweather text-2xl font-semibold text-blue-600">
          Welcome back
        </h1>
        <h1 className="text-3xl lg:text-4xl font-merriweather font-semibold text-[#05264e] mt-3 text-center lg:text-left">
          Member Login
        </h1>

        <button
          onClick={handleGooglelogin}
          className="p-3 w-full sm:w-[80%] border-1 border-slate-200 rounded-[6px] mt-5 cursor-pointer hover:-translate-y-1 hover:text-blue-600 hover:shadow-sm duration-200 font-semibold text-nowrap flex justify-center items-center"
        >
          <FcGoogle className="inline mr-2 text-2xl" />
          Sign In with Google
        </button>

        <div className="divider mt-7">Or continue with</div>

        <form onSubmit={handleSignInForm} className=" w-full sm:w-[80%]">
          <div>
            <label className="text-[#05264e]">
              Full Name
              <MdOutlineStarPurple500 className="inline text-[10px] relative bottom-1 ml-0.5" />
            </label>
            <input
              type="text"
              className="input p-6 mt-1 w-full focus:outline-none focus:border-blue-600 text-lg"
              placeholder="Name you given when register.e.g- Steven Job"
              name="name"
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
              name="email"
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
              name="password"
              required
            />
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 cursor-pointer"
                name="rememberCheckBox"
              />
              <span className="text-slate-500 text-[15px] font-semibold">
                Remember me
              </span>
            </div>
            <Link
              to=""
              className="mt-2 sm:mt-0 text-slate-400 cursor-pointer text-sm hover:text-blue-600 underline"
            >
              Forget password
            </Link>
          </div>

          <button className="bg-[#05264e] hover:bg-blue-600 rounded-[6px] p-3 text-white font-semibold cursor-pointer w-full mt-4 hover:-translate-y-1 duration-200">
            Log in
          </button>
        </form>

        <h1 className="mt-5 text-center">
          <span className="text-slate-400">Already have an account?</span>
          <span className="text-[#05264e]">
            <Link to="/register">Sign Up</Link>
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[40%] mt-4 lg:mt-0 flex justify-center items-center"
      >
        <div className="w-[130%]">{View}</div>
      </motion.div>
    </div>
  );
};

export default SignIn;
