import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
const orderData = [
	{ id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2024-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2024-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2024-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2024-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2024-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2024-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2024-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2024-07-08" },
];

const OrderTable = () => {
	const [search, setSearch] = useState("")
	const [filterOrders, setFilterOrders] = useState(orderData)
    const handleSearch = (e) => {
		const term = e.target.value.toLowerCase()
		setSearch(term)
	    const filteredData = orderData.filter(item => item.customer.toLowerCase().includes(term) || item.status.toLowerCase().includes(term))
		setFilterOrders(filteredData)
	}
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
    >        

    <div className='flex justify-between items-center mb-6'>
      <h2 className='text-lg font-medium text-gray-100'>Product List</h2>
	  <div className='relative'>
        <input value={search} onChange={handleSearch} type='text' placeholder='Search Products...' className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
		<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
	  </div>
	</div>

	<div className='overflow-x-auto'>
       <table className='min-w-full divide-y  divide-gray-700'>
          <thead>
			  <tr>
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Id</th>
			
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Customer</th>
			
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Total</th>
		
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
			
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Date</th>
                
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Action</th>
			  </tr>
		  </thead>
		  <tbody className='divide-y divide-gray-700'>
            {filterOrders.map(item => (
			  <motion.tr key={item.id}
			   initial={{opacity:0}}
			   animate={{opacity:1}}
			   transition={{duration:0.3}}
			  >
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.id}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.customer}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.total}
				 </td>
                 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					<span className={`py-1 px-2 inline-flex leading-5 font-semibold rounded-full ${
						item.status === "Delivered" 
						? "bg-green-600"
						: item.status === "Processing"
						? "bg-yellow-600"
						:item.status === "Shipped"
						? "bg-blue-600"
						:"bg-red-600"
					}`}>
					  {item.status}
					</span>
				 </td>
                 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.date}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
						<Edit size={18} />
					</button>
					<button className='text-red-400 hover:text-red-300'>
						<Trash2 size={18} />
					</button>
				 </td>
			  </motion.tr>
			))}
		  </tbody>
	   </table>
	</div>
    </motion.div>        
  )
}

export default OrderTable