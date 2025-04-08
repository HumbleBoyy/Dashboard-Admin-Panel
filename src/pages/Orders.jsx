import React from 'react'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from '../components/StatCard';
import DailyOrders from '../components/ordersComponent/DailyOrders';
const orderStats = {
	totalOrders: "2,181",
	pendingOrders: "26",
	completedOrders: "2,319",
	totalRevenue: "$718,717",
};
const Orders = () => {
  return (
    <div className='flex-1 overflow-auto relative'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
      <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
     >
       <StatCard title='Total Oreders' icon={ShoppingBag} value={orderStats.totalOrders} color='#10a7e8' />
       <StatCard title='Pending Orders' icon={Clock} value={orderStats.pendingOrders}  color='#F59E0B' />
       <StatCard title='Completed Orders' icon={CheckCircle} value={orderStats.completedOrders} color='#14e810' />
       <StatCard title='Total Revenue' icon={DollarSign} value={orderStats.totalRevenue} color='#EF4444' />
      </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <DailyOrders/>
      </div>
      </main>
    </div>
  )
}

export default Orders