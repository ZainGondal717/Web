import '../../CSS/FeedbackForm.css';
import Navigation from '../Navigation';
import React from 'react';
export default function Feedback() {
  return (
    <>
    <Navigation/>
    <h1>Feedback</h1>
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="projectId">Project ID:</label>
          <input
            type="text"
            id="projectId"
            name="projectId"
            placeholder="Enter Project ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Enter Your Feedback"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}
