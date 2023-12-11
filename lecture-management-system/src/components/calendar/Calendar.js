import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Grid } from '@mui/material';
import { Filter } from '../filter/Filter';
import Navbar from '../NavigationBar/Navbar';

export const Calendar = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={6} style={{marginTop:'10px'}}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            events={[
              {
                title: 'All Day Event',
                start: '2023-12-01'
              },
              {
                title: 'Long Event',
                start: '2023-12-07',
                end: '2023-12-10',
                color: 'purple' // override!
              },
              {
                groupId: '999',
                title: 'Repeating Event',
                start: '2023-12-09T16:00:00'
              },
              {
                groupId: '999',
                title: 'Repeating Event',
                start: '2023-12-16T16:00:00'
              },
              {
                title: 'Conference',
                start: '2023-12-12',
                end: '2023-12-13',
                color: 'purple' // override!
              },
              {
                title: 'Birthday Party',
                start: '2023-12-13T07:00:00'
              },
              {
                title: 'Click for Google',
                url: 'https://google.com/',
                start: '2023-12-28'
              }
            ]}
            headerToolbar={{
              center: 'prev,next',
              left: 'title',
              end: ''
            }}
            height={"80vh"}
          />
        </Grid>
        <Grid item xs={6}>
          <Filter />
        </Grid>
      </Grid>
    </>
  );
};

export default Calendar;
