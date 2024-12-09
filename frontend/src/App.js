// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import Login from "./components/Login";
import EventForm from './components/EventForm';
import TestComponent from './TestComponent'; 
import Events from './components/Events';

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <Router>
      <div>
        {user ? (
          <Routes>
            <Route path="/events" element={<EventList />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        ) : (
          <Login setUser={setUser} />
        )}
      </div>
    </Router>
  );
}

export default App;
