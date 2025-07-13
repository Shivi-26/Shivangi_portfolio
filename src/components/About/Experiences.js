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
  <ul style={{ paddingLeft: "20px" }}>
  <li>
    Designed and deployed <span className="purple">10+ interactive dashboards</span> using <span className="purple">Power BI</span> and <span className="purple">Excel</span> to visualize KPIs such as <span className="purple">user engagement</span>, <span className="purple">satisfaction scores</span>, <span className="purple">login behavior</span>, and <span className="purple">workforce metrics</span> — improving business decision-making by <span className="purple">40%</span>.
  </li>
  
  <li>
    Built and automated <span className="purple">ETL pipelines</span> using <span className="purple">SQL Server Agent</span> to enable <span className="purple">real-time data refresh</span>, reducing manual intervention and ensuring accurate insights across <span className="purple">cross-functional teams</span>.
  </li>
  
  <li>
    Developed a <span className="purple">custom text sentiment analysis tool</span> in <span className="purple">Python</span> (integrated with <span className="purple">JavaScript</span>) for analyzing text data across emotional, grammatical, and sentiment-based parameters to support <span className="purple">internal content quality scoring</span>.
  </li>
  
  <li>
    Engineered a <span className="purple">performance tracking system</span> that forecasted expected workloads versus actual activity, and automated <span className="purple">email alerts</span> for <span className="purple">anomaly detection</span> and <span className="purple">threshold breaches</span>.
  </li>
  
  <li>
    Built a <span className="purple">dynamic attendance and login behavior dashboard</span> by integrating <span className="purple">multi-source raw data</span>, calculating session-level metrics, and aligning with internal policies — supporting <span className="purple">payroll and compliance audits</span>.
  </li>
  
  <li>
    Developed and maintained backend workflows for an internal analytics platform (<span className="purple">BI Reportal</span>) using <span className="purple">SQL</span>, managing <span className="purple">request logs</span>, <span className="purple">access permissions</span>, and <span className="purple">notification systems</span> — reducing report delivery turnaround by <span className="purple">50%</span>.
  </li>
  
  <li>
    Implemented an <span className="purple">internal feedback analytics dashboard</span> to analyze <span className="purple">anonymous employee sentiment</span> using review data, helping <span className="purple">product and HR teams</span> identify trends in <span className="purple">morale and engagement</span>.
  </li>
  
  <li>
    Set up <span className="purple">SQL Server logon/logoff audit triggers</span> to capture <span className="purple">user access activity</span> and strengthen <span className="purple">platform auditability</span> and <span className="purple">security</span>.
  </li>
  
  <li>
    Delivered <span className="purple">quarterly review dashboards</span> and <span className="purple">executive-level presentations</span> analyzing <span className="purple">sales, retention</span>, and <span className="purple">user interaction trends</span> across multiple business units.
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
