import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Grid } from '@mui/material';
import { Filter } from '../filter/Filter';
import Navbar from '../NavigationBar/Navbar';
import './calendar.css';
import axios from 'axios';


export const Calendar = () => {
  const [option, setOption] = useState('');
  const [batch, setBatch] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getEvents');
        setEvents(response.data.map(event => ({
          title: event.eventype,  
          start: event.startdate,
          end: event.enddate,
          color: 'purple',  
        })));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleBatchChange = (newBatch) => {
    setBatch(newBatch);
  };

  // const events = [
  //   {
  //     title: `${option} ${batch}`,
  //     module: 'ADS',
  //     batchC: 'April 2023-2025',
  //     start: '2023-12-01',
  //     sem: '2',
  //     block: '2'
  //   },
  //   {
  //     title: `${option} ${batch}`,
  //     module: `ACS`,
  //     start: '2023-12-07',  
  //     batchC: 'April 2023-2025',
  //     end: '2023-12-10',
  //     color: 'purple' // override!
  //   },
  //   {
  //     title: 'ADS',
  //     start: '2023-12-12',
  //     end: '2023-12-13',
  //     color: 'purple' // override!
  //   },
  //   {
  //     title: 'ADS',
  //     url: 'https://google.com/',
  //     start: '2023-12-28'
  //   }
  // ]

  const filteredEvents = events.filter((event) => {
      return (
        (event.module === option || option === '') &&
        (event.batchC === batch || batch === '')        
      );
    });

  const resetFilter = () => {
    setOption('');
    setBatch('');
  }
    
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={6} style={{ marginTop: '10px' }}>
          <div className='calendar'>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView='dayGridMonth'
              events={filteredEvents}
              headerToolbar={{
                center: 'prev,next',
                left: 'title',
                end: ''
              }}
              height={"80vh"}
            />
          </div>
        </Grid>
        <Grid item xs={6} className='filter'>
          <Filter setNewSelectedOption={setOption} setNewBatch={handleBatchChange} handleReset = {resetFilter}/>
        </Grid>
      </Grid>
    </>
  );
};

export default Calendar;
