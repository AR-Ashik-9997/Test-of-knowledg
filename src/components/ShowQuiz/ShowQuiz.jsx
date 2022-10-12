import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { QuizContext } from "../../utilities/Root";
import ShowCard from "../Cards/ShowCard";

const ShowQuiz = () => {
  const quizCard = useContext(QuizContext);

  return (
    <div className="py-5">
      <Container>
        <Row className="g-4">
          {quizCard.map((data, id) => (
            <ShowCard key={id} card={data} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ShowQuiz;
