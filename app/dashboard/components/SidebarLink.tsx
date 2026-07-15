import SidebarLink from './SidebarLink'

export default function Sidebar() {
  return (
    <div className="p-4 space-y-2">
      <SidebarLink href="/dashboard" label="Dashboard" />
      <SidebarLink href="/dashboard/validators" label="Validators" />
      <SidebarLink href="/dashboard/logs" label="Attestation Logs" />
      <SidebarLink href="/dashboard/node" label="Node Metrics" />
      <SidebarLink href="/dashboard/wallet" label="Wallet / RPC" />
      <SidebarLink href="/terminal" label="Operator Terminal" />
    </div>
  )
}