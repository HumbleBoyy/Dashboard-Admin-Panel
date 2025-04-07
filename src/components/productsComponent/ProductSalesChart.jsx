import React from 'react'
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
const productSalesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
    { month: "Jul", sales: 8500 },
    { month: "Aug", sales: 6500 },
    { month: "Sep", sales: 3500 },
    { month: "Oct", sales: 6800 },
    { month: "Nov", sales: 2500 },
    { month: "Dec", sales: 7800 },
];
const ProductSalesChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
>
<h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales Trend</h2>
    <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={productSalesData}>
                    <CartesianGrid strokeDasharray={"3 3"} stroke='#4B5563'/>
                    <XAxis dataKey={"month"} stroke='#9ca3af'/>
                    <YAxis stroke='#9ca3af'/>
                    <Tooltip 
                    contentStyle={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4B5563",
                    }}
                    itemStyle={{ color: "#E5E7EB" }}
                    />
                    <Legend />
                        <Line
                            type="natural"
                            dataKey='sales'
                            stroke='#6366F1'
                            strokeWidth={3}
                            dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                            />
                    </LineChart> 
        </ResponsiveContainer>
    </div>
</motion.div>
  )
}

export default ProductSalesChart