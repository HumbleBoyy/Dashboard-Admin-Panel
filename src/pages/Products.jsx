import React from 'react'
import { motion } from 'framer-motion';
import { AlertTriangle, BarChart2, DollarSign, Package, ShoppingBag, TrendingUp, Users, Zap } from "lucide-react";
import StatCard from "../components/StatCard";
const Products = () => {
  return (
    <div className='flex-1 overflow-auto relative'>
       <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
         className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
         initial={{opacity:0, y:20}}
         animate={{opacity:1, y:0}}
         transition={{duration:1}}
        >
          <StatCard title='Total Products' icon={Package} value='$900,000' color='#6366F1' />
					<StatCard title='Top Selling' icon={TrendingUp} value='4,671' color='#8B5CF6' />
					<StatCard title='Low Stock' icon={AlertTriangle} value='67' color='#EC4899' />
					<StatCard title='Total Revenue' icon={DollarSign} value='15.9%' color='#10B981' />
        </motion.div>
      </main>
    </div>
  )
}

export default Products