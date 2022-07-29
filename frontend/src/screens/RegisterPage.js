import React from "react";
import MainScreen from "../components/MainScreen";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <MainScreen title="REGISTER">
      {/* onSubmit={submitHandler} */}
      <div className="loginContainer">
        {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />} */}
        <Form>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group> */}
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              // value={name}
              placeholder="Enter name"
              // onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // value={email}
              placeholder="Enter email"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              placeholder="Password"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              // value={confirmpassword}
              placeholder="Confirm Password"
              // onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          {/* {picMessage && ( */}
          {/* <ErrorMessage variant="danger">{picMessage}</ErrorMessage> */}
          {/* )} */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterPage;
