import { RouteObject } from 'react-router-dom';
import DesignationList from './pages/List';
import DesignationCreate from './pages/Create';
import DesignationEdit from './pages/Edit';
import DesignationView from './pages/View';

export const designationRoutes: RouteObject[] = [
    { index: true, element: <DesignationList /> },
    { path: 'create', element: <DesignationCreate /> },
    { path: ':id/edit', element: <DesignationEdit /> },
    { path: ':id', element: <DesignationView /> },
];
