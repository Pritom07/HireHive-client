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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App></App>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/application/me" element={<MyApplications />}></Route>
        <Route path="/add-job" element={<AddJob />}></Route>
        <Route path="/my-jobs" element={<MyPostedJobs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Route>
    </>
  )
);
export default router;
