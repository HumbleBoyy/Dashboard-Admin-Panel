import React, { useState } from 'react'
import SettingsSection from './SettingsSection'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Security = () => {
     const [auth, setAuth] = useState({
            twoAuth:false
        })
  return (
    <SettingsSection icon={Lock} title={"Security"}>
       <ToggleSwitch label={"Two-Factor Authentication"} onToggle={()=> setAuth({...auth, twoAuth: !auth.twoAuth})}/>
    </SettingsSection>
  )
}

export default Security