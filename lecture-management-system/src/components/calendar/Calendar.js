import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridMonth'
                events= {[
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
                      title: 'Meeting',
                      start: '2023-12-12T10:30:00',
                      end: '2023-12-12T12:30:00'
                    },
                    {
                      title: 'Lunch',
                      start: '2023-12-12T12:00:00'
                    },
                    {
                      title: 'Meeting',
                      start: '2023-12-12T14:30:00'
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
                height={"90vh"}
            />
        </div>
    )
}
export default Calendar;