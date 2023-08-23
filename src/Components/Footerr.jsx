import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Footerr = () => {
  return (
    <>
      <section className="footerr">
      
          <Row>
            <Col md={3} sm={12}>
              <div>
                <h6>Phone</h6>
                <p>0109-623-7635</p>
              </div>
            </Col>

            <Col md={3} sm={12}>
              <div>
                <h6>Email</h6>
                <p>raniayasser@gmail.com</p>
              </div>
            </Col>

            <Col md={3} sm={12}>
              <div>
                <h6>Follow Me </h6>
                <Link className="icon" to="https://www.linkedin.com/in/rania-yasser-mohammed-abb596235/">
                <FaLinkedinIn />
                </Link>
                <Link className="icon" to="https://github.com/raniayasser/">
                <FaGithub style={{marginLeft:"10px"}}/>

                </Link>
              </div>
            </Col>
            <Col md={3} sm={12}>
              <div>
                <p>@2023 By Rania Yasser.</p>
                <p>Copy-Right Made <Link to="/"style={{color:"inherit"}}>by rania yasser</Link> </p>
              </div>
            </Col>
          </Row>
        {/* </Container> */}
      </section>
    </>
  );
};

export default Footerr;
