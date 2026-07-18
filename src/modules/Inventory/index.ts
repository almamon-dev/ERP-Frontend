import { productsRoutes } from './Products';
import { categoriesRoutes } from './Categories';
import { brandsRoutes } from './Brands';
import { unitsRoutes } from './Units';
import { warehousesRoutes } from './Warehouses';
import { stockRoutes } from './Stock';
import { stockTransferRoutes } from './StockTransfer';
import { stockAdjustmentRoutes } from './StockAdjustment';
import { RouteObject } from 'react-router-dom';

export const inventoryRoutes: RouteObject[] = [
    {
        path: 'inventory',
        children: [
            ...productsRoutes,
            ...categoriesRoutes,
            ...brandsRoutes,
            ...unitsRoutes,
            ...warehousesRoutes,
            ...stockRoutes,
            ...stockTransferRoutes,
            ...stockAdjustmentRoutes,
        ]
    }
];
