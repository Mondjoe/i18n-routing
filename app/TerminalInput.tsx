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
    <form onSubmit={handleSubmit}>
      <input
        className="w-full bg-neutral-900 text-green-400 p-3 rounded border border-neutral-700 outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="operator@charm:~$"
      />
    </form>
  )
}