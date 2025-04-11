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
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];
const RevenueChart = () => {
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
	>
        <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Revenue vs Target</h2>
        </div>
    </motion.div>
  )
}

export default RevenueChart