import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import EmployeesList from '../pages/EmployeesList/EmployeesList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'employees', element: <EmployeesList /> },
    ],
  },
]);

export default router;
