import React from 'react'
import LoanOfferCard from '../components/LoanOfferCard'
const offers = [
{ id:1, provider: 'MicroBank', amount: 50000, rate: 12 },
{ id:2, provider: 'QuickLoan', amount: 150000, rate: 14 }
]
export default function Credit(){
return (
<div className="space-y-4">
<h2 className="text-xl font-semibold">Credit & Loans</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{offers.map(o=> <LoanOfferCard key={o.id} offer={o} />)}
</div>
</div>
)
}
