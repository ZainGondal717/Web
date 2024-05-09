"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../CSS/pendingstatus.css';
import Navigation from '../adminnavigation';

interface AcceptedProject {
  _id: string;
  projectName: string;
  status: string;
}

function Accepted() {
  const [acceptedProjects, setAcceptedProjects] = useState<AcceptedProject[]>([]);

  useEffect(() => {
    axios.get<AcceptedProject[]>('http://localhost:3002/Accept') // Assuming this endpoint fetches accepted projects
      .then(response => {
        setAcceptedProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching accepted projects:', error);
      });
  }, []);

  return (
    <>
      <Navigation/>
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {acceptedProjects.map(project => (
                <tr key={project._id}>
                  <td>{project._id}</td>
                  <td>{project.projectName}</td>
                  <td>{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Accepted;
