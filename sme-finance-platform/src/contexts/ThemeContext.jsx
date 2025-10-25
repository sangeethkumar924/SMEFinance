import React, { createContext, useState, useContext, useEffect } from 'react'
const ThemeContext = createContext(null)
export function ThemeProvider({ children }){
const [dark, setDark] = useState(false)
useEffect(()=>{
if(dark) document.documentElement.classList.add('dark')
else document.documentElement.classList.remove('dark')
},[dark])
return (
<ThemeContext.Provider value={{ dark, setDark }}>
{children}
</ThemeContext.Provider>
)
}
export function useTheme(){
return useContext(ThemeContext)
}