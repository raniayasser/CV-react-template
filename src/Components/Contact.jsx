import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ocoyaz",
        "template_f855bxb",
        form.current,
        "QiASNvHZJqpnzsZmS"
      )
      .then(
        (result) => {
          alert("Your Message is Send!");

          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section className="contact">
        <Container>
          <Row>
            <Col md={6} sm={12} className="disContact wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s">
              <div>
                <h1>Contact</h1>
                <p>Looking forward to hearing from you</p>
              </div>
              <div>
                <h6>Phone</h6>
                <p>0109-623-7635</p>
              </div>
              <div>
                <h6>Email</h6>
                <p>raniayasser@gmail.com</p>
              </div>
            </Col>
            <Col md={6} sm={12}  className="wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s">
              <form ref={form} onSubmit={sendEmail}>
                <div className="fullName">
                  <div className="name">
                    <label>First Name </label>
                    <input type="text" name="fname" required />
                  </div>
                  <div className="name">
                    <label>Last Name</label>
                    <input type="text" name="lname" />
                  </div>
                </div>
                <div className="fullName">
                  <div className="name">
                    <label>Email</label>
                    <input type="email" name="email" required />
                  </div>
                  <div className="name">
                    <label>Subject</label>
                    <input type="text" name="subject" />
                  </div>
                </div>

                <div className="fullName">
                  <div className="name">
                    <label>Message</label>
                    <textarea name="message" required />
                  </div>
                  <div className="name">
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
