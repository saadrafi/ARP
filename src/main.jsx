import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/Layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import SamplePage from "./components/SamplePage/SamplePage.jsx";
import AboutUs from "./components/AboutPage/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "sample", element: <SamplePage /> },
      { path: "about-us", element: <AboutUs /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
