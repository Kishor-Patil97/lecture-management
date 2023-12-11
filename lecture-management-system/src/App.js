import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { AddEvents } from './components/Add_events/AddEvents';
import { Calendar } from './components/calendar/Calendar';
import { Popup } from "./components/popup/Popup";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/addEvent" element={<AddEvents />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Popup" element={<Popup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LocalizationProvider>
  );
}

export default App;
