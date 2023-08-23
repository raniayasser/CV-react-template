import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProject(res.data);
    });
  }, []);
  return (
    <>
      <section className="projects">
        <h1
          className="wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          Projects
        </h1>

        <Container>
          {projects.map((project) => (
            <Row key={project.id}>
              <Col
                className="disSec wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
                md={7}
                sm={12}
              >
                <h5>{project.Title}</h5>
                <Link to={project.srcLink}>
                  {" "}
                  <span>repo:</span>
                  <br /> {project.srcLink}
                </Link>
                <Link to={project.link}>
                  <br />
                  <span>Demo:</span>
                  <br /> {project.link}
                </Link>
              </Col>
              <Col
                md={5}
                sm={12}
                className="wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <img src={project.photo} alt="" />
              </Col>
            </Row>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Projects;
