import { RouteObject } from 'react-router-dom';
import CompaniesModule from './Companies';
import { companyRoutes } from './Companies/routes';
import BranchesPage from './Branches';
import DepartmentsPage from './Departments';
import DesignationsPage from './Designations';
import TeamsPage from './Teams';

export const organizationRoutes: RouteObject[] = [
  { 
      path: 'companies', 
      element: <CompaniesModule />,
      children: companyRoutes
  },
  { path: 'branches', element: <BranchesPage /> },
  { path: 'departments', element: <DepartmentsPage /> },
  { path: 'designations', element: <DesignationsPage /> },
  { path: 'teams', element: <TeamsPage /> },
];
