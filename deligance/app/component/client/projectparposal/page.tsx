"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Navigation from '../clientnavigaton';
import '../../../../CSS/projactparposal.css'; 

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fundingDetails, setFundingDetails] = useState("");
  const [status, setStatus] = useState(""); // Add status state
  const [file, setFile] = useState<File | null>(null);

  const api = "http://localhost:3002";

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("projectName", projectName);
      formData.append("description", description);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("fundingDetails", fundingDetails);
      formData.append("status", status); // Append status to FormData
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch(`${api}/projects`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Project created successfully!");

    } catch (error) {
      alert("Error occurred while creating project");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navigation  />
      <h1>Project Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            required
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="startDate"
            placeholder="Start Date"
            required
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="endDate"
            placeholder="End Date"
            required
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="fundingDetails"
            placeholder="Funding Details"
            required
            value={fundingDetails}
            onChange={(e) => setFundingDetails(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="status"
            placeholder="Status"
            required
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
