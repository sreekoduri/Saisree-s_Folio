import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

// Import Certificate Images
import manakiranaCertificate from "../../../images/Experience_Letter.png";
import embeddedCertificate from "../../../images/Embedded_Intern.jpg";

function ExperienceJourney() {
  return (
    <div className="mt-5 container">
      {/* Navigation Buttons */}
      <div className="text-center mb-4">
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>

        <Link className="btn btn-success m-1" to="/experiencejourney">
          Experience Journey
        </Link>

        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>

        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>

      {/* Heading */}
      <div className="mt-5 text-center">
        <Flip top cascade>
          <h1 className="fw-bold">Experience Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>
        {/* ManaKirana Internship */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(78 22 112)",
            color: "#fbd9ad",
          }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(78 22 112)",
          }}
          date="May 2025 - June 2026"
          iconStyle={{
            background: "rgb(78 22 112)",
            color: "#fbd9ad",
          }}
          icon={<WorkIcon />}
        >
          <h4 className="fw-bold">ManaKirana Pvt. Ltd.</h4>

          <h6 className="mt-2 text-warning">
            Full Stack Developer Intern
          </h6>

          <p>
            • Worked on frontend and backend web application development.
          </p>

          <p>
            • Developed and maintained application modules and APIs.
          </p>

          <p>
            • Managed database operations and improved user interfaces.
          </p>

          <p>
            • Collaborated with the development team and solved technical
            issues efficiently.
          </p>

          <p>
            • Gained hands-on experience in full stack development and project
            maintenance.
          </p>

          {/* Certificate */}
          <div className="text-center mt-4">
            <img
              src={manakiranaCertificate}
              alt="ManaKirana Internship"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </VerticalTimelineElement>

        {/* Embedded Internship */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(20 45 90)",
            color: "#ffffff",
          }}
          contentArrowStyle={{
            borderLeft: "7px solid rgb(20 45 90)",
          }}
          date="May 2024 - June 2024"
          iconStyle={{
            background: "rgb(20 45 90)",
            color: "#ffffff",
          }}
          icon={<PersonIcon />}
        >
          <h4 className="fw-bold">Robocoupler Pvt. Ltd.</h4>

          <h6 className="mt-2 text-warning">
            Industrial Internship Training Program (IITP)
          </h6>

          <p>
            • Completed internship training in Real Time Embedded Systems.
          </p>

          <p>
            • Worked on prototype simulation design using Proteus for Power
            Grid applications.
          </p>

          <p>
            • Improved practical knowledge in embedded systems and circuit
            simulation.
          </p>

          <p>
            • Learned hardware-software integration and real-time system
            concepts.
          </p>

          {/* Certificate */}
          <div className="text-center mt-4">
            <img
              src={embeddedCertificate}
              alt="Embedded Internship"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </VerticalTimelineElement>

        {/* End Icon */}
        <VerticalTimelineElement
          iconStyle={{
            background: "#fbd9ad",
            color: "rgb(78 22 112)",
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;