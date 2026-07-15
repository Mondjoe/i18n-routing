'use client'

import { motion } from 'framer-motion'

export default function OperatorChart({ title, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="operator-chart-frame operator-border p-5 rounded-xl bg-neutral-900"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-green-400 rounded-full operator-pulse"></div>
        <span className="operator-title text-lg">{title}</span>
      </div>

      <div className="operator-chart-body">
        {children}
      </div>
    </motion.div>
  )
}