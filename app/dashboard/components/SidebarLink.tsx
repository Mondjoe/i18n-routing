'use client'

import { usePathname } from 'next/navigation'

export default function SidebarLink({
  href,
  label,
  icon
}: {
  href: string
  label: string
  icon?: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)

  return (
    <a
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
        ${isActive
          ? 'bg-green-600 text-white operator-glow'
          : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}
      `}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}