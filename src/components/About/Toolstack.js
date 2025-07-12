import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiMicrosoftpowerpoint,
  SiVercel,
} from "react-icons/si";
import {DiGit} from "react-icons/di";
import { SiJupyter } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiJupyter />
      <div className="tech-label">Juputer Notebook</div>
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-label">Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <SiMicrosoftpowerpoint />
  <div className="tech-label">PowerPoint</div>
</Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiGit />
      <div className="tech-label">Github</div>
    </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="tech-label">Vercel</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
