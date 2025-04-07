import React from 'react'
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
const categoryData = [
	{ name: "Electronics", value: 8700 },
	{ name: "Clothing", value: 5100 },
	{ name: "Home & Garden", value: 2691 },
	{ name: "Books", value: 5789 },
	{ name: "Sports & Outdoors", value: 4781 },
];
const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];
const OverviewPieChart = () => {
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
	>
     <h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>

     <div className='h-80'>

     </div>
    </motion.div>
  )
}

export default OverviewPieChart