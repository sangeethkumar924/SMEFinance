import React from 'react'
export default function SecurityAlert({ message }){
return (
<div className="card">
<div className="flex items-start gap-3">
<div className="w-3 h-3 rounded-full bg-yellow-400 mt-1"></div>
<div>
<div className="text-sm font-semibold">Security Alert</div>
<div className="text-xs text-gray-600">{message || 'Unrecognized device login detected. Review activity.'}</div>
</div>
</div>
</div>
)
}