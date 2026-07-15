'use client'

import { motion } from 'framer-motion'

export default function OperatorMetricCard({ label, value, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="operator-metric-card operator-border p-5 rounded-xl bg-neutral-900"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-green-400">
          {icon}
        </div>

        <span className="operator-title text-lg">
          {label}
        </span>
      </div>

      <div className="text-3xl font-bold text-green-300 operator-metric-value">
        {value}
      </div>
    </motion.div>
  )
}