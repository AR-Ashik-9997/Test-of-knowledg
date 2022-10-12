import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import QuizData from "../QuizData/QuizData";


const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;
  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col lg={8} md={12} sm={12} className='mx-auto'>            
              <h1 className="mt-5 text-center">Quiz of {name}</h1>
              {questions.map((quiz,index) => (
                <QuizData key={quiz.id} data={quiz} counter={index} />
              ))}            
          </Col>          
        </Row>
      </Container>
    </div>
  );
};

export default Quiz;
