'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useSidebar } from './SidebarContext'

export default function SidebarLink({ href, label, icon }) {
  const pathname = usePathname()
  const { collapsed } = useSidebar()

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
      <motion.div
        animate={{
          scale: isActive ? 1.2 : 1,
          rotate: isActive ? 0 : -5,
          opacity: collapsed ? 0.8 : 1
        }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>

      <span className={`${collapsed ? 'hidden' : 'block'}`}>
        {label}
      </span>
    </a>
  )
}