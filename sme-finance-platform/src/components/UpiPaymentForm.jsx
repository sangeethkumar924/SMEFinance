import React, { useState } from 'react'
import { required } from '../utils/validateForm'
export default function UpiPaymentForm(){
const [vpa, setVpa] = useState('')
const [amount, setAmount] = useState('')
const [message, setMessage] = useState(null)
const submit = (e)=>{
e.preventDefault()
if(required(vpa) || required(amount)){
setMessage({type:'error', text:'Please fill both fields'})
return
}
setMessage({type:'success', text:'Payment initiated (mock).'})
}
return (
<div className="card">
<div className="text-sm text-gray-500 mb-2">UPI Payment</div>
<form onSubmit={submit} className="space-y-3">
<input value={vpa} onChange={e=>setVpa(e.target.value)}
placeholder="receiver@upi" className="w-full p-2 border rounded" />
<input value={amount} onChange={e=>setAmount(e.target.value)}
placeholder="Amount" className="w-full p-2 border rounded" />
<div className="flex justify-end">
<button className="px-3 py-2 rounded-md bg-primary text-white">Pay</
button>
</div>
{message && <div className={`text-sm ${message.type==='error'? 'textred-600' : 'text-green-600'}`}>{message.text}</div>}
</form>
</div>
)
}