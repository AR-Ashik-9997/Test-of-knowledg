import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
const ErrorPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div>
                <img src="https://i.postimg.cc/PrcV6dWy/2392490.png" alt="" className="img-fluid mx-auto d-block " />
                <div className="d-flex justify-content-center">
                    <Link to='/home'>
                <Button className="mx-auto"  variant="outline-primary">Go Home</Button>
                </Link>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
