import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound(){
return (
<div className="text-center py-24">
<h2 className="text-3xl font-bold">404</h2>
<p className="mt-2 text-gray-500">Page not found</p>
<Link to="/dashboard" className="mt-4 inline-block px-4 py-2 bg-primary
text-white rounded">Back to Dashboard</Link>
</div>
)
}