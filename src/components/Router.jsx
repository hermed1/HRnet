import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import EmployeeList from '../pages/EmployeeList/EmployeeList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout commun à toutes les pages
    children: [
      { index: true, element: <Home /> }, // Page d'accueil - création d'employés
      { path: 'employees', element: <EmployeeList /> }, // Liste des employés
    ],
  },
]);

export default router;
