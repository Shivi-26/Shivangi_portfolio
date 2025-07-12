import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import bank from "../../Assets/Projects/bank.PNG";
import netflix from "../../Assets/Projects/netflix.PNG";
import zepto from "../../Assets/Projects/ZeptoSales.PNG";
import sales from "../../Assets/Projects/regionalSales.PNG";
import sql from "../../Assets/Projects/sql.PNG";
import covid from "../../Assets/Projects/resumes.PNG";
import attrition from "../../Assets/Projects/attrition.PNG";
function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="US Regional Sales Data Analysis"
              description="Analyzed regional sales performance across the US using Power BI, identifying key revenue-driving states and seasonal trends.
Designed interactive dashboards to support data-driven business decisions and highlight growth opportunities."
              demoLink="https://drive.google.com/file/d/1TXGvFGJFbSXoXq91BXzV7Vw6jAPnyBUl/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zepto}
              isBlog={false}
              title="Zepto Grocery Data Analysis"
              description="Zepto Grocery is a rapidly growing online grocery delivery service. This study analyzes sales, customer preferences, and product performance to identify areas for improvement and strategic growth.The goal was to highlight areas for improvement, optimize inventory, and drive strategic decision-making for business growth."
              demoLink="https://drive.google.com/file/d/1Ysg35xd1fwVsbSw8eoVIl4QvlJmDzbPG/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bank Marketing Campaign Analysis"
              description="Analyzed a Portuguese bank’s phone-based marketing campaign to identify customer behavior and predict product subscription trends. Used Power BI to visualize key insights such as age distribution, job types, campaign effectiveness, and client responses."
              ghLink="https://github.com/Shivi-26/Bank_dataset_Analysis"
              demoLink="https://drive.google.com/file/d/1867-ScsFi4HlSEN_h4Bczmf4vO3TS9R0/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Content Analysis"
              description="This project explores the Netflix dataset, which includes details such as titles, directors, release year, ratings, and more. By analyzing content trends, genre distribution, and rating, this study aims to provide insights that benefit both creators and consumers. Performed a detailed Exploratory Data analysis to find the insights."
              ghLink="https://github.com/Shivi-26/EDA-of-Netflix"
              demoLink="https://drive.google.com/file/d/1NKX51Yh4LCEGhxEp16fWS1jTjYlLAOz0/view?usp=sharing"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="FAASOS SQL Analysis Project"
              description="Analyzed order and customer data from Faasos to identify trends in food preferences, delivery performance, and brand growth. This SQL-based analysis provides insights to support smarter business decisions and enhance customer experience.The goal is to uncover key business insights related and customer behavior. "
              ghLink="https://github.com/Shivi-26/Faasos-Sql-Server-Project"
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Power BI Resume Dashboard"
              description="Designed and developed an interactive Power BI Resume Dashboard that visually represents key professional attributes such as technical skills, soft skills, academic background, work experience, achievements, certifications, and projects. The dashboard delivers a unique and engaging way to present a digital resume, enhancing user experience and self-branding."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attrition}
              isBlog={false}
              title="Employee Attrition Dashboard"
              description="Developed an interactive Employee Attrition Dashboard using Power BI to help HR and leadership teams gain deeper insights into workforce trends, compensation analysis, and attrition risks. The dashboard empowers stakeholders to make data-driven decisions for talent retention and diversity enhancement."           
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
