import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { QuizContext } from "../../utilities/Root";
import Cards from "../Cards/Cards";

const Home = () => {
  const quiz = useContext(QuizContext);
  return (
    <div className="py-5">
      <Container>
        <Row className="my-5 flex-column-reverse flex-lg-row">
          <Col lg={6} md={12} sm={12} className="mx-auto">
            <h1 className="fs-1 mt-5">Test of your knowledge</h1>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="fs-5 text-justify my-2">
                An educational quiz is a simple, yet effective way to check
                learners' knowledge. By putting them online, you can make the
                assessment process even easier. You no longer need to gather all
                your students into one room to complete a test, print worksheets
                for all participants, and check each test manually.Some of its
                benefits are ..........{" "}
              </p>
              <ul className="mt-3 fs-5 text-justify">
                <li className="mt-2 mb-2">
                  Useful to understand problem solving ability, information
                  analysis, reasoning ability of the individual.
                </li>

                <li className="mt-2 mb-2">
                  Popular for New Candidate Hiring, Educational Entrance Exam.
                </li>
                <li className="mt-2 mb-2">
                  You can define Aptitude Test with Reasoning, Mathmatics, Data
                  Interpretation.
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="mx-auto">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div>
                <img
                  src="https://i.postimg.cc/L96R7vkg/29765908.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          {quiz.map((data, id) => (
            <Cards key={id} card={data} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
