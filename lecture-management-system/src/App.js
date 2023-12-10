import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import {AddEvents} from './components/Add_events/AddEvents';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddEvents/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
