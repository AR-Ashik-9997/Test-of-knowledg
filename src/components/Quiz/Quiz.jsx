import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import QuizData from "../QuizData/QuizData";
import Results from "../Results/Results";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;
   return (
    <div>
      <Container>
        <Row className="my-5">
          <Col lg={10} md={10} sm={12}>
            <Row>
              <h1 className="mt-5 text-center">Quiz of {name}</h1>
              {questions.map((quiz) => (
                <QuizData key={quiz.id} data={quiz} />
              ))}
            </Row>
          </Col>
          <Col lg={2} md={2} sm={12} className="bg-danger mx-auto">     
            <Results/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quiz;
