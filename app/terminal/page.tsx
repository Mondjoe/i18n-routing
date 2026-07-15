'use client'

import { useState } from 'react'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'

export default function Terminal() {
  const [history, setHistory] = useState([])

  const runCommand = async (cmd) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/terminal/run`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: cmd })
    })

    const data = await res.json()

    setHistory(prev => [...prev, { cmd, output: data.output }])
  }

  return (
    <div className="bg-black text-green-400 p-6 rounded-xl border border-neutral-800 h-[80vh] flex flex-col">
      <div className="flex-1 overflow-auto mb-4">
        {history.map((item, idx) => (
          <TerminalOutput key={idx} cmd={item.cmd} output={item.output} />
        ))}
      </div>

      <TerminalInput onCommand={runCommand} />
    </div>
  )
}