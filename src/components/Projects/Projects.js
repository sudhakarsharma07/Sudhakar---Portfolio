import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import Chat-app from "../../Assets/Projects/Chat-app.png";

import chatApp from "../../Assets/Projects/Chat-app.png";
import financeDashboard from "../../Assets/Projects/Finance-dashboard.png";
import nomadTour from "../../Assets/Projects/Nomad-tour.png";
import pasteApp from "../../Assets/Projects/Paste-app.png";
import healthCare from "../../Assets/Projects/HealthCare.png"; // ✅ match exact file name




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatApp}
              isBlog={false}
              title="Realtime Chat App"
              description="A modern, full-featured chat application built with the MERN stack, integrated with real-time messaging using Socket.io, stylish UI with TailwindCSS and DaisyUI, and advanced authentication. Perfect for learning real-time app development!"
              ghLink="https://github.com/sudhakarsharma07/Chat-app"
              demoLink="https://chat-app-onl3.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={financeDashboard}
              isBlog={false}
              title="Finance-dashboard"
              description="A responsive and interactive personal finance dashboard to visualize user financial data using charts, reusable components, and state management ."
              ghLink="https://github.com/sudhakarsharma07/finance-dashboard"
              demoLink="https://finance-dashboard-navy-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nomadTour}
              isBlog={false}
              title="NomadTours"
              description="The Tour and Travel React Web Application is a fully responsive and interactive platform that allows users to explore travel destinations, view tour packages, and seamlessly book their trips. Built with React.js, Tailwind CSS, it provides users a smooth browsing experience, and an intuitive user interface."
              ghLink="https://github.com/sudhakarsharma07/NomadTours"
              demoLink="https://nomad-tours.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pasteApp}
              isBlog={false}
              title="Paste-app"
              description="A simple and efficient note-taking application built using React, Tailwind CSS, and Redux Toolkit, with local browser storage to save and manage notes ."
              ghLink="https://github.com/sudhakarsharma07/Paste-App"
              demoLink="https://paste-app-eight-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthCare}
              isBlog={false}
              title="HealthCare-dashboard"
              description="A modern, responsive healthcare dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides a comprehensive view of patient health metrics, appointments, and activities."
              ghLink="https://github.com/sudhakarsharma07/Healthcare-dashboard"
              demoLink = "https://healthcare-dashboard-seven-sigma.vercel.app/"
            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
