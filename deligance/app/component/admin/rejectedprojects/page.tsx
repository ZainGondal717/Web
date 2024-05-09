
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../CSS/pendingstatus.css';
import Navigation from '../adminnavigation';

interface RejectedProject {
  _id: string;
  projectName: string;
  status: string;
}

function Dashboard() {
  const [rejectedProjects, setRejectedProjects] = useState<RejectedProject[]>([]);

  useEffect(() => {
    axios.get<RejectedProject[]>('http://localhost:3002/rejected') 
      .then(response => {
        setRejectedProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching rejected projects:', error);
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
              {rejectedProjects.map(project => (
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

export default Dashboard;
