import React from 'react'
import SecurityAlert from '../components/SecurityAlert'
export default function Security(){
return (
<div className="space-y-4">
<h2 className="text-xl font-semibold">Security</h2>
<SecurityAlert message={'Two-factor authentication is not enabled. Enable it to secure your account.'} />
</div>
)
}