"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../clientnavigaton';
import '../../../../CSS/feedbacksee.css';
interface Feedback {
  projectId: string;
  feedback: string;
}

const FeedbackDisplay: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get<Feedback[]>('http://localhost:3002/feedbacks');
        setFeedbacks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <>
      <Navigation />
      <div className="FeedbackDisplay">
        <h2>Feedbacks</h2>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.projectId}</td>
                  <td>{feedback.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default FeedbackDisplay;
