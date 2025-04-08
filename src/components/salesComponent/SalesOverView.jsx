import React from 'react'
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const monthlySalesData = [
	{ month: "Jan", sales: 4500 },
	{ month: "Feb", sales: 5100 },
	{ month: "Mar", sales: 6000 },
	{ month: "Apr", sales: 6500 },
	{ month: "May", sales: 6500 },
	{ month: "Jun", sales: 3000 },
	{ month: "Jul", sales: 9000 },
    { month: "Aug", sales: 8000 },
    { month: "Sep", sales: 3000 },
    { month: "Oct", sales: 2600 },
    { month: "Nov", sales: 4581 },
    { month: "Dec", sales: 5788 },
];
const SalesOverView = () => {
    const [selectTimeTange, setSelectTimeRange] = useState("2")
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
	>
    <div className='flex items-center justify-between mb-6'>
      <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

      <select className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500' 
       value={selectTimeTange}
       onChange={(e) => setSelectTimeRange(e.target.value)}
      >
        <option value="1">This Week</option>
        <option value="2">This Month</option>
        <option value="3">This Quarter</option>
        <option value="4">This Year</option>
      </select>
    </div>
     <div className='w-full h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
           <AreaChart data={monthlySalesData}>
             <CartesianGrid strokeDasharray={"3 3"} stroke='#374151'/>
             <XAxis dataKey={"month"} stroke='#9CA3AF'/>
             <YAxis stroke='#9CA3AF'/>
             <Tooltip
               contentStyle={{backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor:"#4B5563"}}
               itemStyle={{color:"#E5E7EB"}}
             />
             <Area type='monotone' dataKey='sales' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
           </AreaChart>
        </ResponsiveContainer>
     </div>
    </motion.div>
  )
}

export default SalesOverView