import React from 'react'
import { PATH } from "./usePath";
import { Analytics, Orders, Overview, Products, Sales, Settings, Users } from '../pages';


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