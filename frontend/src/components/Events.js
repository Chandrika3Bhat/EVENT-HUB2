// src/components/Events.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching events!', error);
      });
  }, []);

  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {events.length > 0 ? (
            events.map(event => (
              <tr key={event.event_id}>
                <td>{event.event_name}</td>
                <td>{event.event_date}</td>
                <td>{event.event_time}</td>
                <td>{event.venue}</td>
                <td><a href={`/register_event/${event.event_id}`}>Register</a></td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5">No upcoming events</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Events;
