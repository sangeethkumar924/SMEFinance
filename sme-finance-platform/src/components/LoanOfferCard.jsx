import React from 'react'
import formatCurrency from '../utils/formatCurrency'
export default function LoanOfferCard({ offer }){
return (
    <div className="card">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-gray-500">{offer.provider}</div>
<div className="text-lg font-semibold">{formatCurrency(offer.amount)}
@ {offer.rate}%</div>
</div>
<div>
<button className="px-3 py-2 rounded-md bg-primary text-white">Apply</
button>
</div>
</div>
</div>
)
}