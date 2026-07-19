import { RouteObject } from 'react-router-dom';
import BranchList from './pages/List';
import BranchCreate from './pages/Create';
import BranchEdit from './pages/Edit';
import BranchView from './pages/View';

export const branchRoutes: RouteObject[] = [
    { index: true, element: <BranchList /> },
    { path: 'create', element: <BranchCreate /> },
    { path: ':id/edit', element: <BranchEdit /> },
    { path: ':id', element: <BranchView /> },
];
