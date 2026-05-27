import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
} from "react-icons/di";
import { SiMongodb } from "react-icons/si"; // ✅ MongoDB icon added
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>

      <div className="mt-5">
        <Flip top cascade>
          <h1>Technical Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>
        {/* Python */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiPython />}
        >
          <h3>PYTHON</h3>
        </VerticalTimelineElement>

        {/* HTML */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiHtml5 />}
        >
          <h3>HTML</h3>
        </VerticalTimelineElement>

        {/* CSS */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiCss3 />}
        >
          <h3>CSS</h3>
        </VerticalTimelineElement>

        {/* JavaScript */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiJavascript1 />}
        >
          <h3>JAVASCRIPT</h3>
        </VerticalTimelineElement>

        {/* MySQL */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiMysql />}
        >
          <h3>MySQL</h3>
        </VerticalTimelineElement>

        {/* MongoDB ✅ */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SiMongodb />}
        >
          <h3>MONGODB</h3>
        </VerticalTimelineElement>

        {/* Node JS */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiNodejs />}
        >
          <h3>NODE JS</h3>
        </VerticalTimelineElement>

        {/* React */}
        <VerticalTimelineElement
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiReact />}
        >
          <h3>REACT</h3>
        </VerticalTimelineElement>

        {/* End Icon */}
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalJourney;