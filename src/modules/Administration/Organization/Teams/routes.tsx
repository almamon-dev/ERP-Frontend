import { RouteObject } from 'react-router-dom';
import TeamList from './pages/List';
import TeamCreate from './pages/Create';
import TeamEdit from './pages/Edit';
import TeamView from './pages/View';

export const teamRoutes: RouteObject[] = [
    { index: true, element: <TeamList /> },
    { path: 'create', element: <TeamCreate /> },
    { path: ':id/edit', element: <TeamEdit /> },
    { path: ':id', element: <TeamView /> },
];
