import React from 'react'
import formatCurrency from '../utils/formatCurrency'
export default function TransactionTable({ transactions = [] }){
return (
<div className="card overflow-auto">
<div className="text-sm text-gray-500 mb-3">Recent Transactions</div>
<table className="w-full text-left text-sm">
<thead className="text-gray-400">
<tr>
<th className="py-2">Date</th>
<th>Description</th>
<th className="text-right">Amount</th>
</tr>
</thead>
<tbody>
{transactions.map(tx=> (
<tr key={tx.id} className="border-t">
<td className="py-2 text-xs text-gray-500">{tx.date}</td>
<td className="py-2">{tx.desc}</td>
<td className={`py-2 text-right ${tx.amount < 0 ? 'textred-600' : 'text-green-700'}`}>{formatCurrency(tx.amount)}</td>
</tr>
))}
</tbody>
</table>
</div>
)
}