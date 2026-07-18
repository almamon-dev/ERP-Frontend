import { RouteObject } from 'react-router-dom';
import CompanyList from './pages/List';
import CompanyCreate from './pages/Create';
import CompanyEdit from './pages/Edit';
import CompanyView from './pages/View';

export const companyRoutes: RouteObject[] = [
    { index: true, element: <CompanyList /> },
    { path: 'create', element: <CompanyCreate /> },
    { path: ':id/edit', element: <CompanyEdit /> },
    { path: ':id', element: <CompanyView /> },
];
