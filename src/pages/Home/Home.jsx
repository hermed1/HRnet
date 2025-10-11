import React, {useState} from 'react';
import './Home.css';
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../components/ConfirmationModal/ConfirmationModal';

export default function Home() {
    const [isOpen, setIsOpen] = useState(true);
    return (
    <div className='home'>
      <h1>HRnet</h1>
      <Link to='/employees'>View Current Employees</Link>
      <h2>Create Employee</h2>
      <CreateEmployeeForm />
        <ConfirmationModal isOpen={isOpen}
                           onClose={() => setIsOpen(false)}
                           size = "sm"
                           title = "titre"
                           content="dededefssf"
                           tone ="success"/>
    </div>
  );
}
