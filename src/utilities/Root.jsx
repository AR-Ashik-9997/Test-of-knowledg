import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export const QuizContext = createContext([]);
const Root = () => {
  const Quiz = useLoaderData();
  return (
    <QuizContext.Provider value={Quiz.data}>
      <Header />
      <Outlet />
      <Footer />
    </QuizContext.Provider>
  );
};

export default Root;
