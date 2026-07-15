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
    <div className="operator-terminal-frame flex flex-col h-[80vh]">

      {/* Operator Terminal Header */}
      <div className="operator-terminal-header">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full operator-pulse"></div>
          <span className="operator-title">CharmCapsule Terminal</span>
        </div>

        <span className="operator-badge">SOVEREIGN MODE</span>
      </div>

      {/* Terminal Output */}
      <div className="operator-terminal-output flex-1 overflow-auto mb-4">
        {history.map((item, idx) => (
          <TerminalOutput key={idx} cmd={item.cmd} output={item.output} />
        ))}
      </div>

      {/* Terminal Input */}
      <TerminalInput onCommand={runCommand} />

      {/* Watermark */}
      <div className="operator-terminal-watermark">
        CHARM CAPSULE // OPERATOR
      </div>
    </div>
  )
}