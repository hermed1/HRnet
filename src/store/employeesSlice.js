import { createSlice } from '@reduxjs/toolkit';

function loadEmployees() {
  try {
    const storedValue = window.localStorage.getItem('employees');
    if (!storedValue) {
      return [];
    }

    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    list: loadEmployees(),
  },
  reducers: {
    addEmployee: (state, action) => {
        //action = objet qui contient les données pour modifier le state
      state.list.push(action.payload);
      try {
        window.localStorage.setItem('employees', JSON.stringify(state.list));
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
