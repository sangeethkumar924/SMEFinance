import React, { createContext, useState, useContext } from 'react'
const AuthContext = createContext(null)
export function AuthProvider({ children }){
// simple mock auth for frontend
const [user, setUser] = useState({
name: 'Sangeeth',
business: 'GreenLeaf Bakery'
})
const login = (payload)=> setUser(payload)
const logout = ()=> setUser(null)
return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
)
}
export function useAuthCtx(){
return useContext(AuthContext)
}