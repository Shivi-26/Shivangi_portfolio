import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Associate Analyst",
          "Power BI Enthusiast",
          "SQL Developer",
          "Dashboard Specialist",
          "Data Storyteller"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
