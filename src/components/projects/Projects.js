import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

import sales from "../../images/Sales.png";
import student from "../../images/student.png";
import inventory from "../../images/inventory.png";
import invoice from "../../images/invoice.png";

import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>

            {/* Project 1 */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Sales & Order Management System
                    </h5>

                    <img src={sales} alt="Sales Management Dashboard" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/sreekoduri/MKSALESANDMANAGEMENT"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>

                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A full stack MERN application for managing sales,
                      inventory, customer orders, and product tracking with
                      secure authentication and admin dashboard features.
                    </p>
                  </h6>

                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, Node.js, Express.js, MongoDB
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Project 2 */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Student Management Portal
                    </h5>

                    <img src={student} alt="Student Management" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/sreekoduri/Student_Management_Portal"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>

                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A responsive web application to manage student records,
                      attendance, and academic details with CRUD operations and
                      database integration.
                    </p>
                  </h6>

                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, JavaScript, MongoDB
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Project 3 */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Inventory Management System
                    </h5>

                    <img src={inventory} alt="Inventory" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/sreekoduri/MK_INVENTORY"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>

                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      An inventory tracking application used to manage product
                      stock, availability, and inventory updates efficiently
                      using database-driven architecture.
                    </p>
                  </h6>

                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    React, Node.js, MongoDB
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Project 4 */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Invoice Generator
                    </h5>

                    <img src={invoice} alt="Invoice Generator" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/sreekoduri/Invoice-Generator-Development-Update"
                        target="_blank"
                        rel="noreferrer"
                        className="iconBtn"
                      >
                        <FaCode className="icon" />
                      </a>
                    </div>
                  </div>

                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A Python-based invoice generation system that automates
                      billing, invoice creation, and calculation processes for
                      efficient business operations.
                    </p>
                  </h6>

                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Python, Automation
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>

          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}