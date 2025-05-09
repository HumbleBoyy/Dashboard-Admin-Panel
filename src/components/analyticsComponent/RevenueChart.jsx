import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 1500, target: 5800 },
	{ month: "Jul", revenue: 9000, target: 6500 },
    { month: "Aug", revenue: 5000, target: 7500 },
    { month: "Sep", revenue: 8000, target: 8000 },
    { month: "Oct", revenue: 9500, target: 9500 },
    { month: "Nov", revenue: 10000, target: 10500 },
    { month: "Dec", revenue: 10500, target: 11000 },
];
const RevenueChart = () => {
    const [selectTimeTange, setSelectTimeRange] = useState("2")
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
	>
        <div className='flex justify-between items-center mb-6'>
           <h2 className='text-xl font-semibold text-gray-100'>Revenue vs Target</h2>
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
        <div style={{ width: "100%", height: 400 }}>
           <ResponsiveContainer>
                <AreaChart data={revenueData}>
                   <CartesianGrid strokeDasharray="3 3" stroke='#374151'/>
                      <XAxis dataKey='month' stroke='#9CA3AF'/>
                      <YAxis stroke='#9CA3AF'/>
                      <Tooltip 
                        contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor: "#4B5563" }}
                        itemStyle={{ color: "#E5E7EB" }}
                      />
                      <Legend/>
                      <Area type="monotone" dataKey="revenue" stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3}/>
                      <Area type="monotone" dataKey="target" stroke='#10B981' fill='#10B981' fillOpacity={0.3}/>
                </AreaChart>
            </ResponsiveContainer>
           </div>
    </motion.div>
  )
}

export default RevenueChart