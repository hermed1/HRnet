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
        {/* Ancien exemple avec la prop "content" */}
        {/*<ConfirmationModal isOpen={isOpen}
                           onClose={() => setIsOpen(false)}
                           size = "sm"
                           title = "titre"
                           content="dededefssf"
                           tone ="success"/>*/}

        {/* Nouvel exemple avec "children" pour un contenu riche */}
        <ConfirmationModal isOpen={isOpen}
                           onClose={() => setIsOpen(false)}
                           size="md"
                           title="Employé Créé !"
                           tone="success"
                           textAlign="left"
        >
            <p>L'employé a bien été enregistré dans le système.</p>
            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                Vous pouvez consulter la liste des employés <Link to='/employees' style={{ color: '#16a34a' }}>ici</Link>.
            </p>
        </ConfirmationModal>

    </div>
  );
}
