// src/components/EventDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    async function fetchEventDetails() {
      const response = await axios.get(`http://localhost/college-event-management/backend/get_event_details.php?id=${id}`);
      setEvent(response.data);
    }
    fetchEventDetails();
  }, [id]);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost/college-event-management/backend/submit_feedback.php", {
      event_id: id,
      feedback,
    });
    alert("Feedback submitted!");
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.date} | {event.time} | {event.venue}</p>
      <form onSubmit={handleFeedbackSubmit}>
        <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Your feedback" />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default EventDetails;
