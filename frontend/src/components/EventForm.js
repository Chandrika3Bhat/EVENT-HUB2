import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the default form submission

    try {
      // Making the POST request to the API
      const response = await axios.post('api/events.php', {
        name,
        date,
      });
      console.log(response.data);  // You can log the response or handle it as needed
    } catch (error) {
      console.error('Error:', error);  // Handles any errors that occur during the request
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
