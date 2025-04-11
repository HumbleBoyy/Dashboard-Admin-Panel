import React from 'react'
import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";

const overviewData = [
	{ id:1, name:"Revenue", value: "$5,226,911", change: 12.5, icon: DollarSign },
	{ id:2, name:"Users", value: "45,678", change: 8.3, icon: Users },
	{ id:3, name:"Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
	{ id:4, name:"Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

const OverViewCards = () => {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
      {overviewData.map((item, index)=> (
        <motion.div
          key={item.id}
          className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
          <div className='flex items-center justify-between'>
              <div>
                 <h3 className='text-sm font-medium text-gray-400'>{item.name}</h3>
                 <p className='mt-1 text-xl font-semibold text-gray-100'>{item.value}</p>
              </div>
              <div className={`p-3  rounded-full ${item.change >= 0 ? "bg-green-500/20" : "bg-red-500/20"}`}>
                <item.icon className={`size-6 ${item.change >= 0 ? "text-green-500" : "text-red-500"}`} />
              </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default OverViewCards