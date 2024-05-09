"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../usernavigation';
import '../../../../CSS/projecttable.css';

interface Project {
    _id: string;
    projectName: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    fundingDetails: string;
}

const ProjectTable: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>('');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get<Project[]>('http://localhost:3002/Accept');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleStatusUpdate = async () => {
        if (!selectedProject || !selectedStatus) return;

        try {
            await axios.patch(`http://localhost:3002/projects/${selectedProject._id}`, { status: selectedStatus });
            // Update the local projects array with the new status
            setProjects(prevProjects => {
                return prevProjects.map(project => {
                    if (project._id === selectedProject._id) {
                        return { ...project, status: selectedStatus };
                    }
                    return project;
                });
            });
            setSelectedProject(null);
            setSelectedStatus('');
        } catch (error) {
            console.error('Error updating project status:', error);
        }
    };

    return (
        <>
            <Navigation />
            <h2>Projects</h2>
            {selectedProject && (
                <div className="status-update-container">
                    <h3>Update Status for Project:<span> {selectedProject.projectName}</span></h3>
                    <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                        <option value="">Select Status</option>
                        
                        <option value="In Progress">In Progress</option>
                        <option value="Active">Active</option>
                        <option value="Complete">Complete</option>
                    </select>
                    <button onClick={handleStatusUpdate}>Update Status</button>
                </div>
            )}
            <div className="project-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Funds</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project._id}>
                                <td>{project._id}</td>
                                <td>{project.projectName}</td>
                                <td>{project.description}</td>
                                <td>{project.fundingDetails}</td>
                                <td>{project.startDate}</td>
                                <td>{project.endDate}</td>
                                <td>{project.status}</td>
                                <td>
                                    <button onClick={() => handleProjectClick(project)}>Select</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProjectTable;
