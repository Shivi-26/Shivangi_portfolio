import React from "react";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-svg-core/styles.css';

function Experiences() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={8}>
        <ul>
            <li className="about-activity">
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "0.6rem" }}>
    <h5 style={{ fontWeight: "600", fontSize: "1.2rem", margin: 0 }}>
      <ImPointRight /> <span className="purple">Tech Mahindra</span>
    </h5>
    <div style={{ fontSize: "1.05rem" }}>
      Associate Analyst (Full-Time)
    </div>
    <div style={{ fontStyle: "italic", color: "#666666", fontSize: "0.95rem" }}>
      Feb 2024 – Present
    </div>
  </div>

  <ul style={{ marginTop: "0", paddingLeft: "20px" }}>
    <li>
      Designed and deployed <span className="purple">10+ interactive Power BI and Excel dashboards</span> for leadership to monitor KPIs like <span className="purple">FCR, NPS, Login Hours, Attrition</span>, improving decision-making by <span className="purple">40%</span>.
    </li>
    <li>
      Automated end-to-end <span className="purple">ETL workflows</span> using <span className="purple">SQL Server Agent</span>, reducing manual data handling and ensuring real-time, error-free data pipelines across teams.
    </li>
    <li>
      Created a custom <span className="purple">Sentiment Analyzer Tool</span> using <span className="purple">Python</span>, integrated with <span className="purple">JavaScript</span>, to analyze advisor chats for <span className="purple">emotion, profanity, politeness, and tone</span>.
    </li>
    <li>
      Delivered a <span className="purple">Performance Monitoring System</span> to forecast vs. actual advisor calls, triggering <span className="purple">auto-email alerts</span> on threshold breaches.
    </li>
    <li>
      Built a <span className="purple">Telephony Attendance Dashboard</span> by integrating data from 3 tools with roster mapping to calculate <span className="purple">login hours</span> and support <span className="purple">payout validation</span>.
    </li>
    <li>
      Developed and maintained backend of the <span className="purple">BI Reportal tool</span> using <span className="purple">SQL</span>, handling workflows, user-role permissions, and <span className="purple">automated mailers</span> — reducing request time by <span className="purple">50%</span>.
    </li>
    <li>
      Created a <span className="purple">Beam Dashboard</span> to visualize <span className="purple">anonymous employee sentiment</span>, aiding HR in assessing morale trends by department.
    </li>
    <li>
      Implemented <span className="purple">SQL Server logon/logoff audit triggers</span> to track access logs and strengthen data compliance.
    </li>
    <li>
      Designed and presented <span className="purple">QBR dashboards</span> and <span className="purple">executive-level PowerPoint decks</span> covering <span className="purple">sales, retention, voice/chat trends</span> across quarters.
    </li>
  </ul>
</li>
<br/> <br/>
<li className="about-activity">
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", marginBottom: "0.6rem" }}>
    <h5 style={{ fontWeight: "600", fontSize: "1.2rem", margin: 0 }}>
      <ImPointRight /> <span className="purple">TCR Innovation</span>
    </h5>
    <div style={{ fontSize: "1.05rem" }}>
      Data Analyst (Training Program)
    </div>
    <div style={{ fontStyle: "italic", color: "#666666", fontSize: "0.95rem" }}>
      April 2023 – July 2023
    </div>
  </div>

  <ul style={{ marginTop: "0", paddingLeft: "20px" }}>
    <li>
      Worked on a project titled <span className="purple">"Estimation of Product Based on Bank’s Marketing Campaign Dataset"</span> using the <span className="purple">Bank-full dataset</span> (approx. 50,000 records and 17 features) involving both numerical and categorical variables such as <span className="purple">age, job, marital status</span>, etc.
    </li>
    <li>
      Conducted comprehensive <span className="purple">Exploratory Data Analysis (EDA)</span> and <span className="purple">feature selection</span> to remove outliers, identify important predictors, and improve model input quality.
    </li>
    <li>
      Used <span className="purple">Python 3</span> for all coding and leveraged libraries like <span className="purple">Matplotlib</span> for data visualization to analyze customer behavior, detect patterns, and explore relationships between features.
    </li>
    <li>
      Identified key characteristics of highly responsive customers such as <span className="purple">age &lt; 30 or &gt; 60</span>, and specific months like <span className="purple">May, March, December</span> for peak responses.
    </li>
    <li>
      Built a classification model using the <span className="purple">Random Forest algorithm</span>, achieving an impressive <span className="purple">90.8% accuracy rate</span> with strong <span className="purple">precision, recall, and F1-score</span> performance.
    </li>
  </ul>
</li>

        </ul>
      </Col>
    </Row>
  );
}

export default Experiences;
