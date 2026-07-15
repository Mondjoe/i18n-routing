'use client'

import { motion } from 'framer-motion'

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="min-h-screen bg-neutral-950 text-white operator-shell"
    >
      {/* Operator Branding */}
      <div className="px-6 py-4 border-b border-neutral-800">
        <h1 className="text-2xl font-bold tracking-wider operator-title">
          CharmCapsule Operator Console
        </h1>
        <p className="text-neutral-400 text-sm mt-1">
          Sovereign Architecture • Validator Control System
        </p>
      </div>

      {children}
    </motion.div>
  )
}