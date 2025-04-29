import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/addJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import Alljobs from "../Pages/Home/Alljobs/Alljobs";
import JobDetails from "../Pages/Home/JobDetails/JobDetails";
import ViewApplicants from "../Pages/MyPostedJobs/ViewApplicants/ViewApplicants";
import JobApply from "../Pages/Home/JobApply/JobApply";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorRoute from "../ErrorRoute/ErrorRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App></App>}>
        <Route
          index
          loader={() => fetch("https://hirehive-server.vercel.app/jobs")}
          element={<Home></Home>}
        ></Route>
        <Route
          path="/all-jobs"
          loader={() => fetch("https://hirehive-server.vercel.app/jobs")}
          element={<Alljobs />}
        ></Route>
        <Route
          path="/jobDetails/:id"
          loader={({ params }) =>
            fetch(`https://hirehive-server.vercel.app/jobs/${params.id}`)
          }
          element={
            <PrivateRoute>
              <JobDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/jobDetails/apply/:jobID"
          element={
            <PrivateRoute>
              <JobApply />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/application/me"
          element={
            <PrivateRoute>
              <MyApplications />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/add-job"
          element={
            <PrivateRoute>
              <AddJob />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/my-jobs"
          element={
            <PrivateRoute>
              <MyPostedJobs />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/my-jobs/applicants/:jobID"
          loader={({ params }) =>
            fetch(
              `https://hirehive-server.vercel.app/jobApplications/${params.jobID}`
            )
          }
          element={<ViewApplicants />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>
      ,<Route path="*" element={<ErrorRoute />}></Route>
    </>
  )
);
export default router;
