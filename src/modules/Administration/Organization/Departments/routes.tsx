import { RouteObject } from 'react-router-dom';
import DepartmentList from './pages/List';
import DepartmentCreate from './pages/Create';
import DepartmentEdit from './pages/Edit';
import DepartmentView from './pages/View';

export const departmentRoutes: RouteObject[] = [
    { index: true, element: <DepartmentList /> },
    { path: 'create', element: <DepartmentCreate /> },
    { path: ':id/edit', element: <DepartmentEdit /> },
    { path: ':id', element: <DepartmentView /> },
];
