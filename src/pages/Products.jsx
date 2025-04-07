import React from 'react'
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Package,TrendingUp } from "lucide-react";
import StatCard from "../components/StatCard";
import ProductTable from '../components/productsComponent/ProductTable';
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
          <StatCard title='Total Products' icon={Package} value='9250' color='#6366F1' />
					<StatCard title='Top Selling' icon={TrendingUp} value='8,971' color='#8B5CF6' />
					<StatCard title='Low Stock' icon={AlertTriangle} value='67' color='#EC4899' />
					<StatCard title='Total Revenue' icon={DollarSign} value='$760,000' color='#10B981' />
        </motion.div>

        <ProductTable/>
      </main>
    </div>
  )
}

export default Products