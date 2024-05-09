"use client";
// Dashboard.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../CSS/pendingstatus.css';
import Navigation from '../adminnavigation';

interface PendingProject {
  _id: string;
  projectName: string;
  status: string;
}

function Pending() {
  const [pendingProjects, setPendingProjects] = useState<PendingProject[]>([]);

  useEffect(() => {
    axios.get<PendingProject[]>('http://localhost:3002/pending')
      .then(response => {
        setPendingProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching pending projects:', error);
      });
  }, []);

  return (
    <><Navigation/>
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
            {pendingProjects.map(project => (
              <tr key={project._id}>
                <td>{project._id}</td>
                <td>{project.projectName}</td>
                <td>{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
    
  );
}

export default Pending;
