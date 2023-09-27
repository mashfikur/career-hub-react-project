import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/components/Root.jsx";
import Error from "./assets/components/Error.jsx";
import Statistics from "./assets/components/Statistics.jsx";
import JobDetails from "./assets/components/JobDetails";
import AppliedJobs from "./assets/components/AppliedJobs";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blog",
        element: <div>blog</div>,
      },
      {
        path: "/details/:jobID",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <HelmetProvider>

      <RouterProvider router={router} />
      
    </HelmetProvider>

  </React.StrictMode>
);
