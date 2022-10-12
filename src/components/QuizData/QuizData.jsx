import React from "react";
import { Form } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./QuizData.css";
const QuizData = ({ data }) => {
  const { question, options, correctAnswer } = data;
  const handleChange = (event, correctAnswer) => {
    const value = event.target.value;
    return value === correctAnswer
      ? toast.success("Correct Answer")
      : toast.error("Wrong Answer!");
  };
  const handleEyeClick = (answer) => {
    toast.success(answer);
  };
  return (
    <div className="shadow p-3 bg-body rounded mt-5">
      <span
        className="d-flex justify-content-end"
        style={{ cursor: "pointer" }}
        value={correctAnswer}
        onClick={() => handleEyeClick(correctAnswer)}
      >
        <FontAwesomeIcon icon={faEye} className="fs-3" />
      </span>
      <h3 className="mt-3">{HTMLReactParser(question)}</h3>
      <Form>
        <Form.Group>
          {options.map((quizOption) => (
            <div className="shadow-none p-3 my-4 bg-light rounded" key={v4()}>
              <Form.Check
                className="fs-4"
                name="formHorizontalRadios"
                label={quizOption}
                value={quizOption}
                type="radio"
                id={v4()}
                onChange={(event) => handleChange(event, correctAnswer)}
              />
            </div>
          ))}
        </Form.Group>
      </Form>
      <ToastContainer position="top-center" autoClose={1500} theme="dark" />
    </div>
  );
};

export default QuizData;
