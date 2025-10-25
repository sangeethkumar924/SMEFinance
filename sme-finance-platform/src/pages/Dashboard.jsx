import React from 'react'
import DashboardCard from '../components/DashboardCard'
import AccountList from '../components/AccountList'
import TransactionTable from '../components/TransactionTable'
import AnalyticsChart from '../components/AnalyticsChart'
import TaxReminder from '../components/TaxReminder'
import SecurityAlert from '../components/SecurityAlert'
import CommunityFeed from '../components/CommunityFeed'
const demoAccounts = [
{ id:1, name: 'State Bank - Business', type: 'Current', balance: 125000 },
{ id:2, name: 'Paytm Wallet', type: 'Wallet', balance: 4200 }
]
const demoTx = [
{ id:1, date: '2025-10-10', desc: 'Sale - Sugar Cookies', amount: 1200 },
{ id:2, date: '2025-10-09', desc: 'Ingredients - Flour', amount: -4000 }
]
const trend = [{value:4000},{value:6000},{value:5500},{value:8000},{value:7000},
{value:9000}]
export default function Dashboard(){
return (
<div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<DashboardCard title="Cash Balance" value={129200} delta={4.8} />
<DashboardCard title="Monthly Revenue" value={98000} delta={-1.2} />
<DashboardCard title="Outstanding Invoices" value={23000} delta={6.4} />
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 space-y-4">
<AccountList accounts={demoAccounts} />
<TransactionTable transactions={demoTx} />
</div>
<div className="space-y-4">
<AnalyticsChart data={trend} />
<TaxReminder />
<SecurityAlert />
</div>
</div>
<CommunityFeed />
</div>
)
}