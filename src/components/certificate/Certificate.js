import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import python from "../../images/python.png";
import iotcert from "../../images/ssit_certificate.png";
import embedded from "../../images/Embedded_Intern.jpg";
import nptel from "../../images/NPTEL_Certification.jpg";
import vlsi from "../../images/Codec_technologies.jpg";
import sql from "../../images/sql.png";
import Fade from "react-reveal/Fade";
export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
  <img
    src={python}
    alt="Python Certificate"
    style={{ width: "100%", height: "100%" }}
  />
</Col>

<Col md={4}>
  <img
    src={sql}
    alt="SQL Certificate"
    style={{ width: "100%", height: "100%" }}
  />
</Col>

<Col md={4}>
  <img
    src={iotcert}
    alt="IoT & Embedded Systems"
    style={{ width: "100%", height: "100%" }}
  />
</Col>

<Col md={4}>
  <img
    src={embedded}
    alt="Embedded Internship"
    style={{ width: "100%", height: "100%" }}
  />
</Col>

<Col md={4}>
  <img
    src={nptel}
    alt="PCB Design Certificate"
    style={{ width: "100%", height: "100%" }}
  />
</Col>

<Col md={4}>
  <img
    src={vlsi}
    alt="VLSI Certificate"
    style={{ width: "100%", height: "100%" }}
  />
</Col>
          </Row>
          {/* </Bounce> */}
        </Fade>
      </Container>
    </div>
  );
}
