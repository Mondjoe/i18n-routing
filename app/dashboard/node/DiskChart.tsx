'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function DiskChart({ data }) {
  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
      <h2 className="text-xl font-semibold mb-4">Disk I/O</h2>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Bar dataKey="read" fill="#fbbf24" />
          <Bar dataKey="write" fill="#f87171" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}