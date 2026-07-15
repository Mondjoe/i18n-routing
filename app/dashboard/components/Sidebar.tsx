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

      {/* Sidebar Links */}
      <div className="mt-4 space-y-2 px-2">
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