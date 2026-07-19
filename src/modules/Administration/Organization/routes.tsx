import { RouteObject, Navigate } from 'react-router-dom';
import CompaniesModule from './Companies';
import { companyRoutes } from './Companies/routes';
import BranchesModule from './Branches';
import { branchRoutes } from './Branches/routes';
import BusinessUnitsModule from './BusinessUnits';
import { businessUnitRoutes } from './BusinessUnits/routes';
import DepartmentsModule from './Departments';
import { departmentRoutes } from './Departments/routes';
import DesignationsModule from './Designations';
import { designationRoutes } from './Designations/routes';
import TeamsModule from './Teams';
import { teamRoutes } from './Teams/routes';

export const organizationRoutes: RouteObject[] = [
  {
      index: true,
      element: <Navigate to="companies" replace />
  },
  { 
      path: 'companies', 
      element: <CompaniesModule />,
      children: companyRoutes
  },
  { 
      path: 'branches', 
      element: <BranchesModule />,
      children: branchRoutes
  },
  { 
      path: 'departments', 
      element: <DepartmentsModule />,
      children: departmentRoutes
  },
  { 
      path: 'business-units', 
      element: <BusinessUnitsModule />,
      children: businessUnitRoutes
  },
  { 
      path: 'designations', 
      element: <DesignationsModule />,
      children: designationRoutes
  },
  { 
      path: 'teams', 
      element: <TeamsModule />,
      children: teamRoutes
  },
];
