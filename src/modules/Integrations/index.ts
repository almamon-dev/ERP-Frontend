import { apiKeysRoutes } from './ApiKeys';
import { webhooksRoutes } from './Webhooks';
import { googleRoutes } from './Google';
import { microsoftRoutes } from './Microsoft';
import { paymentGatewayRoutes } from './PaymentGateway';
import { RouteObject } from 'react-router-dom';

export const integrationsRoutes: RouteObject[] = [
    {
        path: 'integrations',
        children: [
            ...apiKeysRoutes,
            ...webhooksRoutes,
            ...googleRoutes,
            ...microsoftRoutes,
            ...paymentGatewayRoutes,
        ]
    }
];
