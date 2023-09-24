import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/components/Root.jsx";
import Error from "./assets/components/Error.jsx";
import Statistics from "./assets/components/Statistics.jsx";
import JobDetails from "./assets/components/JobDetails";
import AppliedJobs from "./assets/components/AppliedJobs";

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
        loader: () => fetch("https://www.jsonkeeper.com/b/KBOR"),
      },
      {
        path: "/blog",
        element: <div>blog</div>,
      },
      {
        path: "/job/:jobID",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("https://www.jsonkeeper.com/b/KBOR"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
