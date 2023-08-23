import React from "react";

import { Container, Col, Row } from "react-bootstrap";
// --------------------------- { Components} --------------------------------------
import Navbarr from "./Navbarr";
import { Link } from "react-router-dom";
import Footerr from "./Footerr";

const Home = () => {
  return (
    <>
      <section className="intro">
        <Container>
          <Row>
            <Col md={5} sm={12}>
              <div
                className="imgg wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <img
                  src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"
                  alt=""
                  srcset="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg 1x, https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_960,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg 2x"
                  fetchpriority="high"
                  className="img-lab"
                />
               
   
              </div>
            </Col>
            <Col md={5} sm={12}>
              <div
                className="discription wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <h1>Hello</h1>
                <h5>A Bit About Me </h5>
                <p>
                  I am a front-end web developer with 2 years experience, and I
                  am a student at Benha University, Faculty of Computing And
                  artificial intelligence, in this templete I will show you some
                  of my skills and projects.
                </p>

                <div
                  className="NavIntro  wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.1s"
                >
                  <Link to="/Resume">
                    <div className="orangeCir">Resume</div>
                  </Link>
                  <Link to="/Projects">
                    <div className="orangeredCir">Projects</div>
                  </Link>
                  <Link to="/Contact">
                    <div className="blueCir">Contact</div>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={5} sm={12}  className="mobile-img">
              <div
                className="imgg wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <img
                  src="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"
                  alt=""
                  srcset="https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg 1x, https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_960,h_960,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg 2x"
                  fetchpriority="high"
                  className="img-mobile"
                />
               
   
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
