import SidebarLink from './SidebarLink'
import {
  Home,
  Server,
  FileText,
  Activity,
  Wallet,
  Terminal
} from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="p-4 space-y-2">
      <SidebarLink href="/dashboard" label="Dashboard" icon={<Home size={18} />} />
      <SidebarLink href="/dashboard/validators" label="Validators" icon={<Server size={18} />} />
      <SidebarLink href="/dashboard/logs" label="Attestation Logs" icon={<FileText size={18} />} />
      <SidebarLink href="/dashboard/node" label="Node Metrics" icon={<Activity size={18} />} />
      <SidebarLink href="/dashboard/wallet" label="Wallet / RPC" icon={<Wallet size={18} />} />
      <SidebarLink href="/terminal" label="Operator Terminal" icon={<Terminal size={18} />} />
    </div>
  )
}