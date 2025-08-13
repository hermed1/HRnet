import React from 'react';
import './CreateEmployeeForm.css';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // pour que ce soit en français

export default function CreateEmployeeForm() {
  const [dateOfBirth, setDateOfBirth] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form action='' className='createEmployeeForm'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' />
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' />
        <label htmlFor='dateOfBirth'>Date of Birth</label>
        <DatePicker
          id='dateOfBirth'
          value={dateOfBirth}
          onChange={setDateOfBirth}
          views={['year', 'month', 'day']}
          dayOfWeekFormatter={(date) => dayjs(date).format('ddd')} // 3 lettres
          slotProps={{
            textField: { id: 'dateOfBirth' }, // ← ici, l’input reçoit l’id
            actionBar: { actions: ['today'] },
          }}
        />
        <fieldset className='fieldsetAddress'>
          <legend>Address</legend>
          <label htmlFor='street'></label>
          <input type='text' id='street' />
          <label htmlFor='city'>City</label>
          <input type='text' id='city' />

          <label htmlFor=''>Zip Code</label>
          <input type='number' id='zipCode' />
        </fieldset>
        <button type='submit' className='createEmployeeForm__submitBtn'>
          Save
        </button>
      </form>
    </LocalizationProvider>
  );
}
