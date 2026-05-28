import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
              background="transparent"
              speed="1"
              style={{ width: "100%", height: "90%" }}
              loop
              autoplay
            ></lottie-player>
          </Col>

          <Col md={7}>
            <p className="home-about-body">
              My name is <b className="purple">Saisree Koduri </b>
               and I am an{" "}
              <b className="purple">
                Electronics and Communication Engineering
              </b>
                student at{" "}
              <b className="purple">
                Rajiv Gandhi University of Knowledge Technologies (RGUKT)
              </b>
              , Nuzvid, Andhra Pradesh.

              <br />
              <br />

              I am proficient in various programming languages such as  
              <b className="purple">
                  Python, HTML, CSS, and JavaScript.
              </b>

              <br />
              <br />

              I also have experience working with frameworks and libraries such as
              <b className="purple">
                  NodeJS, ReactJS
              </b>

              <br />
              <br />

              Whenever possible, I also apply my passion for developing products
              with
              <b className="purple">
                   Modern Javascript Library and Frameworks.
              </b>

              <br />
              <br />

              In my free time, I enjoy learning new technologies and
              <b className="purple">
                   building new web technologies and products.
              </b>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;