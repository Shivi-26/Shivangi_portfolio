import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Shivangi Tiwari </span>  
            from <span className="purple">Uttar Pradesh, India.</span>  
            <br />
            I am currently working as an <span className="purple">Associate Analyst</span> at <span className="purple">Tech Mahindra, Mumbai.</span>  
            <br />
            I have completed my <span className="purple">B.Tech</span> in Computer Science & Engineering from United College of Engineering & Research, Prayagraj.  
            <br />
            <br />

            <p>Professional Journey</p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Tech Mahindra</span> – Associate Analyst (Full-Time)  
                <br />&nbsp;&nbsp;&nbsp;&nbsp;<i>Feb 2024 – Present</i>
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">TCR Innovation</span> – Data Analyst (Training Program)  
                <br />&nbsp;&nbsp;&nbsp;&nbsp;<i>April 2023 – July 2023</i>
              </li>
            </ul>

          
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <ul>
  <li className="about-activity">
    <ImPointRight /> UI/UX Design – Designed the website for <span className="purple">Greenverse Pvt. Ltd.</span>  
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;Visit: <a href="https://www.airbuddi.in/" target="_blank" rel="noopener noreferrer">www.airbuddi.in</a>
  </li>
  <li className="about-activity">
    <ImPointRight /> Art & Drawing – Passionate about creating visual stories through sketches and illustrations.
  </li>
</ul>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shivangi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
