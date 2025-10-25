import React from 'react'
const posts = [
{ id:1, title: 'Bulk purchase of packaging supplies', author: 'Jaya Bakers',
excerpt: 'Anyone interested in group buy for packaging?' },
{ id:2, title: 'GST clarification', author: 'Ravi Tailors', excerpt:
'How do I claim input tax credit for services?' }
]
export default function CommunityFeed(){
return (
    <div className="card">
<div className="text-sm text-gray-500 mb-3">Community</div>
<ul className="space-y-3">
{posts.map(p=> (
<li key={p.id} className="text-sm">
<div className="font-medium">{p.title}</div>
<div className="text-xs text-gray-500">{p.author}</div>
<div className="text-xs mt-1">{p.excerpt}</div>
</li>
))}
</ul>
</div>
)
}
