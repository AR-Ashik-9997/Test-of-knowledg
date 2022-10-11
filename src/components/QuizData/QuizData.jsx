import React from "react";
import { Col, Form } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
const QuizData = ({ data }) => {
  const { question, options } = data;
  console.log(options);
  return (
    <Col lg={12} md={12} sm={12}>
      <div className="shadow p-3 bg-body rounded mt-5">
        <h3>{HTMLReactParser(question)}</h3>
        <Form className="fs-5">
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-2">
              {options.map((quizOption) => (
                <Form.Check
                  type={type}
                  name="group1"
                  id={`default-${type}`}
                  label={quizOption}
                />
              ))}
            </div>
          ))}
        </Form>
      </div>
    </Col>
  );
};

export default QuizData;
