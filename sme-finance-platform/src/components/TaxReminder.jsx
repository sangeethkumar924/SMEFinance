import React from 'react'
export default function TaxReminder({ nextDue='2025-11-07' }){
return (
<div className="card">
<div className="text-sm text-gray-500">Tax & Compliance</div>
<div className="mt-2 flex items-center justify-between">
<div>
<div className="font-semibold">Next GST Filing</div>
<div className="text-xs text-gray-500">Due: {nextDue}</div>
</div>
<button className="px-3 py-2 rounded-md border">File Now</button>
</div>
</div>
)
}