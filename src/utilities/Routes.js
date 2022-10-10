import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import Blog from "../components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

export default router;
