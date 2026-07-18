import React from 'react';
import { RouteObject } from 'react-router-dom';
import GoodsReceivePage from './pages/GoodsReceivePage';

export const goodsReceiveRoutes: RouteObject[] = [
    {
        path: 'goods-receive',
        element: <GoodsReceivePage />,
    }
];
