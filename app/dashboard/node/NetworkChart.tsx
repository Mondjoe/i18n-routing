'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function NetworkChart({ data }) {
  return (
    <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
      <h2 className="text-xl font-semibold mb-4">Network Traffic</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Line type="monotone" dataKey="in" stroke="#34d399" strokeWidth={2} />
          <Line type="monotone" dataKey="out" stroke="#f87171" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}