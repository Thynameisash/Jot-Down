import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Landingpage.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
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
