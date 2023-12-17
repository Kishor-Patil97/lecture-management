import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { AddEvents } from './components/Add_events/AddEvents';
import { Calendar } from './components/calendar/Calendar';
import { Popup } from "./components/popup/Popup";
import { Revertpopup } from "./components/revertreasonpopup/Revertpopup";
import { SchedulePage } from './components/SchedulePage/SchedulePage';
import { Login } from './components/Login/Login';
import { Tabs } from "./components/Tabs/Tabs";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/addEvent" element={<AddEvents />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Popup" element={<Popup />} />
          <Route path="/Revertreason" element={<Revertpopup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
