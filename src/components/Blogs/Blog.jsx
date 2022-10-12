import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import './Blog.css';
const Blog = () => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Accordion defaultActiveKey={["0","1","2"]} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header ><h4>What is the purpose of react router?</h4></Accordion.Header>
                <Accordion.Body>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><h4>How does context api works?</h4></Accordion.Header>
                <Accordion.Body>
                <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <img src="https://miro.medium.com/max/1100/1*MKsF627WPxwyIBOCuz5C3w.gif" alt="" className="img-fluid mx-auto d-block" />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><h4>What is useRef Hook?</h4></Accordion.Header>
                <Accordion.Body>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its current property.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
