import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

import ucsc from "../../images/ucsc.png";
import iotcert from "../../images/ssit_certificate.png";
import embedded from "../../images/Embedded_Intern.jpg";
import nptel from "../../images/NPTEL_Certification.jpg";
import vlsi from "../../images/Codec_technologies.jpg"

import Particle from "../../Particle";

export default function CertificatePage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />

        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134, 61, 176)" }}>
                Certificates
              </h1>
            </Zoom>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">

                    {/* Python Certificate */}
                    <Col md={4} className="col-sm-12 col-md4">
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.hackerrank.com/certificates/9f42c0a4a4c0"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={ucsc}
                                  alt="Python Certificate"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>

                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{
                                fontWeight: 700,
                                color: "#fbd9ad",
                              }}
                            >
                              Python Basic : Programming Language
                            </h2>

                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - HackerRank
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* SQL Certificate */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.hackerrank.com/certificates/c4f11c7fdc22"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={ucsc}
                                  alt="SQL Certificate"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>

                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{
                                fontWeight: 700,
                                color: "#fbd9ad",
                              }}
                            >
                              SQL Basic : Programming Fundamentals
                            </h2>

                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - HackerRank
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* IoT Certificate */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href={iotcert}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={iotcert}
                                  alt="IoT Certificate"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>

                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{
                                fontWeight: 700,
                                color: "#fbd9ad",
                              }}
                            >
                              IoT & Embedded Systems Live Demo Master Class
                            </h2>

                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - Sense Semiconductor & IT Solutions Pvt. Ltd.
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* Embedded Internship */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.linkedin.com/posts/satyasree-koduri_internship-embeddedsystems-proteus-activity-7343977612421013506-8GJJ"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={embedded}
                                  alt="Embedded Internship"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>

                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{
                                fontWeight: 700,
                                color: "#fbd9ad",
                              }}
                            >
                              Embedded Systems & Proteus Internship
                            </h2>

                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - LinkedIn Certification
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* PCB Design */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.linkedin.com/posts/satyasree-koduri_nptel-iitmadras-pcbdesign-activity-7343980203808911362--PvZ"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={nptel}
                                  alt="PCB Design"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>

                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{
                                fontWeight: 700,
                                color: "#fbd9ad",
                              }}
                            >
                              PCB Design Certification – IIT Madras
                            </h2>

                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - NPTEL / IIT Madras
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                    {/* VLSI */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                          <div className="content">
                            <a
                              href="https://www.linkedin.com/posts/satyasree-koduri_digitalelectronics-vlsi-certification-share-7344412732965691393-0sKe"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                <img
                                  className="logo_img"
                                  src={vlsi}
                                  alt="VLSI Training"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3
                                  className="content-title"
                                  style={{ color: "black" }}
                                >
                                  Certificate
                                </h3>
                              </div>
                            </a>
                          </div>

                          <div className="cert-body">
                            <h2
                              className="cert-body-title"
                              style={{
                                fontWeight: 700,
                                color: "#fbd9ad",
                              }}
                            >
                              Digital Electronics & VLSI Training
                            </h2>

                            <h3
                              className="cert-body-subtitle"
                              style={{
                                color: "#eb90ff",
                                marginBottom: "0px",
                              }}
                            >
                              - LinkedIn Certification
                            </h3>
                          </div>
                        </div>
                      </Fade>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>

          <div className="blog--viewAll"></div>
        </Container>
      </Container>
    </section>
  );
}