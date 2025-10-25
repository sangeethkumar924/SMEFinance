import { useEffect, useState } from 'react'
export default function useResponsive(){
const [isMobile, setIsMobile] = useState(false)
useEffect(()=>{
const onResize = ()=> setIsMobile(window.innerWidth < 1024)
onResize()
window.addEventListener('resize', onResize)
return ()=> window.removeEventListener('resize', onResize)
},[])
return { isMobile }
}