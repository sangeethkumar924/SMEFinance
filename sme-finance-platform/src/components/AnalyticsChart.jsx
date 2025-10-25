import React from 'react'
export default function AnalyticsChart({ data = [] }){
// lightweight SVG sparkline to avoid third-party chart dependencies
const w = 600, h = 120
const max = Math.max(...data.map(d=>d.value), 1)
const points = data.map((d,i)=> {
const x = (i/(data.length-1 || 1))*(w-20)+10
const y = h - (d.value/max)*(h-20) - 10
return `${x},${y}`
}).join(' ')
return (
<div className="card">
<div className="text-sm text-gray-500 mb-3">Revenue Trend</div>
<svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32">
<polyline points={points} fill="none" stroke="#06b6d4" strokeWidth="3"
strokeLinecap="round" strokeLinejoin="round" />
</svg>
</div>
)
}