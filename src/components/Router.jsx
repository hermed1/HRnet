import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import EmployeeList from '../pages/EmployeeList/EmployeeList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'employees', element: <EmployeeList /> },
    ],
  },
]);

export default router;
