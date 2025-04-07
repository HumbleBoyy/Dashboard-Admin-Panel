import React from 'react'
import { motion } from 'framer-motion';
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import StatCard from "../components/StatCard";
import OverviewChart from '../components/overviewComponents/OverviewChart';
import OverviewPieChart from '../components/overviewComponents/OverviewPieChart';
const Overview = () => {
  return (
    <div className='flex-1 overflow-auto relative'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
         className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
         initial={{opacity:0, y:20}}
         animate={{opacity:1, y:0}}
         transition={{duration:1}}
        >
          <StatCard title='Total Sales' icon={Zap} value='$900,000' color='#6366F1' />
					<StatCard title='New Users' icon={Users} value='4,671' color='#8B5CF6' />
					<StatCard title='Total Products' icon={ShoppingBag} value='1890' color='#EC4899' />
					<StatCard title='Conversion Rate' icon={BarChart2} value='15.9%' color='#10B981' />
        </motion.div>


        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
           <OverviewChart/>
           <OverviewPieChart/>
        </div>
      </main>
    </div>
  )
}

export default Overview