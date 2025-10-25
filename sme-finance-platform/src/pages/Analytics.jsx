import React from 'react'
import AnalyticsChart from '../components/AnalyticsChart'
const demo = [{value:3},{value:7},{value:5},{value:12},{value:9}]
export default function Analytics(){
return (
<div className="space-y-4">
<h2 className="text-xl font-semibold">Analytics</h2>
<AnalyticsChart data={demo} />
</div>
)
}