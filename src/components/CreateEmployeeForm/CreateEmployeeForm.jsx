import React from 'react';
import './CreateEmployeeForm.css';
import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

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

  const US_STATES = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];

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
