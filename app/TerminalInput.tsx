'use client'

import { useState } from 'react'

export default function TerminalInput({ onCommand }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onCommand(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-center gap-2 bg-neutral-900 operator-border p-3 rounded">
        
        {/* Operator Prompt */}
        <span className="text-green-400 operator-title">
          operator@charm:~$
        </span>

        {/* Input Field */}
        <input
          className="flex-1 bg-transparent text-green-400 outline-none operator-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />

        {/* Blinking Cursor */}
        <span className="text-green-400 cursor-blink">█</span>
      </div>
    </form>
  )
}