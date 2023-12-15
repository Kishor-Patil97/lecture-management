import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Grid } from '@mui/material';
import { Filter } from '../filter/Filter';
import Navbar from '../NavigationBar/Navbar';
import './calendar.css';

export const Calendar = () => {
  const [option, setOption] = useState('');
  const events = [
    {
      title: 'ACS',
      start: '2023-12-01'
    },
    {
      title: 'ACS',
      start: '2023-12-07',
      end: '2023-12-10',
      color: 'purple' // override!
    },
    {
      title: 'ADS',
      start: '2023-12-12',
      end: '2023-12-13',
      color: 'purple' // override!
    },
    {
      title: 'ADS',
      url: 'https://google.com/',
      start: '2023-12-28'
    }
  ]

  const filteredEvents = option
    ? events.filter((event) => event.title === option)
    : events;
    
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
          <Filter setNewSelectedOption={setOption} />
        </Grid>
      </Grid>
    </>
  );
};

export default Calendar;
