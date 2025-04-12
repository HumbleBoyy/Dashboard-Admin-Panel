  import React from 'react'
  import OverViewCards from '../components/analyticsComponent/OverViewCards';
import RevenueChart from '../components/analyticsComponent/RevenueChart';
import ChannelPerformance from '../components/analyticsComponent/ChannelPerformance';
import ProductPerformance from '../components/analyticsComponent/ProductPerformance';
import UserRetention from '../components/analyticsComponent/UserRetention';

  const Analytics = () => {
    return (
      <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
         <OverViewCards/>
         <RevenueChart/>
         


         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
           <ChannelPerformance/>
           <ProductPerformance/>
           <UserRetention/>
         </div>
     </main>
   </div>
    )
  }
  
 export default Analytics