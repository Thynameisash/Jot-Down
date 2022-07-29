/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";
import ApiConst from "../constants/consts";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/mynotes");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setMessage("Passwords dont match");
    } else {
      dispatch(register(name, email, password, pic));
    }
  };

  const postDetails = (photo) => {
    if (!photo) {
      return setPicMessage("Pls select an image");
    }
    setPicMessage(null);

    if (photo.type === "image/jpeg" || photo.type === "image/png") {
      const data = new FormData();
      data.append("file", photo);
      data.append("upload_preset", "Jot-Down");
      data.append("cloud_name", "thynameisash");
      fetch("https://api.cloudinary.com/v1_1/thynameisash/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Pls select an image");
    }
  };

  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Row>
            <br></br>
          </Row>
          {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => postDetails(e.target.files[0])}
            />
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
