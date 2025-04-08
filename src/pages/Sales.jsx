import React from 'react'
import { motion } from 'framer-motion';
import { AlertTriangle, CarTaxiFront, DollarSign, CreditCard, ShoppingCart,TrendingUp } from "lucide-react";
import StatCard from "../components/StatCard";

const salesStats = {
	totalRevenue: "$6,721,281",
	averageOrderValue: "$99.99",
	conversionRate: "4.81%",
	salesGrowth: "22.5%",
};
const Sales = () => {
  return (
    <div className='flex-1 overflow-auto relative'>
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
     <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
     >
       <StatCard title='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#10B981' />
       <StatCard title='Avg.Order Value' icon={ShoppingCart} value={salesStats.averageOrderValue} color='#10B981' />
       <StatCard title='Low Stock' icon={TrendingUp} value={salesStats.conversionRate} color='#F59E0B' />
       <StatCard title='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
     </motion.div>
   </main>
 </div>
  )
}

export default Sales