'use client'

import { useSidebar } from './SidebarContext'

export default function Topbar() {
  const { collapsed } = useSidebar()

  return (
    <div className="h-14 px-6 flex items-center justify-between operator-border border-b bg-neutral-900">

      {/* Left: Operator Status */}
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-500 operator-pulse"></div>

        <span className="font-semibold tracking-wide operator-title">
          CharmCapsule Active
        </span>
      </div>

      {/* Right: Context Info */}
      <div className={`${collapsed ? 'mr-4' : 'mr-2'} flex items-center gap-4 text-neutral-400 text-sm`}>
        <span className="operator-badge">
          VALIDATOR MODE
        </span>

        <span className="operator-badge">
          MAINNET
        </span>
      </div>
    </div>
  )
}