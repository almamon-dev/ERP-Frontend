import { vendorsRoutes } from './Vendors';
import { purchaseRequestsRoutes } from './PurchaseRequests';
import { purchaseOrdersRoutes } from './PurchaseOrders';
import { goodsReceiveRoutes } from './GoodsReceive';
import { billsRoutes } from './Bills';
import { returnsRoutes } from './Returns';
import { RouteObject } from 'react-router-dom';

export const purchaseRoutes: RouteObject[] = [
    {
        path: 'purchase',
        children: [
            ...vendorsRoutes,
            ...purchaseRequestsRoutes,
            ...purchaseOrdersRoutes,
            ...goodsReceiveRoutes,
            ...billsRoutes,
            ...returnsRoutes,
        ]
    }
];
