import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import portfolio from "../../images/portfolio.png";
import age from "../../images/age.png";
import sales from "../../images/Sales.png";
import inventory from "../../images/inventory.png";
import invoice from "../../images/invoice.png";
import poslabel from "../../images/poslabel.png";
import { FaCode } from "react-icons/fa";
export default function ProjectPage() {
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
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
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

        <img src={sales} alt="sales" />

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
          MERN stack application for sales tracking,
          inventory management, billing, and customer orders.
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
                        <Col md={3} className="col-sm-12 col-md-4">
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

        <img src={inventory} alt="inventory" />

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
          Inventory and stock tracking system with
          warehouse product management features.
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
        React, MongoDB, Node.js
      </div>
    </div>
  </Fade>
</Col>
                       <Col md={3} className="col-sm-12 col-md-4">
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

        <img src={invoice} alt="invoice" />

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
          Python automation project for generating
          invoices and billing reports automatically.
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
<Col md={3} className="col-sm-12 col-md-4">
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
          Interactive Age Calculator
        </h5>

        <img src={age} alt="age" />

        <div className="project--showcaseBtn">
          <a
            href="https://github.com/sreekoduri/Age_Calculator"
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
          Responsive web application that calculates
          exact age using JavaScript date functions.
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
        HTML, CSS, JavaScript
      </div>
    </div>
  </Fade>
</Col>

<Col md={3} className="col-sm-12 col-md-4">
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
          POS Label Automation
        </h5>

        <img src={poslabel} alt="poslabel" />

        <div className="project--showcaseBtn">
          <a
            href="https://github.com/sreekoduri/Pos_Label_Automation"
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
          Automation system for generating POS labels
          efficiently using Python-based business workflow
          processing and data handling.
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
                        <Col md={3} className="col-sm-12 col-md-4">
  <Fade bottom>
    <div
      className="singleProject"
      style={{
        backgroundColor: "rgb(142 70 186 / 31%)",
        border: "1px solid",
      }}
    >
      <div className="projectContent">
        <h5 id={"first"} style={{ color: "#fbd9ad" }}>
          Personal Portfolio
        </h5>

        <img src={portfolio} alt="portfolio" />

        <div className="project--showcaseBtn">
          <a
            href={
              "https://github.com/sreekoduri/Saisree-s_Folio"
            }
            target="_blank"
            rel="noreferrer"
            className={"iconBtn"}
            aria-labelledby={`code`}
          >
            <FaCode
              id={`code`}
              className={"icon"}
              aria-label="Code"
            />
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
          A responsive personal portfolio website built
          using React to showcase projects, technical
          skills, certifications, and full stack
          development experience with modern UI design.
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
        React, JavaScript, CSS, Bootstrap
      </div>
    </div>
  </Fade>
</Col>
                        
                       
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
