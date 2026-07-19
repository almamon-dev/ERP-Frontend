import { RouteObject } from 'react-router-dom';
import BusinessUnitList from './pages/List';
import BusinessUnitCreate from './pages/Create';
import BusinessUnitEdit from './pages/Edit';
import BusinessUnitView from './pages/View';

export const businessUnitRoutes: RouteObject[] = [
    { index: true, element: <BusinessUnitList /> },
    { path: 'create', element: <BusinessUnitCreate /> },
    { path: ':id/edit', element: <BusinessUnitEdit /> },
    { path: ':id', element: <BusinessUnitView /> },
];
