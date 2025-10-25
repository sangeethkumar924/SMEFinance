import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/generated-image.png'
import { useAuth } from '../hooks/useAuth'
export default function Navbar(){
const { user } = useAuth()
return (
<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justifybetween">
<div className="flex items-center gap-3">
<img src={logo} alt="logo" className="w-10 h-10" />
<div>
<Link to="/dashboard" className="text-lg font-semibold textprimary">SME Finance</Link>
<div className="text-xs text-gray-500">All-in-one finance for small
businesses</div>
</div>
</div>
<div className="flex items-center gap-4">
<nav className="hidden md:flex gap-4 text-sm text-gray-600">
<Link to="/dashboard">Dashboard</Link>
<Link to="/accounts">Accounts</Link>
<Link to="/analytics">Analytics</Link>
<Link to="/credit">Credit</Link>
</nav>
<div className="flex items-center gap-3">
<div className="text-sm text-gray-700">{user?.business}</div>
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center
justify-center text-sm font-medium">{user?.name?.[0]}</div>
</div>
</div>
</div>
</header>
)
}