import React, { useState } from 'react'
import SettingsSection from './SettingsSection'
import { Bell } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Notification = () => {
    const [notification, setNotification] = useState({
        push:true,
        email:false,
        message:true
    })

  return (
    <SettingsSection icon={Bell} title={"Notifications"}>
       <ToggleSwitch label={"Push Notifications"} onToggle={()=> setNotification({...notification, push: !notification.push})} isOn={notification.push}/>
       <ToggleSwitch label={"Email Notifications"} onToggle={()=> setNotification({...notification, email: !notification.email})} isOn={notification.email}/>
       <ToggleSwitch label={"Message Notifications"} onToggle={()=> setNotification({...notification, message: !notification.message})} isOn={notification.message}/>
    </SettingsSection>
  )
}

export default Notification