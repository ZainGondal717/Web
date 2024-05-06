"use client";

import React, { useState, useEffect } from 'react';
import Navigation from '../usernavigation';
import '../../../../CSS/projecttable.css';

interface Project {
    _id: string;
    projectName: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    fundingDetails:string;
}

const ProjectTable: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedStatus, setSelectedStatus] = useState<string>('');

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

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStatus(e.target.value);
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleStatusUpdate = async () => {
        if (!selectedProject || !selectedStatus) return;

        try {
            const response = await fetch(`http://localhost:3002/projects/${selectedProject._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: selectedStatus }),
            });
            if (!response.ok) {
                throw new Error('Failed to update project status');
            }
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

    const filteredProjects = projects.filter(project =>
        project.projectName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Navigation />
            <h2>Projects</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by project name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {selectedProject && (
                <div className="status-update-container">
                    <h3>Update Status for Project:<span> {selectedProject.projectName}</span></h3>
                    <select value={selectedStatus} onChange={handleStatusChange}>
                        <option value="">Select Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Ready">Ready</option>
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
                        {filteredProjects.map(project => (
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
