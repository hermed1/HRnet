import React from 'react';
import './CreateEmployeeForm.css';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { US_STATES } from '../../constants/usStates';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      zipCode,
      state,
      department,
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form action='' className='createEmployeeForm' onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='lastName'
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />

        <label htmlFor='dateOfBirth'>Date of Birth</label>
        <DatePicker
          value={dateOfBirth}
          onChange={(newValue) => setDateOfBirth(newValue)}
          views={['year', 'month', 'day']}
          dayOfWeekFormatter={(date) => dayjs(date).format('ddd')}
          slotProps={{
            textField: { id: 'dateOfBirth' },
            actionBar: { actions: ['today'] },
          }}
        />

        <label htmlFor='startDate'>Start date</label>
        <DatePicker
          views={['year', 'month', 'day']}
          dayOfWeekFormatter={(date) => dayjs(date).format('ddd')}
          slotProps={{
            textField: { id: 'startDate' },
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
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            id='city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <label htmlFor='zipCode'>Zip Code</label>
          <input
            type='text'
            id='zipCode'
            onChange={(e) => setZipCode(e.target.value)}
            value={zipCode}
          />

          <FormControl fullWidth margin='normal' required>
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
        <FormControl fullWidth margin='normal' required>
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
  );
}
