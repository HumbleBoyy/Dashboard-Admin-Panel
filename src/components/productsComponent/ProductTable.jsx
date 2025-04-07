import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200, img:'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'},
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800, img:"https://images.unsplash.com/photo-1612023395494-1c4050b68647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fExlYXRoZXIlMjBXYWxsZXR8ZW58MHx8MHx8fDA%3D" },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650, img:"https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D" },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950, img:"https://images.unsplash.com/photo-1646239646963-b0b9be56d6b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8WW9nYSUyME1hdHxlbnwwfHwwfHx8MA%3D%3D" },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720, img:"https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29mZmVlJTIwTWFrZXJ8ZW58MHx8MHx8fDA%3D"},
	{ id: 6, name: "Iron", category: "Home", price: 36.99, stock: 18, sales: 520, img:null}
];

const ProductTable = () => {
	const [search, setSearch] = useState("")
	const [filterProducts, setFilterProducts] = useState(PRODUCT_DATA)
    const handleSearch = (e) => {
		const term = e.target.value.toLowerCase()
		setSearch(term)
	    const filtered = PRODUCT_DATA.filter(product => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
		setFilterProducts(filtered)
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
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
			
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Category</th>
			
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Price</th>
		
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Stock</th>
			
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Sales</th>
		
				<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
			  </tr>
		  </thead>
		  <tbody className='divide-y divide-gray-700'>
            {filterProducts.map(item => (
			  <motion.tr key={item.id}
			   initial={{opacity:0}}
			   animate={{opacity:1}}
			   transition={{duration:0.3}}
			  >
                 <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
				   <img src={item.img !== null ? item.img : "https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"} alt={item.name} className='size-10 rounded-full object-cover'/>
				   {item.name}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.category}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					<span className='text-green-500'>$</span>{item.price.toFixed(2)}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.stock}
				 </td>
				 <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
					{item.sales}
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

export default ProductTable