import React, {useState} from 'react'
import { BsFillTrashFill } from "react-icons/bs";
import './ScheduleTable.css';

export const ScheduleTable = ({lectureData, deleteRow}) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = [...lectureData].sort((a, b) => {
    const aWeek = a.week || ''; 
    const bWeek = b.week || '';
    const comparison = sortOrder === 'asc' ? aWeek.localeCompare(b.week) : bWeek.localeCompare(a.week);
    return comparison;
  });



  return (
    <div className='schedule-table-main'>
    <table style={{marginLeft:'50px',marginTop: '10px', width:'980px'}}>
      <thead>
        <tr style={{backgroundColor:'lightgrey'}}>
          <th>ID</th>
          <th onClick={handleSort}>Week{sortOrder === 'asc' ? ' ▼' : ' ▲'}</th>
          <th>Date</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Description</th>
          <th>Professors</th>
          <th>Lecture Units</th>
          <th>Actions</th>
        </tr>
        </thead>
        
      <tbody>
        {sortedData.map((row, index) => (
          <tr key={index+1} >
            <td>{index +1 }</td>
            <td>{row.week}</td>
            <td>{row.date}</td>
            <td>{row.startTime}</td>
            <td>{row.endTime}</td>
            <td>{row.description}</td>
            <td>{row.professors}</td>
            <td>{row.lectureUnits}</td>
            <td>
                  <span className="actions">
                  <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(index)}
                    />
                  </span>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ScheduleTable
