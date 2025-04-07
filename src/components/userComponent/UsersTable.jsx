import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active", img:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active", img:"https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive", img:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active", img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active", img:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
];

const UsersTable = () => {
    const [search, setSearch] = useState("")
    const [filterProducts, setFilterProducts] = useState(userData)
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase()
        setSearch(term)
        const filtered = userData.filter(product => product.name.toLowerCase().includes(term) || product.role.toLowerCase().includes(term))
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
    <input value={search} onChange={handleSearch} type='text' placeholder='Search Users...' className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
    </div>
</div>

<div className='overflow-x-auto'>
<table className='min-w-full divide-y  divide-gray-700'>
  <thead>
      <tr>
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
    
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Email</th>
    
        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Role</th>

        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
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
           <img src={item.img} alt={item.name} className='size-10 rounded-full object-cover'/>
           {item.name}
         </td>

         <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
            {item.email}
         </td>
         <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
            {item.role}
         </td>
         <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
            <span className={`${item.status === "Active" ? "bg-green-600" : "bg-red-600"} px-2 rounded-2xl`}>{item.status}</span>
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

export default UsersTable