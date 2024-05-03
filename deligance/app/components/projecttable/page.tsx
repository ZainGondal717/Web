"use client"
import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';
import '../../CSS/ProjectTable.css';

interface Project {
    id: number;
    projectName: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
}

export default function ProjectTable() {
    const [projects, setProjects] = useState<Project[]>([]); 

    useEffect(() => {
       
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:3002/projects');
            if (!response.ok) {
                throw new Error('Failed to fetch projects');
            }
            const projectsData = await response.json();
            setProjects(projectsData);
        } catch (error) {
            console.error('Error fetching projects:', error);
            
        }
    };

    return (
        <>
            <Navigation />
            <h2>Projects</h2>
            <div className="project-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project.id}>
                                <td>{project.id++}</td>
                                <td>{project.projectName}</td>
                                <td>{project.description}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>{project.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
