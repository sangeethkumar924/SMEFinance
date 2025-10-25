import React from 'react'
import formatCurrency from '../utils/formatCurrency'
export default function AccountList({ accounts = [] }){
return (
<div className="card">
<div className="text-sm text-gray-500 mb-3">Linked Accounts</div>
<ul className="space-y-3">
{accounts.map(a=> (
<li key={a.id} className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">{a.name}</div>
<div className="text-xs text-gray-500">{a.type}</div>
</div>
<div className="text-sm font-semibold">{formatCurrency(a.balance)}</
div>
</li>
))}
</ul>
</div>
)
}