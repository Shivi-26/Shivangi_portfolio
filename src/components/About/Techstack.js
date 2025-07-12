import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { SiPowerbi, SiMicrosoftsqlserver } from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';
import { faHtml5, faCss3, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-svg-core/styles.css';


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
  <DiPython />
  <div className="tech-label">Python</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiMicrosoftsqlserver /> 
  <div className="tech-label">Sql Server</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <SiPowerbi />
  <div className="tech-label">Powerbi</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <FaChartLine /> 
  <div className="tech-label">Data Analysis</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <DiJavascript1 />
  <div className="tech-label">Javascript</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <FontAwesomeIcon icon={faHtml5} />
  <div className="tech-label">Html</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <FontAwesomeIcon icon={faCss3} />
  <div className="tech-label">CSS</div>
</Col>
<Col xs={4} md={2} className="tech-icons">
  <FontAwesomeIcon icon={faBootstrap} />
  <div className="tech-label">Bootstrap</div>
</Col>

    </Row>
  );
}

export default Techstack;
