import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
import { sidebarLinks } from '../hooks/useRoute';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, width: 80 }}
      animate={{ opacity: 1, width: isSidebarOpen ? 250 : 80 }}
      transition={{ duration: 0.5 }}
      className="relative flex-shrink-0 sidebar_wrapper"
    >
      <div className="h-screen bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-500">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full max-w-fit hover:bg-gray-700 transition-colors"
        >
          <MenuIcon size={24}/>
        </motion.button>

        <nav className='mt-8 flex-grow'>
           {sidebarLinks.map((item, index)=> (
            <NavLink key={index} to={item.link}>
              <motion.div className='flex items-center p-4 text-md font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2'>
                <item.icon size={20} style={{color: item.color, minWidth:"20px"}}/> 

                <AnimatePresence>
                   {isSidebarOpen && (
                      <motion.span
                      className='ml-4 whitespace-nowrap'
                      initial={{opacity:0, widows:0}}
                      animate={{opacity:1, width:"auto"}}
                      exit={{opacity:0, width:0}}
                      transition={{duration:0.2, delay:0.1}}
                    >
                      {item.title}
                    </motion.span>
                   )}
                </AnimatePresence>
              </motion.div>
            </NavLink>
           ))} 
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
