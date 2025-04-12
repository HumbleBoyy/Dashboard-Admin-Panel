import React, { useState } from 'react'
import SettingsSection from './SettingsSection'
import { MailPlus, Plus } from 'lucide-react'
import google from '../../assets/socialmedialogos/google.png'
import facebook from '../../assets/socialmedialogos/facebook.svg'
import twitter from '../../assets/socialmedialogos/x.png'

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: google,
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: facebook,
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: twitter,
		},
	]);
  return (
    <SettingsSection icon={MailPlus} title={"Connected Accounts"}>
        {connectedAccounts.map((item, index)=> (
            <div key={index} className='flex items-center justify-between py-3'>
              <div className='flex gap-1'>
                  <img src={item.icon} alt={item.name} className='size-6 object-cover rounded-full mr-2'/>
                  <span className='text-gray-300'>{item.name}</span>
              </div>
              <button className={`px-3 py-1 rounded ${item.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"} transition duration-200`} 
              onClick={()=> setConnectedAccounts(connectedAccounts.map((account)=> {
                 if(account.id === item.id){
                    return{
                        ...account,
                        connected: !account.connected
                    }
                 }
                 return account;
              }))}>{item.connected ? "Connected" : "Connect"}</button>
            </div>
        ))}
        <button className='flex mt-4 items-center text-indigo-400 hover:text-indigo-300 transition duration-200'><Plus size={18} className='mr-2'/>Add Account</button>
    </SettingsSection>
  )
}

export default ConnectedAccounts