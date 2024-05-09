"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../clientnavigaton';
import '../../../../CSS/upgrateproject.css';

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
    const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
    const [formData, setFormData] = useState<Project>({
        _id: '',
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
        status: 'Pending',
        fundingDetails: '',
    });

    useEffect(() => {
        const interval = setInterval(fetchProjects, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval); // Cleanup
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get<Project[]>('http://localhost:3002/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleUpdateClick = (project: Project) => {
        setSelectedProject(project);
        setShowUpdateForm(true);
        setFormData({ ...project, status: 'Pending' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3002/projects/${selectedProject?._id}`, formData);
            setShowUpdateForm(false);
            fetchProjects(); // Refresh projects after update
        } catch (error) {
            console.error('Error updating project:', error);
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
                                    {(project.status === 'Pending' || project.status === 'Rejected') && (
                                        <button onClick={() => handleUpdateClick(project)}>Update</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showUpdateForm && (
                <div className="update-form">
                    <h3>Update Project</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label>Project Name:</label>
                            <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
                        </div>
                        <div>
                            <label>Start Date:</label>
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>End Date:</label>
                            <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Status:</label>
                            <input type="text" name="status" value={formData.status} onChange={handleInputChange} disabled />
                        </div>
                        <div>
                            <label>Funding Details:</label>
                            <textarea name="fundingDetails" value={formData.fundingDetails} onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit">Update Project</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ProjectTable;
