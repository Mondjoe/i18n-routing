'use client'

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function RamChart({ data }) {
  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
      <h2 className="text-xl font-semibold mb-4">RAM Usage</h2>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#60a5fa" fill="#1e3a8a" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}