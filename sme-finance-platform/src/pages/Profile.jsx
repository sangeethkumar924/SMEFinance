import React from 'react'
import { useAuth } from '../hooks/useAuth'
export default function Profile(){
const { user } = useAuth()
return (
<div className="space-y-4">
<h2 className="text-xl font-semibold">Profile</h2>
<div className="card">
<div className="text-sm text-gray-500">{user?.name}</div>
<div className="text-xs text-gray-500">{user?.business}</div>
</div>
</div>
)
}