import React from 'react'
import formatCurrency from '../utils/formatCurrency'
export default function DashboardCard({ title, value, delta }){
return (
<div className="card">
<div className="text-sm text-gray-500">{title}</div>
<div className="mt-2 flex items-baseline justify-between">
<div className="text-2xl font-bold">{formatCurrency(value)}</div>
{delta != null && (
<div className={`text-sm font-medium ${delta >=0 ? 'text-green-600' :
'text-red-600'}`}>
{delta >=0 ? `+${delta}%` : `${delta}%`}
</div>
)}
</div>
</div>
)
}
