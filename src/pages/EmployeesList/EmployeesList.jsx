import React, { Suspense, lazy } from 'react';
import './EmployeesList.css';

// Chargement différé du composant Table pour optimiser les performances
const Table = lazy(() => import('../../components/Table/Table.jsx'));

export default function EmployeesList() {
  return (
    <div id='employee-div' className='container'>
      <h1>Current Employees</h1>
      {/* Suspense gère le chargement du composant lazy avec un fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        <Table />
      </Suspense>
    </div>
  );
}
