import React, { Suspense, lazy } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Chargement différé du formulaire de création d'employé
const CreateEmployeeForm = lazy(() =>
  import('../../components/CreateEmployeeForm/CreateEmployeeForm')
);

export default function Home() {
  return (
    <div className='home'>
      <h2>Create Employee</h2>
      {/* Suspense affiche "Chargement..." pendant le lazy loading du formulaire */}
      <Suspense fallback={<div>Chargement...</div>}>
        <CreateEmployeeForm />
      </Suspense>
    </div>
  );
}
