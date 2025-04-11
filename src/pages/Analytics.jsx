  import React from 'react'
  import OverViewCards from '../components/analyticsComponent/OverViewCards';

  const Analytics = () => {
    return (
      <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
         <OverViewCards/>
    
     </main>
   </div>
    )
  }
  
 export default Analytics