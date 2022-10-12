import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowCard = ({ card }) => {
  const { id, name, logo, total } = card;

  return (
    
      <Card className=" mt-5">
        <div
          className="rounded shadow-sm py-5 px-4"
          style={{ backgroundImage: "linear-gradient(#145277, #30c5d2)" }}
        >
          <Card.Img
            variant="top"
            src={logo}
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            style={{ backgroundColor: "#0E333B" }}
          />
          <Card.Body>
            <Card.Title className="text-center fs-2">{name}</Card.Title>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <Card.Text className="fs-5">Total quiz {total}</Card.Text>
              <Link to={`/quiz/${id}`}>
                <Button variant="success"> Start Quiz</Button>
              </Link>
            </div>
          </Card.Body>
        </div>
      </Card>

  );
};

export default ShowCard;
