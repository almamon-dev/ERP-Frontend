import { leadsRoutes } from './Leads';
import { customersRoutes } from './Customers';
import { contactsRoutes } from './Contacts';
import { opportunitiesRoutes } from './Opportunities';
import { followUpsRoutes } from './FollowUps';
import { communicationsRoutes } from './Communications';
import { RouteObject } from 'react-router-dom';

export const cRMRoutes: RouteObject[] = [
    {
        path: 'c-r-m',
        children: [
            ...leadsRoutes,
            ...customersRoutes,
            ...contactsRoutes,
            ...opportunitiesRoutes,
            ...followUpsRoutes,
            ...communicationsRoutes,
        ]
    }
];
