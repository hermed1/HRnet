import React from 'react';
import './CreateEmployeeForm.css';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { US_STATES } from '../../constants/usStates';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/employeesSlice';
import ConfirmationModal from 'adaptive-modal-component';
import { Link } from 'react-router-dom';

export default function CreateEmployeeForm() {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [state, setState] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth ? dateOfBirth.format('MM/DD/YYYY') : '',
      startDate: startDate ? startDate.format('MM/DD/YYYY') : '',
      street,
      city,
      zipCode,
      state,
      department,
    };
    console.log('New Employee:', newEmployee);
    dispatch(addEmployee(newEmployee));
    setIsOpen(true);
    setFirstName('');
    setLastName('');
    setDateOfBirth(null);
    setStartDate(null);
    setStreet('');
    setCity('');
    setZipCode('');
    setState('');
    setDepartment('');
  };

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form action='' className='createEmployeeForm' onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />

          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
          />

          <label htmlFor='dateOfBirth'>Date of Birth</label>
          <DatePicker
            value={dateOfBirth}
            onChange={(newValue) => setDateOfBirth(newValue)}
            views={['year', 'month', 'day']}
            dayOfWeekFormatter={(date) => dayjs(date).format('ddd')}
            //personnaliser des éléments internes du DatePicker. Passer des props aux sous-composants via slotProps//
            slotProps={{
              //relier le label externe (<label htmlFor='dateOfBirth'>) à l'input pour l'accessibilité et le focus clavier ;
              textField: { id: 'dateOfBirth', required: true },
              actionBar: { actions: ['today'] },
            }}
          />

          <label htmlFor='startDate'>Start date</label>
          <DatePicker
            views={['year', 'month', 'day']}
            dayOfWeekFormatter={(date) => dayjs(date).format('ddd')}
            slotProps={{
              textField: { id: 'startDate', required: true },
              actionBar: { actions: ['today'] },
            }}
            onChange={(newValue) => setStartDate(newValue)}
            value={startDate}
          />

          <fieldset className='fieldsetAddress'>
            <legend>Address</legend>
            <label htmlFor='street'>Street</label>
            <input
              type='text'
              id='street'
              onChange={(e) => setStreet(e.target.value)}
              value={street}
              required
            />
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
            <label htmlFor='zipCode'>Zip Code</label>
            <input
              type='text'
              id='zipCode'
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              required
            />

            <FormControl fullWidth required size="small">
              {/* remplace value par défaut */}
              <InputLabel id='state-label'>State</InputLabel>
              <Select
                labelId='state-label'
                id='state'
                name='state'
                label='State'
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <MenuItem value='' disabled>
                  Select a state
                </MenuItem>

                {US_STATES.map((stateOption) => (
                  <MenuItem
                    key={stateOption.abbreviation}
                    value={stateOption.name}
                  >
                    {stateOption.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </fieldset>
          <FormControl fullWidth required size="small">
            <InputLabel id='department-label'>Department</InputLabel>
            <Select
              labelId='department-label'
              id='department'
              name='department'
              label='Department'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value='' disabled>
                Select a department
              </MenuItem>
              <MenuItem value='Sales'>Sales</MenuItem>
              <MenuItem value='Marketing'>Marketing</MenuItem>
              <MenuItem value='Engineering'>Engineering</MenuItem>
              <MenuItem value='Human Resources'>Human Resources</MenuItem>
              <MenuItem value='Legal'>Legal</MenuItem>
            </Select>
          </FormControl>

          <button type='submit' className='createEmployeeForm__submitBtn'>
            Save
          </button>
        </form>
      </LocalizationProvider>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size='md'
        title='Employé Créé !'
        tone='success'
        textAlign='left'
      >
        <p>L'employé a bien été enregistré dans le système.</p>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
          Vous pouvez consulter la liste des employés{' '}
          <Link to='/employees' style={{ color: '#16a34a' }}>
            ici
          </Link>
          .
        </p>
      </ConfirmationModal>
    </div>
  );
}
