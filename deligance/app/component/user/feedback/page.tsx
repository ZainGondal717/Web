"use client";
import React, { useState } from 'react';
import axios from 'axios';
import '../../../../CSS/feedback.css';
import Navigation from '../usernavigation';

const FeedbackForm = () => {
  const [projectId, setProjectId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null); // Explicitly typing error as any

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3002/feedback', {
        projectId,
        feedback,
      });

      if (response.status === 201) {
        setProjectId('');
        setFeedback('');
      }
    } catch (err: any) { // Explicitly typing err as any
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
  
    <>
      <Navigation/>
      <div className="feedback-form-container">
      <h2>Submit Feedback</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectId">Project ID:</label>
          <input
            type="text"
            id="projectId"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            required
          />
        </div>
      
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
    </>
    
  );
};

export default FeedbackForm;
