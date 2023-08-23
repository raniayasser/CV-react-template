import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Resume = () => {
  return (
    <>
      <section className="resume">
        <Container>
          <Row>
            <h1
              className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              Resume
            </h1>
            <Col
              md={5}
              sm={12}
              className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <h3>Work Experience</h3>
            </Col>
            <Col md={5} sm={12} className="weSec">
              <div className="wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.4s">
                <span>2022-2023</span>
                <h6>Frontend Developer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  modi, voluptate, saepe ducimus porro voluptatum dicta ipsum
                  molestiae ipsa, iste minus alias architecto soluta
                  exercitationem!
                </p>
              </div>
              <div className="wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.7s">
                <span>2021-2023</span>
                <h6> AI Engineer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  modi, voluptate, saepe ducimus porro voluptatum dicta ipsum
                  molestiae ipsa, iste minus alias architecto soluta
                  exercitationem!
                </p>
              </div>
              <div className="wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.7s">
                <span>2022-2023</span>
                <h6> Frontend Developer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  modi, voluptate, saepe ducimus porro voluptatum dicta ipsum
                  molestiae ipsa, iste minus alias architecto soluta
                  exercitationem!
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={5} sm={12}  className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s">
              <h3 >Education</h3>
            </Col>
            <Col md={5} sm={12} className="weSec">
              <div  className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s">
                <span>2022-2023</span>
                <h6> Online Courses of Frontend Web developer</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  modi, voluptate, saepe ducimus porro voluptatum dicta ipsum
                  molestiae ipsa, iste minus alias architecto soluta
                  exercitationem!
                </p>
              </div>
              <div  className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s">
                <span>2021-2024</span>
                <h6>
                  {" "}
                  Benha University <span className="line">|</span>Faculty of
                  Computers & Aritificial Intelligence.
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  modi, voluptate, saepe ducimus porro voluptatum dicta ipsum
                  molestiae ipsa, iste minus alias architecto soluta
                  exercitationem!
                </p>
              </div>
            </Col>
          </Row>

          <Row className="rowwS">
            <Col md={5} sm={12}  className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s">
              <h3>Skills & Expertise</h3>
            </Col>
            <Col md={5} sm={12} className="skillsec">
              <div  className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>React JS</li>
                  <li>some programming language (C++ , Java , Python )</li>
                  <li>Machine Learning && Deep Learning</li>
                  <li>Neural Network</li>
                  <li>Computer Vision </li>
                  <li>Natural Language Processing</li>
                  <li>Soft Skills</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Resume;
