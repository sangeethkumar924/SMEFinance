import React from 'react'
import AccountList from '../components/AccountList'
const accounts = [
{ id:1, name: 'State Bank - Business', type: 'Current', balance: 125000 },
{ id:2, name: 'HDFC Business', type: 'Current', balance: 60000 },
{ id:3, name: 'Paytm', type: 'Wallet', balance: 4200 }
]
export default function Accounts(){
return (
<div className="space-y-4">
<h2 className="text-xl font-semibold">Accounts</h2>
<AccountList accounts={accounts} />
</div>
)
}