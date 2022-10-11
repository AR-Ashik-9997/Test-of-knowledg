import { Col, Form, FormCheck, FormGroup } from "react-bootstrap";
import HTMLReactParser from "html-react-parser";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizData = ({ data }) => {
  const { question, options, correctAnswer } = data;
  const handleChange = (event, correctAnswer) => {
    const value = event.target.value;
    return value === correctAnswer
      ? toast.success("Correct Answer")
      : toast.error("not write!");
  };
  return (
    <Col lg={12} md={12} sm={12}>
      <div className="shadow p-3 bg-body rounded mt-5">
        <h3>{HTMLReactParser(question)}</h3>
        <Form>
          <FormGroup>
            {options.map((quizOption) => (
              <div
                className="shadow-none p-3 mb-3 bg-light rounded hover"
                key={v4()}
                style={{ outlineColor: "red" }}
              >
                <FormCheck
                  className="fs-4"
                  name="gender"
                  label={quizOption}
                  value={quizOption}
                  type="radio"
                  onChange={(event) => handleChange(event, correctAnswer)}
                />
              </div>
            ))}
          </FormGroup>
        </Form>
      </div>
      <ToastContainer position="top-center" autoClose={500} theme="dark"/>
    </Col>
  );
};

export default QuizData;
