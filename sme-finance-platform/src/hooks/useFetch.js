import { useState, useEffect } from 'react'
export default function useFetch(url, opts){
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
useEffect(()=>{
let mounted = true
setLoading(true)
fetch(url, opts)
.then(r=> r.json())
.then(d=> mounted && setData(d))
.catch(e=> mounted && setError(e))
.finally(()=> mounted && setLoading(false))
return ()=> mounted = false
},[url])
return { data, loading, error }
}