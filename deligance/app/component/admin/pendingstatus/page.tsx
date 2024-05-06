"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Define interface for project object
interface Project {
  _id: string;
  projectName: string;
  status: string;
  // Add other properties as needed
}

function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch projects with status 'pending' from the API
    axios.get<Project[]>('/projects?status=pending')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <TableContainer component={Paper}>
        <Table aria-label="project table">
          <TableHead>
            <TableRow>
              <TableCell>Project ID</TableCell>
              <TableCell>Project Name</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project._id}>
                <TableCell>{project._id}</TableCell>
                <TableCell>{project.projectName}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dashboard;
