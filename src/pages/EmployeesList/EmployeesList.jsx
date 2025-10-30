import React from 'react';
import './EmployeesList.css';
import Table from '../../components/Table/Table.jsx';

export default function EmployeesList() {
  return (
    <div id='employee-div' className='container'>
      <h1>Current Employees</h1>
      <Table />
    </div>
  );
}
