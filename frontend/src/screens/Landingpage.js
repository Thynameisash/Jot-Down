import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./Landingpage.css";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  // let navigate = useNavigate();
  // useEffect(() => {
  //   const userinfo = localStorage.getItem("userInfo");
  //   if (userinfo) {
  //     navigate("/mynotes");
  //   }
  // }, [navigate]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Welcome to Jot-Down</h1>
            <p className="subtitle">A safe place for all your notes.</p>

            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" variant="primary" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" size="lg" className="landingbutton">
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Landingpage;
