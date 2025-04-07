import React from 'react';
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
	{ title: "Website", value: 68900 },
	{ title: "Mobile App", value: 42890 },
	{ title: "Marketplace", value: 19800 },
	{ title: "Social Media", value: 98700 },
];
const OverviewChannelChart = () => {
    return (
        <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Sales by Channel</h2>

            <div className='h-80'>
              <ResponsiveContainer>
                 
              </ResponsiveContainer>
            </div>
      </motion.div>
    )   
}

export default OverviewChannelChart;