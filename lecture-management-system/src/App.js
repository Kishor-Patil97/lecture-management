import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { AddEvents } from './components/Add_events/AddEvents';
import { Calendar } from './components/calendar/Calendar';
import { Popup } from "./components/popup/Popup";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/addEvent" element={<AddEvents />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Popup" element={<Popup />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
