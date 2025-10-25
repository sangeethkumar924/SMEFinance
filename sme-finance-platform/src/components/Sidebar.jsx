import React from 'react'
import { NavLink } from 'react-router-dom'
const items = [
{ to: '/dashboard', label: 'Home' },
{ to: '/accounts', label: 'Accounts' },
{ to: '/accounting', label: 'Accounting' },
{ to: '/analytics', label: 'Analytics' },
{ to: '/credit', label: 'Credit' },
{ to: '/payments', label: 'Payments' },
{ to: '/security', label: 'Security' },
{ to: '/advisory', label: 'Advisory' },
{ to: '/community', label: 'Community' },
{ to: '/profile', label: 'Profile' }
]
export default function Sidebar(){
return (
<div className="sticky top-6">
<div className="card">
<div className="mb-4 text-sm text-gray-500"></div>
<ul className="space-y-2">
{items.map(i=> (
<li key={i.to}>
<NavLink to={i.to}
className={({isActive}) => `block px-3 py-2 rounded-md text-sm $
{isActive ? 'bg-gray-100 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
{i.label}
</NavLink>
</li>
))}
</ul>
</div>
<div className="mt-4 card">
<div className="text-sm text-gray-500 mb-2">Quick Actions</div>
<button className="w-full px-3 py-2 rounded-md border text-sm">Create
Invoice</button>
</div>
</div>
)
}