import React from 'react';
import './Home.css';
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home'>
      <h1>HRnet</h1>
      <Link to='/employees'>View Current Employees</Link>
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
    </div>
  );
}
