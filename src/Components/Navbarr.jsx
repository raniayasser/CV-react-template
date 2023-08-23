import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbarr = () => {
  return (
    <>
      <Navbar expand="lg" className=" navbarr">
        <Container>
          <Navbar.Brand to="/">
            <span>
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "orange", marginRight: "10px" }}
              />
            </span>
            <Link to="/" style={{textDecoration:"none"}} className="headLink">Rania Yasser</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/Resume"> Resume</NavLink>
              <span className="line"> |</span>
              <NavLink to="/Projects">Projects</NavLink>
              <span className="line"> |</span>
              <NavLink to="/Contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
