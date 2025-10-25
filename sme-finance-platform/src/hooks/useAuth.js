import { useContext } from 'react'
import { useAuthCtx } from '../contexts/AuthContext'
export function useAuth(){
return useAuthCtx()
}
