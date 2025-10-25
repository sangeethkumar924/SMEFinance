import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Credit from './pages/Credit'
import Accounting from './pages/Accounting'
import Analytics from './pages/Analytics'
import Security from './pages/Security'
import Payments from './pages/Payments'
import Advisory from './pages/Advisory'
import Community from './pages/Community'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { useAuth } from './hooks/useAuth'
export default function App(){
const { user } = useAuth()
return (
<div className="min-h-screen bg-gray-50 text-slate-800">
<Navbar />
<div className="flex pt-4 px-6 gap-6">
<aside className="w-72 hidden lg:block">
<Sidebar />
</aside>
<main className="flex-1">
<Routes>
<Route path="/" element={<Navigate to="/dashboard" replace />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/accounts" element={<Accounts />} />
<Route path="/credit" element={<Credit />} />
<Route path="/accounting" element={<Accounting />} />
<Route path="/analytics" element={<Analytics />} />
<Route path="/security" element={<Security />} />
<Route path="/payments" element={<Payments />} />
<Route path="/advisory" element={<Advisory />} />
<Route path="/community" element={<Community />} />
<Route path="/profile" element={<Profile />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
</div>
</div>
)
}