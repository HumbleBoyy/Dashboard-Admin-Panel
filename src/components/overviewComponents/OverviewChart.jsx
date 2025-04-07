import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
const reportSalesData = [
	{ title: "Jul", sales: 9500 },
	{ title: "Aug", sales: 2500 },
	{ title: "Sep", sales: 2100 },
	{ title: "Oct", sales: 2200 },
	{ title: "Nov", sales: 5400 },
	{ title: "Dec", sales: 7200 },
	{ title: "Jan", sales: 8100 },
	{ title: "Feb", sales: 5900 },
	{ title: "Mar", sales: 7800 },
	{ title: "Apr", sales: 8100 },
	{ title: "May", sales: 5400 },
	{ title: "Jun", sales: 4200 },
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

     <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
           <LineChart data={reportSalesData}>
             <CartesianGrid strokeDasharray={"3 3"} stroke='#4B5563'/>
             <XAxis dataKey={"title"} stroke='#9ca3af'/>
             <YAxis stroke='#9ca3af'/>
             <Tooltip 
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
            }}
            itemStyle={{ color: "#E5E7EB" }}
             />
                  <Line
                    type='monotone'
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

export default OverviewChart