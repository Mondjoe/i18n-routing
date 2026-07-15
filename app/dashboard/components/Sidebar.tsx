'use client'

import { useSidebar } from './SidebarContext'
import SidebarLink from './SidebarLink'
import {
  Home,
  Server,
  FileText,
  Activity,
  Wallet,
  Terminal,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <motion.div
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.25 }}
      className="h-screen bg-neutral-900 operator-border overflow-hidden flex flex-col"
    >
      {/* Collapse / Expand Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-2 w-full flex items-center justify-center hover:bg-neutral-800 transition-colors"
      >
        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Operator Branding */}
      <div className={`px-4 py-3 ${collapsed ? 'hidden' : 'block'}`}>
        <h1 className="text-xl font-bold tracking-wider operator-title">
          CharmCapsule Operator
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Sovereign Architecture
        </p>
      </div>

      {/* Operator Badge */}
      <div className={`${collapsed ? 'hidden' : 'flex'} items-center gap-2 px-4 mt-2`}>
        <div className="w-2 h-2 bg-green-400 rounded-full operator-pulse"></div>
        <span className="operator-badge">
          CHARM OPS // ONLINE
        </span>
      </div>

      {/* Divider */}
      <div className={`${collapsed ? 'hidden' : 'block'} operator-divider`}></div>

      {/* Sidebar Links */}
      <div className="mt-2 space-y-2 px-2">
        <SidebarLink href="/dashboard" label="Dashboard" icon={<Home size={18} />} />
        <SidebarLink href="/dashboard/validators" label="Validators" icon={<Server size={18} />} />
        <SidebarLink href="/dashboard/logs" label="Attestation Logs" icon={<FileText size={18} />} />
        <SidebarLink href="/dashboard/node" label="Node Metrics" icon={<Activity size={18} />} />
        <SidebarLink href="/dashboard/wallet" label="Wallet / RPC" icon={<Wallet size={18} />} />
        <SidebarLink href="/terminal" label="Operator Terminal" icon={<Terminal size={18} />} />
      </div>
    </motion.div>
  )
}