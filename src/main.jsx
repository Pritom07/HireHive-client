import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import Authprovider from "./Context/Authprovider";
import { ToastContainer, Slide } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </Authprovider>
  </StrictMode>
);
