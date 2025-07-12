import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-svg-core/styles.css';
import sql50Img from "../../Assets/Top_SQL_50.gif";

function Achievements() {
  return (
    <Row style={{ justifyContent: "center", padding: "30px 0" }}>
      <Col md={7}>
       <ul style={{ paddingLeft: "10px" }}>
          <li className="about-activity">
            <ImPointRight /> Winner of <span className="purple">Codechankya Hackathon</span> at <span className="purple">United College of Engineering and Research</span>
          </li>
          <li className="about-activity">
            <ImPointRight /> Achieved <span className="purple">4-Star</span> rating in <span className="purple">SQL</span> on <span className="purple">HackerRank</span>
          </li>
          <li className="about-activity">
            <ImPointRight /> Achieved <span className="purple">5-Star</span> rating in <span className="purple">Python</span> on <span className="purple">HackerRank</span>
          </li>
          <li className="about-activity">
            <ImPointRight /> Completed and <span className="purple">Earn the Badge 50 Days</span> study plan <span className="purple">SQL Server</span> on <span className="purple">Leetcode.</span>
          </li>
        </ul>
      </Col>

      <Col
        md={5}
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={sql50Img}
          alt="Sql50"
          className="img-fluid"
          style={{ width: "38%", maxWidth: "230px", height: "auto", borderRadius: "17px" }}
        />
      </Col>
    </Row>
  );
}

export default Achievements;
