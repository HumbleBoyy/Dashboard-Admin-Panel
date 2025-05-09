import React from 'react'
import { PATH } from "./usePath";
import { Analytics, Orders, Overview, Products, Sales, Settings, Users } from '../pages';
import { BarChart2, DollarSign, Settings2, ShoppingBag, ShoppingCart, TrendingUp, Users2 } from 'lucide-react';

export const sidebarLinks = [
    {
        id:1,
        icon:BarChart2,
        title:"Overview",
        color:"#6366f1",
        link:PATH.overview
    },
    {
        id:2,
        icon:ShoppingBag,
        title:"Products",
        color:"#8B5CF6",
        link:PATH.products
    },
    {
        id:3,
        icon:Users2,
        title:"Users",
        color:"#EC4899",
        link:PATH.users
    },
    {
        id:4,
        icon:DollarSign,
        title:"Sales",
        color:"#10B981",
        link:PATH.sales
    },
    {
        id:5,
        icon:ShoppingCart,
        title:"Orders",
        color:"#F59E0B",
        link:PATH.orders
    },
    {
        id:6,
        icon:TrendingUp,
        title:"Analytics",
        color:"#3B82F6",
        link:PATH.analytics
    },
    {
        id:7,
        icon:Settings2,
        title:"Settings",
        color:"#6EE7B7",
        link:PATH.settings
    },
]
export const pagesRoute = [
    {
        id:1,
        path:PATH.overview,
        element:<Overview/>
    },
    {
        id:2,
        path:PATH.products,
        element:<Products/>
    },
    {
        id:3,
        path:PATH.users,
        element:<Users/>
    }, 
    {
        id:4,
        path:PATH.sales,
        element:<Sales/>
    },   
    {
        id:5,
        path:PATH.orders,
        element:<Orders/>
    }, 
    {
        id:6,
        path:PATH.analytics,
        element:<Analytics/>
    },
    {
        id:7,
        path:PATH.settings,
        element:<Settings/>
    },
]