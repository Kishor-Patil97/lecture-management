import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import './AddEventsTable.css'


export const AddEventsTable = ({rows, deleteRow}) => {
  return (
    <div className='table-wrapper'>
        <table className='events-table'>
            <thead>
                <tr>
                    <th>Start date</th>
                    <th>End date</th>
                    <th>Start time</th>
                    <th>End time</th>
                    <th>Event type</th>
                    <th>Event details</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {rows.map((row, index) => {

            return (
              <tr key={index}>
                <td>{row.startdate}</td>
                <td>{row.enddate}</td>
                <td>{row.startime}</td>
                <td>{row.endtime}</td>
                <td>{row.eventype}</td>
                <td>{row.eventdetails}</td>
                <td>
                  <span className="actions">
                  <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(index)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
            </tbody>
        </table>
      
    </div>
  )
}

export default AddEventsTable
