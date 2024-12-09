// src/components/EventList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await axios.get("http://localhost/college-event-management/backend/get_events.php");
      setEvents(response.data);
    }
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
