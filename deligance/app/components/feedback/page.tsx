"use client";
import React, { useState } from 'react';
import Navigation from '../Navigation';
import '../../CSS/FeedbackForm.css';

export default function Feedback() {
  const [projectId, setProjectId] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId,
          feedback: feedbackText,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      alert('Feedback submitted successfully!');
    } catch (error) {
      alert('Error submitting feedback');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navigation />
      <h1>Feedback</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectId">Project ID:</label>
            <input
              type="text"
              id="projectId"
              name="projectId"
              placeholder="Enter Project ID"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Enter Your Feedback"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
