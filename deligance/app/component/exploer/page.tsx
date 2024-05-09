
"use client";
import React from 'react';
import Link from 'next/link';
import '../../../CSS/exploer.css';


const ProjectDetailPage= () => {
  return (
    <div>
      <h1>Project: Digitalizing Data Collection for Due Diligence</h1>

      <section>
        <h2>Overview</h2>
        <p>
          FAST (Foundation for Advancement of Science and Technology) manages various grant-based projects and plans to initiate an incubation center. As part of its operations, FAST needs to perform due diligence on all projects operating under its platform. The objective is to digitalize the data collection process for due diligence purposes.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>
        <ul>
          <li>Automate data collection for due diligence.</li>
          <li>Standardize data submission processes.</li>
          <li>Provide a platform for ORIC/Incubation Center to review project activities.</li>
        </ul>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>Secure user authentication and authorization.</li>
          <li>Customizable data submission forms.</li>
          <li>Real-time data validation and error handling.</li>
          <li>Role-based access control for data review.</li>
          <li>Dashboard for project overview and status tracking.</li>
        </ul>
      </section>

      <section>
        <h2>Technology Stack</h2>
        <ul>
          <li>Frontend: React.js with Next.js for server-side rendering.</li>
          <li>Backend: Node.js with Express.js for RESTful API.</li>
          <li>Database: MongoDB for data storage.</li>
          <li>Authentication: JSON Web Tokens (JWT).</li>
          <li>Styling: CSS with Sass for styling.</li>
        </ul>
      </section>

      <section>
        <h2>Team Members</h2>
        <ul>
          <li>Zain Gondal- Project Manager</li>
          <li>Mohid- Frontend Developer</li>
          <li>Zain Gondal - Backend Developer</li>
          <li>Umer - UX/UI Designer</li>
        </ul>
      </section>

      <section>
        <h2>Epics</h2>
        <p>
          Explore the epics related to the project:
          {' '}
          <Link href="https://www.notion.so/ab99f995870a400d879985c34902b925?pvs=21">
          
          </Link>
        </p>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
