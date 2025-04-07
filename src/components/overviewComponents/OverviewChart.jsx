import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
const salesData = [
	{ title: "Jul", sales: 9999 },
	{ title: "Aug", sales: 2500 },
	{ title: "Sep", sales: 8100 },
	{ title: "Oct", sales: 2200 },
	{ title: "Nov", sales: 5400 },
	{ title: "Dec", sales: 7200 },
	{ title: "Jan", sales: 6100 },
	{ title: "Feb", sales: 5900 },
	{ title: "Mar", sales: 7800 },
	{ title: "Apr", sales: 8100 },
	{ title: "May", sales: 9400 },
	{ title: "Jun", sales: 1200 },
];
const OverviewChart = () => {
  return (
    <motion.div
     className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
     initial={{opacity:0,y:20}}
     animate={{opacity:1, y:0}}
     transition={{delay:0.2}}
    >
     <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>
    </motion.div>
  )
}

export default OverviewChart