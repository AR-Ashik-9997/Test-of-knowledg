import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Homes/Home"
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blogs/Blog";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/quiz/:quizId", loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`), element: <Quiz /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

export default router;
