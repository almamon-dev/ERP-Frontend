import { companiesRoutes } from './Companies';
import { branchesRoutes } from './Branches';
import { departmentsRoutes } from './Departments';
import { designationsRoutes } from './Designations';
import { teamsRoutes } from './Teams';
import { RouteObject } from 'react-router-dom';

export const organizationRoutes: RouteObject[] = [
    {
        path: 'organization',
        children: [
            ...companiesRoutes,
            ...branchesRoutes,
            ...departmentsRoutes,
            ...designationsRoutes,
            ...teamsRoutes,
        ]
    }
];
