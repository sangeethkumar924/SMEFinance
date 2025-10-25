import React, { useState } from 'react'
export default function AdvisorChatbot(){
const [messages, setMessages] = useState([
    ])
const [text, setText] = useState('')
const send = ()=>{
if(!text.trim()) return
setMessages(m=>[...m, { from: 'user', text }, { from: 'bot', text:
'Thanks — this is a mock reply. Our advisor will follow up.' }])
setText('')
}
return (
<div className="card">
<div className="text-sm text-gray-500 mb-3">Advisor Chat</div>
<div className="h-48 overflow-auto space-y-2 mb-3">
{messages.map((m,i)=> (
<div key={i} className={`text-sm p-2 rounded ${m.from==='bot' ? 'bggray-100 self-start' : 'bg-primary text-white self-end'}`}>
{m.text}
</div>
))}
</div>
<div className="flex gap-2">
<input className="flex-1 p-2 border rounded" value={text}
onChange={e=>setText(e.target.value)} />
<button className="px-3 py-2 rounded-md bg-primary text-white"
onClick={send}>Send</button>
</div>
</div>
)
}