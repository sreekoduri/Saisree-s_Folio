import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>

        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>

        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>

      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>

      <div className="mt-5">
        <Container>
          <Row className="g-5">

            {/* Python */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#39c4ff", fontWeight: 700 }}
              >
                80%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"python"}
                    aria-valuenow={"90"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#39c4ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Python
                </h2>
              </div>
            </Col>

            {/* JavaScript */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#f1f965", fontWeight: 700 }}
              >
                85%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"javascript"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#f1f965",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  JavaScript
                </h2>
              </div>
            </Col>

            {/* HTML */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#ff5733", fontWeight: 700 }}
              >
                90%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"html"}
                    aria-valuenow={"90"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#ff5733",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  HTML
                </h2>
              </div>
            </Col>

            {/* CSS */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#41f2ff", fontWeight: 700 }}
              >
                85%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"css"}
                    aria-valuenow={"85"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "85%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#41f2ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  CSS
                </h2>
              </div>
            </Col>

            {/* React JS */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#61dafb", fontWeight: 700 }}
              >
                82%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"react"}
                    aria-valuenow={"82"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "82%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#61dafb",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  React JS
                </h2>
              </div>
            </Col>

            {/* Node JS */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#68a063", fontWeight: 700 }}
              >
                78%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"node"}
                    aria-valuenow={"78"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "78%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#68a063",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Node JS
                </h2>
              </div>
            </Col>

            {/* Express JS */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#f7df1e", fontWeight: 700 }}
              >
                75%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"express"}
                    aria-valuenow={"75"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "75%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#f7df1e",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Express JS
                </h2>
              </div>
            </Col>

            {/* MongoDB */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#4db33d", fontWeight: 700 }}
              >
                80%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"mongodb"}
                    aria-valuenow={"80"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "80%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#4db33d",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  MongoDB
                </h2>
              </div>
            </Col>

            {/* MySQL */}
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#ff0173", fontWeight: 700 }}
              >
                78%
              </h1>

              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div className="progress">
                  <div
                    role={"progressbar"}
                    id={"mysql"}
                    aria-valuenow={"78"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "78%" }}
                  ></div>
                </div>

                <h2
                  style={{
                    color: "#ff0173",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  MySQL
                </h2>
              </div>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
}