import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
const Cards = ({ card }) => {
  const { name, logo, total } = card;
  return (
    <Col lg={3} md={6} sm={12}>
      <Card className="mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <Card.Img
            variant="top"
            src={logo}
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" style={{backgroundColor:"#0E333B"}} />
          <Card.Body>
            <Card.Title className="text-center fs-2">{name}</Card.Title>            
            <div className="d-flex justify-content-between align-items-center mt-4">
            <Card.Text className="fs-5">Total quiz {total}</Card.Text>
              <Button variant="success" size="">Start Quiz</Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default Cards;
