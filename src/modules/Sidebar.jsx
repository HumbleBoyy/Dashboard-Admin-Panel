import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon } from 'lucide-react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, width: 80 }}
      animate={{ opacity: 1, width: isSidebarOpen ? 260 : 80 }}
      transition={{ duration: 0.5 }}
      className="relative flex-shrink-0"
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
      </div>
    </motion.div>
  );
};

export default Sidebar;
